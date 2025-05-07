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
      id: '32',
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
      id: '33',
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
      id: '34',
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
      id: '35',
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
      id: '36',
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
      id: '37',
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
      id: '38',
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
      id: '39',
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
      id: '40',
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
      id: '41',
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
      id: '42',
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
      id: '43',
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
      id: '44',
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
      id: '45',
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
      id: '46',
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
      id: '47',
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
      id: '48',
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
      id: '49',
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
      id: '50',
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
      id: '51',
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
      price: 1000,
      variants: {
        sizes: [
          { name: 'Broken', value: 'Broken', price: 1000 },
          { name: 'Split', value: 'Split', price: 1100 },
          { name: 'Small', value: 'Small', price: 1200 },
          { name: 'Medium', value: 'Medium', price: 1250 },
          { name: 'Large', value: 'Large', price: 1400 },
          { name: 'Jumbo', value: 'Jumbo', price: 1600 },
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
      id: '59',
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
      id: '60',
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
      id: '61',
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
      id: '62',
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
      id: '63',
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
      id: '64',
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
      id: '65',
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
      id: '66',
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
      id: '67',
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
      id: '68',
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
      id: '69',
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
      id: '70',
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
      id: '71',
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
      id: '72',
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
    }
];
export default products; 