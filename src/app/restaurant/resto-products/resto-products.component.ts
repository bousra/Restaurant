import {Component, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {
  ActionEventResto,
  AppDataStateResto,
  DataStateEnumResto, EventProductActionsTypesResto,
  ProductActionsTypesResto
} from '../../State/resto.state';
import {Restaurant} from '../../model/resto.model';
import {RestoService} from '../../services/resto.service';
import {Router} from '@angular/router';
import {catchError, map, startWith} from 'rxjs/operators';
import {DataStateEnum} from '../../State/product.state';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-resto-products',
  templateUrl: './resto-products.component.html',
  styleUrls: ['./resto-products.component.css']
})
export class RestoProductsComponent implements OnInit {

  @Output() productResto$: Observable<AppDataStateResto<Restaurant[]>> | null = null ;
  readonly DataStateEnumResto = DataStateEnumResto;
  readonly tableName = environment.resto;
  constructor(private serviceResto: RestoService, private router: Router) {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSearch(dataForm: string) {
    // @ts-ignore
    this.productResto$ = this.serviceResto.getResearchProducts(dataForm).pipe(
      map(data => {
        console.log('dataForm Resto-products:' + dataForm);
        console.log(data);
        return ({dataState: DataStateEnumResto.LOADED, data, actionTypes: ProductActionsTypesResto.SEARCH_PRODUCTS});
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onActionEvent($event: ActionEventResto) {
    console.log('actionTYpe onActionEvent', $event);
    switch ($event.type) {
      case(ProductActionsTypesResto.GET_ALL_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_ALL_PRODUCTS, this.tableName, null, null);
        break;
      case(ProductActionsTypesResto.GET_ENTREES_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_ENTREES_PRODUCTS, this.tableName, 'categories', 'entree');
        break;
      case(ProductActionsTypesResto.GET_DESSERTS_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_DESSERTS_PRODUCTS, this.tableName, 'categories', 'dessert');
        break;
      case(ProductActionsTypesResto.SEARCH_PRODUCTS):
        this.onSearch($event.payload);
        break;
      case(ProductActionsTypesResto.GET_RESISTANCE_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_RESISTANCE_PRODUCTS, this.tableName,  'categories', 'resistance');
        break;
      case(ProductActionsTypesResto.GET_BOISSONS_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_BOISSONS_PRODUCTS, this.tableName, 'categories', 'boisson');
        break;
      case(ProductActionsTypesResto.GET_SALADES_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_SALADES_PRODUCTS, this.tableName, 'categories', 'salade');
        break;
      case(EventProductActionsTypesResto.GET_BIO_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_BIO_PRODUCTS, this.tableName, 'regime', 'bio');
        break;
      case(EventProductActionsTypesResto.GET_VEGAN_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_VEGAN_PRODUCTS, this.tableName, 'regime', 'vegan');
        break;
      case(EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS, this.tableName, 'regime', 'vegetarien');
        break;
      case(EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS):
        this.onGetProductCustom(EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS, this.tableName, 'regime', 'sansGluten');
        break;
        break;
      case(ProductActionsTypesResto.GET_PRODUCT):
        this.onGetProduct($event.payload);
        break;
    }
  }

  // tslint:disable-next-line:typedef
  private onGetProduct(product: Restaurant) {
    this.router.navigateByUrl('rest-item/' + product.id);
  }

  onGetProductCustom(actionType: ProductActionsTypesResto | EventProductActionsTypesResto, tableName: string, attributName: string, worGetName: string): void {
    // console.log('actionTYpe onGetProductCustom', actionType);
    this.productResto$ = this.serviceResto.getCustum(tableName, attributName, worGetName).pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: actionType,
          // eventActionType: EventProductActionsTypesResto
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }
}
