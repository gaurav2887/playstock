import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { environment } from '@app/env';

@Injectable()
export class UserService {

  public user: User;

  constructor(private afDB: AngularFireDatabase, private storage: Storage, private uniqueDeviceID: UniqueDeviceID) {
  }

  saveDeviceId(): Promise<any> {
    return this.storage.get('userDeviceId').then((val) => {
      if (!!val) {
        this.user = {userDeviceId: val};
        return Promise.resolve();
      } else {
        if (environment.mode === 'development') {
          this.user = {userDeviceId: environment.localUser};
          this.storeDeviceIdToStorage(environment.localUser);
          return this.saveUser(environment.localUser);
        }
        this.uniqueDeviceID.get()
          .then((uuid: any) => {
            this.storeDeviceIdToStorage(uuid);
            this.user = {userDeviceId: uuid};
            return this.saveUser(uuid);
          })
          .catch((error: any) => console.log(error));
      }
    });
  }

  public storeDeviceIdToStorage(deviceId): void {
    this.storage.set('userDeviceId', deviceId);
  }

  public async saveUser(uuid: string) {
    return await this.afDB.object(`users/${uuid}`).set({user: this.user});
  }

}
