import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDelimanPage } from './order-deliman.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDelimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDelimanPageRoutingModule {}
