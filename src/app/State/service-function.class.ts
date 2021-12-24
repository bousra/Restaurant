import {
  AppDataStateResto,
  DataStateEnumResto,
  EventProductActionsTypesResto,
  ProductActionsTypesResto
} from './resto.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {RestoService} from '../services/resto.service';
import {Restaurant} from '../model/resto.model';

export class ServiceFunctionClass {
private DataStateEnumResto: DataStateEnumResto;
private productResto$: Observable<AppDataStateResto<Restaurant[]>> | null;
  constructor(private serviceResto: RestoService, private DaDataStateEnumResto: DataStateEnumResto) {
  }
  public onGetProductCustom(eventRegimeActionType: EventProductActionsTypesResto | null = null,
                            actionType: ProductActionsTypesResto, tableName: string, attributName: string, worGetName: string): void {
    // console.log('actionTYpe onGetProductCustom', actionType);
    let getProductResto$ = this.getProductTesto$();
    getProductResto$ = this.serviceResto.getCustum(tableName, attributName, worGetName).pipe(
      map(data => {
        return ({
          dataState: DataStateEnumResto.LOADED,
          data,
          actionTypes: actionType,
          eventRegimeActionTypes: eventRegimeActionType
        });

      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }
  public getProductTesto$(): Observable<AppDataStateResto<Restaurant[]>> | null {
    return this.productResto$;
  }
    public setProductTesto$(productResto$: Observable<AppDataStateResto<Restaurant[]>> | null ): void{
      this.productResto$ = productResto$ ;
    }
}
