import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  ActionEventResto, ActionEventRestoCustom,
  AppDataStateResto,
  DataStateEnumResto, EventProductActionsTypesResto,
  ProductActionsTypesResto
} from '../../../State/resto.state';
import {Observable, of} from 'rxjs';
import {Menu, MenuItem, Plat, PlatMenuItem, Restaurant} from '../../../model/resto.model';
import {Options} from '@angular-slider/ngx-slider';
import {RestoService} from '../../../services/resto.service';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataMenu} from '../../../State/service-function.class';


@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit {
  constructor(private service: RestoService) {
  }

  @Output() productEmitterCustom: EventEmitter<ActionEventRestoCustom> = new EventEmitter<ActionEventRestoCustom>();
  @Input() productsInput$: Observable<AppDataStateResto<Restaurant[]>> | null = null;
  @Input() menuCategories$: Observable<AppDataMenu<Menu[]>> | null;
  @Input() regimeForCurrentCategory: string[] | null;
  @Input() plat: Plat [] | null;
  @Input() currentMenuItem$: Observable<AppDataMenu<MenuItem>> | null ;
  @Input() idCurrentMenuItem: number;
  @Input() currentMenuItemData: MenuItem | null;
  @Input() prixMinimun = 0;
  @Input() prixMaximum = 0;
  @Input() options: Options | null;
  readonly DataStateEnumResto = DataStateEnumResto;
  readonly ProductActionsTypesResto = ProductActionsTypesResto;
  data: any;
  starNumber = 0;
  readonly  getAllProduct = 1;
  ngOnInit(): void{
    console.log('regimeForCurrentCategory list: ' , this.regimeForCurrentCategory);
  }

  // tslint:disable-next-line:typedef
  onSearch(recherche: string) {
    console.log(recherche);
   /* this.productRestoEventEmitter.emit({
      type: ProductActionsTypesResto.SEARCH_PRODUCTS,
      payload: recherche
    });*/
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
  onActionEvent($event: ActionEventRestoCustom) {
    if (typeof $event.type === 'number'){
      console.log('$event list: ', $event);
    }
    else if (typeof $event.type === 'string'){
      for (const regime of this.regimeForCurrentCategory){
        if ($event.type === regime){
          this.productEmitterCustom.emit({
            type: regime
          });
        }
      }
    }
  }

  /*
   * Customming function
   */
  // Fonction onGetProductEmitCustom elle permet d'envoyer un evenement vers le parent RestProductsComponent
  onGetProductCustom(idCurrentMenu: number): void{
    this.productEmitterCustom.emit({
      type: idCurrentMenu
    });
  }
}
