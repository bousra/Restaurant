import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEventResto, AppDataStateResto, ProductActionsTypesResto} from '../../../../State/resto.state';
import {Restaurant} from '../../../../model/resto.model';
import {Options} from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-rest-list-filtre',
  templateUrl: './rest-list-filtre.component.html',
  styleUrls: ['./rest-list-filtre.component.css']
})
export class RestListFiltreComponent implements OnInit {
  @Input() productsInput$: Observable<AppDataStateResto<Restaurant[]>> | null = null;
  @Output() productRestoEventEmitter: EventEmitter<ActionEventResto> = new EventEmitter<ActionEventResto>();
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

  constructor() { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
  onGetBioProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_BIO_PRODUCTS
    });
  }
// tslint:disable-next-line:typedef
  onGetVeganProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_VEGAN_PRODUCTS
    });
  }
  // tslint:disable-next-line:typedef
  onGetSansGlutenProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS
    });
  }
  // tslint:disable-next-line:typedef
  onGetVegetarienProducts() {
    this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS
    });
  }

}
