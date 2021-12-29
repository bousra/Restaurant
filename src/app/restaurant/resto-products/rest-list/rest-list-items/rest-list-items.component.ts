import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {
  ActionEventResto,
  AppDataStateResto,
  DataStateEnumResto,
  ProductActionsTypesResto
} from '../../../../State/resto.state';
import {Plat, Restaurant} from '../../../../model/resto.model';


@Component({
  selector: 'app-rest-list-items',
  templateUrl: './rest-list-items.component.html',
  styleUrls: ['./rest-list-items.component.css']
})
export class RestListItemsComponent implements OnInit {
  @Output() productRestoEventEmitter: EventEmitter<ActionEventResto> = new EventEmitter<ActionEventResto>();
  readonly DataStateEnumResto = DataStateEnumResto;
  readonly ProductActionsTypesResto = ProductActionsTypesResto;
  @Input() productsInput$: Observable<AppDataStateResto<Restaurant[]>> | null = null;
  @Input() plat: Plat [] | null ;
  selectedProduct: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onActionEvent($event: ActionEventResto){
    this.productRestoEventEmitter.emit($event);
  }
  onGetProductItem(product: Restaurant): void {
    this.selectedProduct = product;
  }
}
