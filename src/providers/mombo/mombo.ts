import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/user';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

import 'rxjs/add/operator/map';
/*
  Generated class for the MomboProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MomboProvider {

	mombos: Array<any>; 

  constructor(public http: HttpClient,
    private storage: Storage,
    private localNotifications: LocalNotifications) {
    console.log('Hello MomboProvider Provider');
  }


/*
      this.mombos = [];

    storage.get('mombos').then(mombos => {
      if(mombos) {
        console.log(mombos);
        this.mombos = mombos;
      } else {
        console.log('mombos not defined');
      }
    });
  }

  addMombo(id: number): boolean {
    if(!this.isMombo(id)){
      this.mombos.push(id);
      this.storage.set('mombos', this.mombos);

    }
      this.localNotifications.schedule({
        id: id,
        text: 'Mombo ' + id + ' added as a Mombo successsfully.'
      })
    console.log('mombos', this.mombos);
    return true;
  }

  isMombo(id: number): boolean {
    return this.mombos.some(el => el === id);
  }

  getMombos(): Observable<User[]>{
    return this.userservice.getMombos()
      .map(users => users.filter(user => this.mombos.some(el => el === user.id)));
  }

  deleteMombo(id: number): Observable<User[]> {
    let index = this.mombos.indexOf(id);
    if(index >= 0){
      this.favorites.splice(index, 1);
      this.storage.set('mombos', this.mombos);
      return this.getMombos();

    }
    else {
      console.log('Deleting non-existant mombo ', id);
      return Observable.throw('Deleting non-existant mombo '+id);
    }
  }
*/
}
