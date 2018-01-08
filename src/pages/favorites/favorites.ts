import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/user';
import { UserProvider } from '../../providers/user/user';
import { FavoritesProvider } from '../../providers/favorites/favorites';


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {

	favorites: User[];
  	errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  		public userprovider: UserProvider,
  		public favoritesprovider: FavoritesProvider) {
  }

  ngOnInit() {
  	     this.favoritesprovider.getFavorites()
      .subscribe(favorites => this.favorites = favorites,
        errmess => this.errMess = errmess);
  	      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }


}
