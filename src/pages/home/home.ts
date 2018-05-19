import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '@app/env';
import { UserService } from '../../app/services/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mode: string = environment.mode;
  constructor(public navCtrl: NavController) {

  }

}
