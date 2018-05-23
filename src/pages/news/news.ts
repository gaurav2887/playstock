import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  news: any[];
  constructor(public navCtrl: NavController,
  public http: HttpClient) {}

  ngOnInit() {
    this.getMarketOverview();
  }

  
  getMarketOverview() {
    this.http.jsonp('https://api.iextrading.com/1.0/stock/market/overview','callback').subscribe((data:any) => {
        this.news = data.news;
    });
  }
}
