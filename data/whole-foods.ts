import { Product } from '@/types/whole-foods';

export const products: Product[] = [
    {
        id: '1',
        name: 'Coconut Barfi with Jaggery',
        description: 'Coconut Barfi with jaggery is a traditional Indian sweet made with grated coconut and jaggery, offering a delightful fusion of flavours. The rich nutty texture of fresh coconut is complemented by the deep, caramel-like sweetness of jaggery, which is a natural unrefined sugar. It\'s a healthier alternative to the usual sugar-based barfis, with the earthy rich taste of jaggery enhancing the overall flavour profile. Perfect for festive occasions or as a wholesome snack!',
        price:120 ,
        image: '/images/Coconut Barfi With Jaggery.jpeg',
        category: 'Healthy Treats',
        tags: ['healthy', 'sweet', 'dessert', 'coconut', 'jaggery', 'barfi', 'indian sweet', 'homemade', 'handmade', 'pure']
      },
      {
        id: '2',
        name: 'Coconut Barfi with Sugar',
        description: 'Coconut Barfi with sugar is a sweet, creamy Indian treat made from grated coconut, sugar and ghee. Often flavoured with cardamom, the barfi has a smooth, soft consistency and fragrant aroma making it a perfect choice for celebrations, festivals, or a satisfying homemade indulgence',
        price: 120 ,
        image: '/images/Coconut Barfi with Sugar.jpeg',
        category: 'Healthy Treats',
        tags: ['sweet', 'dessert', 'coconut', 'sugar', 'barfi', 'indian sweet', 'homemade', 'handmade', 'pure']
      },
      {
        id: '3',
        name: 'Sugar Free Dates and Peanut Laddoos',
        description: 'Sugar free Dates and Peanut laddoo is a healthy, nutrient-packed Indian sweet that combines the natural sweetness of Dates with the rich, earthy flavour of roasted peanuts. This wholesome treat is ideal for those seeking a guilt-free, energy-boosting snack or a healthier alternative for festivals and celebrations.',
        price: 100 ,
        image: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg',
        category: 'Healthy Treats',
        tags: ['sugar free', 'healthy', 'dates', 'peanut', 'ladoo', 'indian sweet', 'nuts']
      },
      {
        id: '4',
        name: 'Sugar Free Dry fruits Laddoos',
        description: 'Sugar free dry fruits laddoo is a nutritious and a wholesome sweet treat made with a variety of dried fruits and nuts offering a natural sweet and rich flavour without any added sugar. Packed with vitamins, minerals, healthy fats, and fiber this sugar-free treat is a guilt-free indulgence ideal for anyone looking to enjoy a delicious yet healthy snack during festivals, special occasions or as an everyday pick-me-up.',
        price:180 ,
        image: '/images/Sugar Free Dryfruits laddoo.jpeg',
        category: 'Healthy Treats',
        tags: ['sugar free', 'healthy', 'dry fruits', 'ladoo', 'indian sweet']
      },
      {
        id: '5',
        name: 'Paan-E-Bahar',
        description: 'A delightful, traditional betel leaf-based drink with refreshing flavors.',
        price: 420,
        image: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg',
        images: [
          '/images/images-drinks/Paan-e-bahar/amazon-06.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-07.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-09.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-10.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-21.jpg',
        ],
        category: 'Drinks',
        tags: ['drink', 'cold drink', 'refreshing', 'paan', 'summer drink', 'cooling', 'beverage', 'healthy drink', 'pure', 'wholesome'],
        size: '750ml',
        ingredients: [
          'Fresh Betel Leaves',
          'Natural Sweeteners',
          'Aromatic Spices',
          'Rose Petals',
          'Cardamom',
          'Fennel Seeds'
        ],
        benefits: [
          'Natural Cooling Properties',
          'Aids Digestion',
          'Rich in Antioxidants',
          'No Artificial Colors',
          'No Preservatives',
          'Made with Pure Ingredients'
        ]
      },
      {
        id: '6',
        name: 'Soothing Sauf',
        description: 'Experience the natural coolness with Soothing Sauf Squash, a handcrafted blend of premium fennel seeds and natural ingredients. Infused with the refreshing essence of sauf (fennel), this squash delivers a refreshing burst of flavor, combining sweet and aromatic notes to elevate post-meal moments or festive celebrations. This drink is also known for its cooling, digestive, and calming properties. The soothing qualities of fennel help with digestion, reduce bloating, and calm the stomach, making it an ideal post-meal drink.',
        price:480 ,
        image: '/images/images-drinks/Soothing Sauf/amazon-11.jpg',
        images: [
          '/images/images-drinks/Soothing Sauf/amazon-11.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-12.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-14.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-15.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-21.jpg',
        ],
        category: 'Drinks',
        tags: ['drink', 'cold drink', 'refreshing', 'summer drink', 'cooling', 'beverage', 'healthy drink', 'digestive drink', 'fennel seeds', 'no preservatives']
      },
      {
        id: '7',
        name: 'Thrilling Thandai',
        description: 'Immerse yourself in the richness of Thrilling Thandai, a handcrafted aromatic blend of premium saffron, wholesome nuts, and aromatic spices. Carefully curated to capture the essence of tradition, this indulgent squash offers a luxurious and authentic flavor experience. The drink is typically served chilled, making it an exciting way to cool off during hot days or add a festive touch to celebrations. The flavors are complex and layered, with the right balance of sweet, spicy, and creamy, making it both an indulgent and rejuvenating treat. Every sip is a celebration of heritage, crafted to bring you pure indulgence with a touch of nostalgia. The product has zero preservatives or artificial flavors or essence.',
        price:480 ,
        image: '/images/images-drinks/Thrilling Thandai/amazon-01.jpg',
        images: [
          '/images/images-drinks/Thrilling Thandai/amazon-01.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-02.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-04.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-05.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-21.jpg',
        ],
        category: 'Drinks',
        tags: ['drink', 'cold drink', 'refreshing', 'thandai', 'summer drink', 'cooling', 'beverage', 'traditional', 'healthy drink', 'festive drink']
      },
      {
        id: '8',
        name: 'Date & Nut Bites',
        description: 'Healthiest anytime snack - pure nutty goodness. Our star performer is suitable for all ages! These bite sized portions are a deliciously healthy combination of dates, seeds and nuts, with a drizzle of olive oil plus they are totally and truly sugar free- No honey. No Jaggery. No sugar with fancy names! Enjoy these as your power dose of vitamins and minerals, pre and post workout snack, an on-the-go hunger killer. Also, a perfect snack for kids\' tiffin box.',
        price:290 ,
        image: '/images/dateandnutbites/MZ8_0754.jpg',
        images: [
          '/images/dateandnutbites/MZ8_0754.jpg',
          '/images/dateandnutbites/MZ8_0755.jpg',
          '/images/dateandnutbites/NNs_79.jpg',
          '/images/dateandnutbites/NNs_80.jpg'
        ],
        category: 'Healthy Treats',
        tags: ['healthy', 'treats', 'date', 'nut', 'bites', 'healthy treats', 'date and nut bites', 'healthy snack', 'healthy treat', 'healthy bites', 'hearthealthy', 'nopalmoil', 'no maida', 'allnatural', 'nochemicals']
      },
      {
        id: '9',
        name: 'Ghee Roasted Makhana',
        description: 'Healthiest snack ever - crunchy and a powerhouse of calcium. Roasted in pure cow ghee and seasoned with himalayan pink salt - just like home. Handroasted to perfection in small batches, this clean label mom approved recipe is seasoned with Himalayan Pink Salt. Can be enjoyed as an anytime snack or even as a salad topping or as your pre and post workout pick me up! Replace your unhealthy namkeens with this crunchy and delicious snack at chai time!',
        price:120,
        image: '/images/gheeroastedmakhana/MZ8_0746.jpg',
        images: [
          '/images/gheeroastedmakhana/MZ8_0746.jpg',
          '/images/gheeroastedmakhana/MZ8_0747.jpg',
          '/images/gheeroastedmakhana/NNs_38.jpg',
          '/images/gheeroastedmakhana/NNs_39.jpg',
          '/images/gheeroastedmakhana/NNs_40.jpg',
          '/images/gheeroastedmakhana/NNs_41.jpg'
        ],
        category: 'Healthy Bites',
        tags: ['hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'protein', 'proteinrich', 'seeds', 'superseeds', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'roastedsnack', 'makhana', 'foxnuts', 'roastedmakhana']
      },
      {
        id: '10',
        name: 'Jaggery Mango Pickle',
        description: 'Kuch teekha, kuch meetha, kuch khatta. Sweet and spicy, this twist to the traditional gujarati golkeri will tickle your taste buds + this is completely OIL FREE! Tartness of handpicked raw mangoes, the spice of hand pounded red chillies, saunf and methi- mildly salted and cooked to perfection with jaggery. This pickle pairs well with pooris, parathas, theplas or even dosas - the mango chunks and whole spices add a lot of texture to this recipe. Serve this pickle as an accompaniment at your parties. Use this in place of imli chutney on your chaats.',
        price:325 ,
        image: '/images/jaggerymangopickle/MZ8_0632.jpg',
        images: [
          '/images/jaggerymangopickle/MZ8_0632.jpg',
          '/images/jaggerymangopickle/MZ8_0633.jpg',
          '/images/jaggerymangopickle/MZ8_0635.jpg',
          '/images/jaggerymangopickle/MZ8_0640.jpg',
          '/images/jaggerymangopickle/MZ8_0705.jpg',
          '/images/jaggerymangopickle/MZ8_0706.jpg',
          '/images/jaggerymangopickle/MZ8_0708.jpg'
        ],
        category: 'Pickles & Chutneys',
        tags: ['pickle', 'jaggery', 'mango', 'pickle', 'healthy', 'indian pickle', 'indian pickles', 'naturalpickle', 'traditionalpickle', 'traditionalrecipe', 'aamkaachaar', 'mangopickle', 'rawmangopickle', 'chundo', 'chunda', 'oilfreepickle', 'zerooil', 'zerooilpickle', 'golkeri', 'chutney', 'sweetmangopickle']
      },
      {
        id: '11',
        name: 'Roasted Red Rice Chiwda',
        description: 'Made using red rice, this crunchy and flavourful snack is bound to hit all the right notes with all you chiwda lovers. Elevate your chai time with this traditional yet healthy snack. Handroasted to perfection, this clean label recipe is seasoned with Himalayan Pink Salt. Can be enjoyed as an anytime snack or even as a salad topping or as your pre and post workout pick me up! Replace your unhealthy namkeens with this crunchy and delicious snack at chai time!',
        price:120 ,
        image: '/images/roastedredricechivda/MZ8_0758.jpg',
        images: [
          '/images/roastedredricechivda/MZ8_0758.jpg',
          '/images/roastedredricechivda/MZ8_0759.jpg',
          '/images/roastedredricechivda/NNs_10.jpg',
          '/images/roastedredricechivda/NNs_12.jpg',
          '/images/roastedredricechivda/NNs_13.jpg',
          '/images/roastedredricechivda/NNs_14.jpg',
          '/images/roastedredricechivda/NNs_15.jpg'
        ],
        category: 'Healthy Bites',
        tags: ['hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'protein', 'proteinrich', 'seeds', 'superseeds', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'roastedsnack']
      },
      {
        id: '12',
        name: 'Traditional Lemon Pickle',
        description: 'A traditional Indian pickle made with fresh lemons, spices, and oil. Perfect for adding a tangy kick to your meals.',
        price: 325,
        image: '/images/traditionallemonpickle/MZ8_0691.jpg',
        images: [
          '/images/traditionallemonpickle/DSC_8886.jpg',
          '/images/traditionallemonpickle/DSC_8885-Edit.jpg',
          '/images/traditionallemonpickle/MZ8_0691.jpg',
          '/images/traditionallemonpickle/MZ8_0693.jpg',
          '/images/traditionallemonpickle/MZ8_0694.jpg'
        ],
        category: 'Pickles & Chutneys',
        tags: ['pickle', 'lemon', 'pickle', 'healthy', 'indian pickle', 'indian pickles']
      },
      {
        id: '13',
        name: 'Whole Wheat Ajwain Mathri',
        description: 'Super crunchy and great with your tea. Share these with your family- pack them for a picnic-pack these for your kids tiffin! These whole wheat crisps are super versatile and perfect for some healthy indulgence. Crafted using high quality whole wheat flour, fragrant methi and handpicked spices, this clean label snack is handmade in small batches. No palm oil or white salt-No reused oil-super healthy! Loved by all ages - your kids are bound to enjoy these too!',
        price:155 ,
        image: '/images/wholewheatajwainmathri/MZ8_0752.jpg',
        images: [
          '/images/wholewheatajwainmathri/MZ8_0752.jpg',
          '/images/wholewheatajwainmathri/MZ8_0753.jpg',
          '/images/wholewheatajwainmathri/NNs_17.jpg',
          '/images/wholewheatajwainmathri/NNs_18.jpg',
          '/images/wholewheatajwainmathri/NNs_19.jpg',
          '/images/wholewheatajwainmathri/NNs_20.jpg',
          '/images/wholewheatajwainmathri/NNs_21.jpg'
        ],
        category: 'Healthy Bites',
        tags: ['wholewheat', 'wholewheatsnack', 'zeromaida', 'hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'mathri', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'methimathri', 'mathri', 'matthi', 'suhali', 'healthysnack']
      },
      {
        id: '14',
        name: 'Whole Wheat Jaggery Fingers - Gur Paara',
        description: 'Gur paare - healthier as these contain no maida! Perfect for some healthy indulgence! Crafted using high quality whole wheat flour, fragrant saunf (fennel) and coated with jaggery, this clean label snack is handmade in small batches. No palm oil or white salt-No reused oil - super healthy! Loved by all ages - your kids too are bound to enjoy these! Super crunchy and mildly sweet. Share these with your family-pack them for a picnic-pack these for your kids tiffin!',
        price: 120,
        image: '/images/wholewheatjaggery-gurpaara/MZ8_0762.jpg',
        images: [
          '/images/wholewheatjaggery-gurpaara/MZ8_0762.jpg',
          '/images/wholewheatjaggery-gurpaara/MZ8_0763.jpg',
          '/images/wholewheatjaggery-gurpaara/NNs_42.jpg',
          '/images/wholewheatjaggery-gurpaara/NNs_44.jpg',
          '/images/wholewheatjaggery-gurpaara/NNs_45.jpg',
          '/images/wholewheatjaggery-gurpaara/NNs_47.jpg',
          '/images/wholewheatjaggery-gurpaara/NNs_48.jpg'
        ],
        category: 'Healthy Treats',
        tags: ['wholewheat', 'wholewheatsnack', 'zeromaida', 'hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'mathri', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'jaggery', 'gurpaare']
      },
      {
        id: '15',
        name: 'Gond Laddoos',
        description: 'Our best seller - best laddoos ever - grandma\'s recipe. Made using pure cow ghee, top quality atta roasted to perfection, overloaded with nuts and Gond and then hand rolled traditionally, our Gond laddoos offer the rich nuttiness of hand-roasted flour, fortified with Gond with the subtle aroma of pure cow ghee (desi ghee) and crunch of handpicked nuts. Superfood Gond is great for lactating mothers and kids as well. Post partum must have! Whether you crave a traditional Indian sweet for festive celebrations, gifting or a delightful treat to accompany your afternoon tea, these laddoos are the go-to treats.',
        price: 360,
        image: '/images/gondladdoo/IMG_6.jpg',
        images: [
          '/images/gondladdoo/IMG_1.jpg',
          '/images/gondladdoo/IMG_2.jpg',
          '/images/gondladdoo/IMG_3.jpg',
          '/images/gondladdoo/IMG_4.jpg',
          '/images/gondladdoo/IMG_5.jpg',
          '/images/gondladdoo/IMG_6.jpg',
          '/images/gondladdoo/IMG_7.jpg'
        ],
        category: 'Healthy Treats',
        tags: ['laddoos', 'laddu', 'gheeladdoo', 'cowghee', 'gondladdoos', 'gondladdu', 'dryfruitladdoo', 'dryfruitladdu', 'mithai', 'indiansweets', 'homemadesweets', 'pregnancyladdoo', 'lactation']
      },
      {
        id: '16',
        name: 'Sweet and Spicy Mango Chutney',
        description: 'Kuch teekha, kuch meetha. Sweet and spicy, this twist to the traditional gujarati chundo will tickle your taste buds + it is OIL FREE! Tartness of handpicked raw mangoes, the spice of hand pounded red chillies- mildly salted and cooked to perfection with jaggery. This pickle pairs well with pooris, parathas, theplas or even dosas - this easy to use chutney has a wonderful texture. Serve this chutney as an accompaniment at your parties. Use this in place of imli chutney on your chaats.',
        price: 325,
        image: '/images/sweetandspicymangochutney/IMG_1.jpg',
        images: [
          '/images/sweetandspicymangochutney/IMG_1.jpg',
          '/images/sweetandspicymangochutney/IMG_2.jpg',
          '/images/sweetandspicymangochutney/IMG_3.jpg',
          '/images/sweetandspicymangochutney/IMG_4.jpg',
          '/images/sweetandspicymangochutney/IMG_5.jpg',
          '/images/sweetandspicymangochutney/IMG_6.jpg',
          '/images/sweetandspicymangochutney/IMG_7.jpg'
        ],
        category: 'Pickles & Chutneys',
        tags: ['naturalchutney', 'traditionalpickle', 'traditionalrecipe', 'aamchutney', 'mangochutney', 'rawmangopickle', 'chundo', 'chunda', 'oilfreechutney', 'zerooil', 'zerooilpickle', 'golkeri', 'chutney', 'sweetmangopickle']
      },
      {
        id: '17',
        name: 'Red Chilli Pickle',
        description: 'Handpicked red chillies stuffed with hand roasted and pounded spices - dipped in aromatic cold pressed mustard oil, suncured to perfection– pure nostalgia! This is one of the most sought after pickle recipes - a tradition surviving in only a few families. This pickle is tangy and moderately spicy, ensuring an intense burst of natural flavours and nostalgia in every bite. Perfect for enhancing your meals, this pickle pairs wonderfully with dal rice, paratha, phulka, theplas or even mathris and namak paras. Don\'t miss out on our Stuffed Red Chilli Pickle to complete your meal!',
        price: 325,
        image: '/images/redchillipickle/IMG_1.jpg',
        images: [
          '/images/redchillipickle/IMG_1.jpg',
          '/images/redchillipickle/IMG_2.jpg',
          '/images/redchillipickle/IMG_3.jpg',
          '/images/redchillipickle/IMG_4.jpg',
          '/images/redchillipickle/IMG_5.jpg',
          '/images/redchillipickle/IMG_6.jpg',
          '/images/redchillipickle/IMG_7.jpg'
        ],
        category: 'Pickles & Chutneys',
        tags: ['naturalpickle', 'traditionalpickle', 'traditionalrecipe', 'mirchkaachaar', 'bharwamirch', 'lalmirchkaachaar', 'chillipickle', 'redchillipickle', 'stuffedchillipickle', 'banarasipickle']
      },
      {
        id: '18',
        name: 'Green Chilli Pickle',
        description: 'Finest green chillies carefully blended with North Indian handpicked spices and cold pressed mustard oil, suncured to perfection, this pickle offers a spicy yet flavorful balance of taste. Perfect for enhancing your meals, this pickle pairs wonderfully with dal rice, paratha, phulka, theplas or even mathris and namak paras. Don\'t miss out on our traditional Pickle to complete your meal!',
        price: 325,
        image: '/images/greenchillipickle/IMG_1.jpg',
        images: [
          '/images/greenchillipickle/IMG_1.jpg',
          '/images/greenchillipickle/IMG_2.jpg',
          '/images/greenchillipickle/IMG_3.jpg',
          '/images/greenchillipickle/IMG_4.jpg',
          '/images/greenchillipickle/IMG_5.jpg',
          '/images/greenchillipickle/IMG_6.jpg',
          '/images/greenchillipickle/IMG_7.jpg',
          '/images/greenchillipickle/IMG_8.jpg',
          '/images/greenchillipickle/IMG_9.jpg',
          '/images/greenchillipickle/IMG_10.jpg',
          '/images/greenchillipickle/IMG_11.jpg'
        ],
        category: 'Pickles & Chutneys',
        tags: ['chillipickle', 'traditionalpickle', 'traditionalrecipe', 'mirchkaachaar', 'bharwamirch', 'lalmirchkaachaar', 'greenchillipickle', 'harimirchachaar', 'mirchiachaar', 'homemadepickle', 'northindianpickle']
      }    
]; 