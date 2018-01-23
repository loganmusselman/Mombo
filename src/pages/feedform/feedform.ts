import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { Status } from '../../shared/status';

/**
 * Generated class for the FeedformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedform',
  templateUrl: 'feedform.html',
})
export class FeedformPage {

	feedForm = FormGroup;
	feedClass = Status;

  constructor(public navCtrl: NavController, public navParams: NavParams,
		  	public viewCtrl: ViewController, private formBuilder: FormBuilder,
		    public storage: Storage) {

  		this.feedForm = this.formBuilder.group({
  			
			description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
			date: ''

  		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedformPage');
  }

  addFeed(){
  	feedForm.date = new Date().toISOString();
  	console.log(this.feedForm.getRawValue());
  
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

}
