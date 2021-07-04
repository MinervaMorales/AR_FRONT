import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as THREE from 'three';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx/';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public camera: any;
  public scene: any;
  public renderer: any;
  public geometry: any;
  public material: any;


  constructor(private platform:Platform, private androidPermissions: AndroidPermissions) {
   navigator.getUserMedia = ((<any>navigator).getUserMedia || (<any>navigator).webkitGetUserMedia || (<any>navigator).mozGetUserMedia || (<any>navigator).msGetUserMedia);

    platform.ready().then(() => {

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);

   })
}


}
