import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompNewsPage } from './comp-news';

@NgModule({
  declarations: [
    CompNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompNewsPage),
  ],
})
export class CompNewsPageModule {}
