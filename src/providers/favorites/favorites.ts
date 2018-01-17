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

  addFavorites(description: string): boolean {
    if(!this.isFavorite(description)){
      this.favorites.push(description);
      this.storage.set('favorites', this.favorites);

    }
      this.localNotifications.schedule({
        description: description,
        text: description + ' added as a favorite successsfully.'
      });
    console.log('favorites', this.favorites);
    return true;
  }

  isFavorite(description: string): boolean {
    return this.favorites.some(el => el === description);
  }

  getFavorites(): Observable<User[]>{
    return this.postsProvider.getFeed()
      .map(feed => feed.filter(feed => this.favorites.some(el => el === feed.description)));
  }

  deleteFavorite(description: string): Observable<User[]> {
    let index = this.favorites.indexOf(description);
    if(index >= 0){
      this.favorites.splice(index, 1);
      this.storage.set('favorites', this.favorites);
      return this.getFavorites();

    }
    else {
      console.log('Deleting non-existant favorite', description);
      return Observable.throw('Deleting non-existant favorite'+ description);
    }
  }

    deleteAllFavorites() {
  	this.favorites.length = 0;
  	this.storage.set('favorites', this.favorites);
  	
  }

}
