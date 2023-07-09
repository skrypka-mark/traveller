import { getRandomId } from '@/utils/getRandomId';

interface ICountry {
    id: string;
    country: string;
    image: string,
    description: string;
    gallery: string[],
    price: number;
}

export const countryTours: ICountry[] = [
    {
        id: 'turkey',
        country: 'Türkiye',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/turkey.jpg?alt=media&token=62ce9e33-9ad3-4348-89f4-d485645d22e5&_gl=1*3yzczs*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MTM0OC4wLjAuMA..',
        description: 'Traveling to Turkey is an unforgettable experience, beautiful beaches, rich cultural heritage and hospitality of the locals. <br /> Discover magnificent historical sites such as the Grand Bazaar in Istanbul or the ancient city of Ephesus, enjoy traditional Turkish cuisine and relax on the sandy beaches of the Mediterranean and Aegean Seas. The country is rich in variety of hotels, restaurants and shops where you can enjoy comfort and shopping. We invite you to go on an unforgettable trip to Turkey and create vivid memories!',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/turkey-1.jpg?alt=media&token=a9132c88-ac76-495c-9278-b116dc29bbdf&_gl=1*kjahyo*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjIyMy4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/turkey-2.jpg?alt=media&token=e3b25f43-1ea2-4e40-a6fc-20f154f42b5e&_gl=1*ltkua7*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjI0Ni4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/turkey-3.jpg?alt=media&token=7ebd767f-3373-4f35-ac47-f999c1228047&_gl=1*ot1rzo*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjI2Mi4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'greenland',
        country: 'Greenland',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greenland.jpg?alt=media&token=6b423ce6-d08d-4c57-a4c9-a5641ca64499&_gl=1*1gbt0qn*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MTQzMC4wLjAuMA..',
        description: 'A journey to Greenland is an immersion into the centuries-old icy beauty of nature, thrilling adventures, and encounters with the unique Inuit culture. Discover the majestic glaciers, breathtaking icebergs, and wild national parks that will undoubtedly leave a lasting impression. Explore the richness of wildlife, including beloved polar bears and other incredible animal species. Enjoy dog sledding or snowmobiling and uncover the mesmerizing wonders of the Northern Lights.',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greenland-1.jpg?alt=media&token=2e512a92-757e-4b68-a2fe-22f5ed8f8383&_gl=1*k53fcb*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjM5NS4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greenland-2.jpg?alt=media&token=9e85e121-d05f-497c-a622-65753c1d2a19&_gl=1*1ckzu69*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjQxOC4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greenland-3.jpg?alt=media&token=b82216e6-4f68-4b7c-a36e-8aa777ec74ad&_gl=1*djov06*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjQzNi4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'italy',
        country: 'Italy',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/italy.jpg?alt=media&token=25ff08d4-44f0-4b08-ac76-14c9ef50b103&_gl=1*14bdgcn*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MTQ1NC4wLjAuMA..',
        description: 'Welcome to Italy, a land of timeless beauty and rich cultural heritage. From the ancient ruins of Rome to the enchanting canals of Venice, Italy offers a captivating blend of history, art, and culinary delights. Immerse yourself in the vibrant atmosphere of cities like Florence and Milan, where Renaissance masterpieces and world-renowned fashion await. Indulge in the culinary delights of Italian cuisine, from mouthwatering pasta and pizza to exquisite gelato.',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/italy-1.jpg?alt=media&token=48fe9fd6-07ce-4655-97ea-7fde3f0c1539&_gl=1*1rh0yhc*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjUzMS4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/italy-2.jpg?alt=media&token=d4b82dae-bd07-4cde-994d-7eed09ce4033&_gl=1*129tvd*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjU1NC4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/italy-3.jpg?alt=media&token=299cd91c-9bef-4c8b-9ea1-4cb27a6a8058&_gl=1*19efe2q*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjQ4OTg1NC43LjEuMTY4NjQ5MjU4My4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'greece',
        country: 'Greece',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greece.jpg?alt=media&token=cbc21dc1-da16-4248-9645-337bf298fef0&_gl=1*sbaogm*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjAuMTY4NjU4OTY1OS4wLjAuMA..',
        description: 'Discover Greece, a land of ancient wonders, idyllic islands, and warm hospitality. Explore iconic landmarks like the Acropolis in Athens and the white-washed buildings of Santorini. Relax on sun-kissed beaches and indulge in delicious Mediterranean cuisine. Immerse yourself in history at Delphi and marvel at the monasteries of Meteora. Greece offers an unforgettable experience for every traveler.',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greece-1.jpg?alt=media&token=a62da417-7626-4650-afa1-b6d882e84103&_gl=1*4m28k4*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU4OTc3Ni4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greece-2.jpg?alt=media&token=ff352024-8f5e-45af-9d5e-911d0d9d0198&_gl=1*12te9d2*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU4OTc5Ny4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/greece-3.jpg?alt=media&token=514e05ed-5967-44d8-8b87-8d200f8d6b23&_gl=1*3keum3*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU4OTgxNS4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'england',
        country: 'England',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/england.jpg?alt=media&token=e058831d-2eae-4155-92cc-0bf7193bf9e1&_gl=1*1xgmxvk*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTA2NC4wLjAuMA..',
        description: 'Experience the charm of England, a land of rich history, picturesque countryside, and vibrant cities. Explore the iconic landmarks of London, from the Tower of London to Buckingham Palace. Discover the mystical Stonehenge and explore the charming villages of the Cotswolds. Immerse yourself in the literary world of Shakespeare in Stratford-upon-Avon. Indulge in traditional afternoon tea and savor fish and chips by the seaside. England invites you to embrace its timeless beauty and diverse culture.',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/england-1.jpg?alt=media&token=95ab31be-085a-475a-b132-e79670043cc1&_gl=1*1muusd6*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTE2OC4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/england-2.jpg?alt=media&token=0deac81a-7896-4f72-900c-7cbf40e353d6&_gl=1*j8x7is*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTE5Mi4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/england-3.jpg?alt=media&token=74456e1b-d7a4-44c5-a1d4-29168d378ec4&_gl=1*gn6p9j*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTIxMy4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'maldives',
        country: 'Maldives',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/maldives.jpg?alt=media&token=cd856a59-3bfe-4e84-804b-a88efe80c8c3&_gl=1*uhk7t3*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTc2My4wLjAuMA..',
        description: 'Embark on a tropical paradise getaway to the Maldives, where pristine white sandy beaches, crystal-clear turquoise waters, and luxurious resorts await. Dive into a world of vibrant coral reefs, teeming with colorful marine life, or simply unwind in a hammock under the shade of palm trees. Indulge in exquisite spa treatments, savor delectable seafood cuisine, and soak up the sun on private, secluded islands.',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/maldives-1.jpg?alt=media&token=1b69d91e-4035-4f27-a1c5-3c9218d54c54&_gl=1*1hxpamb*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTg1OS4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/maldives-2.jpg?alt=media&token=b4609bea-6c79-443f-a4e4-6208cfe65d3c&_gl=1*3jqjyb*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTg3OC4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/maldives-3.jpg?alt=media&token=c21f816e-4ac9-4f10-b3da-5ae540b49f63&_gl=1*hs72dd*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTg5MC4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'dubai',
        country: 'Dubai',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/dubai.jpg?alt=media&token=b06f6073-4028-49d0-99b5-7e358d7c8b2a&_gl=1*1gfwpgu*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MTk0MS4wLjAuMA..',
        description: 'Welcome to Dubai, the pearl of the Persian Gulf! This captivating fairy-tale city combines modern achievements with Eastern charm. Immerse yourself in a world of luxury and glamour, explore impressive skyscrapers, indulge in exclusive shopping, and relax on pristine beaches. From visiting the historic Bastakia district to thrilling desert safaris and exciting water parks, Dubai offers unforgettable adventures for all travelers. Embark on a unique journey and discover the magic of Dubai!',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/dubai-1.jpg?alt=media&token=ab8e2afc-1a48-49f3-8f85-2b7caa71553b&_gl=1*vhk5so*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjAzNi4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/dubai-2.jpg?alt=media&token=078960b3-3be6-4c3b-a54d-d2cba622248f&_gl=1*lxkxz7*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjA1NC4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/dubai-3.jpg?alt=media&token=0aab2d1d-d84c-46f8-92ca-8034014b5918&_gl=1*1jdlv8p*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjA2OS4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'bali',
        country: 'Bali',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/bali.jpg?alt=media&token=473fbfae-18f3-4a22-bf4e-fad48c99fd06&_gl=1*1njljo6*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjExNy4wLjAuMA..',
        description: 'Welcome to Bali, the island paradise of Indonesia! Known for its stunning beaches, vibrant culture, and lush landscapes, Bali is a haven for relaxation and adventure. Immerse yourself in the spiritual traditions at ancient temples, indulge in rejuvenating spa treatments, and savor the tantalizing flavors of Balinese cuisine. Experience thrilling water sports, explore vibrant markets, or simply unwind on pristine shores with breathtaking sunsets.',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/bali-1.jpg?alt=media&token=5d5c73ca-c547-4aa9-9633-d0ae03860b28&_gl=1*12ur3ey*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjE5OC4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/bali-2.jpg?alt=media&token=e5b7c725-3e30-40f2-9293-61aca2a11619&_gl=1*t5f0ba*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjIxNS4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/bali-3.jpg?alt=media&token=7d7bca87-78cd-4c89-b68f-86b22879243d&_gl=1*100fofr*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjIyOC4wLjAuMA..',
        ],
        price: 700
    },
    {
        id: 'spain',
        country: 'Spain',
        image: 'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/spain.jpg?alt=media&token=e55cfd58-b046-4f75-bc12-be4888d20364&_gl=1*9501v8*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjI3MS4wLjAuMA..',
        description: 'Bienvenidos a España, the land of rich history, diverse landscapes, and vibrant culture! Explore the iconic cities of Barcelona and Madrid, with their architectural wonders and bustling energy. Immerse yourself in the flamenco rhythms of Andalusia, or relax on the sun-kissed beaches of the Costa del Sol. Marvel at the majestic Alhambra in Granada or stroll through the charming streets of Seville. Indulge in delicious tapas, sample world-renowned wines, and experience the lively festivals that fill the Spanish calendar.',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/spain-1.jpg?alt=media&token=7400aeaf-f1c0-4933-b66d-3acdd8855b8b&_gl=1*1451k6a*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjQxNS4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/spain-2.jpg?alt=media&token=00924ed5-6b5a-46a1-bdec-f8969d313e4d&_gl=1*9k50p6*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjQzOC4wLjAuMA..',
            'https://firebasestorage.googleapis.com/v0/b/traveller-8d197.appspot.com/o/spain-3.jpg?alt=media&token=11c5b5b9-3195-4ddb-b53c-7e31a3d6ca48&_gl=1*11mrv26*_ga*NjU5NjM1MDA5LjE2ODUyMTg1Mzk.*_ga_CW55HF8NVT*MTY4NjU4OTY1OS44LjEuMTY4NjU5MjQ1Ni4wLjAuMA..',
        ],
        price: 700
    },
];




