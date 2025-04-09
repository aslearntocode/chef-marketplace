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
        ingredients: [
          'Betel Leaves (Paan) – Aids digestion and freshens breath',
          'Gulkand (Rose Petal Preserve) – A natural coolant that helps with acidity and digestion',
          'Fennel Seeds – Helps in detoxification and improves gut health',
          'Cardamom – Enhances digestion and provides a pleasant aroma'
        ]
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
        ingredients: [
          'Fennel Seeds (Saunf) – Aids digestion, reduces bloating, and cools the body',
          'Cardamom – Freshens breath and improves gut health',
          'Mishri (Rock Sugar) – A natural sweetener that balances acidity'
        ]
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
        ingredients: [
          'Almonds & Cashews – Boost brain health and provide essential healthy fats',
          'Fennel Seeds (Saunf) – Aids digestion and cools the body',
          'Poppy Seeds – Helps in relaxation and improves sleep',
          'Melon seeds: Rich in protein, healthy fats, and antioxidants, promoting heart health, digestion, and glowing skin',
          'Cardamom – Enhances metabolism and aids digestion',
          'Saffron – A powerful antioxidant that promotes skin glow and mood upliftment',
          'Black Pepper – Strengthens immunity and supports respiratory health'
        ]
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
      price: 120,
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
      ingredients: [
        'Rich in nutrients: Makhanas are packed with essential nutrients like protein, fiber, and antioxidants. They are also a good source of magnesium, potassium, phosphorus, iron, and calcium, which support overall health.',
        'Promotes weight loss: Low in calories and high in fiber, makhanas make an excellent snack for those looking to lose or manage weight. The fiber content helps keep you feeling full, preventing overeating.',
        'Supports heart health: They are rich in antioxidants, especially flavonoids, which help in reducing oxidative stress and inflammation in the body. This can promote heart health by reducing the risk of cardiovascular diseases.',
        'Regulates blood sugar: Makhanas have a low glycemic index, which makes them ideal for people with diabetes. They help in regulating blood sugar levels and prevent spikes after meals.',
        'Improves kidney health: Traditional medicine has used makhanas for their benefits in promoting kidney health. They are believed to help detoxify the kidneys and improve their function.',
        'Anti-aging properties: Due to their high antioxidant content, makhanas help fight free radicals in the body. This can reduce the signs of aging and promote healthier skin and hair.',
        'Good for bone health: The calcium and magnesium in makhanas are essential for maintaining strong bones and teeth. They also support the body\'s ability to absorb other nutrients necessary for bone health.',
        'Helps with digestion: The high fiber content in makhanas aids in improving digestion and preventing constipation. It also supports gut health by promoting healthy bowel movements.',
        'Supports skin health: The antioxidants, along with their anti-inflammatory properties, help protect the skin from damage and improve its texture and appearance.',
        'Boosts immunity: The vitamins, minerals, and antioxidants in makhanas help strengthen the immune system, making the body more resistant to infections and diseases.'
      ]
    },
    {
        id: '10',
        name: 'Jaggery Mango Pickle',
        description: 'Kuch teekha, kuch meetha, kuch khatta. Sweet and spicy, this twist to the traditional gujarati golkeri will tickle your taste buds + this is completely OIL FREE! Tartness of handpicked raw mangoes, the spice of hand pounded red chillies, saunf and methi- mildly salted and cooked to perfection with jaggery. This pickle pairs well with pooris, parathas, theplas or even dosas - the mango chunks and whole spices add a lot of texture to this recipe. Serve this pickle as an accompaniment at your parties. Use this in place of imli chutney on your chaats.',
        price: 325 ,
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
      price: 120,
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
      ingredients: [
        'Rich in nutrients: Red rice is rich in essential nutrients like fiber, antioxidants, vitamins, and minerals. It contains more nutrients than white rice, including higher levels of iron, zinc, and B-vitamins like thiamine and niacin.',
        'Promotes digestive health: The fiber content in red rice is high, which helps in improving digestion and preventing constipation. Fiber adds bulk to the stool and aids in regular bowel movements, promoting overall gut health.',
        'Rich in antioxidants: Red rice is packed with antioxidants, particularly anthocyanins, which are compounds responsible for the reddish hue of the rice. These antioxidants help protect the body from oxidative stress and reduce inflammation.',
        'Supports heart health: The fiber in red rice helps lower LDL cholesterol (bad cholesterol) levels, reducing the risk of heart disease. Additionally, the antioxidants present in red rice contribute to reducing oxidative stress.',
        'Good for weight management: Red rice has a low glycemic index, meaning it releases energy slowly, helping to control hunger and prevent blood sugar spikes. When combined with the fiber from roasted red rice chivda, it provides a filling and satisfying snack.',
        'Regulates blood sugar levels: Red rice is a better option than white rice for individuals with diabetes, as it helps in managing blood sugar levels. Its low glycemic index and high fiber content can assist in preventing sudden spikes in blood sugar.',
        'Helps with bone health: Red rice contains essential minerals such as calcium, magnesium, and phosphorus, which are important for maintaining strong and healthy bones. These minerals help in bone formation and can aid in the prevention of bone-related conditions.',
        'Improves skin health: The antioxidants, especially anthocyanins in red rice, help fight free radicals in the body that contribute to aging and skin damage. They promote healthier skin, reduce wrinkles, and may also help combat acne.',
        'Good for the nervous system: Red rice contains B-vitamins, particularly thiamine (Vitamin B1), which plays a key role in maintaining the health of the nervous system. These vitamins also support brain function and improve focus.',
        'Better for the environment: Red rice is often grown using more organic and sustainable farming practices compared to refined white rice. Choosing whole grains like red rice is better for the environment and contributes to sustainable agriculture.'
      ]
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
      description: 'Super crunchy and great with your tea. Share these with your family- pack them for a picnic-pack these for your kid\'s tiffin! These whole wheat crisps are super versatile and perfect for some healthy indulgence. Crafted using high quality whole wheat flour, fragrant methi and handpicked spices, this clean label snack is handmade in small batches. No palm oil or white salt-No reused oil-super healthy! Loved by all ages - your kids are bound to enjoy these too!',
      price: 156,
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
      ingredients: [
        'Rich in dietary fiber: Whole wheat flour is an excellent source of dietary fiber, which is important for maintaining a healthy digestive system. Fiber helps in preventing constipation, improving gut health, and promoting regular bowel movements.',
        'Good for digestion: Ajwain (carom seeds) has long been known for its digestive benefits. It aids in the secretion of gastric juices, which helps in the digestion of food. Ajwain is also known to relieve indigestion, bloating, and gas.',
        'Promotes weight loss: Whole wheat flour has a lower glycemic index compared to refined flour, which helps in controlling blood sugar levels. It also keeps you full for longer, reducing the chances of overeating.',
        'Good source of energy: Whole wheat flour is rich in complex carbohydrates, which provide a steady source of energy throughout the day. This makes ajwain mathri a good snack for individuals who need an energy boost.',
        'Improves metabolism: Ajwain is known to have thermogenic properties, which can help boost metabolism and promote fat burning. This can be especially beneficial for those trying to manage their weight.',
        'Heart health: Whole wheat flour is a good source of antioxidants, magnesium, and other nutrients that help improve heart health. The fiber in whole wheat helps lower bad cholesterol levels.',
        'Rich in nutrients: Whole wheat flour is packed with essential vitamins and minerals, including B vitamins (especially niacin, riboflavin, and thiamine), iron, magnesium, and zinc.',
        'Anti-inflammatory properties: Ajwain contains compounds that have anti-inflammatory properties. Regular consumption of ajwain mathri may help reduce inflammation in the body.',
        'Boosts immunity: Ajwain is known for its antimicrobial and antibacterial properties, which can help protect the body from infections. This makes ajwain mathri a good option for supporting the immune system.',
        'Regulates blood sugar: Whole wheat flour has a low glycemic index, which makes it a suitable option for people with diabetes or those trying to maintain stable blood sugar levels.',
        'Improves skin health: The antioxidants in whole wheat flour and the anti-inflammatory properties of ajwain can contribute to healthy skin. Ajwain is also known to help reduce acne and other skin conditions.',
        'Satiates hunger: The combination of fiber and protein in whole wheat flour, along with the spices in ajwain, helps curb hunger and cravings. This makes it a good snack choice for those looking to manage their appetite.'
      ]
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