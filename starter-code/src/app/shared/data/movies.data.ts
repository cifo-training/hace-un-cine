import { Film } from "../models/movie.model";

const movies: Array<Film>= [
  {
    id: 1,
    title: 'Cinema Paradiso',
    poster: 'https://www.inkroci.com/culture_movie/wp-content/uploads/2018/06/Cinema-Paradiso.jpg',
    synopsis: ' Ontrary to popular belief, Lorem Ipsum is not simply random..',
    genres: [
        'Drema', 'Comedia'       ],
    year: 1989,
    director: 'Lorem Lrem',
    actors: [
      'John Stone', 'Ponnappa Priya', 'Mia Wong', 'Peter Stanbridge', 'Natalie Lee-Walsh'
    ],
    hours: ['20:00', '22:00'],
    room: 1
  },
  {
    id: 2,
    title: 'Nightmare Before Christmas',
    poster: 'https://static.posters.cz/image/750/poster/nightmare-before-christmas-it-s-jack-i34920.jpg',
    synopsis: ' Ontrary to popular belief, Lorem Ipsum is not simply random..',
    genres: [
      'Drema', 'Comedia'       ],
    year: 1989,
    director: 'Lorem Lrem',
    actors: [
    'John Stone', 'Ponnappa Priya', 'Mia Wong', 'Peter Stanbridge', 'Natalie Lee-Walsh'
    ],
    hours: ['20:00', '22:00'],
    room: 2
  },
  {
    id: 3,
    title: 'Amici miei',
    poster: 'https://www.silenzioinsala.com/photos/3349/locandina3349.jpeg',
    synopsis: ' Ontrary to popular belief, Lorem Ipsum is not simply random..',
    genres: [
      'Drema', 'Comedia' ],
    year: 1975,
    director: 'Lorem Lrem',
    actors: [
    'John Stone', 'Ponnappa Priya', 'Mia Wong', 'Peter Stanbridge', 'Natalie Lee-Walsh'
    ],
    hours: ['20:00', '22:00'],
    room: 3
  },
  {
  id: 4,
  title: 'Amarcord',
  poster: 'http://distribuzione.ilcinemaritrovato.it/files/immagini/amarcord/maniamarcord2.jpg',
  synopsis: ' Ontrary to popular belief, Lorem Ipsum is not simply random..',
  genres: [
    'Drema', 'Comedia'       ],
  year: 1973,
  director: 'Lorem Lrem',
  actors: [
  'John Stone', 'Ponnappa Priya', 'Mia Wong', 'Peter Stanbridge', 'Natalie Lee-Walsh'
  ],
  hours: ['20:00', '22:00'],
  room: 4
  },
  {
  id: 5,
  title: 'Blade Runner',
  poster: 'https://2.bp.blogspot.com/-G0wHiaKeM-E/WdhRoWliGvI/AAAAAAAACrk/RRPoFRpjeaAACHJSb4EGtm5kilnd8NiHwCLcBGAs/s1600/Bladerunner4.jpg',
  synopsis: ' Ontrary to popular belief, Lorem Ipsum is not simply random..',
  genres: [
    'Drema', 'Comedia'       ],
  year: 1973,
  director: 'Lorem Lrem',
  actors: [
  'John Stone', 'Ponnappa Priya', 'Mia Wong', 'Peter Stanbridge', 'Natalie Lee-Walsh'
  ],
  hours: ['20:00', '22:00'],
  room: 5
  },
];

export default movies;
