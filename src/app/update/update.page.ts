import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  myData: any;
  fotoTomada: string | undefined;
  
  name: string = "Soda";
  desc: string = "Galleta soda perosnal 8 unid.";
  price: number = 1.50; 
  constructor() { }

  ngOnInit() {
    this.myData = 'Datos inicializados';
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    this.fotoTomada = 'data:image/jpeg;base64,' + image.base64String;
  }

  async seleccionarDesdeGaleria() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });

    this.fotoTomada = 'data:image/jpeg;base64,' + image.base64String;
  }
}
