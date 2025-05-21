import { Product } from '@/types/whole-foods';

export const products: Product[] = [
    {
        id: 'coconut-barfi-jaggery',
        name: 'Coconut Barfi with Jaggery',
        description: 'Coconut Barfi with jaggery is a traditional Indian sweet made with grated coconut and jaggery, offering a delightful fusion of flavours. The rich nutty texture of fresh coconut is complemented by the deep, caramel-like sweetness of jaggery, which is a natural unrefined sugar. It\'s a healthier alternative to the usual sugar-based barfis, with the earthy rich taste of jaggery enhancing the overall flavour profile. Perfect for festive occasions or as a wholesome snack!',
        price: 120,
        image: '/images/Coconut Barfi With Jaggery.jpeg',
        category: 'Healthy Treats',
        tags: ['healthy', 'sweet', 'dessert', 'coconut', 'jaggery', 'barfi', 'indian sweet', 'homemade', 'handmade', 'pure'],
        size: '200gms',
    },
    {
        id: 'coconut-barfi-sugar',
        name: 'Coconut Barfi with Sugar',
        description: 'Coconut Barfi with sugar is a sweet, creamy Indian treat made from grated coconut, sugar and ghee. Often flavoured with cardamom, the barfi has a smooth, soft consistency and fragrant aroma making it a perfect choice for celebrations, festivals, or a satisfying homemade indulgence',
        price: 120 ,
        image: '/images/Coconut Barfi with Sugar.jpeg',
        category: 'Healthy Treats',
        tags: ['sweet', 'dessert', 'coconut', 'sugar', 'barfi', 'indian sweet', 'homemade', 'handmade', 'pure']
    },
    {
        id: 'sugar-free-dates-peanut-laddoos',
        name: 'Sugar Free Dates and Peanut Laddoos',
        description: 'Sugar free Dates and Peanut laddoo is a healthy, nutrient-packed Indian sweet that combines the natural sweetness of Dates with the rich, earthy flavour of roasted peanuts. This wholesome treat is ideal for those seeking a guilt-free, energy-boosting snack or a healthier alternative for festivals and celebrations.',
        price: 100 ,
        image: '/images/SUGAR FREE DATES AND PEANUT LADDOO.jpeg',
        category: 'Healthy Treats',
        tags: ['sugar free', 'healthy', 'dates', 'peanut', 'ladoo', 'indian sweet', 'nuts']
    },
    {
        id: 'sugar-free-dry-fruits-laddoos',
        name: 'Sugar Free Dry fruits Laddoos',
        description: 'Sugar free dry fruits laddoo is a nutritious and a wholesome sweet treat made with a variety of dried fruits and nuts offering a natural sweet and rich flavour without any added sugar. Packed with vitamins, minerals, healthy fats, and fiber this sugar-free treat is a guilt-free indulgence ideal for anyone looking to enjoy a delicious yet healthy snack during festivals, special occasions or as an everyday pick-me-up.',
        price: 180 ,
        image: '/images/Sugar Free Dryfruits laddoo.jpeg',
        category: 'Healthy Treats',
        tags: ['sugar free', 'healthy', 'dry fruits', 'ladoo', 'indian sweet']
    },
    {
        id: 'paan-e-bahar',
        name: 'Paan-E-Bahar',
        description: `Paan-e-bahar is a refreshing and aromatic drink inspired by the traditional flavours of paan, a popular South-Asian betel leaf preparation. This vibrant drink combines the essence of crushed betel leaves with a blend of spices, herbs and sweeteners creating a unique and tantalizing taste experience. This drink features the freshest of ingredients with no artificial flavours and preservatives.

• INSTANT PREPARATION: Easy to prepare by just mixing with chilled water. Just pour, mix and it becomes ready to drink. Can also be used with milk by blending.
• SERVINGS: Thick concentrate with high servings of ~ 20-25.
• STORAGE/SHELF LIFE: Because there are no preservatives, Paan-e-Bahar MUST be stored in freezer (not fridge) to maintain its freshness. With that, the product will have a shelf life of ~ 9 months. Check the packaging for exact details!`,
        price: 420,
        image: '/images/images-drinks/Paan-e-bahar/amazon-06.jpg',
        images: [
          '/images/images-drinks/Paan-e-bahar/amazon-06.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-07.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-09.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-10.jpg',
          '/images/images-drinks/Paan-e-bahar/amazon-21.jpg'
        ],
        category: 'Drinks',
        tags: ['drink', 'cold drink', 'refreshing', 'paan', 'summer drink', 'cooling', 'beverage', 'healthy drink', 'pure', 'wholesome'],
        size: '500gms',
        ingredients_benefits: {
          'Betel Leaves (Paan)': ['Aids digestion and freshens breath'],
          'Gulkand (Rose Petal Preserve)': ['A natural coolant that helps with acidity and digestion'],
          'Fennel Seeds': ['Helps in detoxification and improves gut health'],
          'Cardamom': ['Enhances digestion and provides a pleasant aroma']
        }
    },
    {
        id: 'soothing-sauf',
        name: 'Soothing Sauf',
        description: `Experience the natural coolness with Soothing Sauf Squash, a handcrafted blend of premium fennel seeds and natural ingredients. Infused with the refreshing essence of sauf (fennel), this squash delivers a refreshing burst of flavor, combining sweet and aromatic notes to elevate post-meal moments or festive celebrations. This drink is also known for its cooling, digestive, and calming properties. The soothing qualities of fennel help with digestion, reduce bloating, and calm the stomach, making it an ideal post-meal drink.

• INSTANT PREPARATION: Easy to prepare by just mixing with chilled water. Just pour, mix and it becomes ready to drink. Can also be used with milk by blending.
• SERVINGS: Thick concentrate with high servings of ~ 20-25.
• STORAGE/SHELF LIFE: Because there are no preservatives, Soothing Sauf MUST be stored in freezer (not fridge) to maintain its freshness. With that, the product will have a shelf life of ~ 9 months. Check the packaging for exact details!`,
        price: 480,
        image: '/images/images-drinks/Soothing Sauf/amazon-11.jpg',
        images: [
          '/images/images-drinks/Soothing Sauf/amazon-11.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-12.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-14.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-15.jpg',
          '/images/images-drinks/Soothing Sauf/amazon-21.jpg'
        ],
        category: 'Drinks',
        tags: ['drink', 'cold drink', 'refreshing', 'summer drink', 'cooling', 'beverage', 'healthy drink', 'digestive drink', 'fennel seeds', 'no preservatives'],
        size: '500gms',
        ingredients_benefits: {
          'Fennel Seeds (Saunf)': ['Aids digestion, reduces bloating, and cools the body'],
          'Cardamom': ['Freshens breath and improves gut health'],
          'Mishri (Rock Sugar)': ['A natural sweetener that balances acidity']
        }
    },
    {
        id: 'thrilling-thandai',
        name: 'Thrilling Thandai',
        description: `Immerse yourself in the richness of Thrilling Thandai, a handcrafted aromatic blend of premium saffron, wholesome nuts, and aromatic spices. Carefully curated to capture the essence of tradition, this indulgent squash offers a luxurious and authentic flavour experience. The drink is typically served chilled, making it an exciting way to cool off during hot days or add a festive touch to celebrations. The flavours are complex and layered, with the right balance of sweet, spicy, and creamy, making it both an indulgent and rejuvenating treat. Every sip is a celebration of heritage, crafted to bring you pure indulgence with a touch of nostalgia. The product has zero preservatives or artificial flavours or essence.

• INSTANT PREPARATION: Easy to prepare by just blending with chilled milk, ensuring quick and convenient preparation of traditional Thandai. Just pour, mix and it is ready to drink.
• SERVINGS: Thick concentrate with high servings of ~ 40 (almost double than most Thandais in market).
• STORAGE/SHELF LIFE: Because there are no preservatives, Thrilling Thandai MUST be stored in freezer (not fridge) to maintain its freshness. With that, the product will have a shelf life of ~ 9 months. Check the packaging for exact details!`,
        price: 480,
        image: '/images/images-drinks/Thrilling Thandai/amazon-01.jpg',
        images: [
          '/images/images-drinks/Thrilling Thandai/amazon-01.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-02.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-04.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-05.jpg',
          '/images/images-drinks/Thrilling Thandai/amazon-21.jpg'
        ],
        category: 'Drinks',
        tags: ['drink', 'cold drink', 'refreshing', 'thandai', 'summer drink', 'cooling', 'beverage', 'traditional', 'healthy drink', 'festive drink'],
        size: '500ml',
        ingredients_benefits: {
          'Almonds & Cashews': ['Boost brain health and provide essential healthy fats'],
          'Fennel Seeds (Saunf)': ['Aids digestion and cools the body'],
          'Poppy Seeds': ['Helps in relaxation and improves sleep'],
          'Melon seeds': ['Rich in protein, healthy fats, and antioxidants, promoting heart health, digestion, and glowing skin'],
          'Cardamom': ['Enhances metabolism and aids digestion'],
          'Saffron': ['A powerful antioxidant that promotes skin glow and mood upliftment'],
          'Black Pepper': ['Strengthens immunity and supports respiratory health']
        }
    },
    {
        id: 'date-nut-bites',
        name: 'Date & Nut Bites',
        description: 'Healthiest anytime snack - pure nutty goodness. Our star performer is suitable for all ages! These bite sized portions are a deliciously healthy combination of dates, seeds and nuts, with a drizzle of olive oil plus they are totally and truly sugar free- No honey. No Jaggery. No sugar with fancy names! Enjoy these as your power dose of vitamins and minerals, pre and post workout snack, an on-the-go hunger killer. Also, a perfect snack for kids\' tiffin box.',
        price: 290 ,
        image: '/images/dateandnutbites/MZ8_0754.jpg',
        images: [
          '/images/dateandnutbites/MZ8_0754.jpg',
          '/images/dateandnutbites/MZ8_0755.jpg',
          '/images/dateandnutbites/NNs_79.jpg',
          '/images/dateandnutbites/NNs_80.jpg'
        ],
        category: 'Healthy Treats',
        tags: ['healthy', 'treats', 'date', 'nut', 'bites', 'healthy treats', 'date and nut bites', 'healthy snack', 'healthy treat', 'healthy bites', 'hearthealthy', 'nopalmoil', 'no maida', 'allnatural', 'nochemicals'],
        size: '100gms'
    },
    {
      id: 'ghee-roasted-makhana',
      name: 'Ghee Roasted Makhana',
      description: 'Healthiest snack ever - crunchy and a powerhouse of calcium. Roasted in pure cow ghee and seasoned with himalayan pink salt - just like home. Handroasted to perfection in small batches, this clean label recipe is seasoned with Himalayan Pink Salt. Can be enjoyed as an anytime snack or even as a salad topping or as your pre and post workout pick me up! Replace your unhealthy namkeens with this crunchy and delicious snack at chai time!',
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
      tags: ['hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'protein', 'proteinrich', 'seeds', 'superseeds', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'roastedsnack', 'makhana', 'foxnuts', 'roastedmakhana'],
      size: '100gms',
      ingredients_benefits: {
        'Makhanas (Fox Seeds/Lotus Seeds)': [
          'Packed with essential nutrients like protein, fiber, and antioxidants.',
          'Good source of magnesium, potassium, phosphorus, iron, and calcium.',
          'Low in calories and high in fiber, making them an excellent snack for weight management.',
          'Rich in antioxidants, especially flavonoids, which help reduce oxidative stress and inflammation.',
          'Low glycemic index, ideal for people with diabetes.',
          'Believed to help detoxify the kidneys and improve their function.',
          'High antioxidant content helps fight free radicals, reducing signs of aging.',
          'Calcium and magnesium support strong bones and teeth.',
          'High fiber content aids in digestion and prevents constipation.',
          'Antioxidants and anti-inflammatory properties protect the skin and improve its texture.',
          'Vitamins, minerals, and antioxidants strengthen the immune system.'
        ],
        'Himalayan Pink Salt': [
          'Contains trace amounts of over 80 minerals, including potassium, magnesium, calcium, iron, and zinc.',
          'Helps maintain electrolyte balance, important for hydration, muscle function, and nerve transmission.',
          'May have a lower sodium content per teaspoon compared to regular table salt.',
          'Believed to support digestion and promote healthy acid-alkaline balance in the stomach.',
          'Said to support detoxification by encouraging the body to expel toxins.'
        ],
        'Desi Cow Ghee': [
          'Contains healthy fats, including medium-chain triglycerides (MCTs) and short-chain fatty acids.',
          'Believed to stimulate the secretion of digestive enzymes, improving nutrient absorption.',
          'Contains antioxidants like vitamins A, E, and K, essential for protecting the body from oxidative stress.',
          'Nourishes the brain and improves cognitive function.',
          'May help reduce brain inflammation and support mental clarity and focus.'
        ]
      }
    },

    {
        id: 'jaggery-mango-pickle',
        name: 'Jaggery Mango Pickle',
        description: 'Kuch teekha, kuch meetha, kuch khatta. Sweet and spicy, this twist to the traditional gujarati golkeri will tickle your taste buds + this is completely OIL FREE! Tartness of handpicked raw mangoes, the spice of hand pounded red chillies, saunf and methi- mildly salted and cooked to perfection with jaggery. This pickle pairs well with pooris, parathas, theplas or even dosas - the mango chunks and whole spices add a lot of texture to this recipe. Serve this pickle as an accompaniment at your parties. Use this in place of imli chutney on your chaats.',
        price: 325,
        image: '/images/jaggerymangopickle/MZ8_0705.jpg',
        images: [
          '/images/jaggerymangopickle/MZ8_0705.jpg',
          '/images/jaggerymangopickle/MZ8_0706.jpg',
          '/images/jaggerymangopickle/MZ8_0708.jpg',
          '/images/jaggerymangopickle/MZ8_0632.jpg',
          '/images/jaggerymangopickle/MZ8_0633.jpg',
          '/images/jaggerymangopickle/MZ8_0635.jpg',
          '/images/jaggerymangopickle/MZ8_0640.jpg'
        ],
        category: 'Pickles & Condiments',
        tags: ['pickle', 'jaggery', 'mango', 'pickle', 'healthy', 'indian pickle', 'indian pickles', 'naturalpickle', 'traditionalpickle', 'traditionalrecipe', 'aamkaachaar', 'mangopickle', 'rawmangopickle', 'chundo', 'chunda', 'oilfreepickle', 'zerooil', 'zerooilpickle', 'golkeri', 'chutney', 'sweetmangopickle'],
        size: '200gms'
    },
    {
      id: 'roasted-red-rice-chiwda',
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
      tags: ['hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'protein', 'proteinrich', 'seeds', 'superseeds', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'roastedsnack'],
      size: '100gms',
      ingredients_benefits: {
        'Red Rice': [
          'Red rice is rich in essential nutrients like fiber, antioxidants, vitamins, and minerals. It contains more nutrients than white rice, including higher levels of iron, zinc, and B-vitamins like thiamine and niacin.',
        'Promotes Digestive Health: The fiber content in red rice is high, which helps in improving digestion and preventing constipation. Fiber adds bulk to the stool and aids in regular bowel movements, promoting overall gut health.',
        'Red rice is packed with antioxidants, particularly anthocyanins, which are compounds responsible for the reddish hue of the rice. These antioxidants help protect the body from oxidative stress and reduce inflammation, which is beneficial for fighting chronic diseases and promoting longevity.',
        'The fiber in red rice helps lower LDL cholesterol (bad cholesterol) levels, reducing the risk of heart disease. Additionally, the antioxidants present in red rice contribute to reducing oxidative stress, which is linked to the development of cardiovascular diseases.',
        'Red rice has a low glycemic index, meaning it releases energy slowly, helping to control hunger and prevent blood sugar spikes. When combined with the fiber from roasted red rice chivda, it provides a filling and satisfying snack, reducing the tendency to overeat.',
        'Red rice is a better option than white rice for individuals with diabetes, as it helps in managing blood sugar levels. Its low glycemic index and high fiber content can assist in preventing sudden spikes in blood sugar.',
        'Red rice contains essential minerals such as calcium, magnesium, and phosphorus, which are important for maintaining strong and healthy bones. These minerals help in bone formation and can aid in the prevention of bone-related conditions like osteoporosis.',
        'The antioxidants, especially anthocyanins in red rice, help fight free radicals in the body that contribute to aging and skin damage. They promote healthier skin, reduce wrinkles, and may also help combat acne and other skin problems.',
        'Red rice contains B-vitamins, particularly thiamine (Vitamin B1), which plays a key role in maintaining the health of the nervous system. These vitamins also support brain function, improve focus, and boost overall mental well-being.'
        ],
        'Himalayan Pink Salt': [
          'Contains trace amounts of over 80 minerals, including potassium, magnesium, calcium, iron, and zinc.',
          'Helps maintain electrolyte balance, important for hydration, muscle function, and nerve transmission.',
          'May have a lower sodium content per teaspoon compared to regular table salt.',
          'Believed to support digestion and promote healthy acid-alkaline balance in the stomach.',
          'Said to support detoxification by encouraging the body to expel toxins.'
        ]
      }
    },
    {
        id: 'traditional-lemon-pickle',
        name: 'Traditional Lemon Pickle',
        description: 'A traditional Indian pickle made with fresh lemons, spices, and oil. Perfect for adding a tangy kick to your meals.',
        price: 325,
        image: '/images/traditionallemonpickle/MZ8_0691.jpg',
        images: [
          '/images/traditionallemonpickle/MZ8_0691.jpg',
          '/images/traditionallemonpickle/MZ8_0693.jpg',
          '/images/traditionallemonpickle/MZ8_0694.jpg',
          '/images/traditionallemonpickle/DSC_8886.jpg',
          '/images/traditionallemonpickle/DSC_8885-Edit.jpg'
        ],
        category: 'Pickles & Condiments',
        tags: ['pickle', 'lemon', 'pickle', 'healthy', 'indian pickle', 'indian pickles'],
        size: '200gms'
    },
    {
      id: 'whole-wheat-ajwain-mathri',
      name: 'Whole Wheat Ajwain Mathri',
      description: 'Super crunchy and great with your tea. Share these with your family- pack them for a picnic-pack these for your kid\'s tiffin! These whole wheat crisps are super versatile and perfect for some healthy indulgence. Crafted using high quality whole wheat flour, fragrant methi and handpicked spices, this clean label snack is handmade in small batches. No palm oil or white salt-No reused oil-super healthy! Loved by all ages - your kids are bound to enjoy these too!',
      price:156 ,
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
      tags: ['wholewheat', 'wholewheatsnack', 'zeromaida', 'hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'mathri', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'methimathri', 'mathri', 'matthi', 'suhali', 'healthysnack'],
      size: '100gms',
      ingredients_benefits: {
        'Whole Wheat Flour': [
          'Whole wheat flour is an excellent source of dietary fiber, which is important for maintaining a healthy digestive system. Fiber helps in preventing constipation, improving gut health, and promoting regular bowel movements.',
        'Whole wheat flour is rich in complex carbohydrates, which provide a steady source of energy throughout the day. This makes ajwain mathri a good snack for individuals who need an energy boost, such as those with an active lifestyle.',
        'Whole Wheat flour is a good source of antioxidants, magnesium, and other nutrients that help improve heart health. The fiber in whole wheat helps lower bad cholesterol levels, which in turn reduces the risk of heart disease. Additionally, ajwain may contribute to improved circulation and overall cardiovascular health.',
        'Whole wheat flour has a lower glycemic index compared to refined flour, which helps in controlling blood sugar levels. It also keeps you full for longer, reducing the chances of overeating. Additionally, ajwain has been linked to improving metabolism and aiding weight loss.',
          'Whole wheat flour has a low glycemic index, which makes it a suitable option for people with diabetes or those trying to maintain stable blood sugar levels. Ajwain also helps in controlling blood sugar spikes and insulin resistance.'
        ],
        'Ajwain (Carom seeds)': [
          'Ajwain has long been known for its digestive benefits. It aids in the secretion of gastric juices, which helps in the digestion of food. Ajwain is also known to relieve indigestion, bloating, and gas, making mathri a beneficial snack for those with digestive issues.',
        'Ajwain is known to have thermogenic properties, which can help boost metabolism and promote fat burning. This can be especially beneficial for those trying to manage their weight or improve their metabolism.',
        'Ajwain contains compounds that have anti-inflammatory properties. Regular consumption of ajwain mathri may help reduce inflammation in the body, which can benefit conditions such as arthritis and other inflammatory disorders.',
        'Ajwain is known for its antimicrobial and antibacterial properties, which can help protect the body from infections. This makes ajwain mathri a good option for supporting the immune system and maintaining overall health.',
          'The combination of fiber and protein in whole wheat flour, along with the spices in ajwain, helps curb hunger and cravings. This makes it a good snack choice for those looking to manage their appetite between meals.'
      ]
      }
    },
    {
        id: 'whole-wheat-jaggery-fingers',
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
        tags: ['wholewheat', 'wholewheatsnack', 'zeromaida', 'hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'mathri', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'antioxidants', 'natural', 'nochemicals', 'allnatural', 'wholegrain', 'jaggery', 'gurpaare'],
        size: '100gms'
    },
    {
        id: 'gond-laddoos',
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
        tags: ['laddoos', 'laddu', 'gheeladdoo', 'cowghee', 'gondladdoos', 'gondladdu', 'dryfruitladdoo', 'dryfruitladdu', 'mithai', 'indiansweets', 'homemadesweets', 'pregnancyladdoo', 'lactation'],
        size: '225gms'
    },
    {
        id: 'sweet-spicy-mango-chutney',
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
        category: 'Pickles & Condiments',
        tags: ['naturalchutney', 'traditionalpickle', 'traditionalrecipe', 'aamchutney', 'mangochutney', 'rawmangopickle', 'chundo', 'chunda', 'oilfreechutney', 'zerooil', 'zerooilpickle', 'golkeri', 'chutney', 'sweetmangopickle'],
        size: '200gms'
    },
    {
        id: 'red-chilli-pickle',
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
        category: 'Pickles & Condiments',
        tags: ['naturalpickle', 'traditionalpickle', 'traditionalrecipe', 'mirchkaachaar', 'bharwamirch', 'lalmirchkaachaar', 'chillipickle', 'redchillipickle', 'stuffedchillipickle', 'banarasipickle'],
        size: '200gms'
    },
    {
        id: 'green-chilli-pickle',
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
        category: 'Pickles & Condiments',
        tags: ['chillipickle', 'traditionalpickle', 'traditionalrecipe', 'mirchkaachaar', 'bharwamirch', 'lalmirchkaachaar', 'greenchillipickle', 'harimirchachaar', 'mirchiachaar', 'homemadepickle', 'northindianpickle'],
        size: '200gms'
    },
    {
      id: 'vegetarian-korean-kimchi',
      name: 'Vegetarian Korean Kimchi',
      description: 'Korean kimchi is a traditional, spicy, fermented vegetable dish that\'s the core of Korean cuisine. It\'s known for its bold flavours — spicy, tangy, salty, and umami-rich — and it\'s usually served as a side dish (called banchan) with almost every Korean meal.',
      price: 400,
      image: '/images/kimchi/Authentic Korean Kimchi.jpeg',
      category: 'Pickles & Condiments',
      tags: ['fermented', 'kimchi', 'madeinindiakimchi', 'egglesskoreankimchi', 'goodforgut', 'probiotic', 'healthy', 'wholesome', 'nopreservatives', 'nochemicals', 'nocolours'],
      size: '300gms',
      ingredients_benefits: {
        'Chinese Cabbage': [
          'Low in calories, high in nutrients- packed with Vitamin C, Vitamin K, folate and fiber',
          'Rich in Antioxidants- Contains compounds like Beta-Carotene, Lutein and Zeaxanthin. Helps fight free radicals and reduce inflammation',
          'Good for heart health- high in Potassium which helps manage blood pressure',
          'Supports digestive health- High fiber content promotes regular bowel movements',
          'Strengthens the immune system- Vitamin C boosts the immune function',
          'Supports Bone Health- Rich in Vitamin K, which helps with Calcium absorption and bone mineralizaton'
        ],
        'Gochugaru': [
          'Gochugaru is a Korean red chili pepper powder that\'s essential in Korean cooking- Rich in vitamin A & C',
          'Contains capsaicin – helps boost metabolism and reduce inflammation'
        ],
        'Onions': [
          'Rich in Antioxidants',
          'Heart Health Hero- Can lower Cholestrol levels',
          'Anti-Inflammatory and Immune Boosting'
        ],
        'Garlic': [
          'Boosts Immunity',
          'Supports Heart Health',
          'Detoxifies the body'
        ],
        'Carrots': [
          'Loaded with Antioxidants',
          'Boosts Immunity'
        ],
        'Ginger': [
          'Powerful Anti-inflammatory',
          'Soothes nausea and upset stomach'
        ],
        'Soya sauce': [],
        'Salt': []
      }
    },
    {
      id: 'white-kimchi',
      name: 'White Kimchi',
      description: 'White kimchi is a non-spicy version of traditional Korean kimchi. It\'s made with Napa cabbage and other veggies, but without the red chili pepper flakes (gochugaru) that give regular kimchi its heat and red color.',
      price: 400,
      image: '/images/kimchi/White Kimchi.jpeg',
      category: 'Pickles & Condiments',
      tags: ['fermented', 'kimchi', 'madeinindiakimchi', 'egglesskoreankimchi', 'goodforgut', 'probiotic', 'healthy', 'wholesome', 'nopreservatives', 'nochemicals', 'nocolours'],
      size: '300gms',
      ingredients_benefits: {
        'Chinese Cabbage': [
          'Low in calories, high in nutrients- packed with Vitamin C, Vitamin K, folate and fiber',
          'Rich in Antioxidants- Contains compounds like Beta-Carotene, Lutein and Zeaxanthin. Helps fight free radicals and reduce inflammation',
          'Good for heart health- high in Potassium which helps manage blood pressure',
          'Supports digestive health- High fiber content promotes regular bowel movements',
          'Strengthens the immune system- Vitamin C boosts the immune function',
          'Supports Bone Health- Rich in Vitamin K, which helps with Calcium absorption and bone mineralizaton'
        ],
        'Pear': [
          'Rich in Fiber- Pears are an excellent source of dietary fiber, particularly in the skin, which helps support digestive health and keeps things moving',
          'Pears contain vitamin C, an important antioxidant that boosts immunity, supports skin health, and helps fight inflammation',
          'Pears are rich in flavonoids — antioxidants that can help reduce the risk of heart disease by improving blood flow, reducing inflammation, and lowering cholesterol levels'
        ],
        'Onions': [
          'Rich in Antioxidants',
          'Heart Health Hero- Can lower Cholestrol levels',
          'Anti-Inflammatory and Immune Boosting'
        ],
        'Garlic': [
          'Boosts Immunity',
          'Supports Heart Health',
          'Detoxifies the body'
        ],
        'Carrots': [
          'Loaded with Antioxidants',
          'Boosts Immunity'
        ],
        'Ginger': [
          'Powerful Anti-inflammatory',
          'Soothes nausea and upset stomach'
        ],
        'Salt': []
      }
    },
    {
      id: 'jalapeno-jam',
      name: 'Jalapeno Jam',
      description: 'Jalapeno jam is a sweet, spicy, and slightly tangy preserve made from jalapeno peppers, sugar, and sometimes vinegar or fruit (like apples or cranberries). It\'s basically a jam that gives you both a kick of heat and a touch of sweetness, making it a super unique condiment.',
      price: 250,
      image: '/images/kimchi/Jalapeno Jam.jpeg',
      category: 'Pickles & Condiments',
      tags: ['jalapenopeppers', 'jalapenojam', 'dip', 'madeinindia', 'nopreservatives', 'nochemicals', 'nocolours', 'noadditives'],
      size: '200gms',
      ingredients_benefits: {
        'Jalapeno': [
          'Jalapeños aren\'t just about the heat — these little green (or red!) chili peppers are packed with surprising health benefits',
          'Boosts Metabolism- Jalapenos contain capsaicin, the compound that makes them spicy-Capsaicin helps boost metabolism, potentially helping burn more calories and support weight loss',
          'Rich in Vitamins & Antioxidants- Loaded with vitamin C, which boosts the immune system and promotes healthy skin',
          'Contains vitamin A, B6, and E, plus antioxidants that protect your cells from damage',
          'Antibacterial Properties- Jalapenos have natural compounds that may help fight harmful bacteria, including those that cause foodborne illness'
        ],
        'Garlic': [
          'Boosts Immunity',
          'Supports Heart Health',
          'Detoxifies the body'
        ],
        'Ginger': [
          'Powerful Anti-inflammatory',
          'Soothes nausea and upset stomach'
        ],
        'Red pepper': [],
        'Vinegar': [],
        'Sugar': []
      }
    },
    {
      id: 'pickled-cucumbers',
      name: 'Pickled Cucumbers',
      description: 'Pickled cucumbers—commonly just called "pickles"—are cucumbers that have been preserved in a brine (salt water), vinegar, or another acidic solution. The pickling process gives them a tangy, sour, and sometimes sweet or spicy flavor, depending on the ingredients used. You can eat them on their own, slice them into sandwiches or burgers, or even dice them into salads.',
      price: 250,
      image: '/images/kimchi/Pickled Cucumber.jpeg',
      category: 'Pickles & Condiments',
      tags: ['pickledcucumbers', 'cucumbers', 'condiment', 'madeinindia', 'nopreservatives', 'nochemicals', 'nocolours', 'noadditives'],
      size: '200gms',
      ingredients_benefits: {
        'Cucumbers': [
          'Super Hydrating- Cucumbers are about 95–96% water, making them excellent for staying hydrated and supporting skin, kidney, and digestive health',
          'Support Skin Health- Thanks to their high water content, vitamin C, and antioxidants, cucumbers help soothe the skin, reduce puffiness, and keep it glowing',
          'Low in Calories, High in Nutrients- Perfect for weight management. You get fiber, vitamin K, potassium, and a touch of vitamin C—all without the calorie load'
        ],
        'Coriander Seeds': [
          'Good for Digestion- Coriander seeds have compounds that stimulate digestive enzymes, helping with bloating, gas, and indigestion',
          'Rich in Antioxidants- These little seeds are packed with antioxidants that help fight free radicals and reduce inflammation',
          'Blood Sugar Control- Some studies suggest coriander seeds can help lower blood sugar levels by promoting insulin activity'
        ],
        'Mustard Seeds': [
          'Rich in Antioxidants- Mustard seeds contain compounds like selenium, flavonoids, and carotenoids that help fight oxidative stress and inflammation',
          'Good for Digestion- Like coriander seeds, mustard seeds stimulate saliva and gastric juices, which can boost digestion'
        ],
        'Black Pepper': [
          'Boosts Digestion- Black pepper stimulates the production of digestive enzymes and juices, which helps break down food faster and reduces bloating and gas',
          'Enhances Nutrient Absorption- The active compound piperine increases the bioavailability of nutrients like curcumin (from turmeric), selenium, and B-vitamins, making other healthy foods even more effective',
          'Rich in Antioxidants- Piperine also acts as a strong antioxidant, helping to fight free radicals and reduce cellular damage'
        ],
        'Garlic': [
          'Boosts Immunity',
          'Supports Heart Health',
          'Detoxifies the body'
        ],
        'Spring Onion': [],
        'Vinegar': [],
        'Sugar': []
      }
    },
    {
      id: 'ragi-fingers',
      name: 'Ragi Fingers',
      description: 'Ragi Fingers are a nutritious and delicious snack made from finger millet (Ragi) flour, known for its rich calcium and iron content. Shaped like crispy sticks or fingers, these snacks offer a perfect balance of health and taste, making them ideal for both kids and adults. They\'re gluten-free, rich in fiber, and help keep you full longer — making them a smart alternative to traditional fried snacks. Whether you\'re looking for a healthy evening munch, a tiffin box treat, or a weaning food for toddlers (in a non-spicy version), Ragi Fingers fit the bill beautifully plus no palm oil or white salt and no reused oil makes it super healthy!',
      price: 120,
      image: '/images/ragifingerspictures/MZ8_0738.jpg',
      images: [
        '/images/ragifingerspictures/MZ8_0738.jpg',
        '/images/ragifingerspictures/MZ8_0739.jpg',
        '/images/ragifingerspictures/NNs_58.jpg',
        '/images/ragifingerspictures/NNs_59.jpg',
        '/images/ragifingerspictures/NNs_60.jpg',
        '/images/ragifingerspictures/NNs_63.jpg',
        '/images/ragifingerspictures/NNs_64.jpg',
      ],
      category: 'Healthy Bites',
      tags: ['Ragifingers', 'healthiersnack', 'zeromaida', 'hearthealthy', 'nopalmoil', 'himalayanpinksalt', 'nomaida', 'noreusedoil', 'traditionalrecipe', 'kidsfriendly', 'tiffinsnack', 'tiffinbox', 'natural', 'nochemicals', 'allnatural', 'ragi', 'ragichips'],
      size: '100gms',
      ingredients_benefits: {
        'Ragi Flour': [
          'Rich in Calcium - one of the best natural sources of calcium, even more than milk!',
          'Gluten-Free & Easy to Digest - perfect for people with gluten intolerance or celiac disease',
          'Packed with Iron - helps in improving hemoglobin levels and fighting anemia',
          'High in Dietary Fiber - promotes digestion and keeps you fuller for longer',
          'Good for Diabetics - low glycemic index helps in controlling blood sugar levels',
          'Supports Heart Health - high fiber and antioxidant content help lower cholesterol'
        ],
        'Himalayan Pink Salt': [
          'Contains trace amounts of over 80 minerals including potassium, magnesium, calcium, iron, and zinc',
          'Helps maintain electrolyte balance in the body',
          'May have lower sodium content compared to regular table salt',
          'Supports digestion and promotes healthy acid-alkaline balance',
          'Supports detoxification by encouraging the body to expel toxins'
        ]
      }
    },
    {
      id: 'gajar-gobhi-pickle',
      name: 'Gajar Gobhi Pickle',
      description: 'Gajar Gobhi Pickle is a traditional North Indian winter favorite, made with crisp Carrots (Gajar), fresh Cauliflower (gobhi), and sometimes even turnips (Shalgam), all steeped in a vibrant, spiced mustard oil brine. This pickle bursts with bold flavors — the earthiness of mustard seeds, the pungency of asafoetida, and the zing of chili and turmeric come together to create a tangy, spicy, and aromatic experience with every bite. Its sun-cured the old-fashioned way, allowing the vegetables to soak up the spices and develop deep, complex flavors. Often served alongside parathas, dal-chawal, or poori-sabzi, Gajar Gobhi Pickle adds a nostalgic, homestyle punch to any meal — a true tribute to Indian winter kitchens.',
      price: 325,
      image: '/images/gajargobhipickles/IMG_1.jpg',
      images: [
        '/images/gajargobhipickles/IMG_1.jpg',
        '/images/gajargobhipickles/IMG_2.jpg',
        // '/images/gajargobhipickles/IMG_3.jpg',
        '/images/gajargobhipickles/IMG_4.jpg',
        '/images/gajargobhipickles/IMG_5.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['pickle', 'traditional', 'winter', 'carrot', 'cauliflower', 'homestyle', 'nopreservatives', 'nochemicals', 'natural', 'condiment'],
      size: '200gms',
      ingredients_benefits: {
        'Carrots': [
          'Rich in beta carotene and vitamin A for eye health',
          'High in antioxidants and fiber',
          'Supports immune system function'
        ],
        'Cauliflower': [
          'Low in calories but high in vitamins and minerals',
          'Contains powerful antioxidants',
          'Rich in fiber for digestive health'
        ],
        'Mustard Oil': [
          'Contains omega-3 and omega-6 fatty acids',
          'Has antimicrobial properties',
          'Aids in digestion'
        ],
        'Spices (Turmeric, Asafoetida, etc.)': [
          'Anti-inflammatory properties',
          'Aids in digestion',
          'Natural preservatives'
        ]
      }
    },

    {
      id: 'royal-dates-pickle',
      name: 'Royal Dates Pickle',
      description: 'Royal Dates Pickle is a unique blend of plump, juicy dates infused with a bold mix of traditional Indian spices, creating a harmonious balance of sweet, tangy, and spicy flavours plus this pickle is absolutely OIL FREE!!!!. This pickle brings together the natural sweetness of dates with the warmth of chili, tang of lemon, and a medley of whole spices like fennel, cumin, and mustard seeds. Often enjoyed with parathas, rotis, or even cheese boards, Royal Dates Pickle adds a touch of royalty to every bite — a gourmet experience rooted in age-old Indian pickling traditions. This unique pickle is perfect as a side dish or a gourmet addition to salads and sandwiches.',
      price: 325,
      image: '/images/royaldatespicklepics/IMG_1.jpg',
      images: [
        '/images/royaldatespicklepics/IMG_1.jpg',
        '/images/royaldatespicklepics/IMG_2.jpg',
        '/images/royaldatespicklepics/IMG_3.jpg',
        '/images/royaldatespicklepics/IMG_4.jpg',
        '/images/royaldatespicklepics/IMG_5.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['dates', 'khajoor', 'naturalpickle', 'traditionalpickle', 'traditionalrecipe', 'oilfreepickle', 'zerooil', 'zerooilpickle', 'datespickle', 'achaar', 'chutney'],
      size: '200gms',
      ingredients_benefits: {
        'Dates': [
          'Rich in Natural Energy: Dates are packed with natural sugars like glucose, fructose, and sucrose, making them a great instant energy booster — perfect as a pre- or post-workout snack',
          'Great Source of Fiber: Dates aid in digestion, prevent constipation and support gut health',
          'High in essential nutrients: Iron (fights anemia), Potassium (controls blood pressure), Magnesium (supports muscle & nerve function), Vitamin B6 (brain function & mood regulation)',
          'Promote Heart Health: Dates lower bad cholesterol, reduce the risk of heart disease, improve blood circulation'
        ],
        'Lemon': [
          'Rich in Vitamin C: Boosts immunity, helps the body fight off colds and infections, supports healthy skin and wound healing',
          'Aids Digestion: Lemon juice stimulates the production of digestive enzymes and bile, by helping relieve indigestion and bloating, kickstart metabolism, support gut health'
        ]
      }
    },
    {
      id: 'traditional-mango-pickle',
      name: 'Traditional Mango Pickle',
      description: 'Bursting with bold flavors and timeless charm, Traditional Mango Pickle is a beloved Indian classic made from handpicked raw mangoes and a vibrant blend of aromatic spices, all slow-cured in cold-pressed mustard oil. Each bite delivers the perfect balance of tangy, spicy, and savory, with the richness of fenugreek, mustard seeds, fennel, red chili, and turmeric infusing the mango chunks over weeks of natural sun-curing. A staple on Indian thalis, this pickle adds a zesty kick to everything from dal-chawal to parathas, evoking memories of grandma\'s kitchen and summer afternoons. Don\'t miss out on our traditional Mango Pickle to complete your meal as you will love this heirloom recipe.',
      price: 325,
      image: '/images/traditionalmangopicklepics/MZ8_0701.jpg',
      images: [
        '/images/traditionalmangopicklepics/MZ8_0701.jpg',
        '/images/traditionalmangopicklepics/MZ8_0702.jpg',
        '/images/traditionalmangopicklepics/MZ8_0704.jpg',
        '/images/traditionalmangopicklepics/NNs_5.jpg',
        '/images/traditionalmangopicklepics/NNs_6.jpg',
        '/images/traditionalmangopicklepics/NNs_7.jpg',
        '/images/traditionalmangopicklepics/NNs_8.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['mango', 'mangopickle', 'naturalpickle', 'aamkaachaar', 'rawmangopickle', 'traditionalmangopickle', 'punjabimangopickle', 'traditionalmangopicklerecipe'],
      size: '200gms',
      ingredients_benefits: {
        'Mangoes': [
          'Rich in Vitamin C, which helps boost immunity, promotes healthy skin, aids in collagen production for strong hair and glowing skin',
          'Good for eye health: High in vitamin A and beta-carotene; Mangoes support better vision, prevention of dry eyes and night blindness'
        ],
        'Hing (Asafoetida)': [
          'Best known for its digestive properties: reduces bloating and gas, relieves stomach cramps, improves overall gut health'
        ],
        'Mustard Oil': [
          'Extremely heart friendly, boosts immunity, promotes digestion and is good for skin and hair health too'
        ]
      }
    },
    {
      id: 'besan-laddoos',
      name: 'Besan Laddoos',
      description: 'Besan laddoos are a beloved Indian sweet made from roasted gram flour (besan), ghee, and unrefined sugar, delicately flavored with cardamom and often studded with chopped nuts. These round golden delights are known for their rich, nutty aroma and melt-in-your-mouth texture. Deeply rooted in Indian festivals and celebrations, besan laddoos carry a nostalgic warmth—often reminding one of home kitchens filled with the comforting scent of slow-roasted besan. Whether offered during Diwali, weddings, or simply made as a treat for loved ones, these sweets are a perfect balance of simplicity and indulgence. Each bite offers a burst of flavor—the earthiness of besan, the silkiness of ghee, and the sweet finish of powdered sugar—all rolled into one comforting, fragrant bite-sized sphere. Our laddoos are made in small batches using a clean label recipe.',
      price: 360,
      image: '/images/besanladdoopics/IMG_1.jpg',
      images: [
        '/images/besanladdoopics/IMG_1.jpg',
        '/images/besanladdoopics/IMG_2.jpg',
        '/images/besanladdoopics/IMG_3.jpg',
        '/images/besanladdoopics/IMG_4.jpg',
        '/images/besanladdoopics/IMG_5.jpg',
        '/images/besanladdoopics/IMG_6.jpg',
        '/images/besanladdoopics/IMG_7.jpg',
        '/images/besanladdoopics/IMG_8.jpg'
      ],
      category: 'Healthy Treats',
      tags: ['besanladdoo', 'laddoo', 'laddu', 'besanladdu', 'gheeladdoo', 'cowghee', 'gondladdoo', 'gondladdu', 'dryfruitladdoo', 'dryfruitladdu', 'mithai', 'indiansweets', 'homemadesweets'],
      size: '225gms',
      ingredients_benefits: {
        'Besan': [
          'Great plant-based protein source, especially for vegetarians. Helps with muscle repair and satiety',
          'Aids digestion, promotes gut health and keeps you feeling full longer- great for weight management',
          'Naturally gluten-free, perfect for people with celiac disease or gluten sensitivity'
        ],
        'Cow Ghee': [
          'Contains saturated fats that support energy, hormone production, and help in absorbing fat-soluble vitamins (A, D, E, and K)',
          'Stimulates the secretion of stomach acids, improves gut health, and helps in nutrient absorption',
          'Contains omega-3 and omega-9 fatty acids, which support cardiovascular health when consumed mindfully'
        ]
      }
    },
    {
      id: 'sattu-laddoos',
      name: 'Sattu Laddoos',
      description: 'Sattu laddoos are a simple yet power-packed traditional Indian sweet made from roasted chana flour (sattu), ghee, and jaggery. Earthy, nutty, and naturally sweet, these laddoos are the perfect blend of nutrition and taste. Sattu is loaded with nutrients—making these laddoos not just delicious, but also super energizing. They\'re especially loved in Bihar, Jharkhand, and Uttar Pradesh, where sattu has deep culinary roots. Sattu laddoos offer a clean energy boost, making them ideal for a healthy snack, post-workout bite, or even a light breakfast on the go. With every bite, you get the toasty flavor of roasted gram, the richness of ghee, and the warm sweetness of jaggery—a taste that\'s both comforting and nourishing.',
      price: 360,
      image: '/images/sattuladdopics/IMG_1.jpg',
      images: [
        '/images/sattuladdoopics/IMG_1.jpg',
        '/images/sattuladdoopics/IMG_2.jpg',
        '/images/sattuladdoopics/IMG_3.jpg',
        '/images/sattuladdoopics/IMG_4.jpg',
        '/images/sattuladdoopics/IMG_5.jpg'
      ],
      category: 'Healthy Treats',
      tags: ['besanladdoo', 'laddoo', 'laddu', 'besanladdu', 'gheeladdoo', 'cowghee', 'gondladdoo', 'gondladdu', 'dryfruitladdoo', 'dryfruitladdu', 'mithai', 'indiansweets', 'homemadesweets', 'Sattuladdoos', 'Sattu', 'Sattuladus'],
      size: '225gms',
      ingredients_benefits: {
        'Sattu (Roasted Chana Flour)': [
          'Powerhouse of protein, making it a great muscle-building and energy-boosting food—especially for vegetarians',
          'High fiber content supports smooth digestion and helps prevent issues like bloating and constipation',
          'Traditionally consumed in summer (especially in Bihar & UP), Sattu helps maintain body temperature and prevents heat strokes'
        ],
        'Cow Ghee': [
          'Contains saturated fats that support energy, hormone production, and help in absorbing fat-soluble vitamins (A, D, E, and K)',
          'Stimulates the secretion of stomach acids, improves gut health, and helps in nutrient absorption',
          'Contains omega-3 and omega-9 fatty acids, which support cardiovascular health when consumed mindfully'
        ],
        'Jaggery': [
          'Being a natural detoxifier, helps cleanse the liver by flushing out toxins',
          'A great natural source of iron and folate, helps boost hemoglobin and is especially helpful for women',
          'Stimulates digestive enzymes, reduces acidity, and helps with constipation',
          'Packed with antioxidants, zinc, and selenium, it helps fight free radicals and supports a strong immune system'
        ]
      }
    },
    {
      id: 'overnight-oats-banana-cake',
      name: 'Overnight Oats (Flavour: Banana Cake)',
      description: 'This is a Vegetarian product.\n• Convenient: Overnight Oats are a hassle-free breakfast option that can be prepared the night before.\n• 15grams Protein, NO Artificial flavouring, Real Fruit Bits\n• Customisable: Add your preferred toppings like fruits, nuts, or seeds to create a personalised and delightful meal.\n• Portable: Overnight oats can be easily packed and consumed on-the-go, making them ideal for busy mornings.\n• Versatile: Experiment with different milk varieties, yoghurt, or chia seeds to suit your dietary preferences.\n• Nutritious: These oats are packed with fibre, protein, and essential nutrients for a wholesome start to the day.',
      price: 250,
      image: '/images/bananacakeoats/IMG_1.jpg',
              images: [
        '/images/bananacakeoats/IMG_1.jpg',
        '/images/bananacakeoats/IMG_2.jpg',
        '/images/bananacakeoats/IMG_3.jpg',
        '/images/bananacakeoats/IMG_4.jpg',
        '/images/bananacakeoats/IMG_5.jpg',
        '/images/bananacakeoats/IMG_6.jpg'
      ],
      category: 'Healthy Breakfast',
      tags: ['oats', 'overnightoats', 'bananacake', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats', 'bananacakeoats', 'banana oats', 'banana oat'],
      size: '84gms',
      ingredients_benefits: {
        'Oats': [
          'Helps lower cholesterol (especially LDL/"bad" cholesterol)',
          'Keeps you full longer (great for appetite control), Supports healthy blood sugar levels by slowing digestion.'
        ],
        'Milk Protein': [
          'Complete Protein, contains all 9 essential amino acids your body can\'t make on its own',
          'Great for muscle repair, growth, and overall health.'
        ],
        'Brown Sugar': [
          'Slightly More Nutrients than White Sugar, Brown sugar contains molasses, which gives it that color and a tiny nutritional boost',
          'Trace amounts of minerals like calcium, potassium, iron, and magnesium are also present in Brown Sugar'
        ],
        'Whey Protein': [
          'Complete protein with all 9 essential amino acids.',
          'High in leucine, a key amino acid for triggering muscle protein synthesis.',
          'Perfect post-workout to help your muscles recover and grow.'
        ],
        'Banana Powder': [
          'Nutrient-Rich (Just Like Whole Bananas), Packed with:',
          'Potassium – supports heart health, muscle function, and blood pressure regulation.',
          'Magnesium – helps with energy, nerves, and muscle relaxation.',
          'Vitamin B6 – important for brain health and mood balance.',
          'Vitamin C – antioxidant + immune support.',
          'Fiber – for digestion and blood sugar control (more in powders made from whole banana, peel and all).'
        ],
        'Chia Seeds': [
          'Packed with Nutrients (Tiny but Loaded)',
          'In just 2 tablespoons (~28g), you get:',
          'Fiber: ~10–11g (that\'s ~40% of daily needs!)',
          'Omega-3s: Especially ALA, great for heart and brain health.',
          'Protein: ~4g of complete, plant-based protein.',
          'Calcium, magnesium, phosphorus: Important for bones, muscles, and energy.'
        ],
        'Diced Banana': [],
        'Date Powder': [],
        'Flax Seeds': [],
        'Himalayan Pink Salt': [],
        'Vanilla Powder': [],
        'Banana Flavour': [],
        'Stevia': []
      }
    },
    {
      id: 'overnight-oats-cinnamon-roll',
      name: 'Overnight Oats (Flavour: Cinnamon Roll)',
      description: 'This is a Vegetarian product.\n• Convenient: Overnight Oats are a hassle-free breakfast option that can be prepared the night before.\n• 15grams Protein, NO Artificial flavouring, Real Fruit Bits\n• Customisable: Add your preferred toppings like fruits, nuts, or seeds to create a personalised and delightful meal.\n• Portable: Overnight oats can be easily packed and consumed on-the-go, making them ideal for busy mornings.\n• Versatile: Experiment with different milk varieties, yoghurt, or chia seeds to suit your dietary preferences.\n• Nutritious: These oats are packed with fibre, protein, and essential nutrients for a wholesome start to the day.',
      price: 250,
      image: '/images/oatscinnamonroll/IMG_1.jpg',
              images: [
        '/images/oatscinnamonroll/IMG_1.jpg',
        '/images/oatscinnamonroll/IMG_2.jpg',
        '/images/oatscinnamonroll/IMG_3.jpg',
        '/images/oatscinnamonroll/IMG_4.jpg',
        '/images/oatscinnamonroll/IMG_5.jpg',
        '/images/oatscinnamonroll/IMG_6.jpg',
        '/images/oatscinnamonroll/IMG_7.jpg'
      ],
      category: 'Healthy Breakfast',
      tags: ['oats', 'overnightoats', 'cinnamonroll', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats'],
      size: '84gms',
      ingredients_benefits: {
        'Oats': [
          'Helps lower cholesterol (especially LDL/"bad" cholesterol)',
          'Keeps you full longer (great for appetite control), Supports healthy blood sugar levels by slowing digestion.'
        ],
        'Milk Protein': [
          'Complete Protein, contains all 9 essential amino acids your body can\'t make on its own',
          'Great for muscle repair, growth, and overall health.'
        ],
        'Coconut Sugar': [
          'Unlike regular white sugar (which is pure sucrose), coconut sugar retains small amounts of:',
          'Iron – helps with oxygen transport in the blood.',
          'Zinc – supports immunity and skin.',
          'Calcium & Potassium – good for bones, nerves, and heart function.',
          'Inulin (a type of fiber) – supports gut health and slows sugar absorption.',
          'Coconut Sugar has lower Glycemic Index which means that it causes a slower rise in blood sugar which may help with better energy balance, fewer blood sugar spikes/crashes, improved insulin response overtime.'
        ],
        'Whey Protein': [
          'Complete protein with all 9 essential amino acids.',
          'High in leucine, a key amino acid for triggering muscle protein synthesis.',
          'Perfect post-workout to help your muscles recover and grow.'
        ],
        'Chia Seeds': [
          'Packed with Nutrients (Tiny but Loaded)',
          'In just 2 tablespoons (~28g), you get:',
          'Fiber: ~10–11g (that\'s ~40% of daily needs!)',
          'Omega-3s: Especially ALA, great for heart and brain health.',
          'Protein: ~4g of complete, plant-based protein.',
          'Calcium, magnesium, phosphorus: Important for bones, muscles, and energy.'
        ],
        'Quinoa': [],
        'Date Powder': [],
        'Flax Seeds': [],
        'Vanilla Powder': [],
        'Cinnamon Powder': [],
        'Himalayan Pink Salt': [],
        'Stevia': []
      }
    },
    {
      id: 'overnight-oats-mango-custard',
      name: 'Overnight Oats (Flavour: Mango Custard)',
      description: 'This is a Vegetarian product.\n• Convenient: Overnight Oats are a hassle-free breakfast option that can be prepared the night before.\n• 15grams Protein, NO Artificial flavouring, Real Fruit Bits\n• Customisable: Add your preferred toppings like fruits, nuts, or seeds to create a personalised and delightful meal.\n• Portable: Overnight oats can be easily packed and consumed on-the-go, making them ideal for busy mornings.\n• Versatile: Experiment with different milk varieties, yoghurt, or chia seeds to suit your dietary preferences.\n• Nutritious: These oats are packed with fibre, protein, and essential nutrients for a wholesome start to the day.',
      price: 250,
      image: '/images/mangocustardoats/IMG_1.jpg',
              images: [
        '/images/mangocustardoats/IMG_1.jpg',
        '/images/mangocustardoats/IMG_2.jpg',
        '/images/mangocustardoats/IMG_3.jpg',
        '/images/mangocustardoats/IMG_4.jpg',
        '/images/mangocustardoats/IMG_5.jpg'
      ],
      category: 'Healthy Breakfast',
      tags: ['oats', 'overnightoats', 'mangocustard', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats', 'mangooats', 'mango oats'],
      size: '84gms',
      ingredients_benefits: {
        'Oats': [
          'Helps lower cholesterol (especially LDL/"bad" cholesterol)',
          'Keeps you full longer (great for appetite control), Supports healthy blood sugar levels by slowing digestion.'
        ],
        'Coconut Sugar': [
          'Unlike regular white sugar (which is pure sucrose), coconut sugar retains small amounts of:',
          'Iron – helps with oxygen transport in the blood.',
          'Zinc – supports immunity and skin.',
          'Calcium & Potassium – good for bones, nerves, and heart function.',
          'Inulin (a type of fiber) – supports gut health and slows sugar absorption.',
          'Coconut Sugar has lower Glycemic Index which means that it causes a slower rise in blood sugar which may help with better energy balance, fewer blood sugar spikes/crashes, improved insulin response overtime.'
        ],
        'Milk Protein': [
          'Complete Protein, contains all 9 essential amino acids your body can\'t make on its own',
          'Great for muscle repair, growth, and overall health.'
        ],
        'Mango Powder': [
          'Rich in Antioxidants',
          'Contains polyphenols, flavonoids, and vitamin C',
          'Helps fight free radicals, reduce oxidative stress, and may slow signs of aging.'
        ],
        'Whey Protein': [
          'Complete protein with all 9 essential amino acids.',
          'High in leucine, a key amino acid for triggering muscle protein synthesis.',
          'Perfect post-workout to help your muscles recover and grow.'
        ],
        'Chia Seeds': [
          'Packed with Nutrients (Tiny but Loaded)',
          'In just 2 tablespoons (~28g), you get:',
          'Fiber: ~10–11g (that\'s ~40% of daily needs!)',
          'Omega-3s: Especially ALA, great for heart and brain health.',
          'Protein: ~4g of complete, plant-based protein.',
          'Calcium, magnesium, phosphorus: Important for bones, muscles, and energy.'
        ],
        'Dried Mango Dices': [],
        'Flax Seeds': []
      }
    },
    {
      id: 'overnight-oats-cookie-creme',
      name: 'Overnight Oats (Flavour: Cookie & Creme)',
      description: `This is a Vegetarian product.
• Convenient: Overnight Oats are a hassle-free breakfast option that can be prepared the night before.
• 15grams Protein, NO Artificial flavouring, Real Fruit Bits
• Customisable: Add your preferred toppings like fruits, nuts, or seeds to create a personalised and delightful meal.
• Portable: Overnight oats can be easily packed and consumed on-the-go, making them ideal for busy mornings.
• Versatile: Experiment with different milk varieties, yoghurt, or chia seeds to suit your dietary preferences.
• Nutritious: These oats are packed with fibre, protein, and essential nutrients for a wholesome start to the day.`,
      price: 250,
      image: '/images/cookiecreme/IMG_3.jpg',
              images: [
        '/images/cookiecreme/IMG_3.jpg',
        '/images/cookiecreme/IMG_1.jpg',
        '/images/cookiecreme/IMG_2.jpg',
        '/images/cookiecreme/IMG_4.jpg',
        '/images/cookiecreme/IMG_5.jpg'
      ],
      category: 'Healthy Breakfast',
      tags: ['oats', 'overnightoats', 'cookieandcreme', 'cookie&crème', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats'],
      size: '84gms',
      ingredients_benefits: {
        'Oats': [
          'Helps lower cholesterol (especially LDL/"bad" cholesterol)',
          'Keeps you full longer (great for appetite control), Supports healthy blood sugar levels by slowing digestion.'
        ],
        'Milk Protein': [
          'Complete Protein, contains all 9 essential amino acids your body can\'t make on its own',
          'Great for muscle repair, growth, and overall health.'
        ],
        'Whey Protein': [
          'Complete protein with all 9 essential amino acids.',
          'High in leucine, a key amino acid for triggering muscle protein synthesis.',
          'Perfect post-workout to help your muscles recover and grow.'
        ],
        'Cookie Crumb': [],
        'Corn Starch': [],
        'Oat Flour': [],
        'Rice Flour': [],
        'Brown Sugar': [],
        'Cocoa Powder': [],
        'Sunflower Oil': [],
        'Salt': [],
        'Vanilla Flavour': [],
        'Sodium Bicarbonate': [],
        'Coconut Sugar': [],
        'Chia Seeds': [],
        'Date Powder': [],
        'Flax Seeds': [],
        'Himalayan Pink Salt': [],
        'Cookie Flavour': [],
        'Stevia': []
      }
    },
    {
      id: 'overnight-oats-mixed-berries-creme',
      name: 'Overnight Oats (Flavour: Mixed Berries Creme)',
      description: `This is a Vegetarian product.
• Convenient: Overnight Oats are a hassle-free breakfast option that can be prepared the night before.
• 15grams Protein, NO Artificial flavouring, Real Fruit Bits
• Customisable: Add your preferred toppings like fruits, nuts, or seeds to create a personalised and delightful meal.
• Portable: Overnight oats can be easily packed and consumed on-the-go, making them ideal for busy mornings.
• Versatile: Experiment with different milk varieties, yoghurt, or chia seeds to suit your dietary preferences.
• Nutritious: These oats are packed with fibre, protein, and essential nutrients for a wholesome start to the day.`,
      price: 250,
      image: '/images/mixedberriescreme/IMG_5.jpg',
              images: [
        '/images/mixedberriescreme/IMG_5.jpg',
        '/images/mixedberriescreme/IMG_2.jpg',
        '/images/mixedberriescreme/IMG_3.jpg',
        '/images/mixedberriescreme/IMG_4.jpg',
        '/images/mixedberriescreme/IMG_1.jpg'
      ],
      category: 'Healthy Breakfast',
      tags: ['oats', 'overnightoats', 'mixedberries', 'mixedberriescreme', 'berriesoats', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats'],
      size: '84gms',
      ingredients_benefits: {
        'Oats': [
          'Helps lower cholesterol (especially LDL/"bad" cholesterol)',
          'Keeps you full longer (great for appetite control), Supports healthy blood sugar levels by slowing digestion.'
        ],
        'Milk Protein': [
          'Complete Protein, contains all 9 essential amino acids your body can\'t make on its own',
          'Great for muscle repair, growth, and overall health.'
        ],
        'Coconut Sugar': [
          'Lower Glycemic Index- Coconut sugar has a lower glycemic index (GI) than regular sugar (around 35 vs. 60–65), meaning it may cause slower spikes in blood sugar. This is mainly due to the presence of inulin, a type of fiber that slows glucose absorption.',
          'Less Processed- Coconut sugar is typically less refined and doesn\'t contain added chemicals or preservatives. It\'s made through a simple evaporation process, which helps it retain more of its natural properties.',
          'Contains Trace Nutrients- It retains some nutrients from the sap, such as: Iron, Zinc, Calcium, Potassium, Antioxidants. These are in small amounts, but still more than what you\'d get from white sugar.'
        ],
        'Whey Protein': [
          'Complete protein with all 9 essential amino acids.',
          'High in leucine, a key amino acid for triggering muscle protein synthesis.',
          'Perfect post-workout to help your muscles recover and grow.'
        ],
        'Strawberry Powder': [],
        'Diced Strawberries': [],
        'Chia Seeds': [],
        'Dried Cranberries': [],
        'Whole Blueberries': [],
        'Flax Seeds': [],
        'Strawberry flavour': [],
        'Himalayan Pink Salt': [],
        'Cream Flavour': [],
        'Citric Acid': [],
        'Stevia': []
      }
    },
    {
      id: 'overnight-oats-mocha-dream',
      name: 'Overnight Oats (Flavour: Mocha Dream)',
      description: `This is a Vegetarian product.
• Convenient: Overnight Oats are a hassle-free breakfast option that can be prepared the night before.
• 15grams Protein, NO Artificial flavouring, Real Fruit Bits
• Customisable: Add your preferred toppings like fruits, nuts, or seeds to create a personalised and delightful meal.
• Portable: Overnight oats can be easily packed and consumed on-the-go, making them ideal for busy mornings.
• Versatile: Experiment with different milk varieties, yoghurt, or chia seeds to suit your dietary preferences.
• Nutritious: These oats are packed with fibre, protein, and essential nutrients for a wholesome start to the day.`,
      price: 250,
        image: '/images/mochadreamoats/IMG_1.JPG',
              images: [
        '/images/mochadreamoats/IMG_1.JPG',
        '/images/mochadreamoats/IMG_2.JPG',
        '/images/mochadreamoats/IMG_3.JPG',
        '/images/mochadreamoats/IMG_4.JPG'
      ],
      category: 'Healthy Breakfast',
      tags: ['oats', 'overnightoats', 'mocha', 'mochadream', 'mochaoats', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats'],
      size: '84gms',
      ingredients_benefits: {
        'Oats': [
          'Helps lower cholesterol (especially LDL/"bad" cholesterol)',
          'Keeps you full longer (great for appetite control), Supports healthy blood sugar levels by slowing digestion.'
        ],
        'Milk Protein': [
          'Complete Protein, contains all 9 essential amino acids your body can\'t make on its own',
          'Great for muscle repair, growth, and overall health.'
        ],
        'Coconut Sugar': [
          'Lower Glycemic Index- Coconut sugar has a lower glycemic index (GI) than regular sugar (around 35 vs. 60–65), meaning it may cause slower spikes in blood sugar. This is mainly due to the presence of inulin, a type of fiber that slows glucose absorption.',
          'Less Processed- Coconut sugar is typically less refined and doesn\'t contain added chemicals or preservatives. It\'s made through a simple evaporation process, which helps it retain more of its natural properties.',
          'Contains Trace Nutrients- It retains some nutrients from the sap, such as: Iron, Zinc, Calcium, Potassium, Antioxidants. These are in small amounts, but still more than what you\'d get from white sugar.'
        ],
        'Whey Protein': [
          'Complete protein with all 9 essential amino acids.',
          'High in leucine, a key amino acid for triggering muscle protein synthesis.',
          'Perfect post-workout to help your muscles recover and grow.'
        ],
        'Date Powder': [],
        'Chia Seeds': [],
        'Coffee': [],
        'Flax Seeds': [],
        'Cocoa Powder': [],
        'Oats Flour': [],
        'Cacao Nibs': [],
        'Himalayan Pink Salt': [],
        'Mocha Flavour': [],
        'Chocolate Flavour': [],
        'Vanilla': []
      }
    },
    {
      id: 'millet-cookies-multiple-flavors',
      name: 'Millet Cookies - Multiple Flavors',
      description: 'Wholesome meets indulgence in every bite! These millet-based cookies are crafted with ancient grains like ragi, jowar, and bajra—packed with natural fiber and nutrients. We\'ve added rich chocolate chips for that irresistible crunch, blending health and delight perfectly. Whether it\'s a guilt-free snack or a sweet treat after meals, these cookies are your go-to for a crunchy, chocolaty experience with the goodness of millet. No refined flour. No preservatives. Just deliciously healthy goodness.',
      price: 399,
      image: '/images/milletcookies/can/DSC03949.jpg',
      images: ['/images/milletcookies/can/DSC03949.jpg',
        '/images/milletcookies/box/Millet_Cookies.jpg',
        '/images/milletcookies/can/DSC09454.jpg'
      ],
      category: 'Healthy Bites',
      tags: ['healthiercookies', 'milletcookies', 'millets', 'madeinindia', 'makeinindia', 'natural', 'nopreservatives', 'cookies', 'healthierbites'],
      variants: {
        sizes: [
          {
            name: 'Box',
            value: '300g',
            price: 399
          },
          {
            name: 'Can',
            value: '500g',
            price: 599
          }
        ],
        flavors: [
          {
            name: 'Choco Crunch',
            value: 'choco-crunch',
            description: 'Rich chocolate chips for that irresistible crunch'
          },
          {
            name: 'Dry Fruit Crunch',
            value: 'dry-fruit-crunch',
            description: 'Loaded with premium dry fruits for a nutritious crunch'
          },
          {
            name: 'Coconut Crunch',
            value: 'coconut-crunch',
            description: 'Fresh coconut flakes for a tropical twist'
          },
          {
            name: 'Ajwain-Nutrition',
            value: 'ajwain-nutrition',
            description: 'Traditional ajwain flavor with digestive benefits'
          }
        ]
      },
      ingredients_benefits: {
        'Millets': [
          'Rich in Nutrients- Packed with iron, calcium, magnesium, and B vitamins—great for energy, bones, and overall wellness.',
          'High in Fiber- Aids digestion, supports gut health, and keeps you feeling full longer—perfect for weight management.',
          'Low Glycemic Index- Helps regulate blood sugar levels, making them diabetic-friendly.',
          'Gluten-Free- Naturally gluten-free, ideal for people with gluten intolerance or those choosing a gluten-free lifestyle.',
          'Supports Heart Health- The fiber, antioxidants, and healthy fats in millets help lower cholesterol and maintain healthy blood pressure.',
          'Good for Skin & Hair- Rich in amino acids and antioxidants that support healthy skin and hair.'
        ],
        'Flour': [],
        'Desi Ghee': [],
        'Sugar': [],
        'Milk': [],
        'Leavening Agents': [],
        'Additional Ingredients': ['Based on flavor variant selected'],
        'Salt & Permitted Flavours': []
      }
    },
    {
      id: 'zesty-munagaku-podi',
      name: 'Zesty Munagaku Podi',
      description: 'A nutritious powerhouse packed with flavour, our Munagaku Podi is made from sun-dried moringa leaves and a unique blend of traditional spices. Crafted using age-old methods and roasted to perfection, this aromatic podi pairs beautifully with hot rice and ghee, dosa, or idly. Made in small batches with 100% natural ingredients, it\'s rich in iron, calcium, and antioxidants—perfect for those seeking both taste and health. Add it to soups or sprinkle over salads and roasted veggies for a delicious, wholesome twist.',
      price: 135,
      image: '/images/munagakupodi/IMG_3.jpg',
      images: [
        '/images/munagakupodi/IMG_3.jpg',
        '/images/munagakupodi/IMG_1.jpg',
        '/images/munagakupodi/IMG_2.jpg',
        '/images/munagakupodi/IMG_4.jpg',
        '/images/munagakupodi/IMG_5.jpg',
        '/images/munagakupodi/IMG_6.jpg',
        '/images/munagakupodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'munagaku', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend'],
      size: '75gms',
      ingredients_benefits: {
        'Chana Dal': [
          'Rich in Protein: Great plant-based protein source, especially for vegetarians and vegans. Supports muscle growth and repair.',
          'High in Fiber: Promotes digestive health and regular bowel movements. Helps manage blood sugar levels by slowing down sugar absorption.'
        ],
        'Urad Dal': [
          'Excellent Source of Protein: Supports muscle development, tissue repair, and overall strength—especially valuable in vegetarian diets.',
          'Bone Health Booster: Rich in calcium, magnesium, and phosphorus, which are essential for maintaining strong bones and preventing conditions like osteoporosis.'
        ],
        'Coriander Seeds': [
          'Aid Digestion: Stimulate the production of digestive enzymes and juices. Help relieve bloating, gas, and indigestion.',
          'Regulate Blood Sugar: May help lower blood sugar levels by enhancing insulin function (supported by some studies). Often used in traditional remedies for diabetes management.'
        ],
        'Dried Red Chilli': [],
        'Drumstick Leaves (Dried)': [],
        'Curry Leaves': [],
        'Tamarind': [],
        'Cumin Seeds': [],
        'Garlic': [],
        'Salt': [],
        'Ghee': []
      }
    },
    {
      id: 'zingy-gongura-podi',
      name: 'Zingy Gongura Podi',
      description: 'Bold, tangy, and deeply rooted in tradition—our Zingy Gongura Podi captures the unmistakable flavour of sorrel leaves (gongura) blended with perfectly roasted spices. This guilt-free twist on the beloved gongura pachadi offers the same vibrant punch, minus the oil and preservatives. Enjoy it with hot rice and a spoon of ghee, or pair it with dosa and idly for an authentic touch. Handcrafted in small batches using heirloom recipes, this podi brings the soul of a traditional Andhra kitchen right to your plate.',
      price: 135,
      image: '/images/gongurapodi/IMG_5.jpg',
      images: [
        '/images/gongurapodi/IMG_5.jpg',
        '/images/gongurapodi/IMG_1.jpg',
        '/images/gongurapodi/IMG_2.jpg',
        '/images/gongurapodi/IMG_3.jpg',
        '/images/gongurapodi/IMG_4.jpg',
        '/images/gongurapodi/IMG_6.jpg',
        '/images/gongurapodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'gongura', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend'],
      size: '75 gms',
      ingredients_benefits: {
        'Gongura (Sorreal Leaves-Dried)': [
          'Rich in Iron: Excellent for combating anemia and improving red blood cell count, especially beneficial for women and vegetarians.',
          'High in Antioxidants: Contains polyphenols, flavonoids, and anthocyanins that help reduce oxidative stress and inflammation.'
        ],
        'Fenugreek Seeds': [
          'Help Regulate Blood Sugar: Rich in soluble fiber (galactomannan), which slows carbohydrate absorption.',
          'Shown to improve insulin sensitivity—beneficial for type 2 diabetics.'
        ],
        'Mustard Seeds': [
          'Rich in Antioxidants: Contain compounds like glucosinolates and selenium, which help fight oxidative stress and reduce inflammation.',
          'Promote Heart Health: Contain omega-3 fatty acids and magnesium, which support heart rhythm and reduce blood pressure.'
        ],
        'Dried Red Chilli': [],
        'Asafoetida (Hing)': [],
        'Red Chillie Powder': [],
        'Salt': [],
        'Garlic': []
      }
    },
    {
      id: 'earthy-beetroot-podi',
      name: 'Earthy Beetroot Podi',
      description: 'This vibrant beetroot podi is one of our best sellers and for good reason. Made using dehydrated beets to retain their rich colour and nutrients, it\'s blended with traditional spices to bring out a naturally earthy, slightly sweet, and savoury flavour. Packed with iron and fiber, this podi isn\'t just a hit with kids but also a wholesome option for adults looking to add a healthy twist to everyday meals. Enjoy it with rice and ghee, mix it into curd, or sprinkle over dosas, idlis, and even roti rolls for a flavourful boost. Handcrafted in small batches using heirloom methods and clean ingredients—no shortcuts, just authentic taste from our kitchen to yours.',
      price: 135,
      image: '/images/earthybeetrootpodi/IMG_1.jpg',
      images: [
        '/images/earthybeetrootpodi/IMG_1.jpg',
        '/images/earthybeetrootpodi/IMG_2.jpg',
        '/images/earthybeetrootpodi/IMG_3.jpg',
        '/images/earthybeetrootpodi/IMG_4.jpg',
        '/images/earthybeetrootpodi/IMG_5.jpg',
        '/images/earthybeetrootpodi/IMG_6.jpg',
        '/images/earthybeetrootpodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'beetrootpodi', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend'],
      size: '75gms',
      ingredients_benefits: {
        'Beetroot (dehydrated)': ['Supports Heart Health', 'Nitrates in beetroot help widen blood vessels, improving blood flow and lowering blood pressure, this can reduce the risk of heart disease and stroke.', 'Boosts Brain Function', 'Improved blood flow also benefits the brain—may enhance cognitive function and delay age-related decline.'],
        'Chana Dal': ['Rich in Protein: Great plant-based protein source, especially for vegetarians and vegans. Supports muscle growth and repair.', 'High in Fiber: Promotes digestive health and regular bowel movements. Helps manage blood sugar levels by slowing down sugar absorption.'],
        'Urad Dal': ['Excellent Source of Protein: Supports muscle development, tissue repair, and overall strength—especially valuable in vegetarian diets.', 'Bone Health Booster: Rich in calcium, magnesium, and phosphorus, which are essential for maintaining strong bones and preventing conditions like osteoporosis.'],
        'Peanuts': ['Improve heart health—rich in monounsaturated and polyunsaturated fats, which can help reduce bad (LDL) cholesterol.', 'Contain resveratrol and other antioxidants that support cardiovascular health.', 'Excellent plant-based protein source (about 25g of protein per 100g)—helps with muscle repair, growth, and satiety.'],
        'Coconut': [],
        'Garlic': [],
        'Salt': [],
        'Green Chilli': [],
        'Dried Red Chilli': [],
        'Curry Leaves': [],
        'Ginger': [],
        'Fenugreek Seeds': []
      }
    },
    {
      id: 'tarty-kakarkaya-podi',
      name: 'Tarty Kakarkaya Podi',
      description: 'Bittersweet and bold, our Tarty Kakarakaya Podi transforms Bitter Gourd (Kakarakaya) into a surprisingly delicious, flavour-packed experience. Roasted to perfection and blended with traditional spices, this podi captures the essence of Andhra-style home cooking—balancing the natural bitterness with a hint of tang for that signature bittersweet goodness. A great companion to hot rice and ghee, it also pairs beautifully with dosas or a side of curd. Handcrafted with care, this is comfort food done the old-fashioned way—wholesome, nostalgic, and undeniably tasty.',
      price: 135,
      image: '/images/tartypodi/IMG_1.jpg',
      images: [
        '/images/tartypodi/IMG_1.jpg',
        '/images/tartypodi/IMG_2.jpg',
        '/images/tartypodi/IMG_3.jpg',
        '/images/tartypodi/IMG_4.jpg',
        '/images/tartypodi/IMG_5.jpg',
        '/images/tartypodi/IMG_6.jpg',
        '/images/tartypodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend', 'Andhrastyle', 'bittergourdpodi', 'Kakarkaya Podi'],
      size: '75gms',
      ingredients_benefits: {
        'Bitter gourd': ['Helps Regulate Blood Sugar—contains charantin and polypeptide-p, compounds known to lower blood glucose levels. Used in traditional medicine to manage type 2 diabetes.', 'Supports Heart Health—helps lower bad cholesterol (LDL) and triglyceride levels. Its antioxidant content supports blood vessel health and reduces inflammation.'],
        'Tamarind': ['Rich in Antioxidants—contains polyphenols, flavonoids, and vitamin C that help neutralize free radicals. Reduces oxidative stress, which is linked to aging and chronic diseases.', 'Natural Laxative—high in tartaric acid and dietary fiber, which stimulate bowel movements. Traditionally used to relieve constipation naturally.'],
        'Jaggery': ['More Nutritious Than Refined Sugar—contains small amounts of iron, magnesium, potassium, calcium, and B vitamins.', 'Helps Prevent Anemia—a natural source of iron, which can help boost hemoglobin levels and prevent iron-deficiency anemia, especially beneficial for women and children.'],
        'Chana Dal': [],
        'Urad Dal': [],
        'Dried Red Chilli': [],
        'Peanuts': [],
        'Salt': [],
        'Cumin seeds': [],
        'Coriander Seeds': [],
        'Garlic': []
      }
    },
    {
      id: 'dreamy-carrot-podi',
      name: 'Dreamy Carrot Podi',
      description: 'Mild, naturally sweet, and full of homemade goodness—our Dreamy Carrot Podi is specially crafted for little tastebuds. Made with dehydrated carrots and gently roasted spices, it\'s the perfect blend of flavour and nutrition. Ideal for mixing with hot rice and ghee, spreading in soft rotis, or pairing with idlis and dosas. Handcrafted with care, this kid-approved podi makes mealtimes easier and tastier, with zero additives and 100% traditional care in every spoonful.',
      price: 135,
      image: '/images/dreamycarrotpodi/IMG_1.jpg',
      images: [
        '/images/dreamycarrotpodi/IMG_1.jpg',
        '/images/dreamycarrotpodi/IMG_2.jpg',
        '/images/dreamycarrotpodi/IMG_3.jpg',
        '/images/dreamycarrotpodi/IMG_4.jpg',
        '/images/dreamycarrotpodi/IMG_5.jpg',
        '/images/dreamycarrotpodi/IMG_6.jpg',
        '/images/dreamycarrotpodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend', 'Carrotpodi'],
      size: '75gms',
      ingredients_benefits: {
        'Carrot (dehydrated)': ['Supports Eye Health—rich in beta-carotene, which converts to vitamin A—essential for good vision and preventing night blindness. Also contains lutein, which may help protect against age-related macular degeneration.', 'High in Antioxidants—beta-carotene, lutein, and vitamin C help combat oxidative stress and support the immune system. May reduce the risk of chronic diseases like cancer and heart disease.'],
        'Chana Dal': ['Rich in Protein: Great plant-based protein source, especially for vegetarians and vegans. Supports muscle growth and repair.', 'High in Fiber: Promotes digestive health and regular bowel movements. Helps manage blood sugar levels by slowing down sugar absorption.'],
        'Urad Dal': ['Excellent Source of Protein: Supports muscle development, tissue repair, and overall strength—especially valuable in vegetarian diets.', 'Bone Health Booster: Rich in calcium, magnesium, and phosphorus, which are essential for maintaining strong bones and preventing conditions like osteoporosis.'],
        'Peanuts': ['Improve heart health—rich in monounsaturated and polyunsaturated fats, which can help reduce bad (LDL) cholesterol.', 'Contain resveratrol and other antioxidants that support cardiovascular health.', 'Excellent plant-based protein source (about 25g of protein per 100g)—helps with muscle repair, growth, and satiety.'],
        'Coconut': [],
        'Dried Red Chilli': [],
        'Green Chillie': [],
        'Curry Leaves': [],
        'Salt': [],
        'Garlic': [],
        'Fenugreek Seeds': []
      }
    },
    {
      id: 'toasty-flaxseed-podi',
      name: 'Toasty Flaxseed Podi',
      description: 'Slow-roasted to bring out its rich, nutty flavor, our Toasty Flaxseed Podi is a wholesome blend of goodness and tradition. Packed with the natural benefits of flaxseeds—rich in Omega-3s and fiber—this podi adds a healthy twist to your everyday meals. Mix it with hot rice and ghee, pair it with idlis and dosas, or use it as a tasty, nutrient-dense sprinkle on soft rotis or sandwiches. Handcrafted with care, this is a pantry essential for those who want both taste and wellness in every bite.',
      price: 135,
      image: '/images/toastyflaxseedpodi/IMG_1.jpg',
      images: [
        '/images/toastyflaxseedpodi/IMG_1.jpg',
        '/images/toastyflaxseedpodi/IMG_2.jpg',
        '/images/toastyflaxseedpodi/IMG_3.jpg',
        '/images/toastyflaxseedpodi/IMG_4.jpg',
        '/images/toastyflaxseedpodi/IMG_5.jpg',
        '/images/toastyflaxseedpodi/IMG_6.jpg',
        '/images/toastyflaxseedpodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend', 'seedpodi', 'Flaxseedpodi'],
      size: '75gms',
      ingredients_benefits: {
        'Flax seeds': ['Heart Health Support—rich in alpha-linolenic acid (ALA), a plant-based omega-3 fatty acid that helps reduce inflammation and lower the risk of heart disease. Helps reduce blood pressure, cholesterol, and triglyceride levels.'],
        'Sesame seeds': ['Supports Bone Health—exceptionally rich in calcium, magnesium, zinc, and phosphorus—key minerals for maintaining strong bones. Especially valuable for people at risk of osteoporosis.', 'Heart-Healthy Fats—high in unsaturated fats, including omega-6 fatty acids. Contain sesamin and sesamolin, lignans that help lower blood pressure and cholesterol levels.'],
        'Dried Red chilli': [],
        'Salt': []
      }
    },
    {
      id: 'tangy-karivepaku-podi',
      name: 'Tangy Karivepaku Podi',
      description: 'Made using age-old techniques and sun-dried curry leaves, our Tangy Karivepaku Podi is a fragrant, flavourful blend that celebrates the essence of South Indian kitchens. With a perfect balance of tang and spice, this podi pairs beautifully with hot rice and ghee, crispy dosas, or soft idlis. Handcrafted with care in small batches, it carries the wholesome taste of roasted lentils and curry leaves—bringing home that comforting, nostalgic flavour every time. A timeless, aromatic addition to your daily meals.',
      price: 135,
      image: '/images/tangypodi/IMG_1.jpg',
      images: [
        '/images/tangypodi/IMG_1.jpg',
        '/images/tangypodi/IMG_2.jpg',
        '/images/tangypodi/IMG_3.jpg',
        '/images/tangypodi/IMG_4.jpg',
        '/images/tangypodi/IMG_5.jpg',
        '/images/tangypodi/IMG_6.jpg',
        '/images/tangypodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend', 'curryleavespodi', 'karivepakukodi'],
      size: '75gms',
      ingredients_benefits: {
        'Dried curry leaves': ['Rich in Antioxidants—contain powerful antioxidants like linalool, caryophyllene, and carbazole alkaloids. Help protect the body from oxidative stress and reduce the risk of chronic diseases.', 'Promotes Hair Health—traditionally used to prevent hair fall, reduce dandruff, and even delay premature graying. Often applied as an oil or paste to nourish the scalp and strengthen hair roots.'],
        'Urad dal': ['Excellent Source of Protein: Supports muscle development, tissue repair, and overall strength—especially valuable in vegetarian diets.', 'Bone Health Booster: Rich in calcium, magnesium, and phosphorus, which are essential for maintaining strong bones and preventing conditions like osteoporosis.'],
        'Tamarind': ['Rich in Antioxidants—contains polyphenols, flavonoids, and vitamin C that help neutralize free radicals. Reduces oxidative stress, which is linked to aging and chronic diseases.', 'Natural Laxative—high in tartaric acid and dietary fiber, which stimulate bowel movements. Traditionally used to relieve constipation naturally.'],
        'Coriander seeds': [],
        'Salt': [],
        'Cumin seeds': [],
        'Dried Red Chilli': [],
        'Garlic': []
      }
    },
    {
      id: 'minty-pudina-podi',
      name: 'Minty Pudina Podi',
      description: 'Infused with the natural goodness of sundried mint leaves and carefully roasted spices, our Minty Pudina Podi offers a fresh, minty burst in every spoonful. Perfect with hot rice and ghee, delicious alongside dosa or idly, and great as a flavour kick in sandwiches or snacks. Handcrafted with care in small batches and ground using heirloom recipes and traditional techniques, this aromatic blend brings a refreshing twist to classic South Indian flavours—a thoughtful, flavourful addition to your everyday meals.',
      price: 135,
      image: '/images/mintypudinapodi/IMG_1.jpg',
      images: [
        '/images/mintypudinapodi/IMG_1.jpg',
        '/images/mintypudinapodi/IMG_2.jpg',
        '/images/mintypudinapodi/IMG_3.jpg',
        '/images/mintypudinapodi/IMG_4.jpg',
        '/images/mintypudinapodi/IMG_5.jpg',
        '/images/mintypudinapodi/IMG_6.jpg',
        '/images/mintypudinapodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend', 'mintypudina', 'mintypudinapodi'],
      size: '75gms',
      ingredients_benefits: {
        'Mint leaves (Dried)': [],
        'Tamarind': ['Rich in Antioxidants—contains polyphenols, flavonoids, and vitamin C that help neutralize free radicals. Reduces oxidative stress, which is linked to aging and chronic diseases.', 'Natural Laxative—high in tartaric acid and dietary fiber, which stimulate bowel movements. Traditionally used to relieve constipation naturally.'],
        'Urad Dal': ['Excellent Source of Protein: Supports muscle development, tissue repair, and overall strength—especially valuable in vegetarian diets.', 'Bone Health Booster: Rich in calcium, magnesium, and phosphorus, which are essential for maintaining strong bones and preventing conditions like osteoporosis.'],
        'Sesame Powder': ['Supports Bone Health—exceptionally rich in calcium, magnesium, zinc, and phosphorus—key minerals for maintaining strong bones. Especially valuable for people at risk of osteoporosis.', 'Heart-Healthy Fats—high in unsaturated fats, including omega-6 fatty acids. Contain sesamin and sesamolin, lignans that help lower blood pressure and cholesterol levels.'],
        'Salt': [],
        'Coriander Seeds': [],
        'Cumin seeds': [],
        'Mustard Seeds': [],
        'Fenugreek seeds': [],
        'Dried Red Chilli': [],
        'Turmeric': [],
        'Asafoetida (Hing)': []
      }
    },
    {
      id: 'kothimeera-tomato-podi',
      name: 'Kothimeera Tomato Podi',
      description: 'A vibrant blend that brings together the fresh aroma of coriander leaves and the natural tanginess of tomatoes—our Kothimeera Tomato Podi is a burst of flavor in every bite. Pair it with hot rice and ghee, enjoy it with dosa or idly, or use it to uplift your favourite snacks. Handcrafted with care using traditional methods and roasted spices, this podi adds a refreshing, mildly tangy twist to your everyday meals. Made in small batches to preserve taste and quality, it\'s a delicious tribute to home-style flavours and age-old recipes.',
      price: 135,
      image: '/images/kothipodi/Image_1.jpg',
      images: [
        '/images/kothipodi/Image_1.jpg',
        '/images/kothipodi/Image_2.jpg',
        '/images/kothipodi/Image_3.jpg',
        '/images/kothipodi/Image_4.jpg',
        '/images/kothipodi/Image_5.jpg',
        '/images/kothipodi/Image_6.jpg',
        '/images/kothipodi/Image_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend', 'tomatopodi', 'coriandertomatopodi'],
      size: '75gms',
      ingredients_benefits: {
        'Coriander Leaves': ['Packed with Antioxidants—rich in quercetin, terpinene, and tocopherols, which help neutralize free radicals. Protects the body from oxidative stress and slows down aging.', 'Supports Digestion—traditionally used to treat indigestion, bloating, and gas. Promotes the secretion of digestive enzymes and juices for smoother digestion.'],
        'Tomato (dehydrated)': ['Rich in Antioxidants (Especially Lycopene)—tomatoes are one of the best sources of lycopene, a powerful antioxidant that protects against cell damage, may reduce the risk of certain cancers (especially prostate, lung, and stomach), supports heart health and skin protection from UV damage.'],
        'Tamarind': ['Rich in Antioxidants—contains polyphenols, flavonoids, and vitamin C that help neutralize free radicals. Reduces oxidative stress, which is linked to aging and chronic diseases.', 'Natural Laxative—high in tartaric acid and dietary fiber, which stimulate bowel movements. Traditionally used to relieve constipation naturally.'],
        'Urad dal': [],
        'Dried Red Chilli': [],
        'Green Chilli': [],
        'Mustard Seeds': [],
        'Salt': [],
        'Fenugreek seeds': [],
        'Asafoetida (Hing)': []
      }
    },
    {
      id: 'herby-spice-podi',
      name: 'Herby Spice Podi',
      description: 'Crafted with aromatic oregano leaves, basil, black pepper, red chilli, and more, our Herby Spice Blend is a versatile, freshly ground seasoning that brings a burst of bold, herby flavour to any dish. Perfect for sprinkling over cheese toast, pasta, pizzas, or even soups and grilled veggies, this blend adds that perfect finishing touch to elevate your everyday meals. Handcrafted with care, made in small batches without any preservatives or additives—just pure herbs and spices, blended the traditional way. A pantry must-have for those who love flavour with a hint of flair.',
      price: 135,
      image: '/images/herbyspicepodi/IMG_1.jpg',
      images: [
        '/images/herbyspicepodi/IMG_1.jpg',
        '/images/herbyspicepodi/IMG_2.jpg',
        '/images/herbyspicepodi/IMG_3.jpg',
        '/images/herbyspicepodi/IMG_4.jpg',
        '/images/herbyspicepodi/IMG_5.jpg',
        '/images/herbyspicepodi/IMG_6.jpg',
        '/images/herbyspicepodi/IMG_7.jpg'
      ],
      category: 'Spice Blends',
      tags: ['spice', 'traditional', 'southindian', 'flavourful', 'seasoning', 'madeinindia', 'makeinindia', 'preservativefree', 'chemicalfree', 'podi', 'spiceblend', 'Herbyspicepodi', 'herbpodi'],
      size: '75gms',
      ingredients_benefits: {
        'Basil leaves (Dried)': ['Rich in Antioxidants—contain powerful compounds like eugenol, rosmarinic acid, and apigenin. Help combat oxidative stress, reducing the risk of chronic diseases and aging.'],
        'Pepper': ['Enhances Nutrient Absorption—piperine significantly boosts the bioavailability of nutrients like Curcumin (from turmeric), Vitamins A, C, B6, and selenium. Helps your body absorb and use nutrients more effectively.'],
        'Oregano leaves': ['Powerful Antioxidant Properties—rich in rosmarinic acid, thymol, and carvacrol, which neutralize free radicals. Help protect cells from oxidative damage, supporting overall health and aging defense.'],
        'Coriander seeds': [],
        'Red Chilli': [],
        'Salt': [],
        'Garlic': []
      }
    },
    {
      id: 'apple-chips',
      name: 'Apple Chips',
      description: 'Looking for a guilt-free snack option? Apple Chips by Healthy Grabz are here to satisfy your cravings while supporting your health. Made from 100% real apples, these chips are air-cooked to retain essential nutrients, making them a perfect choice for health-conscious individuals. Whether you\'re aiming for weight loss, heart health, or boosting immunity, our Apple Chips are packed with fiber and natural goodness to help you stay on track. With no added sugar or artificial preservatives, you can enjoy a pure, wholesome snack any time of the day. At Healthy Grabz, we combine ancient dehydration techniques with modern cooking methods to bring you snacks that are as tasty as they are nutritious. Perfect for office munching, school lunches, or post-workout refuels, Apple Chips are your go-to snack. Order your Apple Chips now and experience the delightful crunch of healthy living. Healthy Grabz – making snacking smarter and healthier every day!',
      price: 100,
      image: '/images/applechips/IMG_1.jpeg',
      images: [
        '/images/applechips/IMG_1.jpeg',
        '/images/applechips/IMG_2.png',
        '/images/applechips/IMG_3.jpg',
        '/images/applechips/IMG_4.jpg',
        '/images/applechips/IMG_5.png',
        '/images/applechips/IMG_6.png'
      ],
      category: 'Healthy Bites',
      tags: ['applechips', 'airfried', 'applechipswitholiveoil', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '20 gms',
      ingredients_benefits: {
        'Apples': [
          'Rich in Nutrients',
          'High in vitamin C, an antioxidant that supports immune health',
          'Contains potassium, which supports heart health',
          'Provides dietary fiber, especially in the skin, aiding digestion'
        ],
        'Olive Oil': [
          'Good for Heart Health',
          'Monounsaturated fats (mainly oleic acid) help reduce bad LDL cholesterol and raise good HDL cholesterol',
          'Rich in antioxidants like polyphenols, which reduce inflammation and oxidative stress in the arteries',
          'May help lower blood pressure and improve blood vessel function'
        ]
      }
    },
    {
      id: 'beetroot-chips',
      name: 'Beetroot Chips',
      description: 'Indulge in the natural goodness of HealthyGrabz Beetroot Chips in our convenient Big Pouch! Perfect for families or sharing, these crunchy, air-cooked delights are packed with heart-healthy nutrients, high in fiber, and low in calories. Made from 100% real beetroot, they\'re an excellent snack for weight management and boosting immunity. Ideal for health-conscious snackers, our big pouch ensures you never run out of this guilt-free indulgence. Grab your healthy snack today!',
      price: 100,
      image: '/images/beetrootchips/IMG_1.png',
      images: [
        '/images/beetrootchips/IMG_1.png',
        '/images/beetrootchips/IMG_2.jpg',
        '/images/beetrootchips/IMG_3.jpg',
        '/images/beetrootchips/IMG_4.png',
        '/images/beetrootchips/IMG_5.jpg',
        '/images/beetrootchips/IMG_6.png',
        '/images/beetrootchips/IMG_7.png',
        
      ],
      category: 'Healthy Bites',
      tags: ['beetrootchips', 'airfried', 'beetrootchipswitholiveoil', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '20 gms',
      ingredients_benefits: {
        'Beetroot': [
          'Rich in Nutrients',
          'High in fiber, folate (vitamin B9), manganese, potassium, iron, and vitamin C',
          'Low in calories but nutrient-dense',
          'Supports Heart Health',
          'Contains nitrates, which convert to nitric oxide and help relax blood vessels, lowering blood pressure',
          'May reduce the risk of heart disease and stroke'
        ],
        'Dry Ginger Powder': [
          'Aids Digestion',
          'Stimulates digestive enzymes and bile production',
          'Relieves bloating, gas, and indigestion',
          'Anti-Inflammatory and Pain Relief',
          'Contains potent anti-inflammatory compounds',
          'Effective in reducing joint pain, arthritis symptoms, and muscle soreness'
        ],
        'Dry Mango Powder': [],
        'Black Salt': [],
        'Pepper Powder': [],
        'Rock Salt': [],
        'Mint': [],
        'Cumin': []
      }
    },
    {
      id: 'bitter-gourd-chips',
      name: 'Bitter Gourd Chips',
      description: 'Bittergourd chips (also called bitter melon chips or karela chips) are a crunchy, savory snack made from thinly sliced bittergourd that\'s air-fried or baked. Despite their bitter taste, they\'re popular for their health benefits and unique flavor.',
      price: 100,
      image: '/images/bittergourd.jpg',
      images: [
        '/images/bittergourd.jpg'
      ],
      category: 'Healthy Bites',
      tags: ['bittergourdchips', 'airfried', 'bittergourdchipswitholiveoil', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '20gms',
      ingredients_benefits: {
        'Bitter Gourd': [
          'Helps Manage Diabetes',
          'Contains charantin, polypeptide-p, and vicine, which help lower blood sugar naturally',
          'Improves insulin sensitivity and glucose metabolism',
          'Often used as a natural remedy for type 2 diabetes'
        ]
      }
    },
    {
      id: 'bottle-gourd-chips',
      name: 'Bottle Gourd Chips',
      description: '100% Real Vegetable chips, seasoned with delicious seasonings and made using the Air Fried Process. These chips are prepared with Finger Licking Twangy Masala because, as we all know, enjoying the advantages of bottle gourd can be boring. These chips combine the health benefits of bottle gourd with deliciousness. They do not contain any artificial flavors or colors. These chips are absolutely oil free!',
      price: 100,
      image: '/images/bottlegourd.jpg',
      images: [
        '/images/bottlegourd.jpg',
      ],
      category: 'Healthy Bites',
      tags: ['bottlegourdchips', 'airfried', 'bottlegourdchipswitholiveoil', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '75gms',
      ingredients_benefits: {
        'Bottle Gourd': [
          'Hydrating and Cooling',
          'Composed of over 90% water, making it great for hydration and cooling the body—especially in summer',
          'Helps prevent heat strokes and excessive thirst',
          'Supports Heart Health',
          'Low in sodium and cholesterol',
          'Helps maintain healthy blood pressure and supports cardiovascular function'
        ],
        'Black Salt': [
          'Aids Digestion',
          'Stimulates bile production in the liver',
          'Helps relieve indigestion, bloating, and gas',
          'Commonly used in Ayurvedic digestive remedies',
          'Supports Heart Health',
          'Lower in sodium compared to regular table salt',
          'May help reduce water retention and control blood pressure (when used moderately)'
        ],
        'Dry Mango Powder': [],
        'Dry Ginger Powder': [],
        'Garlic Powder': [],
        'Olive Oil': []
      }
    },
    {
      id: 'carrot-chips',
      name: 'Carrot Chips',
      description: 'These crunchy Carrot Chips are baked instead of Deep Fried. These crunchy Vegetable Chips are a much healthier alternative to traditional potato chips and they are the best snacks for those who want to lose weight. They also are the best snacks for Diabetic Patients, aside from a healthy dose of vitamins A and C and fiber. Carrots contain antioxidants that may help reduce the risk of cancer and also improve your immune system and may also help in weight reduction. These chips are packed with flavour and healthy vitamins and have a fantastic crunch',
      price: 100,
      image: '/images/carrotchips/IMG_1.png',
      images: [
        '/images/carrotchips/IMG_1.png',
        '/images/carrotchips/IMG_2.jpeg',
        '/images/carrotchips/IMG_3.png',
        '/images/carrotchips/IMG_4.png'
      ],
      category: 'Healthy Bites',
      tags: ['carrotchips', 'baked', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '20gms',
      ingredients_benefits: {
        'Carrots': [
          'Rich in Nutrients- High in beta-carotene, which the body converts to vitamin A — important for eye health, immune function, and skin.',
          'Provide vitamin K1, potassium, fiber, and antioxidants.',
          'Low in Calories (When Baked)- A good snack option for those watching calorie intake, especially compared to traditional potato chips.',
          'Digestive Health- Carrots contain dietary fiber, which helps with digestion and maintaining a healthy gut.'
        ],
        'Black Salt': [
          'Aids Digestion. Black salt is commonly used in Ayurveda to improve digestion and relieve bloating, gas, and heartburn.',
          'It can stimulate bile production in the liver and help with the breakdown of food.'
        ],
        'Dry Mango Powder': [''],
        'Dry Ginger Powder': [''],
        'Garlic Powder': [''],
        'Olive Oil': ['']
      }
    },
    {
      id: 'cluster-bean-chips',
      name: 'Cluster Bean Chips',
      description: 'The dehydrated air-fried Cluster bean chips, lightly sprinkled with olive oil less than 0.1%, are a crunchy and delicious snack. They\'re rich in fiber, protein, and minerals, and a guilt-free alternative to traditional fried snacks. Conveniently ready to eat, they make a perfect on-the-go snack. Enjoy the natural flavours of Cluster beans with a touch of olive oil anytime.',
      price: 100,
      image: '/images/clusterbeanchips/IMG_1.png',
      images: [
        '/images/clusterbeanchips/IMG_1.png',
        '/images/clusterbeanchips/IMG_2.jpeg',
        '/images/clusterbeanchips/IMG_3.png',
        '/images/clusterbeanchips/IMG_4.png'
      ],
      category: 'Healthy Bites',
      tags: ['clusterbeanchips', 'airfried', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '20gms',
      ingredients_benefits: {
        'Cluster Bean': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and prevents constipation',
          'Helps regulate blood sugar levels by slowing the absorption of glucose — especially helpful for people with diabetes',
          'Supports Heart Health',
          'The fiber in cluster beans helps reduce bad cholesterol (LDL) levels',
          'Contains potassium, which helps manage blood pressure'
        ]
      }
    },
    {
      id: '52',
      name: 'Okra Chips',
      description: 'Discover the wholesome goodness of Healthy Grabz Okra (Bhindi) Chips, a perfect blend of nutrition and flavour! Made using ancient solar dehydration techniques and cutting-edge air cooking methods, these chips retain the natural nutrients of okra, ensuring a healthy and delicious snacking experience. Each crunchy bite is seasoned with our signature masala and olive oil, offering a guilt-free indulgence packed with health benefits. Rich in dietary fiber, these chips support digestion, weight management, and heart health. Their low glycemic index makes them an excellent choice for managing blood sugar levels, ideal for those monitoring their diabetes. Plus, the natural antioxidants in okra help boost immunity and combat free radicals. Whether you\'re on the go, at work, or simply craving a tasty treat, Healthy Grabz Okra Chips are the ultimate companion. They are gluten-free, free from artificial preservatives, and perfect for anyone seeking a healthier alternative to traditional fried snacks.',
      price: 100,
      image: '/images/okrachips/IMG_1.png',
      images: [
        '/images/okrachips/IMG_1.png',
        '/images/okrachips/IMG_2.jpg',
        '/images/okrachips/IMG_3.png',
        '/images/okrachips/IMG_4.png'
      ],
      category: 'Healthy Bites',
      tags: ['okrachips', 'airfried', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack', 'glutenfreechips'],
      size: '20gms',
      ingredients_benefits: {
        'Okra': [
          'Rich in Nutrients',
          'High in vitamin C, vitamin K, and folate',
          'Contains essential minerals like magnesium, potassium, and calcium',
          'Good source of fiber, especially mucilage, which supports digestion',
          'Supports Digestive Health',
          'High fiber content helps prevent constipation and promotes regular bowel movements',
          'Mucilage (a gel-like substance) helps ease gastrointestinal inflammation and can bind toxins'
        ]
      }
    },
    {
      id: '53',
      name: 'Orange Chips',
      description: 'Are you looking for a healthy snack that doesn\'t compromise on flavor? Meet Orange Healthy Chips – a deliciously nutritious option crafted to perfection! Packed with the goodness of natural ingredients, these chips are made using a unique combination of ancient solar dehydration techniques and modern air cooking methods. This innovative process ensures a crispy, flavourful snack with lower fat content and zero artificial additives. Infused with a zesty orange flavor, Orange Healthy Chips not only satisfy your cravings but also offer health benefits like heart support, weight management, and immune boosting. These chips are perfect for anyone seeking a guilt-free snack that\'s both convenient and wholesome. Whether you\'re a fitness enthusiast or a busy professional, Orange Healthy Chips make for an ideal snack-on-the-go. Add them to your cart today and indulge in a snack that\'s good for your taste buds and your health!',
      price: 110,
      image: '/images/orangechips/IMG_1.jpeg',
      images: [
        '/images/orangechips/IMG_1.jpeg',
        '/images/orangechips/IMG_2.webp',
        '/images/orangechips/IMG_3.png'
      ],
      category: 'Healthy Bites',
      tags: ['orangechips', 'airfried', 'sundriedchips', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack', 'glutenfreechips'],
      size: '20gms',
      ingredients_benefits: {
        'Orange': [
          'High in Vitamin C',
          'One of the best natural sources of vitamin C, which helps:',
          'Boost immunity',
          'Support collagen production for healthy skin',
          'Improve iron absorption',
          'Rich in Antioxidants',
          'Contains flavonoids and carotenoids (like beta-carotene), which help protect cells from damage by free radicals'
        ],
        'Olive Oil': [
          'Heart Health',
          'Rich in monounsaturated fats, particularly oleic acid, which helps reduce bad LDL cholesterol and may increase good HDL cholesterol',
          'Contains polyphenols that reduce inflammation and oxidative stress in the arteries',
          'Regular consumption is linked to a reduced risk of heart disease and stroke'
        ],
        'Salt': []
      }
    },
    {
      id: '54',
      name: 'Potato Chips',
      description: 'Made with high-quality ingredients and seasoned with a variety of savoury flavours, our potato chips are perfect for guilt-free snacking. Enjoy the perfect balance of crunch and taste with every bite, ideal for heart health, weight loss, and boosting immunity. Savour the goodness of these Potato Chips with no artificial additives and preservatives. for a healthier lifestyle. Try them today as a tastier snack that aligns with your health-conscious lifestyle!',
      price: 100,
      image: '/images/potatochips/IMG_1.jpeg',
      images: [
        '/images/potatochips/IMG_1.jpeg',
        '/images/potatochips/IMG_2.png',
        '/images/potatochips/IMG_3.png'
      ],
      category: 'Healthy Bites',
      tags: ['potatochips', 'airfried', 'sundriedchips', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '20gms',
      ingredients_benefits: {
        'Potato': [
          'Rich in Nutrients',
          'Good source of vitamin C, vitamin B6, potassium, and manganese',
          'Contain some iron, magnesium, and niacin',
          'High in Potassium',
          'More potassium than a banana!',
          'Helps regulate blood pressure and supports heart and muscle function'
        ]
      }
    },
    {
      id: '55',
      name: 'Sweet Potato Chips',
      description: 'Delicious sweet potato chips made from 100% real sweet potatoes. These air-cooked chips retain the natural sweetness and nutrients while providing a satisfying crunch. A perfect healthy snack option that\'s free from artificial flavors and preservatives.',
      price: 100,
      image: '/images/sweetpotatochips/IMG_1.png',
      images: [
        '/images/sweetpotatochips/IMG_1.png',
        '/images/sweetpotatochips/IMG_2.jpeg',
        '/images/sweetpotatochips/IMG_3.png',
        '/images/sweetpotatochips/IMG_4.png'
      ],
      category: 'Healthy Bites',
      tags: ['sweetpotatochips', 'airfried', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '30gms',
      ingredients_benefits: {
        'Sweet Potato': [
          'Rich in Nutrients',
          'Excellent source of vitamin A (as beta-carotene), which supports vision, skin, and immune health',
          'Good amounts of vitamin C, vitamin B6, potassium, manganese, and fiber'
        ],
        'Rock Salt': [
          'Rich in Trace Minerals',
          'Contains minerals like magnesium, calcium, potassium, and iron (unlike heavily refined table salt)',
          'These help support muscle function, bone health, and electrolyte balance'
        ],
        'Black Salt': [
          'Aids Digestion',
          'Traditionally used to stimulate digestion and relieve issues like:',
          'Indigestion',
          'Bloating',
          'Gas',
          'In Ayurveda, it\'s considered a digestive enhancer and is often added in digestive churan (powders) and drinks'
        ],
        'Red Chilly Powder': [],
        'Turmeric Powder': [],
        'Coriander Powder': [],
        'Cumin Powder': [],
        'Black Pepper Powder': [],
        'Cinnamon Powder': [],
        'Dry Ginger Powder': [],
        'Garlic Powder': [],
        'Dry Mango Powder': []
      }
    },
    {
      id: '56',
      name: 'Root Vegetable Chips',
      description: 'This Jar contains root vegetable chips (such as Beetroot, Potato, Sweet Potato, Yam). Vegetables are dehydrated, airfried and sprinkled with Olive Oil in the end. To satisfy crunchy cravings while still staying on track, everybody should consider oil-free options such as this. This is a guilt-free munching option that won\'t derail anybody\'s fitness progress.',
      price: 100,
      image: '/images/rootvegetablechips/IMG_1.png',
      images: [
        '/images/rootvegetablechips/IMG_1.png',
        '/images/rootvegetablechips/IMG_2.png'
      ],
      category: 'Healthy Bites',
      tags: ['rootvegetablechips', 'airfried', 'sundriedchips', 'nochemicals', 'nopreservatives', 'noartificialflavours', 'healthiersnack', 'healthierchips', 'gotosnack'],
      size: '20gms',
      ingredients_benefits: {
        'Sweet Potato': [
          'Rich in Nutrients',
          'Excellent source of vitamin A (as beta-carotene), which supports vision, skin, and immune health',
          'Good amounts of vitamin C, vitamin B6, potassium, manganese, and fiber'
        ],
        'Potato': [
          'Rich in Nutrients',
          'Good source of:',
          'Vitamin C – supports immunity',
          'Vitamin B6 – important for brain and metabolism',
          'Potassium – helps regulate blood pressure',
          'Iron and magnesium in smaller amounts'
        ],
        'Beetroot': [
          'Boosts Blood Flow and Lowers Blood Pressure',
          'Rich in nitrates, which the body converts into nitric oxide—a compound that relaxes and widens blood vessels, improving circulation and reducing blood pressure'
        ],
        'Black Salt': [],
        'Dry Mango Powder': [],
        'Dry Ginger Powder': [],
        'Olive Oil': []
      }
    },
    {
      id: '57',
      name: 'Organic Fresh Farm Cashews',
      description: 'Deliciously Nutty Flavour: Enjoy the rich, nutty taste of our whole cashews, known for their firm texture and satisfying crunch. Great Quality: These cashews are organically grown and carefully selected from a family owned farm in Ratnagiri. Freshness Preserved: Packed in food-safe materials, our cashews retain their delightful flavour and crunch. Plus they are hygienically processed in facilities adhering to strict food safety standards. Optimal Storage: To maintain freshness, store cashews in a cool, dry place in an airtight container. For extended shelf life, refrigeration after opening is recommended. Convenient Snack: Whether at home, work, school, or on-the-go, these cashews offer a delicious, quick snack option that fits any occasion. Appealing Flavour: With a flavour that is tasty for both adults and children, these cashews are a great snack for the whole family.',
      category: 'Nuts and Seeds',
      tags: ['farmcashews', 'freshcashews', 'nuts', 'bettercashews', 'farmtofork', 'healthier', 'healthiersnack', 'healthiernuts', 'gotosnack'],
      size: '250 gms',
      image: '/images/cashewspics/Cashews.jpg',
      images: [
        '/images/cashewspics/Cashews.jpg',
        '/images/cashewspics/Split Cashews.jpg'
        
      ],
      price: 325,
      variants: {
        sizes: [
          { name: 'Broken', value: 'Broken', price: 325 },
          { name: 'Split', value: 'Split', price: 355 },
          { name: 'Small', value: 'Small', price: 385 },
          { name: 'Medium', value: 'Medium', price: 405 },
          { name: 'Large', value: 'Large', price: 455 },
          { name: 'Jumbo', value: 'Jumbo', price: 510 },
        ]
      },
      ingredients_benefits: {
        'Nutrient Dense': [
          'Rich in healthy fats (especially monounsaturated fats)',
          'High in plant-based protein',
          'Good source of essential minerals like magnesium, copper, zinc, and iron',
          'Contain B vitamins, including B6 and folate'
        ],
        'Good for Heart Health': [
          'The healthy fats in cashews can help lower bad LDL cholesterol and raise good HDL cholesterol, supporting cardiovascular health.',
          'Magnesium in Cashews supports healthy blood pressure and normal heart rhythms.'
        ]
      }
    },
    {
      id: '58',
      name: 'Methi Khakhras',
      description: 'Methi Khakhra is a traditional Indian snack originating from Gujarat, made by roasting thin, crispy discs of whole wheat dough flavored with fenugreek leaves (Methi) and spices. It\'s a popular choice for health-conscious eaters and is often enjoyed with tea, chutney, or yogurt. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhraspics/IMG_1.png',
      images: ['/images/khakhraspics/IMG_1.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Spices and Condiments': [
          'Methi Powder',
          'Turmeric Powder',
          'Chilly Powder',
          'Kasuri Methi'
        ]
      }
    },
    {
      id: 'masala-khakhra',
      name: 'Masala Khakhra',
      description: 'Masala Khakhras are a spicy, savoury variation of the traditional Gujarati khakhra—thin, roasted flatbreads made from whole wheat flour. These are flavoured with a blend of Indian spices, making them a flavourful and crunchy snack that\'s both healthy and tasty. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhraspics/IMG_2.png',
      images: ['/images/khakhraspics/IMG_2.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'masalakhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Iodized Salt': [],
        'Ajwain Powder': [],
        'Chilli Powder': [],
        'Turmeric Powder': [],
        'Rice Bran Oil': []
      }
    },
    {
      id: 'jeera-khakhra',
      name: 'Jeera Khakhra',
      description: 'Jeera Khakhra is a simple yet flavourful Indian snack made with whole wheat flour and cumin seeds (jeera). It\'s thin, crispy, and roasted—not fried—making it a light, healthy option for snacking. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhraspics/IMG_3.png',
      images: ['/images/khakhraspics/IMG_3.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'jeerakhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Spices and condiments': [
          'Cumin Powder'
        ]
      }
    },
    {
      id: 'ajwain-khakhra',
      name: 'Ajwain Khakhra',
      description: 'Ajwain Khakhra is a crisp, roasted Indian flatbread snack infused with Ajwain (Carom seeds), which give it a unique, slightly bitter, aromatic flavor and a range of digestive benefits. Like other khakhras, it\'s made using whole wheat flour, making it a wholesome and light snack. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhraspics/IMG_4.png',
      images: ['/images/khakhraspics/IMG_4.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'ajwainkhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Spices and condiments': [
          'Turmeric Powder',
          'Carom Seeds'
        ]
      }
    },
    {
      id: 'plain-khakhra',
      name: 'Plain Khakhra',
      description: 'Plain Khakhra is the most basic and traditional form of khakhra—a thin, crisp, roasted flatbread made primarily from whole wheat flour, with minimal spices or flavorings. It\'s a staple Gujarati snack known for its simplicity, versatility, and health benefits. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhraspics/IMG_5.png',
      images: ['/images/khakhraspics/IMG_5.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'plainkhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Minimal Spices': [],
        'Iodized Salt': [],
        'Rice Bran Oil': []
      }
    },
    {
      id: 'ragi-khakhra',
      name: 'Ragi Khakhra',
      description: 'Ragi Khakhras are a healthy, crispy Indian snack made from ragi flour (finger millet flour). They\'re a nutritious twist on the traditional wheat khakhra, offering benefits like being gluten-free, high in calcium, fiber, and iron. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras2/IMG_6.png',
      images: ['/images/khakhras2/IMG_6.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'Ragikhakhra', 'Glutenfreekhakhra'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Spices': [],
        'Iodized Salt': [],
        'Chilli Powder': [],
        'Rice Bran Oil': []
      }
    },
    {
      id: 'bajri-khakhra',
      name: 'Bajri Khakhra',
      description: 'Bajri Khakhras (Pearl Millet Khakhras) are another nutritious and crispy Indian snack, especially popular in Gujarati cuisine. Made using Bajra (Pearl Millet) flour, they\'re rich in fiber, iron, and essential minerals, and are great for winter or general digestive health. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras2/IMG_7.png',
      images: ['/images/khakhras2/IMG_7.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'bajrikhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Sugar': [],
        'Spices and condiments': [
          'Chilli Powder',
          'Turmeric Powder'
        ]
      }
    },
    {
      id: 'palak-khakhra',
      name: 'Palak Khakhra',
      description: 'Palak Khakhra (Spinach Khakhra) is a flavourful, crispy Indian flatbread made with wheat flour and spinach puree, spiced and roasted until crisp. It\'s a healthy snack, especially great for kids or anyone looking to sneak more greens into their diet. NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras2/IMG_8.png',
      images: ['/images/khakhras2/IMG_8.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'palakkhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Spinach Puree': [],
        'Spices': [],
        'Iodized Salt': [],
        'Rice Bran Oil': []
      }
    },
    {
      id: 'kothmir-marcha-khakhra',
      name: 'Kothmir Marcha Khakhra',
      description: 'Kothmir Marcha (also known as Dhaniya Marcha) is a spicy and flavourful Gujarati-style green chili and coriander stir-fry. It\'s typically served as a side dish or condiment with theplas, khakhras, or even dal-rice. Kothmir Marcha flavoured Khakhras are spicier and unique in their taste and blend. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras2/IMG_9.png',
      images: ['/images/khakhras2/IMG_9.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'kothmirmarchakhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Spices and condiments': [
          'Coriander Leaves',
          'Green Chilli'
        ]
      }
    },
    {
      id: 'mint-khakhra',
      name: 'Mint (Pudina) Khakhra',
      description: 'Mint Khakhra (Pudina Khakhra) is a crispy, aromatic snack made by infusing fresh or dried mint leaves into traditional khakhra dough. It\'s refreshing, light, and perfect as a guilt-free snack with tea or yogurt. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras2/IMG_10.png',
      images: ['/images/khakhras2/IMG_10.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'mintkhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': [
          'High in Dietary Fiber',
          'Promotes healthy digestion and helps prevent constipation',
          'Helps you feel full longer, which can assist in weight management'
        ],
        'Black Chickpea Flour': [
          'High in Protein',
          'Excellent plant-based protein source, supporting muscle repair and growth',
          'Ideal for vegetarians, vegans, and those reducing meat consumption'
        ],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Sugar': [],
        'Spices and condiments': [
          'Mint Powder',
          'Chaat Masala',
          'Chilli Powder'
        ]
      }
    },
    {
      id: 'chocolate-khakhra',
      name: 'Chocolate Khakhra',
      description: 'Chocolate Khakhra is a fusion snack that combines the traditional crispy Gujarati khakhra (a thin, crunchy flatbread usually made from whole wheat flour) with chocolate for a sweet twist. It\'s a relatively modern innovation in Indian snacks, popular among kids and adventurous food lovers. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras3/IMG_11.png',
      images: ['/images/khakhras3/IMG_11.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'chocolatekhakhra', 'sweetkhakhra'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Cocoa Beans': [],
        'Sugar': [],
        'Cocoa Butter': []
      }
    },
    {
      id: 'jiralu-khakhra',
      name: 'Jiralu Khakhra',
      description: 'Jiralu Khakhra is a classic Gujarati snack that features khakhra seasoned with \'jiralu\', a tangy, spicy, and slightly salty spice mix that\'s very popular in Western India. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras3/IMG_12.png',
      images: ['/images/khakhras3/IMG_12.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'jiralukhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Rock Salt': [],
        'Spices and condiments': ['Turmeric powder', 'Cumin powder', 'Coriander seeds', 'Aamchur powder']
      }
    },
    {
      id: 'chat-masala-khakhra',
      name: 'Chat Masala Khakhra',
      description: 'Chat Masala Khakhra is another delicious Indian fusion snack where traditional khakhra is flavoured with chat masala—a tangy, spicy, and aromatic North Indian spice blend often used on street foods like chaat, fruit salads, or pakoras. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras3/IMG_13.png',
      images: ['/images/khakhras3/IMG_13.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'chatmasalakhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Spices and condiments': ['chat masala']
      }
    },
    {
      id: 'panipuri-khakhra',
      name: 'Panipuri Khakhra',
      description: 'Panipuri Khakhra is a fun and flavorful twist on traditional khakhra that brings the zesty, tangy, and spicy taste of panipuri (golgappa) into a crispy, portable snack format. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras3/IMG_14.png',
      images: ['/images/khakhras3/IMG_14.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'panipurikhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Sugar': [],
        'Spices and condiments': ['Panipuri Masala']
      }
    },
    {
      id: 'achar-khakhra',
      name: 'Achar Khakhra',
      description: 'Achar Khakhra (or Achari Khakhra) is a savoury, tangy, and mildly spicy version of khakhra that mimics the flavour of traditional Indian pickle (achar)—especially mango or mixed vegetable pickles. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras3/IMG_15.png',
      images: ['/images/khakhras3/IMG_15.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'acharkhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized salt': [],
        'Spices and condiments': ['Achar', 'mustard seeds', 'Fenugreek seeds', 'chilli powder']
      }
    },
    {
      id: 'maggi-khakhra',
      name: 'Maggi Khakhra',
      description: 'Maggi Khakhra is a fun and modern fusion snack that combines the crispiness of traditional khakhra with the iconic, savory taste of Maggi noodles masala—a nostalgic favorite across India. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras4/IMG_16.png',
      images: ['/images/khakhras4/IMG_16.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'maggikhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Spices and Condiments': ['Maggi Mania', 'Turmeric Powder']
      }
    },
    {
      id: 'cheese-garlic-khakhra',
      name: 'Cheese Garlic Khakhra',
      description: 'Cheese Garlic Khakhra is a deliciously modern and indulgent khakhra flavour that blends the crisp, roasted base of traditional khakhra with the rich taste of cheese and the bold punch of garlic. It\'s perfect for snack lovers who enjoy savoury, cheesy treats with an Indian twist. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras4/IMG_17.png',
      images: ['/images/khakhras4/IMG_17.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'cheesegarlickhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Sugar': [],
        'Spices and Condiments': ['Cheese Masala', 'Garlic Powder', 'Chilli Powder']
      }
    },
    {
      id: 'manchurian-khakhra',
      name: 'Manchurian Khakhra',
      description: 'Manchurian Khakhra is a bold Indo-Chinese twist on traditional khakhra, combining the crispy texture of this Gujarati snack with the spicy, tangy, and umami flavors of vegetable or Gobi Manchurian—a street food favorite across India. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras4/IMG_18.png',
      images: ['/images/khakhras4/IMG_18.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'manchuriankhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Sugar': [],
        'Spices and condiments': ['Manchurian Powder', 'Chilli Powder']
      }
    },
    {
      id: 'peri-peri-khakhra',
      name: 'Peri Peri Khakhra',
      description: 'Peri Peri Khakhra is a fiery, flavourful fusion snack that combines the crunchy texture of khakhra with the bold, spicy, and slightly tangy Peri Peri (Piri Piri) seasoning—originally inspired by African-Portuguese flavours and popularized by many restaurant brands also. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras4/IMG_19.png',
      images: ['/images/khakhras4/IMG_19.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'Periperikhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized salt': [],
        'Sugar': [],
        'Spices and condiments': ['Peri Peri', 'Cheese Tangy Tomato', 'Chilli Powder', 'Chilli Flakes']
      }
    },
    {
      id: 'cream-and-onion-khakhra',
      name: 'Cream and Onion Khakhra',
      description: 'Cream and Onion Khakhra is a tasty fusion snack inspired by the popular \'sour cream and onion\' flavour found in Western chips and crisps, adapted to the Indian palate through the crisp and wholesome format of khakhra. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras4/IMG_20.png',
      images: ['/images/khakhras4/IMG_20.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'Creamandonionkhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized salt': [],
        'Sugar': [],
        'Spices and condiments': ['Cream and Onion Masala']
      }
    },
    {
      id: 'farali-khakhra',
      name: 'Farali Khakhra',
      description: 'Farali Khakhra is a type of crispy Indian snack made specifically for fasting (or vrat) days. It\'s similar to regular khakhra (a thin, roasted flatbread), but made with ingredients that are allowed during Hindu fasts. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras5/IMG_21.png',
      images: ['/images/khakhras5/IMG_21.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'faralikhakhras', 'Glutenfreekhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Barnyard Millet Flour (Bhagar Flour)': [
          'Gluten-Free: Ideal for people with gluten intolerance or celiac disease, as it doesn\'t contain wheat or gluten proteins.',
          'High in Fiber: Aids in digestion, prevents constipation, and helps regulate bowel movements.'
        ],
        'Water Chestnut Flour (Singoda Flour)': [
          'Gluten-Free: A safe, nutritious alternative for people with gluten intolerance or celiac disease.',
          'Rich in Fiber: Aids digestion, promotes gut health, and helps relieve constipation.'
        ],
        'Amaranth Flour': [
          'Gluten-Free: Safe for people with gluten intolerance or celiac disease.',
          'High in Protein: One of the few plant-based flours that contains all nine essential amino acids, especially lysine, which is rare in grains.'
        ],
        'Rock Salt': [],
        'Cumin Powder': [],
        'Green Chilli': [],
        "Rice Bran Oil": []
      }
    },
    {
      id: 'mung-khakhra',
      name: 'Mung Khakhra',
      description: 'Moong Khakhra (or mung khakhra) is a crispy, savory Indian snack made from moong dal (split green gram) and whole wheat flour, similar in texture to a cracker or thin flatbread. It\'s a healthier, protein-rich variation of traditional khakhra, popular as a tea-time snack or a light meal option. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/khakhras5/IMG_22.png',
      images: ['/images/khakhras5/IMG_22.png'],
      category: 'Healthy Bites',
      tags: ['madeinindia', 'snacks', 'betterkhakhras', 'nopalmoil', 'healthier', 'healthierkhakhra', 'healthiersnack', 'gotosnack', 'mungkhakhras', 'moongkhakhras', 'Glutenfreekhakhras'],
      size: '200 gms',
      ingredients_benefits: {
        'Wheat Flour': ['High in Dietary Fiber', 'Promotes healthy digestion and helps prevent constipation', 'Helps you feel full longer, which can assist in weight management'],
        'Black Chickpea Flour': ['High in Protein', 'Excellent plant-based protein source, supporting muscle repair and growth', 'Ideal for vegetarians, vegans, and those reducing meat consumption'],
        'Peanut Flour': [],
        'Rice Bran Oil': [],
        'Iodized Salt': [],
        'Spices and condiments': ['Turmeric Powder', 'Chilli Powder']
      }
    },
    {
      id: 'makai-khakhra',
      name: "Makai Khakhra",
      description: "Makai Khakhra is a delicious variation of traditional khakhra that incorporates corn flour (makai flour), giving it a unique texture and flavour. It's a perfect gluten-free alternative to the classic wheat-based khakhra, while still maintaining that crispy and crunchy goodness. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 150,
      image: "/images/khakhras6/IMG_26.png",
      images: ["/images/khakhras6/IMG_26.png"],
      category: "Healthy Bites",
      tags: ["madeinindia", "snacks", "betterkhakhras", "nopalmoil", "healthier", "healthierkhakhra", "healthiersnack", "gotosnack", "makaikhakhras", "Glutenfreekhakhras"],
      size: "200 gms",
      ingredients_benefits: {
        "Corn Flour (Makai Flour)": [
          "Gluten-Free: Corn flour is naturally gluten-free, making it an excellent alternative for those with celiac disease or gluten intolerance. It can be used to prepare gluten-free bread, muffins, and other baked goods.",
          "Rich in Carbohydrates: Corn flour is high in complex carbohydrates, providing a slow-release source of energy. It helps maintain blood sugar levels and can be a good energy booster for active individuals."
        ],
        "Gram Flour (Chana Dal Flour)": [
          "Rich in Protein: Gram flour is an excellent source of plant-based protein, making it a great addition to vegetarian and vegan diets. Protein is essential for muscle growth, repair, and overall body function.",
          "High in Fiber: It is a good source of dietary fiber, which aids in digestion, prevents constipation, and helps maintain a healthy gut. Fiber also helps in lowering cholesterol levels and supports heart health."
        ],
        "Black Gram Flour (Urad Flour)": [],
        "Chilli Powder": [],
        "Iodized Salt": [],
        "Turmeric Powder": [],
        "Rice Bran Oil": []
      }
    },
    {
      id: 'dosa-khakhra',
      name: "Dosa Khakhra",
      description: "Dosa Khakhra is an innovative fusion snack that combines the crispy texture of traditional khakhra with the flavors of dosa, a popular South Indian crepe made from fermented rice and urad dal batter. This unique snack brings together the delicious spices of dosa and the satisfying crunch of khakhra. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 150,
      image: "/images/khakhras6/IMG_27.png",
      images: ["/images/khakhras6/IMG_27.png"],
      category: "Healthy Bites",
      tags: ["madeinindia", "snacks", "betterkhakhras", "nopalmoil", "healthier", "healthierkhakhra", "healthiersnack", "gotosnack", "dosakhakhras", "Glutenfreekhakhras"],
      size: "200 gms",
      ingredients_benefits: {
        "Rice Flour": [
          "Gluten-Free: Rice flour is naturally gluten-free, making it an excellent option for individuals with celiac disease or those who follow a gluten-free diet. It can be used as a substitute for wheat flour in many recipes, such as bread, pancakes, cakes, and more.",
          "Rich in Carbohydrates: Rice flour is a great source of complex carbohydrates, providing the body with a steady release of energy. It is particularly beneficial for individuals who need sustained energy throughout the day."
        ],
        "Black Gram (Urad)": [
          "High in Protein: Black gram is an excellent source of plant-based protein, making it a vital food for vegetarians and vegans. It supports muscle repair, growth, and overall body functions, while being a great alternative to meat for protein intake.",
          "Rich in Fiber: The high fiber content in black gram promotes digestive health. It helps regulate bowel movements, prevent constipation, and maintain a healthy gut. Fiber also helps in controlling cholesterol levels and promotes heart health."
        ],
        "Sooji": [],
        "Citric Acid": [],
        "Iodized Salt": [],
        "Rice Bran Oil": []
      }
    },
    {
      id: 'ratlami-khakhra',
      name: "Ratlami Khakhra",
      description: "Ratlami Khakhra is a flavorful twist on the traditional khakhra, inspired by the spicy and aromatic Ratlami sev from Ratlam, a city in Madhya Pradesh, India. Ratlami sev is known for its bold, tangy, and spicy flavors, often made with carom seeds (ajwain), cumin, and black pepper, which give it a distinct kick. When combined with the crisp texture of khakhra, you get a savory and crunchy snack that's full of flavor. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 150,
      image: "/images/khakhras6/IMG_28.png",
      images: ["/images/khakhras6/IMG_28.png"],
      category: "Healthy Bites",
      tags: ["madeinindia", "snacks", "betterkhakhras", "nopalmoil", "healthier", "healthierkhakhra", "healthiersnack", "gotosnack", "ratlamikhakhras", "glutenfreekhakhras"],
      size: "200 gms",
      ingredients_benefits: {
        "Black Chick Peas": [
          "High in Protein: Black chickpeas are an excellent source of plant-based protein, making them a great choice for vegetarians and vegans. Protein is essential for muscle repair, immune function, and overall body health.",
          "Rich in Fiber: Black chickpeas are high in dietary fiber, which is beneficial for digestion. It promotes regular bowel movements, prevents constipation, and helps maintain a healthy gut microbiome. Fiber also helps lower bad cholesterol and improves heart health."
        ],
        "Carrom Seeds (Ajwain)": [
          "Aid Digestion: Carrom seeds are well-known for their digestive properties. They stimulate the production of gastric juices, which helps in digesting food efficiently. They are commonly used to relieve issues like bloating, indigestion, gas, and constipation. Ajwain is also believed to improve appetite and reduce discomfort after heavy meals."
        ],
        "Iodized Salt": [],
        "Red Chili Powder": [],
        "Turmeric Powder": [],
        "Garam Masala (Cinnamon, Clove, Cardamom, Bay Leaves, Black Pepper, Nutmeg, Mace)": []
      }
    },
    {
      id: 'adad-mari-khakhra',
      name: "Adad Mari Khakhra",
      description: "Adad Mari Khakhra is a variation of the traditional khakhra, incorporating Adad Dal (black lentils) and Pepper (Mari) for a spicy, crunchy, and nutritious snack. Adad dal is rich in protein, fiber, and essential nutrients, while the black pepper adds heat and digestive benefits, making this khakhra both delicious and healthy. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 150,
      image: "/images/khakhras6/IMG_29.png",
      images: ["/images/khakhras6/IMG_29.png"],
      category: "Healthy Bites",
      tags: ["madeinindia", "snacks", "betterkhakhras", "nopalmoil", "healthier", "healthierkhakhra", "healthiersnack", "gotosnack", "adadmarikhakhra", "Glutenfreekhakhra"],
      size: "200 gms",
      ingredients_benefits: {
        "Black Gram Flour (Urad Flour)": [
          "Protein: It is an excellent source of plant-based protein, making it a great choice for vegetarians and vegans.",
          "Fiber: Black gram flour is high in dietary fiber, which is important for digestive health and maintaining stable blood sugar levels."
        ],
        "Black Pepper": [
          "Pepper is known to stimulate the production of digestive enzymes, which can help improve digestion and absorption of nutrients. It also has carminative properties, meaning it helps relieve gas, bloating, and indigestion.",
          "Black pepper is packed with antioxidants that help fight free radicals in the body. These free radicals are unstable molecules that can cause damage to cells, contributing to aging and various diseases, including heart disease and cancer."
        ],
        "Iodized Salt": [],
        "Asafoetida": [],
        "Rice Bran Oil": []
      }
    },
    {
      id: 'juvar-khakhra',
      name: "Juvar Khakhra",
      description: "Super Seeds Khakhra is a nutritious twist on the traditional khakhra, incorporating a variety of super seeds into the recipe. Super seeds are nutrient-dense and rich in healthy fats, fiber, protein, vitamins, and minerals. Adding them to khakhra enhances both its health benefits and its flavour. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 150,
      image: "/images/khakhras6/IMG_30.png",
      images: ["/images/khakhras6/IMG_30.png"],
      category: "Healthy Bites",
      tags: ["madeinindia", "snacks", "betterkhakhras", "nopalmoil", "healthier", "healthierkhakhra", "healthiersnack", "gotosnack", "seedskhakhras", "Glutenfreekhakhras"],
      size: "200 gms",
      ingredients_benefits: {
        "Green Gram Flour (Mung)": [
          "High in Protein: Green gram flour is an excellent source of plant-based protein, which is essential for muscle growth, tissue repair, and immune system support. It's particularly beneficial for vegetarians and vegans.",
          "Rich in Fiber: Green gram flour is high in dietary fiber, which aids in proper digestion, prevents constipation, and supports gut health. It also helps in regulating blood sugar levels and lowering cholesterol."
        ],
        "Sorghum Flour (Juvar Flour)": [
          "Gluten-Free: Sorghum flour is naturally gluten-free, making it a great choice for people with celiac disease, gluten intolerance, or anyone following a gluten-free diet. It can be used to replace wheat flour in various recipes without affecting taste or texture significantly.",
          "High in Fiber: Sorghum flour is an excellent source of dietary fiber, which supports digestive health by promoting regular bowel movements and preventing constipation. Fiber also helps lower cholesterol levels, regulates blood sugar, and aids in weight management."
        ],
        "Black Chickpeas Flour": [],
        "Sunflower Seeds Flour": [],
        "Pumpkin Seeds Flour": [],
        "Finger Millet Flour (Ragi Flour)": [],
        "Chia Seeds": [],
        "Sesame Seeds": [],
        "Flax Seeds": [],
        "Quinoa Flour": [],
        "Iodized Salt": [],
        "Green Chilli": [],
        "Ginger": [],
        "Rice Bran Oil": []
      }
    },
    {
      id: 'moringa-khakhra',
      name: "Moringa Khakhra",
      description: "Moringa Khakhra is a healthy and nutritious variation of the traditional khakhra, made by incorporating moringa leaves (known as drumstick leaves) into the dough. Moringa is packed with essential nutrients like vitamins A, C, and E, iron, calcium, and protein, making it a superfood that offers numerous health benefits. Adding moringa to khakhra not only enhances its nutritional profile but also adds a unique flavour and a vibrant green colour to the crispy snack. These khakhras have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 150,
      image: "/images/khakhras6/IMG_31.png",
      images: ["/images/khakhras6/IMG_31.png"],
      category: "Healthy Bites",
      tags: ["madeinindia", "snacks", "betterkhakhras", "nopalmoil", "healthier", "healthierkhakhra", "healthiersnack", "gotosnack", "moringakhakhras", "Glutenfreekhakhras"],
      size: "200 gms",
      ingredients_benefits: {
        "Moringa Leaves": [
          "Rich in Nutrients: Moringa leaves are packed with essential vitamins and minerals, including vitamin A, C, E, iron, calcium, and protein. They are considered a superfood due to their high nutritional value.",
          "Antioxidant Properties: Moringa leaves contain powerful antioxidants that help protect the body against free radicals and oxidative stress, which can lead to various health issues."
        ],
        "Gram Flour": [
          "High in Protein: Gram flour is an excellent source of plant-based protein, making it a great choice for vegetarians and vegans.",
          "Rich in Fiber: It helps in maintaining digestive health and regulating blood sugar levels."
        ],
        "Rice Flour": [],
        "Iodized Salt": [],
        "Turmeric Powder": [],
        "Rice Bran Oil": []
      }
    },
    {
      id: 'mango-pickle',
      name: 'Mango Pickle',
      description: "Mango pickle in mustard oil is a classic North Indian style, especially popular in regions like Punjab, Uttar Pradesh, and Bihar. It's known for its sharp tangy flavour, spicy kick, and the deep aroma of mustard oil. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 120,
      image: '/images/mangopickle/IMG_1.jpg',
      images: ['/images/mangopickle/IMG_1.jpg',
        '/images/mangopickle/IMG_2.jpg',
        '/images/mangopickle/IMG_3.jpg',
        '/images/mangopickle/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'mangopickle', 'homemadepickles', 'nopalmoil', 'healthier', 'healthierpickle', 'mommadepickles', 'divinepickles', 'nopreservatives', 'mustardoilpickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Unripe Green Mangoes': [
          'Raw mangoes are packed with vitamin C, more than ripe ones.',
          'Help boost immunity, improve skin health, and aid in collagen production.'
        ],
        'Mustard Oil': [
          'Rich in monounsaturated and polyunsaturated fats, especially omega-3 and omega-6 fatty acids.',
          'Helps reduce LDL (bad cholesterol) and improve HDL (good cholesterol).',
          'May support heart health when used in moderation.'
        ],
        'Mustard Seeds': [],
        'Fenugreek': [],
        'Turmeric Powder': [],
        'Chili Powder': [],
        'Asafoetida': []
      }
    },
    {
      id: 'mix-pickle',
      name: 'Mix Pickle',
      description: "A mixed pickle (or achaar) is a delicious blend of different vegetables and fruits — commonly mango, carrot, lemon, green chili, and even cauliflower — all preserved in a spiced oil base. It's tangy, spicy, and perfectly suited to Indian meals like dal-chawal, paratha, or curd rice. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 120,
      image: '/images/mixpickle/IMG_1.jpg',
      images: ['/images/mixpickle/IMG_1.jpg',
        '/images/mixpickle/IMG_2.jpg',
        '/images/mixpickle/IMG_3.jpg',
        '/images/mixpickle/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Seasonal Vegetables': [
          'Seasonal vegetables are harvested at their natural peak, meaning they are fresher and retain more vitamins, minerals, and antioxidants.',
          'For example, winter Carrots are sweeter and richer in beta-carotene compared to off-season ones.'
        ],
        'Mustard Oil': [
          'Rich in monounsaturated (MUFA) and polyunsaturated fats (PUFA) — particularly omega-3 and omega-6 fatty acids.',
          'Helps reduce bad cholesterol (LDL) and increase good cholesterol (HDL).',
          'Contains allyl isothiocyanate, known for its anti-inflammatory properties.'
        ],
        'Mustard seeds': [],
        'Fenugreek': [],
        'Turmeric Powder': [],
        'Chili Powder': [],
        'Fennel Seeds': [],
        'Asafoetida (Hing)': []
      }
    },
    {
      id: 'ginger-garlic-pickle',
      name: 'Ginger Garlic Pickle',
      description: "Ginger Garlic Pickle is a flavourful Indian condiment combining the sharp heat of ginger, the pungency of garlic, and a mix of spices in a tangy, oily base—often preserved in mustard oil or sesame oil. It's commonly enjoyed with rice, parathas, or curd rice. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 120,
      image: '/images/gingergarlicpickle/IMG_1.jpg',
      images: ['/images/gingergarlicpickle/IMG_1.jpg',
        '/images/gingergarlicpickle/IMG_2.jpg',
        '/images/gingergarlicpickle/IMG_3.jpg',
        '/images/gingergarlicpickle/IMG_4.jpg'
      ],
      category: 'Pickles & condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'gingergarlic', 'gingergarlicpickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Ginger': [
          'Stimulates saliva and bile production, helping with digestion.',
          'Effective against bloating, gas, and indigestion.'
        ],
        'Garlic': [
          'Enhances immune cell function and helps fight off colds and infections.',
          'May reduce the severity and duration of common colds.'
        ],
        'Mustard Oil': [],
        'Mustard seeds': [],
        'Fenugreek': [],
        'Turmeric Powder': [],
        'Chilli Powder': [],
        'Asafoetida (Hing)': []
      }
    },
    {
      id: 'dry-amla-pickle',
      name: 'Dry Amla Pickle',
      description: "Here's a simple and flavorful Dry Amla Pickle (Sookhi Amla Achar) recipe — a traditional Indian way to preserve Indian gooseberries with spices. It's tangy, spicy, and has a long shelf life. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 120,
      image: '/images/dryamlapickle/IMG_1.jpg',
      images: ['/images/dryamlapickle/IMG_1.jpg',
        '/images/dryamlapickle/IMG_2.jpg',
        '/images/dryamlapickle/IMG_3.jpg',
        '/images/dryamlapickle/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'amla', 'amlapickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Amla': [
          'Extremely high in vitamin C (20x more than oranges), Amla helps the body fight infections and improve overall immune function.',
          'Amla stimulates digestive juices, helping in better breakdown and absorption of food.'
        ],
        'Mustard Oil': [
          'Rich in monounsaturated and polyunsaturated fats, especially omega-3 and omega-6 fatty acids.',
          'Helps reduce LDL (bad cholesterol) and improve HDL (good cholesterol).',
          'May support heart health when used in moderation.'
        ],
        'Mustard Seeds': [],
        'Fenugreek': [],
        'Turmeric Powder': [],
        'Red Chili Powder': []
      }
    },
    {
      id: 'sweet-and-sour-amla-pickle',
      name: 'Sweet & Sour Amla Pickle',
      description: "Here's a delicious Sweet and Sour Amla Pickle (Khatta Meetha Amla Achar) — tangy, spicy, and mildly sweet, it's a crowd-pleaser and absolutely irresistible! This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.",
      price: 120,
      image: '/images/amlasweetandsour/IMG_1.jpg',
      images: ['/images/amlasweetandsour/IMG_1.jpg',
        '/images/amlasweetandsour/IMG_2.jpg',
        '/images/amlasweetandsour/IMG_3.jpg',
        '/images/amlasweetandsour/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'amla', 'amlapickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Amla': [
          'Extremely high in vitamin C (20x more than oranges), Amla helps the body fight infections and improve overall immune function.',
          'Amla stimulates digestive juices, helping in better breakdown and absorption of food.'
        ],
        'Mustard Oil': [
          'Rich in monounsaturated and polyunsaturated fats, especially omega-3 and omega-6 fatty acids.',
          'Helps reduce LDL (bad cholesterol) and improve HDL (good cholesterol).',
          'May support heart health when used in moderation.'
        ],
        'Fennel seeds': [],
        'Nigella seeds (Kalonji)': [],
        'Mustard seeds': [],
        'Turmeric Powder': [],
        'Red Chili Powder': []
      }
    },
    {
      id: 'amla-murabba',
      name: 'Amla Murabba',
      description: 'Amla Murabba is a sweet preserve made from amla (Indian gooseberry), known for its health benefits and tangy flavor. It\'s often consumed for its medicinal properties, particularly in Ayurveda, where it\'s valued for improving digestion, immunity, and skin health. This Murabba has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/amlamurabba/IMG_1.jpg',
      images: ['/images/amlamurabba/IMG_1.jpg',
        '/images/amlamurabba/IMG_2.jpg',
        '/images/amlamurabba/IMG_3.jpg',
        '/images/amlamurabba/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'amlamurabba', 'homemademurabba', 'nopalmoil', 'healthier', 'healthiermurabba', 'divinemurabba', 'nopreservatives', 'noartificialflavours'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Amla (Indian Gooseberry)': [
          'Boosts immunity and helps fight infections',
          'Promotes collagen production for healthy skin and tissues'
        ],
        'Black Salt': [
          'Stimulates bile production and helps with bloating, indigestion, and heartburn'
        ],
        'Carom Seeds (Ajwain)': [],
        'Fennel Seeds': [],
        'Asafoetida': [],
        'Mishri': [],
        'Ginger Powder': []
      }
    },
    {
      id: 'bharwan-green-chilli-pickle',
      name: 'Bharwan Green Chilli Pickle',
      description: 'Bharwan Green Chilli (भरवां हरी मिर्च) is a flavourful Indian dish where green chillies are stuffed with a spiced filling—often made of mustard, fennel, and other aromatic spices. It\'s tangy, mildly spicy, and adds a punch to any Indian meal. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/bharwangreenchilli/IMG_1.jpg',
      images: ['/images/bharwangreenchilli/IMG_1.jpg',
        '/images/bharwangreenchilli/IMG_2.jpg',
        '/images/bharwangreenchilli/IMG_3.jpg',
        '/images/bharwangreenchilli/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'greenchillypickles'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Green Chilli': [
          'Boosts immunity and promotes glowing, healthy skin',
          'Helps in healing wounds and improving gum health'
        ],
        'Mustard Oil': [
          'Contains a good balance of omega-3 and omega-6 fatty acids',
          'Low in saturated fats, making it heart-friendly when used in moderation'
        ],
        'Cumin': [],
        'Turmeric': [],
        'Black Salt': [],
        'Red Chilli Powder': [],
        'Coriander Powder': [],
        'Carom Seeds (Ajwain)': [],
        'Amchur': [],
        'Fennel Seeds': [],
        'Black Cumin Seeds': [],
        'Asafoetida': [],
        'Black Mustard': [],
        'Salt': []
      }
    },
    {
      id: 'bharwan-red-chilli-pickle',
      name: 'Bharwan Red Chilli Pickle',
      description: 'Bharwan Lal Mirch ka Achaar (भरवां लाल मिर्च का अचार) is a traditional Indian stuffed red chilli pickle made with thick, mildly spicy red chillies filled with a tangy, spiced masala mix. It\'s especially popular in Uttar Pradesh, Rajasthan, and Punjab. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/bharwanredchilli/IMG_1.jpg',
      images: ['/images/bharwanredchilli/IMG_1.jpg',
        '/images/bharwanredchilli/IMG_2.jpg',
        '/images/bharwanredchilli/IMG_3.jpg',
        '/images/bharwanredchilli/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'gingergarlic', 'redchillipickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Red Chilli': [
          'Boosts Metabolism',
          'Contains capsaicin, which raises body temperature and increases fat burning and calorie expenditure',
          'Rich in Antioxidants',
          'Packed with vitamin C, beta-carotene, and flavonoids that fight free radicals and reduce oxidative stress'
        ],
        'Mustard Oil': [
          'Contains a good balance of omega-3 and omega-6 fatty acids',
          'Low in saturated fats, making it heart-friendly when used in moderation'
        ],
        'Cumin': [],
        'Turmeric': [],
        'Black Salt': [],
        'Red Chilli Powder': [],
        'Coriander Powder': [],
        'Carom Seeds (Ajwain)': [],
        'Amchur': [],
        'Fennel Seeds': [],
        'Black Cumin Seeds': [],
        'Asafoetida': [],
        'Black Mustard': [],
        'Salt': []
      }
    },
    {
      id: 'kathal-pickle',
      name: 'Kathal Pickle',
      description: 'Kathal ka Achaar (कटहल का अचार) is a delicious and unique jackfruit pickle made from raw (unripe) kathal. It\'s popular in North India, especially in Bihar and Uttar Pradesh, and has a meaty texture with bold, spicy, and tangy flavors. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/kathalpickle/IMG_1.jpg',
      images: ['/images/kathalpickle/IMG_1.jpg',
        '/images/kathalpickle/IMG_2.jpg',
        '/images/kathalpickle/IMG_3.jpg',
        '/images/kathalpickle/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'amla', 'kathalpickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Kathal (Jackfruit)': [
          'High in vitamins such as vitamin A, B-complex vitamins (like B6), and vitamin C',
          'A good source of minerals like potassium, magnesium, calcium, and iron'
        ],
        'Mustard Oil': [
          'Rich in monounsaturated and polyunsaturated fats, especially omega-3 and omega-6 fatty acids',
          'Helps reduce LDL (bad cholesterol) and improve HDL (good cholesterol)',
          'May support heart health when used in moderation'
        ],
        'Mustard Seeds': [],
        'Fennel Seeds': [],
        'Fenugreek': [],
        'Turmeric Powder': [],
        'Red Chili Powder': []
      }
    },
    {
      id: 'karela-pickle',
      name: 'Karela Pickle',
      description: 'Karela (Bitter Gourd) Pickle is a tangy and spicy Indian pickle made from the bitter vegetable, karela (bitter gourd), which is known for its health benefits. It\'s especially popular in North India and is a great way to balance out the bitterness with a variety of spices, oil, and tangy flavors. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/karelapickle/IMG_1.jpg',
      images: ['/images/karelapickle/IMG_1.jpg',
        '/images/karelapickle/IMG_2.jpg',
        '/images/karelapickle/IMG_3.jpg',
        '/images/karelapickle/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'amla', 'karelapickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Karela': [
          'Controls Blood Sugar',
          'Contains charantin, polypeptide-p, and vicine—compounds known to help reduce blood glucose levels',
          'Stimulates insulin secretion, making it excellent for type 2 diabetes management'
        ],
        'Mustard Oil': [
          'Rich in monounsaturated and polyunsaturated fats, especially omega-3 and omega-6 fatty acids',
          'Helps reduce LDL (bad cholesterol) and improve HDL (good cholesterol)',
          'May support heart health when used in moderation'
        ],
        'Fennel seeds': [],
        'Nigella seeds (Kalonji)': [],
        'Mustard seeds': [],
        'Turmeric Powder': [],
        'Red Chili Powder': []
      }
    },
    {
      id: 'lemon-green-chilli-pickle',
      name: 'Lemon Green Chilli Pickle',
      description: 'Lemon Green Chilli Pickle (नींबू मिर्च का अचार) is a classic Indian condiment that combines the tang of lemon with the spice of green chillies—perfect as a zesty side dish with parathas, dal-chawal, or khichdi. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/lemongreenchillipickle/IMG_1.jpg',
      images: ['/images/lemongreenchillipickle/IMG_1.jpg',
        '/images/lemongreenchillipickle/IMG_2.jpg',
        '/images/lemongreenchillipickle/IMG_3.jpg',
        '/images/lemongreenchillipickle/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'homemadepickle', 'nopalmoil', 'healthier', 'healthierpickle', 'divinepickle', 'nopreservatives', 'noartificialflavours', 'lemonpickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Lemon': [
          'High in Vitamin C',
          'Strengthens the immune system',
          'Helps fight colds, infections, and speeds up wound healing'
        ],
        'Green Chillies': [
          'Contain capsaicin, beta-carotene, and vitamin A, which protects cells from free radical damage and reduce inflammation'
        ],
        'Mustard Oil': [],
        'Mustard Seeds': [],
        'Cumin Seeds': [],
        'Turmeric Powder': [],
        'Black Salt': [],
        'Red Chilli Powder': [],
        'Coriander Powder': [],
        'Carom Seeds (Ajwain)': [],
        'Fenugreek': [],
        'Fennel Seeds': [],
        'Asafoetida': [],
        'Black Mustard Seeds': [],
        'Salt': []
      }
    },
    {
      id: 'lemon-sweet-and-sour-pickle',
      name: 'Lemon Sweet and Sour Pickle',
      description: 'Sweet and Sour Lemon Pickle (मीठा खट्टा नींबू का अचार) is a delicious Indian pickle that combines the tang of lemons with a perfect balance of sweetness from jaggery or sugar and spice from basic Indian masalas. It\'s especially popular in Gujarati and North Indian households. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/lemonsweetandsourpickle/IMG_1.jpg',
      images: ['/images/lemonsweetandsourpickle/IMG_1.jpg',
        '/images/lemonsweetandsourpickle/IMG_2.jpg',
        '/images/lemonsweetandsourpickle/IMG_3.jpg',
        '/images/lemonsweetandsourpickle/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'lemonsweetandsourpickles', 'lemonpickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Lemon': [
          'High in Vitamin C',
          'Strengthens the immune system',
          'Helps fight colds, infections, and speeds up wound healing'
        ],
        'Black Salt': [
          'Improves Digestion',
          'Stimulates the production of digestive enzymes and bile',
          'Helps relieve bloating, gas, and indigestion',
          'Often used in Ayurvedic remedies for acidity and stomach upset'
        ],
        'Carom Seeds (Ajwain)': [],
        'Asafoetida': [],
        'Mishri': [],
        'Black Pepper': []
      }
    },
    {
      id: 'mango-sweet-and-sour-pickle',
      name: 'Mango Sweet and Sour Pickle',
      description: 'Mango Sweet and Sour Pickle (मीठा खट्टा आम का अचार) is a traditional Indian condiment that blends the tanginess of raw mangoes with the richness of jaggery or sugar and bold Indian spices. It\'s especially popular in North India and Gujarat, and is loved for its balanced sweet-spicy flavor and long shelf life. This pickle has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS',
      price: 120,
      image: '/images/mangosweetandsour/IMG_1.jpg',
      images: ['/images/mangosweetandsour/IMG_1.jpg',
        '/images/mangosweetandsour/IMG_2.jpg',
        '/images/mangosweetandsour/IMG_3.jpg',
        '/images/mangosweetandsour/IMG_4.jpg'
      ],
      category: 'Pickles & Condiments',
      tags: ['madeinindia', 'pickles', 'betterpickles', 'nopalmoil', 'healthier', 'healthierpickles', 'tastierpickles', 'homemadepickles', 'mommadepickles', 'nostalgia', 'sweetandsour', 'mangopickle'],
      size: '100, 250, 500, 1000',
      variants: {
        sizes: [
          { name: '100g', value: '100g', price: 120 },
          { name: '250g', value: '250g', price: 199 },
          { name: '500g', value: '500g', price: 349 },
          { name: '1000g', value: '1000g', price: 599 }
        ]
      },
      ingredients_benefits: {
        'Raw Mango': [
          'Boosts Immunity',
          'Rich in vitamin C and antioxidants, raw mango helps strengthen your immune system and fights off infections'
        ],
        'Jaggery': [
          'Natural Body Cleanser',
          'Acts as a detoxifier, especially for the lungs, liver, and intestines',
          'Helps flush out toxins and pollutants from the body'
        ],
        'Red Chilli Powder': [],
        'Fenugreek Seeds': [],
        'Cumin Seeds': [],
        'Nigella Seeds (Kalonji)': [],
        'Black Salt': [],
        'Fennel Seeds (Saunf)': [],
        'Salt': []
      }
    },
    {
        id: 'flavour-vibes-besan-laddoos',
        name: 'Besan Laddoos',
        description: 'Besan Laddoos are a traditional Indian sweet made from roasted gram flour (besan), ghee (clarified butter), and sugar, often flavoured with cardamom and garnished with nuts. They\'re rich, aromatic, and perfect for festivals or celebrations. These laddoos have NO PRESERVATIVES, NO PALM Oil AND NO ARTIFICIAL FLAVOURS',
      price: 200,
      image: '/images/laddoopics/besan laddoo.jpg',
      images: ['/images/laddoopics/besan laddoo.jpg'],
      category: 'Healthy Treats',
      tags: ['madeinindia', 'homemadeladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'divineladdoos', 'nopreservatives', 'noartificialflavours', 'besanladdoos'],
      size: '250, 500, 1000',
      variants: {
          sizes: [
              { name: '250g', value: '250g', price: 200 },
              { name: '500g', value: '500g', price: 400 },
              { name: '1000g', value: '1000g', price: 700 }
          ]
      },
      ingredients_benefits: {
          'Besan (Gram Flour)': [
              'Rich in Protein',
              '• Besan is an excellent plant-based protein source, especially important in vegetarian and vegan diets.',
              '• Protein helps in muscle repair, immune function, and keeping you full longer.'
          ],
          'Ghee': [
              'Good Source of Healthy Fats',
              '• Ghee contains saturated fats that are easily digestible and used by the body for energy.',
              '• Supports hormone production, brain health, and cell function.'
          ],
          'Sugar': [],
          'Cardamom Powder': [],
          'Nuts': []
      }
    },
    {
    
     id: 'flavour-vibes-dry-fruits-laddoos',
      name: 'Dry Fruits Laddoos',
      description: 'Dry Fruits Laddoos are a delicious, sugar-free, energy-packed treat made from nuts, seeds, and dates or figs — no added sugar or flour needed! They\'re great as a healthy snack, especially for kids, athletes, or during fasting. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 250,
      image: '/images/laddoopics/dry fruits laddoo.jpg',
      images: ['/images/laddoopics/dry fruits laddoo.jpg'],
      category: 'Healthy Treats',
      tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'Dryfruitsladdoos'],
      size: '250, 500, 1000',
      variants: {
        sizes: [
            { name: '250g', value: '250g', price: 250 },
            { name: '500g', value: '500g', price: 500 },
            { name: '1000g', value: '1000g', price: 1000 }
        ]
              },
    ingredients_benefits: {
        'Dry Fruits': [
            'Rich in Nutrients',
            '• Packed with vitamins (like B-complex, E, K) and minerals (iron, calcium, magnesium, zinc, potassium).',
            '• A great natural source of plant protein and healthy fats.'
        ],
        'Ghee': [
            'Good Source of Healthy Fats',
            '• Ghee contains saturated fats that are easily digestible and used by the body for energy.',
            '• Supports hormone production, brain health, and cell function.'
        ],
        'Jaggery/Dates': []
    },
  },
    {
    id: 'flavour-vibes-moong-laddoos',
    name: 'Moong Laddoos',
    description: 'Moong Dal Laddoos are a nutritious and tasty Indian sweet made from roasted whole moong dal (split moong beans), ghee, and jaggery. They\'re light, protein-rich, and perfect for festivals, prasad, or even as a healthy snack. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
    price: 300,
    image: '/images/laddoopics/moong laddoo.jpg',
    images: ['/images/laddoopics/moong laddoo.jpg'],
    category: 'Healthy Treats',
    tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'moongladdoos'],
    size: '300, 500, 1000',
    variants: {
        sizes: [
            { name: '250g', value: '250g', price: 300 },
            { name: '500g', value: '500g', price: 500 },
            { name: '1000g', value: '1000g', price: 1000 }
        ]
    },
    ingredients_benefits: {
        'Moong Dal': [
            'High in Protein',
            '• Excellent plant protein source (~24g protein per 100g dry dal).',
            '• Helps in muscle repair, growth, and satiety'
        ],
        'Ghee': [
            'Good Source of Healthy Fats',
            '• Ghee contains saturated fats that are easily digestible and used by the body for energy.',
            '• Supports hormone production, brain health, and cell function.'
        ],
        'Jaggery/Dates': []
    },
  },
    {
    id: 'flavour-vibes-makhana-laddoos',
    name: 'Makhana Laddoos',
    description: 'Makhana Laddoos are sweet, round energy bites made primarily from makhana (also known as fox nuts or lotus seeds). They\'re often combined with ingredients like ghee, jaggery, and nuts to form a nutritious, naturally sweet treat. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
    price: 350,
    image: '/images/laddoopics/makhana laddoo.jpg',
    images: ['/images/laddoopics/makhana laddoo.jpg'],
    category: 'Healthy Treats',
    tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'makhanaladdoos'],
    size: '250, 500, 1000',
    variants: {
        sizes: [
            { name: '250g', value: '250g', price: 350 },
            { name: '500g', value: '500g', price: 650 },
            { name: '1000g', value: '1000g', price: 1100 }
        ]
    },
    ingredients_benefits: {
        'Makhana': [
            'Rich in Protein',
            '• Makhana is a great source of plant-based protein, which is essential for muscle repair and growth.',
            '• It\'s perfect for vegetarians and vegans to help meet their protein requirements.'
        ],
        'Jaggery': [
            'Rich in Nutrients',
            '• Jaggery is packed with essential minerals like iron, magnesium, potassium, and phosphorus.',
            '• It also contains small amounts of B vitamins, including vitamin B6 and folate, which support energy production and metabolic processes.'
        ],
        'Ghee': [
            'Good Source of Healthy Fats',
            '• Ghee contains saturated fats that are easily digestible and used by the body for energy.',
            '• Supports hormone production, brain health, and cell function.'
        ],
        'Mixed Nuts': []
    },
  },
    {
      id: 'flavour-vibes-methi-laddoos',
      name: 'Methi Laddoos',
      description: 'Methi Laddoos are traditional Indian sweets made with Fenugreek Seeds (Methi), whole wheat flour (Atta), jaggery, and ghee. These laddoos are not only delicious but also packed with health benefits, especially for digestion, metabolism, and women\'s health. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 300,
      image: '/images/laddoopics/methid laddoo.jpg',
      images: ['/images/laddoopics/methid laddoo.jpg'],
      category: 'Healthy Treats',
      tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'methiladdoos'],
      size: '250, 500, 1000',
      variants: {
          sizes: [
              { name: '250g', value: '250g', price: 300 },
              { name: '500g', value: '500g', price: 550 },
              { name: '1000g', value: '1000g', price: 1000 }
          ]
      },
      ingredients_benefits: {
          'Fenugreek Seeds': [
              'Blood Sugar Control',
              '• Fenugreek seeds are rich in soluble fiber, which can slow down carbohydrate digestion and absorption.',
              '• Shown to improve insulin sensitivity and lower blood glucose levels in people with type 2 diabetes.'
          ],
          'Ghee': [
              'Rich in Healthy Fats',
              '• Contains saturated fats and medium-chain triglycerides (MCTs), which may help in energy production.',
              '• Supports fat-soluble vitamin absorption (A, D, E, and K).'
          ],
          'Jaggery/Dates': [],
          'Gond': [],
          'Dried Fruits': [],
          'Coconut': []
      }
    },
    {
        id: 'flavour-vibes-mixed-seeds-laddoos',
        name: 'Mixed Seeds Laddoos',
        description: 'Mixed Seeds Laddoos are a nutritious, energy-packed treat made with a variety of seeds, such as flaxseeds, pumpkin seeds, sunflower seeds, and melon seeds. These laddoos are high in healthy fats, protein, and fiber, making them a perfect snack for boosting energy and overall health. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
        price: 350,
        image: '/images/laddoopics/mix seeds laddoo.jpg',
        images: ['/images/laddoopics/mix seeds laddoo.jpg'],
        category: 'Healthy Treats',
        tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'seedsladdoos', 'mixedseedsladdoos'],
        size: '250, 500, 1000',
        variants: {
            sizes: [
                { name: '250g', value: '250g', price: 350 },
                { name: '500g', value: '500g', price: 650 },
                { name: '1000g', value: '1000g', price: 1100 }
            ]
        },
        ingredients_benefits: {
            'Pumpkin Seeds': [
                'Rich in Nutrients',
                '• Pumpkin seeds are loaded with important vitamins and minerals such as magnesium, iron, zinc, copper, manganese, and vitamin K.',
                '• They are an excellent source of healthy fats, particularly omega-3 fatty acids, which are beneficial for heart health.'
            ],
            'Sunflower Seeds': [
                'Rich in Nutrients',
                '• Vitamins: Especially vitamin E (a powerful antioxidant), B vitamins (including B6 and folate), and minerals like magnesium, phosphorus, and copper.',
                '• Healthy Fats: They are high in polyunsaturated fats, particularly omega-6 fatty acids, which are essential for heart health when consumed in balance with omega-3s.'
            ],
            'Chia Seeds': [],
            'Sesame Seeds': [],
            'Flax Seeds': [],
            'Jaggery/Dates': []
        }
    },
    {
        id: 'flavour-vibes-multigrain-laddoos',
        name: 'Multigrain Laddoos',
        description: 'Multigrain Laddoos are a healthy, nutrient-packed Indian sweet made by blending a variety of grains and pulses, along with jaggery or honey for sweetness. These laddoos are a perfect balance of taste and health, making them an ideal snack for those looking for a nutritious alternative to traditional sweets. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
        price: 350,
        image: '/images/laddoopics/multigrain laddoo.jpg',
        images: ['/images/laddoopics/multigrain laddoo.jpg'],
        category: 'Healthy Treats',
        tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'seedsladdoos', 'multigrainladdoos'],
        size: '250, 500, 1000',
        variants: {
            sizes: [
                { name: '250g', value: '250g', price: 350 },
                { name: '500g', value: '500g', price: 650 },
                { name: '1000g', value: '1000g', price: 1100 }
            ]
        },
        ingredients_benefits: {
            'Wheat Flour': [
                'Rich in Nutrients',
                '• Vitamins: Whole wheat flour is a good source of essential vitamins, particularly B vitamins (like B1, B3, B5, and folate) that support metabolism, brain function, and red blood cell formation.',
                '• Minerals: Whole wheat flour is rich in minerals such as magnesium, phosphorus, manganese, and iron, which support various bodily functions, including bone health, energy production, and oxygen transport.'
            ],
            'Millets (Ragi, Jowar, Bajra) Flour': [
                'Millets are packed with essential nutrients, making them a great addition to a balanced diet:',
                '• Vitamins: Millets are rich in B vitamins, such as niacin (B3), riboflavin (B2), and folic acid, which are important for energy metabolism and the proper functioning of the nervous system.',
                '• Minerals: Millets provide a good amount of magnesium, phosphorus, iron, zinc, and calcium, supporting everything from bone health to immunity and red blood cell formation.'
            ],
            'Semolina': [],
            'Ghee': [],
            'Jaggery': []
        }
    },
    {
      id: 'flavour-vibes-nachni-laddoos',
      name: 'Nachni Laddoos',
      description: 'Nachni Laddoos (also known as Ragi Laddoos) are a traditional Indian sweet made primarily from finger millet flour (nachni/ragi), which is known for its numerous health benefits. These laddoos are not only delicious but also packed with essential nutrients, making them a great treat for all ages, especially for growing children and people with dietary needs. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 300,
      image: '/images/laddoopics/Nachani Laddoo.jpg',
      images: ['/images/laddoopics/Nachani Laddoo.jpg'],
      category: 'Healthy Treats',
      tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'milletladdoos', 'nachniladdoos'],
      size: '250, 500, 1000',
      variants: {
        sizes: [
            { name: '250g', value: '250g', price: 300 },
            { name: '500g', value: '500g', price: 550 },
            { name: '1000g', value: '1000g', price: 1000 }
        ]
      },
      ingredients_benefits: {
        'Nachni/Ragi Flour (Finger Millets)': [
          'Rich in Calcium',
          'Bone Health: Nachni is an excellent source of calcium, which is essential for maintaining strong and healthy bones and teeth. Regular consumption of Nachni can help prevent conditions like osteoporosis and bone fractures.',
          'Promotes Healthy Teeth: The calcium content also supports healthy tooth development and helps in maintaining the strength of teeth.'
        ],
        'Jaggery': [
          'Rich in Nutrients',
          'Minerals: Jaggery is packed with essential minerals such as iron, magnesium, calcium, potassium, phosphorus, and zinc.',
          'Vitamins: It contains small amounts of B-vitamins (like B6) and vitamin C, which support overall health.'
        ],
        'Ghee': [],
        'Cardamom': [],
        'Nuts': []
      }
    },
    {
      id: 'flavour-vibes-oats-laddoos',
      name: 'Oats Laddoos',
      description: 'Oats Laddoos are a healthy, nutrient-packed Indian sweet that combines the goodness of oats, ghee, jaggery, and a mix of spices. These laddoos are not only delicious but also offer a great combination of flavours and textures, making them an excellent choice for a nutritious snack or dessert. These laddoos have NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 350,
      image: '/images/laddoopics/oats laddoo.jpg',
      images: ['/images/laddoopics/oats laddoo.jpg'],
      category: 'Healthy Treats',
      tags: ['madeinindia', 'laddoos', 'betterladdoos', 'nopalmoil', 'healthier', 'healthierladdoos', 'tastierladdoos', 'homemadeladdoos', 'mommadeladdoos', 'nostalgia', 'oatsladdoos'],
      size: '250, 500, 1000',
      variants: {
        sizes: [
            { name: '250g', value: '250g', price: 350 },
            { name: '500g', value: '500g', price: 650 },
            { name: '1000g', value: '1000g', price: 1100 }
        ]
      },
      ingredients_benefits: {
        'Oats': [
          'Promotes Heart Health: Oats are a great source of soluble fiber, particularly beta-glucan, which helps to lower bad cholesterol (LDL) levels. This can reduce the risk of heart disease by improving blood lipid profiles and reducing inflammation.',
          'Improves Digestion: Beta-glucan also helps improve gut health by forming a gel-like substance in the intestines, which promotes regular bowel movements, prevents constipation, and supports a healthy digestive system.'
        ],
        'Jaggery': [
          'Iron: Jaggery is an excellent source of iron, which is crucial for the production of hemoglobin and red blood cells. It helps in preventing iron-deficiency anemia and boosts energy levels by improving oxygen transportation in the body.',
          'Vitamins and Minerals: Jaggery also contains magnesium, potassium, phosphorus, and zinc, which play essential roles in various bodily functions such as bone health, immune function, and energy production.'
        ],
        'Mixed nuts': []
      }
    },
    {
      id: 'mix-magic-ragi-rava-appe',
      name: 'Ragi Rava Appe',
      description: 'Ragi Rava Appe is a healthy and tasty South Indian breakfast or snack made using ragi (finger millet) flour, rava (semolina), and usually curd/yogurt. It\'s cooked in a special pan called an appe pan or paniyaram pan. This is a premix which just needs vegetables and some oil to go before being cooked. This premix has NO PRESERVATIVES, NO PALM Oil AND NO ARTIFICIAL FLAVOURS',
      price: 200,
      image: '/images/mixmagic/Ragi Rava Appe.jpeg',
      images: ['/images/mixmagic/Ragi Rava Appe.jpeg'],
      category: 'Healthier Premixes',
      tags: ['madeinindia', 'homemadepremix', 'nopalmoil', 'healthier', 'healthierpremixes', 'divinepremixes', 'nopreservatives', 'noartificialflavours', 'breakfastpremix'],
      size: '200',
      ingredients_benefits: {
        'Ragi': ['Rich in Calcium', '• Ragi contains more calcium than any other cereal grain.', '• Essential for bone health and preventing osteoporosis, especially in children and older adults.'],
        'Sooji': ['Good Source of Energy', '• Sooji is rich in complex carbohydrates, which provide steady energy without rapid spikes in blood sugar (especially if paired with protein or fiber).'],
        'Urad Dal': [],
        'Poha': []
      }
    },
    {
      id: 'mix-magic-kodo-millet-bondas',
      name: 'Kodo Millet Bonda',
      description: 'Kodo millet (botanical name: Paspalum scrobiculatum) is a nutrient-dense, gluten-free ancient grain that has gained popularity as a healthy substitute for rice and wheat, especially in South Indian diets. It\'s one of the "positive millets" recommended for its health-promoting properties. Kodo Millet Bonda is a crispy, tasty, and healthy South Indian-style snack made with kodo millet as the base ingredient instead of regular rice or maida. It\'s perfect for tea-time or as a light evening snack, offering the health benefits of millet in a crunchy and flavourful form. This premix comes in handy for office goers/professionals/kids, infact for people of all ages- It\'s a quick-fix for sudden hunger pangs. It has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 180,
      image: '/images/mixmagic/Kodo Millet Bonda.jpeg',
      images: ['/images/mixmagic/Kodo Millet Bonda.jpeg'],
      category: 'Healthier Premixes',
      tags: ['madeinindia', 'laddoos', 'betterbondas', 'nopalmoil', 'healthier', 'healthierbondas', 'tastierbondas', 'homemadebondapremixes', 'mommadebondas', 'nostalgia', 'bondas', 'eveningsnack', 'eveningsnackpremix'],
      size: '200',
      ingredients_benefits: {
        'Kodo Millet': ['Diabetic-Friendly', '• Kodo millet has a low glycemic index, meaning it releases glucose slowly into the bloodstream.', '• Helps in controlling blood sugar spikes, making it ideal for people with type 2 diabetes.'],
        'Urad Dal': ['Excellent Source of Protein', '• One of the best plant-based sources of protein, especially for vegetarians.', '• Supports muscle growth, tissue repair, and overall strength.']
      }
    },
    {
      id: 'mix-magic-jowar-dosa',
      name: 'Jowar Dosa',
      description: 'Jowar Dosa is a nutritious, gluten-free South Indian-style crepe made using jowar flour (sorghum flour). It\'s a healthy alternative to traditional rice dosas and is especially popular among those looking for high-fiber, diabetic-friendly, or weight-loss-friendly foods. This premix has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 175,
      image: '/images/mixmagic/Jowar Dosa.jpeg',
      images: ['/images/mixmagic/Jowar Dosa.jpeg'],
      category: 'Healthier Premixes',
      tags: ['madeinindia', 'jowa', 'jowardosamix', 'nopalmoil', 'healthier', 'healthierdosas', 'tastierdosas', 'homemadedosas', 'mommadedosa', 'nostalgia', 'jowardosa', 'gluenfreedosa', 'diabeticfriendlydosa'],
      size: '400',
      ingredients_benefits: {
        'Jowar Flour': ['Jowar flour (made from jowar, also known as sorghum) is a gluten-free, fiber-rich ancient grain flour that\'s gaining popularity for its impressive health benefits. It\'s especially beneficial for people with gluten intolerance, diabetes, or those aiming for weight loss and better digestion.'],
        'Urad Flour': ['High in Protein', '• Urad flour is an excellent plant-based protein source, especially valuable for vegetarians and vegans.', '• Supports muscle repair, growth, and overall strength.'],
        'Rice Flour': [],
        'Poha': []
      }
    },
    {
      id: 'mix-magic-jowar-idli',
      name: 'Jowar Idli',
      description: 'Jowar Idli is a healthy variation of the traditional South Indian idli, made using jowar flour (sorghum flour) or whole jowar grains in place of or along with rice and urad dal. It\'s light, fluffy, and rich in nutrients—perfect for a wholesome breakfast or snack. This premix has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 220,
      image: '/images/mixmagic/Jowar Idli.jpeg',
      images: ['/images/mixmagic/Jowar Idli.jpeg'],
      category: 'Healthier Premixes',
      tags: ['madeinindia', 'jowaridlis', 'betteridlis', 'nopalmoil', 'healthier', 'healthieridlis', 'tastieridlis', 'homemadeidlipremix', 'mommadeidlis', 'nostalgia', 'jowaridlipremix'],
      size: '400',
      ingredients_benefits: {
        'Jowar': ['Gluten-Free', '• Naturally gluten-free, making it an excellent choice for people with celiac disease or gluten sensitivity.', '• Supports gut health and reduces inflammation caused by gluten in sensitive individuals'],
        'Sooji': ['Good Source of Energy', '• Rich in complex carbohydrates, which provide sustained energy.', '• Ideal for a hearty breakfast or pre-workout meal.'],
        'Urad Dal': [],
        'Poha': []
      }
    },
    {
      id: 'mix-magic-ragi-rava-idli',
      name: 'Ragi Rava Idli',
      description: 'Ragi Rava Idli is a wholesome and nutritious South Indian breakfast dish made from a combination of ragi flour (finger millet) and rava (semolina or sooji). It is a healthy twist on the traditional idli, offering a rich source of calcium, fiber, and iron. Soft and fluffy in texture, ragi rava idlis are mildly spiced and typically made without fermentation, making them quick and easy to prepare. These idlis are often seasoned with mustard seeds, curry leaves, green chilies, and sometimes grated carrots or coriander for added flavor and nutrition. Served hot with coconut chutney or sambar, ragi rava idli is a delicious and filling choice for those looking for a diabetic-friendly or weight-conscious meal. This premix has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 160,
      image: '/images/mixmagic/Ragi Rava Idli.jpeg',
      images: ['/images/mixmagic/Ragi Rava Idli.jpeg'],
      category: 'Healthier Premixes',
      tags: ['madeinindia', 'Idlis', 'betteridli', 'nopalmoil', 'healthier', 'healthieridlis', 'tastieridlis', 'homemadeidlis', 'mommadeidlis', 'nostalgia', 'ragiidlis', 'ravaidlis', 'ragiravaidlis'],
      size: '400',
      ingredients_benefits: {
        'Ragi': ['Rich in Calcium', '• Ragi is one of the best plant-based sources of calcium, essential for maintaining healthy bones and teeth.', '• Especially beneficial for growing children, pregnant women, and the elderly to prevent osteoporosis.'],
        'Rava': ['Good Source of Energy', '• Rava is rich in carbohydrates, making it an excellent energy booster.', '• Ideal for breakfast to kick-start the day.']
      }
    },
    {
      id: 'mix-magic-ragi-rava-upma',
      name: 'Ragi Rava Upma',
      description: 'Ragi Rava Upma is a wholesome and nutrient-rich South Indian breakfast dish made using ragi flour (finger millet) and rava (semolina). It\'s a healthy twist on the traditional upma, combining the benefits of both ingredients for a fiber-rich, calcium-packed, and filling meal. Light on the stomach and quick to make, it\'s ideal for weight watchers, diabetics, and anyone looking for a nutritious breakfast or evening snack. This premix has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 150,
      image: '/images/mixmagic/Ragi Rava Upma.jpeg',
      images: ['/images/mixmagic/Ragi Rava Upma.jpeg'],
      category: 'Healthier Premixes',
      tags: ['madeinindia', 'upma', 'betterupma', 'nopalmoil', 'healthier', 'healthierupma', 'tastierupma', 'homemadeupma', 'mommadeupma', 'nostalgia', 'ragiupma', 'ragiravaupma'],
      size: '400',
      ingredients_benefits: {
        'Ragi': ['Rich in Calcium', '• Ragi contains 10x more calcium than white rice.', '• Essential for strong bones and teeth, especially for children, pregnant women, and the elderly.'],
        'Sooji': ['Boosts Energy', '• Sooji is rich in complex carbohydrates, which release energy slowly, keeping you active and fuller for longer.', '• Great for breakfast or pre-workout meals.']
      }
    },
    {
      id: 'mix-magic-ragi-rava-dosa',
      name: 'Ragi Rava Dosa',
      description: 'Ragi Rava Dosa is a crispy, thin, and flavorful South Indian crepe made with a nutritious blend of ragi flour (finger millet), rava (semolina), and rice flour. It\'s a quick, no-fermentation dosa that\'s perfect for a healthy breakfast or light dinner. This dosa has a delicate, lacy texture with crisp edges and a slightly earthy, nutty taste from the ragi. Often spiced with green chilies, ginger, cumin seeds, and curry leaves, it\'s a savory and satisfying dish that pairs beautifully with coconut chutney, tomato chutney, or sambar. This premix has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 155,
      image: '/images/mixmagic/Ragi Rava Dosa.jpeg',
      images: ['/images/mixmagic/Ragi Rava Dosa.jpeg'],
      category: 'Healthier Premixes',
      tags: ['madeinindia', 'dosa', 'betterdosas', 'nopalmoil', 'healthier', 'healthierdosas', 'tastierdosas', 'homemadedosas', 'mommadedosas', 'nostalgia', 'ragiravadosa', 'ragidosa'],
      size: '400',
      ingredients_benefits: {
        'Ragi': ['Excellent Source of Calcium', '• Ragi contains 10x more calcium than white rice.', '• Essential for strong bones and teeth, especially for children, pregnant women, and the elderly.'],
        'Sooji': ['Boosts Energy', '• Sooji is rich in complex carbohydrates, which release energy slowly, keeping you active and fuller for longer.', '• Great for breakfast or pre-workout meals.'],
        'Rice Flour': []
      }
    },
    {
      id: 'mix-magic-ragi-rava-dhokla',
      name: 'Ragi Rava Dhokla',
      description: 'Ragi Rava Dhokla is a soft, fluffy, and healthy steamed savoury cake made from a nutritious mix of ragi flour (finger millet) and rava (semolina). It\'s a wholesome twist on the traditional Gujarati dhokla, combining the earthiness of ragi with the lightness of rava to create a protein- and fiber-rich snack or breakfast. Prepared without fermentation and steamed to perfection, this dhokla is mildly spiced, slightly tangy, and topped with a classic tempering of mustard seeds, green chilies, curry leaves, and fresh coriander. It\'s ideal for those looking for a diabetic-friendly or weight-conscious option. This premix has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS.',
      price: 155,
      image: '/images/mixmagic/Ragi Rava Dhokla.jpeg',
      images: ['/images/mixmagic/Ragi Rava Dhokla.jpeg'],
      category: 'Healthy Premixes',
      tags: ['madeinindia', 'dhoklas', 'betterdhoklas', 'nopalmoil', 'healthier', 'healthierdhoklas', 'tastierdhoklas', 'homemadedhoklas', 'mommadedhoklas', 'nostalgia', 'ragiravadhoklas', 'ragidhoklas'],
      size: '200',
      ingredients_benefits: {
        'Ragi': ['Excellent Source of Calcium', '• Ragi contains 10x more calcium than white rice.', '• Essential for strong bones and teeth, especially for children, pregnant women, and the elderly.'],
        'Sooji': ['Boosts Energy', '• Sooji is rich in complex carbohydrates, which release energy slowly, keeping you active and fuller for longer.', '• Great for breakfast or pre-workout meals.'],
        'Gram Flour': []
      }
    },
    {
      id: 'chocolate-mango-teacake',
      name: 'Gluten Free, Sugar Free & Eggless Chocolate Mango Teacake',
      description: "Here's a gluten-free and sugar-free eggless chocolate mango tea cake that's moist, flavourful, and perfect with a cup of tea. It combines rich chocolate with the tropical sweetness of mango in a tender crumb- A Tropical Twist to your teatime: Gluten-free & Guilt-free Chocolate Mango Tea cake (EGGLESS). This is a clean label product and has NO PRESERVATIVES, NO PALM Oil AND NO ARTIFICIAL FLAVOURS. \n Please Note - The Baking Powder (BP) used in the product is not gluten free as the quantity of BP is negligible in this product.",
      price: 750,
      image: '/images/smiles_cakes/Chocolate_Mango_Teacake.jpeg',
      images: ['/images/smiles_cakes/Chocolate_Mango_Teacake.jpeg'],
      category: 'Healthy Cakes',
      tags: ['madeinindia', 'glutenfreecakes', 'nopalmoil', 'healthier', 'healthiercakes', 'divinecakes', 'nopreservatives', 'noartificialflavours', 'egglessteacakes', 'egglesscakes', 'glutenfreeteacake', 'sugarfreeteacake'],
      size: '250gms, 500gms',
      variants: {
        sizes: [
          { name: '250g', value: '250g', price: 750 },
          { name: '500g', value: '500g', price: 1400 }
        ]
      },
      ingredients_benefits: {
        'Almond Flour': [
          'Almond flour is low in carbohydrates and high in monounsaturated fats, making it a great fit for low-carb or keto diets.',
          'Almond flour also helps maintain steady blood sugar levels.'
        ],
        'Jowar Flour': [
          'Helps manage blood sugar spikes, making it a good option for diabetics.',
          'Rich in magnesium and potassium, which help regulate blood pressure and support cardiovascular function.'
        ],
        'Oats Flour': [],
        'Fresh Mango Pulp': [],
        'Stevia Sugar Free Powder': []
      }
    },
    {
      id: 'jowar-vanilla-jaggery-teacake',
      name: 'Gluten free, Sugar free & Eggless Jowar Vanilla Jaggery Tea Cake',
      description: "Here’s a simple and delicious Jowar Vanilla Jaggery Tea Cake — a wholesome, gluten-free option with warm, earthy flavours. It’s soft, mildly sweet, and perfect with tea or coffee. This cake is sugar free hence guilt free + eggless too. This is a clean label product and has NO PRESERVATIVES, NO PALM Oil AND NO ARTIFICIAL FLAVOURS.\n Please Note - The Baking Powder (BP) used in the product is not gluten free as the quantity of BP is negligible in this product.",
      price: 500,
      image: '/images/smiles_cakes/Jowar_Vanilla_Jaggery_Teacake.jpeg',
      images: ['/images/smiles_cakes/Jowar_Vanilla_Jaggery_Teacake.jpeg'],
      category: 'Healthy Cakes',
      tags: ['madeinindia', 'cakes', 'bettercakes', 'nopalmoil', 'healthier', 'healthiercakes', 'tastiercakes', 'glutenfreecakes', 'sugarfreecakes', 'egglesscakes', 'teatimecakes', 'eveningsnack', 'guiltfreecakes', 'Jowarcake'],
      size: '250gms',
      ingredients_benefits: {
        'Jowar Flour': [
          'Helps manage blood sugar spikes, making it a good option for diabetics.',
          'Rich in magnesium and potassium, which help regulate blood pressure and support cardiovascular function.'
        ],
        'Jaggery': [
          'Unrefined & Natural',
          'No chemicals or artificial additives.',
          'Retains iron, magnesium, potassium, and calcium from sugarcane or palm sap.',
          'A better alternative to white sugar, especially in traditional diets.'
        ],
        'Vanilla': []
      }
    },
    {
      id: 'ragi-chocolate-jaggery-teacake',
      name: 'Gluten free, Sugar free & Eggless Ragi Chocolate Jaggery Tea Cake',
      description: "Here’s a wholesome, rich, and naturally sweetened Ragi Chocolate Jaggery Tea Cake — gluten-free, full of calcium and iron from ragi (finger millet), and naturally sweetened with jaggery. It is moist, mildly earthy, and perfect with your afternoon tea. This is a clean label product and has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS. \n Please Note - The Baking Powder (BP) used in the product is not gluten free as the quantity of BP is negligible in this product.",
      price: 500,
      image: '/images/smiles_cakes/Ragi_Chocolate_Jaggery_Teacake.jpeg',
      images: ['/images/smiles_cakes/Ragi_Chocolate_Jaggery_Teacake.jpeg'],
      category: 'Healthy Cakes',
      tags: ['madeinindia', 'cakes', 'bettercakes', 'nopalmoil', 'healthier', 'healthiercakes', 'tastiercakes', 'glutenfreecakes', 'sugarfreecakes', 'egglesscakes', 'teatimecakes', 'eveningsnack', 'guiltfreecakes', 'Ragicake'],
      size: '250gms',
      ingredients_benefits: {
        'Ragi Flour': [
          'Excellent Source of Calcium',
          'Highest calcium content among all grains.',
          'Supports strong bones and teeth.',
          'Helps prevent osteoporosis, especially important for children, post-menopausal women, and the elderly.'
        ],
        'Jaggery': [
          'Unrefined & Natural',
          'No chemicals or artificial additives.',
          'Retains iron, magnesium, potassium, and calcium from sugarcane or palm sap.',
          'A better alternative to white sugar, especially in traditional diets.'
        ],
        'Chocolate/Cocoa Powder': []
      }
    },
    {
      id: 'carrot-millet-teacake',
      name: 'Gluten-free, Sugar-free and Eggless Carrot Millet Tea Cake',
      description: "Here’s a wholesome, naturally sweet, and gluten-free Carrot Millet Tea Cake. This cake combines the goodness of millet flour with the sweetness of carrots and the warmth of jaggery, making it a perfect treat for your tea time. This is a clean label product and has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS. \n Please Note - The Baking Powder (BP) used in the product is not gluten free as the quantity of BP is negligible in this product.",
      price: 800,
      image: '/images/smiles_cakes/Carrot_Millet_Teacake.jpeg',
      images: ['/images/smiles_cakes/Carrot_Millet_Teacake.jpeg'],
      category: 'Healthy Cakes',
      tags: ['madeinindia', 'cakes', 'bettercakes', 'nopalmoil', 'healthier', 'healthiercakes', 'tastiercakes', 'glutenfreecakes', 'sugarfreecakes', 'egglesscakes', 'teatimecakes', 'eveningsnack', 'guiltfreecakes', 'carrotcakes'],
      size: '250gms',
      ingredients_benefits: {
        'Jowar Flour': [
          'Jowar flour is gluten-free, making it an excellent choice for people with celiac disease or those following a gluten-free diet.'
        ],
        'Kodo Flour': [
          'Kodo millet flour contains a good amount of plant-based protein, essential for tissue repair, muscle building, and overall growth.'
        ],
        'Oats Flour': [],
        'Jaggery': [],
        'Carrots': []
      }
    },
    {
      id: 'multigrain-carrots-dates-nuts-teacake',
      name: 'Gluten-free, Sugar-free and Eggless Multigrain Carrots, Dates and Nuts Tea Cake',
      description: 'This is a clean label product and has NO PRESERVATIVES, NO PALM OIL AND NO ARTIFICIAL FLAVOURS. \n Please Note - The Baking Powder (BP) used in the product is not gluten free as the quantity of BP is negligible in this product.',
      price: 700,
      image: '/images/smiles_cakes/Multigrain_Carrots.jpeg',
      images: ['/images/smiles_cakes/Multigrain_Carrots.jpeg'],
      category: 'Healthy Cakes',
      tags: ['madeinindia', 'cakes', 'bettercakes', 'nopalmoil', 'healthier', 'healthiercakes', 'tastiercakes', 'glutenfreecakes', 'sugarfreecakes', 'egglesscakes', 'teatimecakes', 'eveningsnack', 'guiltfreecakes', 'carrotcakes', 'multigraincakes'],
      size: '250gms',
      ingredients_benefits: {
        'Mix of healthier flours (Multigrain Flours)': [
          'Rich in Nutrients',
          'Multigrain flours combine the benefits of several grains, making them a great source of essential vitamins and minerals, including:',
          'B vitamins (for energy metabolism)',
          'Iron (for healthy blood)',
          'Magnesium (for muscle and nerve function)',
          'Calcium (for strong bones)',
          'Zinc (for immune health)',
          'Folate (important for cell function)'
        ],
        'Carrots': [
          'Supports Eye Health',
          'Carrots are rich in beta-carotene, which is a type of vitamin A. Vitamin A plays a crucial role in maintaining good vision, particularly in low-light conditions.'
        ],
        'Dates': [],
        'Nuts': []
      }
    },
    {
      id: 'fiery_fusion_burnt_chili_oil',
      name: 'Fiery Fusion Burnt Chili Oil',
      description: 'Artisan Fresh, All-natural, Gluten Free, No artificial additives, Vegan! Experience bold, smoky heat with Fiery Fusion Burnt Chilli Oil — a handcrafted blend of slow-roasted Thai red chilies, crispy garlic, and whole spices, all infused in premium sunflower oil. Cooked in small batches to preserve freshness and flavour, this oil delivers an irresistible crunch, rich umami, and a deep, smoky aroma. Perfect for spice lovers looking to elevate everyday meals with a natural punch of flavour',
      price: 410,
      image: '/images/saucesset2/Fiery Fusion Burnt Chilli Oil.png',
      images: ['/images/saucesset2/Fiery Fusion Burnt Chilli Oil.png'],
      category: 'Sauces and Dressings',
      tags: ['madeinindia', 'healthier', 'healthierflavouredoils', 'healthierflavouredoildressings', 'oildressing', 'glutenfreeburntchillioil', 'burntchillioil', 'artisanfreshoil', 'makeiindia', 'nopreservatives', 'noadditives'],
      size: '150ml',
      ingredients_benefits: {
        'Thai Red Chillies': [
          'Rich in Capsaicin',
          "Capsaicin, the compound responsible for the chili’s heat, has anti-inflammatory, antioxidant, and pain-relieving properties.",
          "It can boost metabolism by increasing thermogenesis (heat production in the body), which may help with weight management."
        ],
        'Garlic': [
          "Lowers blood pressure: Garlic can help reduce hypertension by dilating blood vessels.",
          "Reduces cholesterol: Especially LDL (bad cholesterol), which can reduce risk of heart disease.",
          "Improves blood circulation: Garlic helps prevent the clumping of platelets, reducing the risk of clots."
        ],
        'Whole Spices': [],
        'Premium Sunflower Oil': []
      }
    },
    {
      id: 'basil_pesto',
      name: 'Vegan Basil Pesto Sauce',
      description: "Artisan Fresh, All-natural, Gluten Free, No artificial additives, Vegan! This Basil Pesto is more than just a sauce—it’s a vibrant celebration of fresh, handpicked basil leaves perfectly blended with toasted walnuts, aromatic garlic, zesty orange and lime, and extra virgin olive oil. Infused with the wholesome goodness of nutritional yeast, this luscious vegan pesto offers a rich, creamy texture and a burst of bright mediterranean flavors that will instantly elevate any meal. Made fresh in small batches and carefully packed to preserve its bold taste and vibrant color, this pesto is a must-have gourmet delight—grab yours today before it’s gone and transform your cooking into a flavorful feast!",
      price: 610,
      image: '/images/Basil Pesto.jpg',
      images: ['/images/Basil Pesto.jpg'],
      category: 'Sauces and Dressings',
      tags: ['madeinindia', 'healthier', 'healthierpesto', 'authenticpesto', 'basilpesto', 'glutenfreepesto', 'noadditivespesto', 'preservativefreepesto', 'makeinindia', 'nopreservatives', 'noadditives', 'freshpesto'],
      size: '150ml',
      ingredients_benefits: {
        'Fresh basil leaves': [
          'Rich in Antioxidants',
          'Contains powerful antioxidants like flavonoids (e.g. orientin and vicenin) and polyphenols.',
          'These help protect cells from oxidative stress, reducing the risk of chronic diseases.'
        ],
        'Extra virgin olive oil': [
          'Promotes Heart Health- Rich in monounsaturated fats, especially oleic acid, which helps:',
          'Lower bad LDL cholesterol',
          'Increase good HDL cholesterol',
          'Reduce blood pressure'
        ],
        'Garlic': [],
        'Walnuts': [],
        'Nutritional Yeast': [],
        'Sea Salt': [],
        'Black Pepper': [],
        'Lemon Zest and Juice': []
      }
    },
    {
      id: 'smoked_thai_pineapple_chilli_sauce',
      name: 'Smoked Thai Pineapple Chilli Sauce',
      description: "Artisan Fresh, All-natural, Gluten Free, No artificial additives, Vegan! Experience a vibrant burst of sweet heat with this Pineapple Chili Sauce. This handcrafted sauce blends the tropical sweetness of pineapple juice and chunks with fiery bird’s eye chillies, tangy apple cider vinegar, and a touch of garlic—all slowly simmered to perfection and thickened into a luscious, balanced glaze. With a subtle kick from chili flakes and tamari sauce, this sauce is perfect for adding a tropical zing to your grilled meats, stir-fries, seafood, or as a dipping sauce. Made fresh in small batches, it’s free from artificial flavours and preservatives, delivering pure, natural taste in every spoonful.",
      price: 550,
      image: '/images/saucesset5/IMG_1.jpg',
      images: ['/images/saucesset5/IMG_1.jpg', '/images/saucesset5/IMG_2.jpg'],
      category: 'Sauces and Dressings',
      tags: ['madeinindia', 'healthier', 'healthiersauces', 'smokedpineapplesauce', 'smokedthaisauce', 'thaisauce', 'smokedchillisauce', 'preservativefreesauce', 'makeinindia', 'nopreservatives', 'noadditives', 'freshsmokedpineapplesauce'],
      size: '150ml',
      ingredients_benefits: {
        'Fresh pineapple': [
          'Rich in Immune-Boosting Nutrients',
          'High in Vitamin C, which supports immune defense, helps repair tissues, and acts as a strong antioxidant.',
          'Just one cup of pineapple provides over 100% of your daily vitamin C needs'
        ],
        'Brown Sugar': [
          "Like all sugars, brown sugar provides a quick energy boost because it's rapidly digested and absorbed.",
          "Brown sugar contains trace amounts of minerals from molasses, such as:",
          "Calcium",
          "Potassium",
          "Iron",
          "Magnesium"
        ],
        'Apple Cider Vinegar': [],
        'Fresh Birds Eye Chillies': [],
        'Garlic': [],
        'Tamari sauce': [],
        'Chilli flakes': [],
        'Corn flour': [],
        'Tomato ketchup': [],
        'Salt': [],
        'Black Pepper': []
      }
    },
    {
      id: 'chimichurri_sauce',
      name: 'Chimichurri Sauce',
      description: "Artisan Fresh, All-natural, Gluten Free, No artificial additives, Vegan! This Chimichurri Sauce is a vibrant, herbaceous condiment that bursts with fresh, zesty flavour and a subtle kick of heat. Made in small batches to preserve its authentic taste and handcrafted with care, this sauce adds bold personality to everything from grilled vegetables and meats to sandwiches and wraps. A South American classic, reimagined for your modern, conscious kitchen. Made fresh in small batches and packed carefully to preserve its bold, natural taste, this vegan sauce elevates any meal with authentic South American flair.",
      price: 440,
      image: '/images/Chimichurri Sauce.jpg',
      images: ['/images/Chimichurri Sauce.jpg'],
      category: 'Sauces and Dressings',
      tags: ['madeinindia', 'healthier', 'healthiersauces', 'chimichurrisauce', 'southamericansauce', 'authenticchimichurri', 'preservativefreesauce', 'makeinindia', 'nopreservatives', 'noadditives', 'consciouskitchenproduct'],
      size: '150ml',
      ingredients_benefits: {
        'Extra-virgin olive oil': [
          'High in monounsaturated fats (mainly oleic acid) which help:',
          'Lower LDL (bad) cholesterol',
          'Increase HDL (good) cholesterol',
          'Improve arterial function',
          'Associated with reduced risk of heart disease and stroke'
        ],
        'White Wine Vinegar': [
          'Aids Digestion',
          'The acetic acid in vinegar may help:',
          'Improve digestion by increasing stomach acid production',
          'Enhance the absorption of minerals like calcium and magnesium',
          'Reduce bloating and support gut function'
        ],
        'Garlic': [],
        'Fresh flat-leaf Parsley': [],
        'Lemon zest and juice': [],
        'Sea Salt': [],
        'Dried Oregano': [],
        'Red Pepper Flakes': [],
        'Cayenne Pepper': [],
        'Smoked Paprika': []
      }
    },
];
  
  export default products; 