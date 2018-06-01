import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: any[];
  tickers: string = 'aapl,adbe,amzn,bac,fb,goog,msft,nflx,qcom,tsla';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  public http: HttpClient) {}

  ngOnInit() {
    if(this.navParams.get('symbol') != null) {
      this.tickers = this.navParams.get('symbol') ;
    }
    
    this.getMarketOverview(this.tickers);
  }

  ionViewDidLoad() {
    if(this.navParams.get('symbol') != null) {
      this.tickers = this.navParams.get('symbol') ;
    }
    
    this.getMarketOverview(this.tickers);
  }

  
  getMarketOverview(_tickers: string) {
    this.http.jsonp('https://api.iextrading.com/1.0/stock/market/news/batch?symbols='+_tickers,'callback').subscribe((data:any) => {
        this.news = data;
    });
  }
}