export interface ICreditCard {
    brand: string;
    image: string;
    verification: string;
    separation: string;
    hidden: string;
    accepted: boolean;
    length: number;
}

export const creditCards: ICreditCard[] = [
    {
        brand:        'American Express',
        image:        'images/creditcards/american-express.svg',
        verification: '^3[47][0-9]',
        separation:   '^([0-9]{4})([0-9]{6})?(?:([0-9]{6})([0-9]{5}))?$',
        hidden:       '**** ****** *[0-9][0-9][0-9][0-9]',
        accepted:     true,
        length:       15
    },
    {
        brand:        'MasterCard',
        image:        'images/creditcards/mastercard.svg',
        verification: '^5[1-5][0-9]',
        separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
        hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
        accepted:     true,
        length:       16
    },
    {
        brand:        'Visa',
        image:        'images/creditcards/visa.svg',
        verification: '^4[0-9]',
        separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
        hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
        accepted:     true,
        length:       16
    },
    {
        brand:        'Discover',
        image:        'images/creditcards/discover.svg',
        verification: '^6(?:011|5[0-9]{2})[0-9]',
        separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
        hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
        accepted:     false,
        length:       16
    },
    {
        brand:        'Diners Club',
        image:        'images/creditcards/diners-club-international.svg',
        verification: '^3(?:0[0-5]|[68][0-9])[0-9]',
        separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?(?:([0-9]{4})([0-9]{4})([0-9]{2}))?$',
        hidden:       '**** **** **[0-9][0-9] [0-9][0-9]',
        accepted:     false,
        length:       14
    },
    {
        brand:        'JCB',
        image:        'images/creditcards/jcb.svg',
        verification: '^(?:2131|1800|35[0-9]{3})[0-9]',
        separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
        hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
        accepted:     false,
        length:       16
    }
];
