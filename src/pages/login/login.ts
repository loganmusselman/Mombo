import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Shared Imports 
import { User } from '../../shared/user';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loginForm = FormGroup;
	users: User = {username: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
  			  public viewCtrl: ViewController, public formBuilder: FormBuilder,
  			  private storage: Storage,
  			  public userprovider: UserProvider) {

  	storage.get('users').then(users => {
        if(users) {
          this.users = users;
          this.loginForm.patchValue({
            'username': this.users.username,
            'password': this.users.password
          });
        }
        else {
          console.log('user not defined');
        }
      });

  	this.loginForm = this.formBuilder.group({
  		username: ['', Validators.required],
  		password: ['', Validators.required],
  		remember: true
  	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
	this.users.username = this.loginForm.get('username').value;
	    this.users.password = this.loginForm.get('password').value;

	    if(this.loginForm.get('remember').value){
	      this.storage.set('users', this.users);
	      }  else {
	        this.storage.remove('users');
	      }  
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

}
