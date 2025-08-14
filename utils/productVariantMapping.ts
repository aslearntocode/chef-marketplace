import { products } from '@/data/whole-foods';

// Interface for product variants
export interface ProductVariant {
  baseId: string;
  variantIds: string[];
  productName: string;
}

// Function to automatically detect product variants from the products data
export const detectProductVariants = (): Map<string, ProductVariant> => {
  const variantMap = new Map<string, ProductVariant>();
  
  // Group products by their base name (removing size/variant indicators)
  const productGroups = new Map<string, string[]>();
  
  products.forEach(product => {
    // Extract base product name by removing common variant indicators
    let baseName = product.name.toLowerCase();
    
    // Remove common size/variant indicators
    const variantIndicators = [
      'broken', 'split', 'small', 'medium', 'large', 'jumbo',
      'regular', 'premium', 'organic', 'natural', 'traditional'
    ];
    
    for (const indicator of variantIndicators) {
      if (baseName.includes(indicator)) {
        baseName = baseName.replace(new RegExp(`\\b${indicator}\\b`, 'g'), '').trim();
        break;
      }
    }
    
    // Clean up the base name
    baseName = baseName.replace(/\s+/g, ' ').trim();
    
    if (!productGroups.has(baseName)) {
      productGroups.set(baseName, []);
    }
    productGroups.get(baseName)!.push(product.id);
  });
  
  // Create variant mappings for products with multiple variants
  productGroups.forEach((variantIds, baseName) => {
    if (variantIds.length > 1) {
      // Find the main product (usually the first one or one without size indicators)
      const mainProduct = products.find(p => p.id === variantIds[0]);
      if (mainProduct) {
        variantMap.set(mainProduct.id, {
          baseId: mainProduct.id,
          variantIds: variantIds,
          productName: mainProduct.name
        });
        
        // Also map each variant to the same group
        variantIds.forEach(variantId => {
          variantMap.set(variantId, {
            baseId: mainProduct.id,
            variantIds: variantIds,
            productName: mainProduct.name
          });
        });
      }
    }
  });
  
  return variantMap;
};

// Function to get base product ID for any product
export const getBaseProductId = (productId: string): string => {
  const variantMap = detectProductVariants();
  const variant = variantMap.get(productId);
  return variant ? variant.baseId : productId;
};

// Function to get all variant IDs for a base product
export const getProductVariants = (baseProductId: string): string[] => {
  const variantMap = detectProductVariants();
  const variant = variantMap.get(baseProductId);
  return variant ? variant.variantIds : [baseProductId];
};

// Function to check if a product has variants
export const hasVariants = (productId: string): boolean => {
  const variantMap = detectProductVariants();
  const variant = variantMap.get(productId);
  return variant ? variant.variantIds.length > 1 : false;
};

// Function to get the main product name for a variant
export const getMainProductName = (productId: string): string => {
  const variantMap = detectProductVariants();
  const variant = variantMap.get(productId);
  return variant ? variant.productName : '';
};
