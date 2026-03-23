import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CompNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comp-news',
  templateUrl: 'comp-news.html',
})
export class CompNewsPage {
  singleNews: any[] = [];
  symbol: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
) {
  }

  ionViewDidLoad() {
    this.symbol = this.navParams.get('symbol');
    this.getCompanyNews();
    console.log('ionViewDidLoad CompNewsPage');
  }

  getCompanyNews() {
    this.http.jsonp('https://api.iextrading.com/1.0/stock/'+this.symbol+'/news','callback').subscribe((data:any[]) => {
        data.forEach((value) => {
          this.singleNews.push(value);
        })
    });
  }

}
