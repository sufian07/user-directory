import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import * as faker from 'faker';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
const skills = [
  'html', 'css', 'javascript', 'management', 'accounting', 'teamlead', 'angular.js',
  'react.js', 'redux', 'flux', 'mobx', 'restapi', 'api', 'graphql'
];
const USERS = 'users';

@Injectable()
export class UserService {
  users: Observable<any>;
  constructor(protected storage: AsyncLocalStorage) {
    this.users = this.storage.getItem(USERS);
    this.users.subscribe(users => {
      if ( !users || users.length < 10) {
       this.createUsers();
      }
    });
  }

  getUsers(): any {
    return this.users;
  }

  getUserById(id): any {
    return this.users.filter(user => user.id == id);
  }

  createUsers(): any {
    const users = [];
    for ( let i = 0; i < 200; i++) {
      const user = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        skill: []
      };
      for ( let j = 0; j < 5; j++) {
        user.skill.push(skills[Math.floor(Math.random() * skills.length)]);
      }
      users.push(user);
    }
    this.storage.setItem(USERS, users).subscribe(success =>{
      if(success){
        this.users = this.storage.getItem(USERS);
      }
    });
  }

}
