import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { User } from '../../shared/user';
import { Status } from '../../shared/status';
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
  		private storage: Storage,
  		private loadingCtrl: LoadingController,
    	private alertCtrl: AlertController,
    	private toastCtrl: ToastController,
  		public favoritesprovider: FavoritesProvider) {

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

  ngOnInit() {
  	     
  	      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }


  deleteFavorite(item: ItemSliding, i) {
    console.log('Delete', i);

    let alert = this.alertCtrl.create({
      
      message: 'Do you want to delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete canceled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Deleting . . .'
            });
            let toast = this.toastCtrl.create({
              message: 'Favorite deleted successfully',
              duration: 3000
            });
            loading.present();
            this.favoritesprovider.deleteFavorite(i),
            	
            	this.storage.get('favorites'),
                loading.dismiss(); toast.present(),
                errmess => {this.errMess = errmess; loading.dismiss(); };
          }
        }
      ]
    });

    alert.present();

    item.close();
  }


}
