import { ref } from 'vue';

export const usePriceList = () => {
    const priceList = {
        airplaneClasses: {
            title: 'Airplane class',
            options: [
                {
                    label: 'Economy class',
                    value: 25,
                    counter: ref(2)
                },
                {
                    label: 'First class',
                    value: 50,
                    counter: ref(2)
                },
                {
                    label: 'Business class',
                    value: 175,
                    counter: ref(2)
                }
            ]
        },
        hotels: {
            title: 'Hotels',
            options: [{
                counter: ref(2),
                stars: true,
                starsAmount: ref(3)
            }]
        },
        entertainments: {
            title: 'Entertainment',
            options: [
                {
                    label: 'Excursion',
                    value: 10,
                    counter: ref(2)
                },
                {
                    label: 'Diving',
                    value: 42.5,
                    counter: ref(2)
                },
                {
                    label: 'Zoo',
                    value: 7.5,
                    counter: ref(2)
                },
                {
                    label: 'Akianarium',
                    value: 15,
                    counter: ref(2)
                },
                {
                    label: 'Museum',
                    value: 2.5,
                    counter: ref(2)
                },
                {
                    label: 'Yacht',
                    value: 125,
                    counter: ref(2)
                },
                {
                    label: 'Snowboard',
                    value: 31,
                    counter: ref(2)
                }
            ]
        },
        additionalOptions: {
            title: 'Additional options',
            options: [
                {
                    label: 'Translator',
                    value: 65,
                    counter: ref(2)
                },
                {
                    label: 'Taxi',
                    value: 12.5,
                    counter: ref(2)
                },
                {
                    label: 'Servant',
                    value: 100,
                    counter: ref(2)
                },
                {
                    label: 'Guide',
                    value: 35,
                    counter: ref(2)
                }
            ]
        }
    };

    return priceList;
};
