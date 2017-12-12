import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  goMombo() {
    console.log('Inviting ' + this.user.id + ' to Mombo!');
    this.mombo = this.mobmoservice.addMombo(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added to your favorites!',
      duration: 3000
      }).present();
  }
}
