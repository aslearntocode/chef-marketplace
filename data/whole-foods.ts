import { Product } from '@/types/whole-foods';

export const products: Product[] = [
    {
        id: '1',
        name: 'Coconut Barfi with Jaggery',
        description: 'Coconut Barfi with jaggery is a traditional Indian sweet made with grated coconut and jaggery, offering a delightful fusion of flavours. The rich nutty texture of fresh coconut is complemented by the deep, caramel-like sweetness of jaggery, which is a natural unrefined sugar. It\'s a healthier alternative to the usual sugar-based barfis, with the earthy rich taste of jaggery enhancing the overall flavour profile. Perfect for festive occasions or as a wholesome snack!',
        price: 120,
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
        price: 180 ,
        image: '/images/Sugar Free Dryfruits laddoo.jpeg',
        category: 'Healthy Treats',
        tags: ['sugar free', 'healthy', 'dry fruits', 'ladoo', 'indian sweet']
    },
    {
        id: '5',
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
        id: '6',
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
        id: '7',
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
        id: '8',
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
        tags: ['healthy', 'treats', 'date', 'nut', 'bites', 'healthy treats', 'date and nut bites', 'healthy snack', 'healthy treat', 'healthy bites', 'hearthealthy', 'nopalmoil', 'no maida', 'allnatural', 'nochemicals']
    },
    {
      id: '9',
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
      // ingredients: [
      //   'Makhanas (Fox Seeds/Lotus Seeds)',
      //   'Himalayan Pink Salt',
      //   'Desi Cow Ghee'
      // ],
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
        id: '10',
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
        id: '12',
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
        tags: ['pickle', 'lemon', 'pickle', 'healthy', 'indian pickle', 'indian pickles']
    },
    {
      id: '13',
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
        category: 'Pickles & Condiments',
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
        category: 'Pickles & Condiments',
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
        category: 'Pickles & Condiments',
        tags: ['chillipickle', 'traditionalpickle', 'traditionalrecipe', 'mirchkaachaar', 'bharwamirch', 'lalmirchkaachaar', 'greenchillipickle', 'harimirchachaar', 'mirchiachaar', 'homemadepickle', 'northindianpickle']
    },
    {
      id: '19',
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
      id: '20',
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
      id: '21',
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
      id: '22',
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
      id: '23',
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
      id: '24',
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
      size: '300gms',
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
      id: '25',
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
      id: '26',
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
      id: '27',
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
      id: '28',
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
      id: '29',
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
      tags: ['oats', 'overnightoats', 'bananacake', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats'],
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
      id: '30',
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
      id: '31',
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
      tags: ['oats', 'overnightoats', 'mangocustard', 'healthier', 'madeinindia', 'convenient', 'oatlovers', 'chemicalfree', 'preservativefree', 'colourfree', 'purer', 'breakfast', 'breakfastwithmilk', 'flavouredoats'],
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
    }
];
export default products; 