import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppDataStateResto, DataStateEnumResto, ProductActionsTypesResto} from '../../../../State/resto.state';
import {Restaurant} from '../../../../model/resto.model';


@Component({
  selector: 'app-rest-list-items',
  templateUrl: './rest-list-items.component.html',
  styleUrls: ['./rest-list-items.component.css']
})
export class RestListItemsComponent implements OnInit {
  readonly DataStateEnumResto = DataStateEnumResto;
  readonly ProductActionsTypesResto = ProductActionsTypesResto;
  @Input() productsInput$: Observable<AppDataStateResto<Restaurant[]>> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
