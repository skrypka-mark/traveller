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
