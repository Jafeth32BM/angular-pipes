import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { CanFlyPipe } from './pipes/canFly.pipe';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorPipe } from './pipes/color.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    // PIPES Personalizados
    CanFlyPipe,
    ToggleCasePipe,
    SortByPipe,
    ColorPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
