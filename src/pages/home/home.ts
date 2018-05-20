import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '@app/env';
import { AngularFireDatabase } from 'angularfire2/database';
import { Company } from 'app/model/company.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  watchlist: Company[];
  constructor(public navCtrl: NavController,
  public afDb: AngularFireDatabase) {}

  ngOnInit() {
    this.getWatchlist();
  }

  getWatchlist() {
    this.afDb.list('/users/playstock/watchlist').valueChanges().subscribe((data: Company[]) => {
      this.watchlist = data;
    });
  }
}
