import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/user';
import { Comment } from '../../shared/comment';
import { Status } from '../../shared/status';

import { MyPostsProvider } from '../../providers/my-posts/my-posts';
import { ProcessHttpmsgProvider } from '../../providers/process-httpmsg/process-httpmsg';
import { FavoritesProvider } from '../../providers/favorites/favorites';
import { UserProvider } from '../../providers/user/user';

import { FeedformPage } from '../../pages/feedform/feedform';

import 'rxjs/add/operator/do';

/**
 * Generated class for the MyPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-posts',
  templateUrl: 'my-posts.html',
})
export class MyPostsPage implements OnInit {

	users: User;
  userErrMess: string;
  Status: Status;
  tab1: any;
  favorite: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  		public postsProvider: MyPostsProvider,
  		public ProcessHttpmsgService: ProcessHttpmsgProvider,
      public favoritesprovider: FavoritesProvider,
      public userprovider: UserProvider,
      public toastCtrl: ToastController,
      public modalCtrl: ModalController,
  		@Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPostsPage');
  }

  ngOnInit(){
  	this.postsProvider.getFeed()
          .subscribe((users) => {
                  this.users = users
                  console.log(this.users);
              },
              errmess => this.userErrMess = <any>errmess);
  }



  addToFavorites(i){

    console.log('Adding to Favorites ' + this.users[0].feed[i].description);
    this.favorite = this.favoritesprovider.addFavorites(this.users[0].feed[i]);
    
    this.toastCtrl.create({
      message: this.users[0].feed[i].description + ' has been added to your favorites!',
      duration: 3000
      }).present();

  }


  newPost(){
    let modal = this.modalCtrl.create(FeedformPage);
    modal.present();

    }
  }


