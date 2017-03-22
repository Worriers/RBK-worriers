import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const grads = [
      {id: 11, username: 'nice', name: 'Mr. Nice', currentJob : 'Web Developer', img: 'https://avatars0.githubusercontent.com/u/139426?v=3&s=400', age: 23, gitHub: 'http://github.com/MontaserRahmani', linkedIn: 'http://linkedin.com', cohort: 2},
      {id: 12, username: 'narco', name: 'Narco', currentJob : 'Mobile Developer', img: 'http://bootsnipp.com/img/avatars/a72ba2f5fa63d21110945fbea19e7f9ad249786b.jpg', age: 24, gitHub: 'http://github.com/MontaserRahmani', linkedIn: 'http://linkedin.com', cohort: 2},
      {id: 13, username: 'bomb', name: 'Bombasto', currentJob : 'Web Developer', img: 'http://static.vectorcharacters.net/uploads/2013/08/Casual_Guy_Vector_Character_Preview.jpg', age: 27, gitHub: 'http://github.com/MontaserRahmani', linkedIn: 'http://linkedin.com', cohort: 1},
      {id: 14, username: 'cel', name: 'Celeritas', currentJob : 'NodeJS Developer', img : 'http://static.vectorcharacters.net/uploads/2012/10/Vector_Business_Woman_Character_Preview_Full.jpg', age: 22, gitHub: 'http://github.com/MontaserRahmani', linkedIn: 'http://linkedin.com', cohort: 1},
    ];
    return {grads};
  }
}