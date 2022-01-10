import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { RestoProductsComponent } from './restaurant/resto-products/resto-products.component';
import { RestNavComponent } from './restaurant/resto-products/rest-nav/rest-nav.component';
import { RestListComponent } from './restaurant/resto-products/rest-list/rest-list.component';
import { RestListFiltreComponent } from './restaurant/resto-products/rest-list/rest-list-filtre/rest-list-filtre.component';
import { RestListItemsComponent } from './restaurant/resto-products/rest-list/rest-list-items/rest-list-items.component';
import { RestItemComponent } from './restaurant/resto-products/rest-list/rest-list-items/rest-item/rest-item.component';
import { ViewItemComponent } from './restaurant/resto-products/rest-list/rest-list-items/rest-item/view-item/view-item.component';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommandeComponent } from './restaurant/resto-products/commande/commande.component';
import { BoGerantComponent } from './restaurant/bo-gerant/bo-gerant.component';
import { HeaderComponent } from './restaurant/bo-gerant/header/header.component';
import { NavComponent } from './restaurant/bo-gerant/nav/nav.component';
import { MainContentComponent } from './restaurant/bo-gerant/main-content/main-content.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    RestoProductsComponent,
    RestNavComponent,
    RestListComponent,
    RestListFiltreComponent,
    RestListItemsComponent,
    RestItemComponent,
    ViewItemComponent,
    CommandeComponent,
    BoGerantComponent,
    HeaderComponent,
    NavComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxSliderModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
