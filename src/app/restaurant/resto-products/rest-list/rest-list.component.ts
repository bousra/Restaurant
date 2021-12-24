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
import {RestoService} from '../../../services/resto.service';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit {
  constructor(private service: RestoService) {
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
    this.onGetProductCustom(ProductActionsTypesResto.GET_ALL_PRODUCTS);

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
  dropDownMenuProduct() {
    // const clickedButton = document.getElementById('idMenuProduct');
    const div = document.getElementById('idMenuProduct');

    console.log('div: ' + div);
    if (div) {
      div.classList.toggle('responsive');
    }
  }
  // tslint:disable-next-line:typedef
  onActionEvent($event: ActionEventResto) {
    console.log($event.type);
    switch ($event.type) {
      case(EventProductActionsTypesResto.GET_BIO_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_BIO_PRODUCTS);
        break;
      case(EventProductActionsTypesResto.GET_VEGAN_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_VEGAN_PRODUCTS);
        break;
      case(EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS);
        break;
      case(EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS);
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
  onGetProductCustom(productType: ProductActionsTypesResto | EventProductActionsTypesResto): void{
    this.productRestoEventEmitter.emit({
      type: productType
    });
  }
}
