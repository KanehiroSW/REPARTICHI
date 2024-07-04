import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDelimanPageRoutingModule } from './order-deliman-routing.module';

import { OrderDelimanPage } from './order-deliman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDelimanPageRoutingModule
  ],
  declarations: [OrderDelimanPage]
})
export class OrderDelimanPageModule {}
