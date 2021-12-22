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

@Component({
  selector: 'app-resto-products',
  templateUrl: './resto-products.component.html',
  styleUrls: ['./resto-products.component.css']
})
export class RestoProductsComponent implements OnInit {

  @Output() productResto$: Observable<AppDataStateResto<Restaurant[]>> | null = null;
  readonly DataStateEnumResto = DataStateEnumResto;

  constructor(private serviceResto: RestoService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onGetAllProducts() {
    this.productResto$ = this.serviceResto.getAllProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_ALL_PRODUCTS,
          eventActionType: EventProductActionsTypesResto
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetEntreesProducts() {
    this.productResto$ = this.serviceResto.getEntreesProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_ENTREES_PRODUCTS
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetDessertProducts() {
    this.productResto$ = this.serviceResto.getDessertProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_DESSERTS_PRODUCTS
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetSaladesProducts() {
    this.productResto$ = this.serviceResto.getSaladesProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_SALADES_PRODUCTS
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetResistanceProducts() {
    this.productResto$ = this.serviceResto.getResistanceProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_RESISTANCE_PRODUCTS
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetBoissonsProducts() {
    this.productResto$ = this.serviceResto.getBoissonProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_BOISSONS_PRODUCTS
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
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
    switch ($event.type) {
      case(ProductActionsTypesResto.GET_ALL_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_ALL_PRODUCTS);
        break;
      case(ProductActionsTypesResto.GET_ENTREES_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_ENTREES_PRODUCTS);
        break;
      case(ProductActionsTypesResto.GET_DESSERTS_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_DESSERTS_PRODUCTS);
        break;
      case(ProductActionsTypesResto.SEARCH_PRODUCTS):
        this.onSearch($event.payload);
        break;
      case(ProductActionsTypesResto.GET_RESISTANCE_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_RESISTANCE_PRODUCTS);
        break;
      case(ProductActionsTypesResto.GET_BOISSONS_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_BOISSONS_PRODUCTS);
        break;
      case(ProductActionsTypesResto.GET_SALADES_PRODUCTS):
        this.onGetProductCustom(ProductActionsTypesResto.GET_SALADES_PRODUCTS);
        break;
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
        break;
      case(ProductActionsTypesResto.GET_PRODUCT):
        this.onGetProduct($event.payload);
        break;
    }
  }

  // tslint:disable-next-line:typedef
  onGetBioProducts() {
    this.productResto$ = this.serviceResto.getBioProducts().pipe(
      map(data => {
        return ({dataState: DataStateEnumResto.LOADED, data,
          actionTypes: ProductActionsTypesResto.GET_ALL_PRODUCTS, eventActionTypes: EventProductActionsTypesResto.GET_BIO_PRODUCTS});
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetVeganProducts() {
    this.productResto$ = this.serviceResto.getVeganProducts().pipe(
      map(data => {
        return ({dataState: DataStateEnumResto.LOADED, data,
          actionTypes: ProductActionsTypesResto.GET_ALL_PRODUCTS, eventActionTypes: EventProductActionsTypesResto.GET_VEGAN_PRODUCTS});
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetVegetarienProducts() {
    this.productResto$ = this.serviceResto.getVegetarienProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_ALL_PRODUCTS,
          eventActionTypes: EventProductActionsTypesResto.GET_VEGETARIEN_PRODUCTS
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  onGetSansGlutenProducts() {
    this.productResto$ = this.serviceResto.getSansGlutenProducts().pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: ProductActionsTypesResto.GET_ALL_PRODUCTS,
          eventActionTypes: EventProductActionsTypesResto.GET_SANS_GLUTEN_PRODUCTS
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // tslint:disable-next-line:typedef
  private onGetProduct(product: Restaurant) {
    this.router.navigateByUrl('rest-item/' + product.id);
  }

  onGetProductCustom(actionType: ProductActionsTypesResto): void {
    this.productResto$ = this.serviceResto.getCustum('resto', '', '').pipe(
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
