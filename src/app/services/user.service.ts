import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable()
export class UserService {

  public user: User;

  constructor(){}

}
