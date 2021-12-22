import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ActionEventResto,
  AppDataStateResto,
  DataStateEnumResto, EventProductActionsTypesResto,
  ProductActionsTypesResto
} from '../../../State/resto.state';
import {Observable} from 'rxjs';
import {Restaurant} from '../../../model/resto.model';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit {
  constructor() {
  }

  @Output() productRestoEventEmitter: EventEmitter<ActionEventResto> = new EventEmitter<ActionEventResto>();
  @Input() productsInput$: Observable<AppDataStateResto<Restaurant[]>> | null = null;
  readonly DataStateEnumResto = DataStateEnumResto;
  readonly ProductActionsTypesResto = ProductActionsTypesResto;
  starNumber = 0;
  // ngx-slider
  // https://angular-slider.github.io/ngx-slider/demos#trigger-focus-slider
  value = 500;
  highValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 4000,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      return '#e46e0a';
    },
    getPointerColor: (value: number): string => {
      return '#e46e0a';
    }
  };
  ngOnInit(): void {
    this.onGetAllProductsResto();
  }

  // tslint:disable-next-line:typedef
  onSearch(recherche: string) {
    console.log(recherche);
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.SEARCH_PRODUCTS,
      payload: recherche
    });
    return '';
  }

  // tslint:disable-next-line:typedef
  onGetAllProductsResto() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_ALL_PRODUCTS
    });
  }

  // tslint:disable-next-line:typedef
  onGetEntreesProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_ENTREES_PRODUCTS
    });
  }

  // tslint:disable-next-line:typedef
  onGetSaladesProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_SALADES_PRODUCTS
    });
  }

  // tslint:disable-next-line:typedef
  onGetPlatsResistancesProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_RESISTANCE_PRODUCTS
    });
  }

// tslint:disable-next-line:typedef
  onGetDessertsProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_DESSERTS_PRODUCTS
    });
  }

// tslint:disable-next-line:typedef
  onGetBoissonsProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_BOISSONS_PRODUCTS
    });
  }

  getIdSpan(): HTMLElement | null {
    return document.getElementById('spanStar');
  }
  // tslint:disable-next-line:typedef
  dropDownMenuProduct() {
    // const clickedButton = document.getElementById('idMenuProduct');
    const div = document.getElementById('idMenuProduct');

    console.log('div: ' + div);
    if (div) {
      div.classList.toggle('responsive');
    }
  }

  // tslint:disable-next-line:typedef
  onGetBioProducts() {
    this.productRestoEventEmitter.emit({
      type: EventProductActionsTypesResto.GET_BIO_PRODUCTS
    });
  }
// tslint:disable-next-line:typedef
  onGetVeganProducts() {
    this.productRestoEventEmitter.emit({
      type: EventProductActionsTypesResto.GET_VEGAN_PRODUCTS
    });
  }
  // tslint:disable-next-line:typedef
  onGetSansGlutenProducts() {
    this.productRestoEventEmitter.emit({
      type: EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS
    });
  }
  // tslint:disable-next-line:typedef
  onGetVegetarienProducts() {
    this.productRestoEventEmitter.emit({
      type: EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS
    });
  }
  // tslint:disable-next-line:typedef
  onActionEvent($event: ActionEventResto) {
    console.log($event.type);
    switch ($event.type) {
      case(EventProductActionsTypesResto.GET_BIO_PRODUCTS):
        this.onGetBioProducts();
        break;
      case(EventProductActionsTypesResto.GET_VEGAN_PRODUCTS):
        this.onGetVeganProducts();
        break;
      case(EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS):
        this.onGetVegetarienProducts();
        break;
      case(EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS):
        this.onGetSansGlutenProducts();
        break;
      case(ProductActionsTypesResto.GET_PRODUCT):
        this.onGetProduct($event.payload);
        break;
    }
  }

  // tslint:disable-next-line:typedef
  private onGetProduct(product: Restaurant) {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_PRODUCT,
      payload: product
    });
  }
  onGetProductCustom(productType: ProductActionsTypesResto): void{
    this.productRestoEventEmitter.emit({
      type: productType
    });
  }
}
