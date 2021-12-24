import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {
  ActionEventResto,
  AppDataStateResto,
  EventProductActionsTypesResto,
  ProductActionsTypesResto
} from '../../../../State/resto.state';
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
  readonly EventProductActionsTypesResto = EventProductActionsTypesResto;

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
  AllProduct = {
    ID: ProductActionsTypesResto.GET_ALL_PRODUCTS,
    ALL_BIO: EventProductActionsTypesResto.GET_BIO_PRODUCTS,
    ALL_VEGAN: EventProductActionsTypesResto.GET_VEGAN_PRODUCTS,
    ALL_SANS_GLUTEN: EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS,
    ALL_VEGETARIEN: EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS
  };
  constructor() { }

  ngOnInit(): void {
  }
  onGetFilter(types: EventProductActionsTypesResto): void{
    this.productRestoEventEmitter.emit({
      type: types
    });
  }

}
