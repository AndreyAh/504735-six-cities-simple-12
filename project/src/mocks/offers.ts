import {Offers} from '../types/offer';

export const offers: Offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      'img/studio-01.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 44.370216,
        longitude: 44.895168,
        zoom: 11
      },
      name: 'Paris'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing machine'
    ],
    host: {
      avatarUrl: 'img/2.png',
      id: 1,
      isPro: true,
      name: 'Vera'
    },
    id: 2,
    images: [
      'img/apartment-01.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 44.35514938496378,
      longitude: 4.673877537499948,
      zoom: 4
    },
    maxAdults: 2,
    previewImage: 'img/2.png',
    price: 1201,
    rating: 4.1,
    title: 'Beautiful apartment on the outskirts',
    type: 'apartment'
  },
  {
    bedrooms: 7,
    city: {
      location: {
        latitude: 77.370216,
        longitude: 7.895168,
        zoom: 3
      },
      name: 'Hamburg'
    },
    description: 'A quiet cozy and picturesque place in Hamburg.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towel',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    host: {
      avatarUrl: 'img/3.png',
      id: 3,
      isPro: true,
      name: 'Nadejda'
    },
    id: 3,
    images: [
      'img/apartment-02.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 77.35514938496378,
      longitude: 7.673877537499948,
      zoom: 2
    },
    maxAdults: 4,
    previewImage: 'img/3.png',
    price: 12000,
    rating: 5.0,
    title: 'Great Aprtment!!!! Just Vau!!!',
    type: 'apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 33.370216,
        longitude: 3.895168,
        zoom: 1
      },
      name: 'Brussels'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Cable TV'
    ],
    host: {
      avatarUrl: 'img/4.png',
      id: 4,
      isPro: false,
      name: 'Luba'
    },
    id: 4,
    images: [
      'img/room.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/4.png',
    price: 80,
    rating: 4.0,
    title: 'Small cozy room',
    type: 'room'
  },
];
