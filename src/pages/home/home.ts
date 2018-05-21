import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { environment } from '@app/env';
import { AngularFireDatabase } from 'angularfire2/database';
import { Company } from 'app/model/company.model';
import { HttpClient } from '@angular/common/http';
import { CompNewsPage } from '../comp-news/comp-news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stockWeb: any;
  watchlist: Company[] = [];
  // 10 Tickers: Apple, Facebook, Microsoft, Netflix, 
  // Google, Amazon, Qualcomm, Bank of America, Tesla, Adobe
  tickers: string = 'aapl,adbe,amzn,bac,fb,goog,msft,nflx,qcom,tsla';
  constructor(public navCtrl: NavController,
  public http: HttpClient) {}

  ngOnInit() {
    this.getWatchlist();
  }

  getWatchlist() {
    this.http.jsonp('https://api.iextrading.com/1.0/stock/market/quote?displayPercent=true&symbols='+this.tickers+'&filter=sector,previousClose,companyName,changePercent,latestPrice,open,symbol,','callback').subscribe((data:any[]) => {
        data.forEach((value) => {
          this.watchlist.push(value);
        })
    });
  }

  displayCompNews(compSymbol: string) {
    this.navCtrl.push(CompNewsPage, {symbol: compSymbol});
  }
}
