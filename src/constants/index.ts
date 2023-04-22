interface ICountry {
    id: string;
    country: string;
    image: string,
    description: string;
    gallery: string[],
    price: number;
    currencyTicker: string;
    stars: number;
}

export const countryTours: ICountry[] = [
    {
        id: '1',
        country: 'Türkiye',
        image: 'turkey.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint? Similique, molestiae. Sit natus modi ipsum consectetur ut quod cupiditate maiores optio aliquam distinctio maxime sequi harum, tempora rem est?',
        gallery: [
            'images/countries/641b1f3fb35f19cbe0a8021c47b32698.jpg',
            'images/countries/919481e03f437da51e3be0f9b9a50431.jpg',
            'images/countries/f9ca8dd7e005d5704737dd00494f30b1.jpg',
        ],
        price: 700,
        currencyTicker: '$',
        stars: 2.5
    },
    {
        id: '2',
        country: 'Greenland',
        image: 'greenland.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint? Similique, molestiae. Sit natus modi ipsum consectetur ut quod cupiditate maiores optio aliquam distinctio maxime sequi harum, tempora rem est?',
        gallery: [
            'images/countries/641b1f3fb35f19cbe0a8021c47b32698.jpg',
            'images/countries/919481e03f437da51e3be0f9b9a50431.jpg',
            'images/countries/f9ca8dd7e005d5704737dd00494f30b1.jpg',
        ],
        price: 700,
        currencyTicker: '$',
        stars: 2.5
    },
    {
        id: '3',
        country: 'Italy',
        image: 'italy.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint? Similique, molestiae. Sit natus modi ipsum consectetur ut quod cupiditate maiores optio aliquam distinctio maxime sequi harum, tempora rem est?',
        gallery: [
            'images/countries/641b1f3fb35f19cbe0a8021c47b32698.jpg',
            'images/countries/919481e03f437da51e3be0f9b9a50431.jpg',
            'images/countries/f9ca8dd7e005d5704737dd00494f30b1.jpg',
        ],
        price: 700,
        currencyTicker: '$',
        stars: 2.5
    }
];




interface ICreditCards {
    list: {
        brand: string;
        image: string;
        verification: string;
        separation: string;
        hidden: string;
        accepted: boolean;
        length: number;
    }[];
    active: number | null;
}

export const creditCards: ICreditCards = {
    list: [
        {
            brand:        'American Express',
            image:        '/images/creditcards/american-express.png',
            verification: '^3[47][0-9]',
            separation:   '^([0-9]{4})([0-9]{6})?(?:([0-9]{6})([0-9]{5}))?$',
            hidden:       '**** ****** *[0-9][0-9][0-9][0-9]',
            accepted:     true,
            length:       15
        },
        {
            brand:        'MasterCard',
            image:        '/images/creditcards/mastercard.png',
            verification: '^5[1-5][0-9]',
            separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
            hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
            accepted:     true,
            length:       16
        },
        {
            brand:        'Visa',
            image:        '/images/creditcards/visa.png',
            verification: '^4[0-9]',
            separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
            hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
            accepted:     true,
            length:       16
        },
        {
            brand:        'Discover',
            image:        '/images/creditcards/discover.png',
            verification: '^6(?:011|5[0-9]{2})[0-9]',
            separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
            hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
            accepted:     false,
            length:       16
        },
        {
            brand:        'Diners Club',
            image:        '/images/creditcards/diners-club-international.png',
            verification: '^3(?:0[0-5]|[68][0-9])[0-9]',
            separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?(?:([0-9]{4})([0-9]{4})([0-9]{2}))?$',
            hidden:       '**** **** **[0-9][0-9] [0-9][0-9]',
            accepted:     false,
            length:       14
        },
        {
            brand:        'JCB',
            image:        '/images/creditcards/jcb.png',
            verification: '^(?:2131|1800|35[0-9]{3})[0-9]',
            separation:   '^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$',
            hidden:       '**** **** **** [0-9][0-9][0-9][0-9]',
            accepted:     false,
            length:       16
        }
    ],
    active: null 
};
