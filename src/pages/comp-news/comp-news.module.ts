import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompNewsPage } from './comp-news';
import { TimeAgoModule } from '../shared/timeago.module';


@NgModule({
  declarations: [
    CompNewsPage
  ],
  imports: [
    IonicPageModule.forChild(CompNewsPage),
    TimeAgoModule
  ],
  exports: [
    CompNewsPage
  ]
})
export class CompNewsPageModule {}
