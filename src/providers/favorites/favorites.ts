import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable } from 'rxjs/Observable';

import { User } from '../../shared/user';
import { UserProvider } from '../user/user';
import { MyPostsProvider } from '../my-posts/my-posts';
/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritesProvider {

  favorites: Array<any>;
  users: User[];
  
  constructor(public http: HttpClient,
  	private storage: Storage,
    private localNotifications: LocalNotifications,
    private userprovider: UserProvider,
    private postsProvider: MyPostsProvider) {
    console.log('Hello FavoritesProvider Provider');

    this.favorites = [];

    storage.get('favorites').then(favorites => {
      if(favorites) {
        this.favorites = favorites;
        console.log(this.favorites);
      } else {
        console.log('favorites not defined');
      }
    });

  }

  addFavorites(id: number): boolean {
    if(!this.isFavorite(id)){
      this.favorites.push(id);
      this.storage.set('favorites', this.favorites);

    }
      this.localNotifications.schedule({
        id: id,
        text: id + ' added as a favorite successsfully.'
      });
    console.log('favorites', this.favorites);
    return true;
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(el => el === id);
  }

  getFavorites(): Observable<User[]>{
    return this.postsProvider.getFeed();
     //.map(users => users.filter(users => this.favorites.some(el => el === description)));
  }

  deleteFavorite(i): Observable {
    
    if(i >= 0){
      this.favorites.splice(i, 1);
      this.storage.set('favorites', this.favorites);
      

    }
    else {
      console.log('Deleting non-existant favorite', i);
      return Observable.throw('Deleting non-existant favorite'+ i);
    }
  }

    

}
