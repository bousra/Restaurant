import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { RestoProductsComponent } from './restaurant/resto-products/resto-products.component';
import { RestNavComponent } from './restaurant/resto-products/rest-nav/rest-nav.component';
import { RestListComponent } from './restaurant/resto-products/rest-list/rest-list.component';
import { RestListFiltreComponent } from './restaurant/resto-products/rest-list/rest-list-filtre/rest-list-filtre.component';
import { RestListItemsComponent } from './restaurant/resto-products/rest-list/rest-list-items/rest-list-items.component';
import { RestItemComponent } from './restaurant/resto-products/rest-list/rest-list-items/rest-item/rest-item.component';
import { ViewItemComponent } from './restaurant/resto-products/rest-list/rest-list-items/rest-item/view-item/view-item.component';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RestoProductsComponent,
    RestNavComponent,
    RestListComponent,
    RestListFiltreComponent,
    RestListItemsComponent,
    RestItemComponent,
    ViewItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgxSliderModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
