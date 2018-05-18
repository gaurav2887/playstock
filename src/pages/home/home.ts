import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '@app/env';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mode: string = environment.mode;
  constructor(public navCtrl: NavController) {

  }

}
