import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/user';
import { UserProvider } from '../../providers/user/user';
import { MomboProvider } from '../../providers/mombo/mombo';
import { ProcessHttpmsgProvider } from '../../providers/process-httpmsg/process-httpmsg';

import { MyPostsPage } from '../my-posts/my-posts';

import 'rxjs/add/operator/do';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  users: User[];
  userErrMess: string;
  tab1: any;
  tab2: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public userprovider: UserProvider,
      public momboservice: MomboProvider,
      public ProcessHttpmsgService: ProcessHttpmsgProvider,
      public http: HttpClient,
      private toastCtrl: ToastController,
      @Inject('BaseURL') private BaseURL ){


    this.tab2 = MyPostsPage;

  }

  ngOnInit() {
      this.userprovider.getUsers()
          .subscribe((users) => {
                  this.users = users
                  console.log(this.users);
              },
              errmess => this.userErrMess = <any>errmess);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  addToCircle(){
    console.log('Adding to circle');
  }

  tweetInvite(){
    console.log('Sending tweet');
  }

  getFavoritePost(id: number){
    console.log('Getting all favorites');
  }


  goMombo() {
    console.log('Inviting to Mombo!');
    this.toastCtrl.create({
      message: ' added to your mombos!',
      duration: 3000
      }).present();
  }
}
