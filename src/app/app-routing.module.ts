import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RestListComponent} from './restaurant/resto-products/rest-list/rest-list.component';
import {RestoProductsComponent} from './restaurant/resto-products/resto-products.component';

const routes: Routes = [
  {path: 'restaurant-products', component: RestoProductsComponent},
  {path: 'restaurant-list', component: RestListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
