import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NASDAQ_COMPANY_LIST } from '../data/naqdaq_company_list';
import { CompanyTickerModel } from '../model/company-ticker.model';
import { environment } from '@app/env';
import { UserService } from './user.service';

@Injectable()
export class FirebaseDataService {

  constructor(private afDB: AngularFireDatabase, private userService: UserService) {
  }

  storeInfoToDatabase() {
    let companyTickerList: CompanyTickerModel[] = [];
    NASDAQ_COMPANY_LIST.forEach( (company) => {
      companyTickerList.push({name: company.name, sector: company.sector, symbol: company.symbol});
    });
    return this.afDB.object('companyTickers').set(companyTickerList);
  }

  initUser(){
    if(environment.mode === 'development') {
      return this.afDB.object('/users/playstock').valueChanges().subscribe( (data) => {
         this.userService.user = data;
      });
    }
  }
}
