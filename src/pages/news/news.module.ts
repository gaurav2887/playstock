import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { TimeAgoModule } from '../shared/timeago.module';

@NgModule({
  declarations: [
    NewsPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    TimeAgoModule
  ],
  exports: [
    NewsPage
  ]
})
export class NewsPageModule {}
