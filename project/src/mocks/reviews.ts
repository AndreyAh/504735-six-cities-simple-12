import {Reviews} from '../types/review';

export const reviews: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Mon Mar 20 2023 20:50:05 GMT+0700 (Новосибирск, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': false,
      'name': 'Oliver.conner'
    },
  },
  {
    comment: 'A quiet cozy  Paris.',
    date: 'Tue Mar 20 2023 20:50:05 GMT+0700 (Новосибирск, стандартное время)',
    id: 2,
    rating: 4.4,
    user: {
      'avatarUrl': 'img/2.png',
      'id': 2,
      'isPro': false,
      'name': 'Ivan.conner'
    },
  },
  {
    comment: 'A quiet river by the unique lightness of London.',
    date: 'Mon Mar 20 2023 20:50:05 GMT+0700',
    id: 3,
    rating: 3,
    user: {
      'avatarUrl': 'img/4.png',
      'id': 3,
      'isPro': true,
      'name': 'Jone.doe'
    },
  },
  {
    comment: 'A Glasgo.',
    date: 'Sun Mar 20 2023 20:50:05 GMT+0700',
    id: 1,
    rating: 4,
    user: {
      'avatarUrl': 'img/3.png',
      'id': 4,
      'isPro': true,
      'name': 'I.am'
    },
  }
];
