import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/user';
import { Comment } from '../../shared/comment';
import { Status } from '../../shared/status';

import { MyPostsProvider } from '../../providers/my-posts/my-posts';
import { ProcessHttpmsgProvider } from '../../providers/process-httpmsg/process-httpmsg';
import { FavoritesProvider } from '../../providers/favorites/favorites';
import { UserProvider } from '../../providers/user/user';

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
export class MyPostsPage implements OnInit{

	users: User;
  userErrMess: string;
  tab1: any;
  favorite: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  		public postsProvider: MyPostsProvider,
  		public ProcessHttpmsgService: ProcessHttpmsgProvider,
      public favoritesprovider: FavoritesProvider,
      public userprovider: UserProvider,
      public toastCtrl: ToastController,
  		@Inject('BaseURL') private BaseURL) {
  //  this.users = userprovider.getUsers();
  //  this.favorite = favoritesprovider.isFavorite(this.users);

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

  addToFavorites(){
    console.log('Adding to Favorites' + this.users.feed);
    this.favorite = this.favoritesprovider.addFavorites(this.users.feed);
    this.toastCtrl.create({
      message: this.users.feed + 'This post has been added to your favorites!',
      duration: 3000
      }).present();
  }

}