import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RestListComponent} from './restaurant/resto-products/rest-list/rest-list.component';
import {RestoProductsComponent} from './restaurant/resto-products/resto-products.component';
import {ViewItemComponent} from './restaurant/resto-products/rest-list/rest-list-items/rest-item/view-item/view-item.component';
import {BoGerantComponent} from './restaurant/bo-gerant/bo-gerant.component';
import {RestItemComponent} from './restaurant/resto-products/rest-list/rest-list-items/rest-item/rest-item.component';

const routes: Routes = [
  {path: 'restaurant-products', component: RestoProductsComponent},
  {path: 'rest-item/:id', component: RestItemComponent},
  {path: 'restaurant-list', component: RestListComponent},
  {path: 'view-item/:id', component: ViewItemComponent},
  {path: 'bo-gerant', component: BoGerantComponent},
  {path: '', component: RestoProductsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
