import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {
  ActionEventRestoCustom,
  AppDataStateResto,
  DataStateEnumResto,
  ProductActionsTypesResto
} from '../../State/resto.state';
import {MenuItem, Plat, PlatMenuItem, Restaurant} from '../../model/resto.model';
import {RestoService} from '../../services/resto.service';
import {Router} from '@angular/router';
import {catchError, map, min, startWith} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AppDataMenu} from '../../State/service-function.class';
import {Options} from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-resto-products',
  templateUrl: './resto-products.component.html',
  styleUrls: ['./resto-products.component.css']
})

export class RestoProductsComponent implements OnInit {
  manualRefresh: EventEmitter<void> = new EventEmitter();

  constructor(private serviceResto: RestoService, private router: Router) {
  }

  currentMenuItem$: Observable<AppDataMenu<MenuItem>> | null ;
  currentMenuItemData: MenuItem | null;
// tableau de récupération du menu categorie
  menuCategories$: Observable<AppDataMenu<MenuItem[]>> | null;
  menuCategorie: MenuItem [] | null;
  idCurrentMenuItem: number;
  regimeForCurrentCategory: string[] = [];
  // Recuperation du menu en cours

  // tableau de récupération de tous les plats
  plat$: Observable<AppDataStateResto<Plat[]>> | null = null;
  plat: Plat[] | null ;
  platFiltrer: Plat [] | null ;
  prixMinimun: number;
  prixMaximum: number;
  value = 100;
  highValue = 500;
  options: Options;
  prixMinMax: [id: number, prixMin: number, prixMax: number][] | null;
  ngOnInit(): void {
    this.getPlat('plat', null, null);
    this.getMenuCategorie('menuItem');
    this.getCurrentMenuItem(1);
    // this.getRegimeForCurrrentCategory(this.plat);
  }

  onSearch(dataForm: string): void {
    // @ts-ignore
    this.productResto$ = this.serviceResto.getResearchProducts(dataForm).pipe(
      map(data => {
        return ({dataState: DataStateEnumResto.LOADED, data, actionTypes: ProductActionsTypesResto.SEARCH_PRODUCTS});
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  onGetProduct(product: Restaurant): void {
    this.router.navigateByUrl('rest-item/' + product.id);
  }

  // recuperation des plats à partir du service
  getPlat(tableName: string, attributName: string, wordGetName: string): void {
    this.plat$ = this.serviceResto.getPlatMenuCatergorie<Plat[]>(tableName, attributName, wordGetName).pipe(
      map(data => {
        this.plat = data;
        this.platFiltrer = this.plat;
        this.regimeForCurrentCategory = [];
       // recuperation de tous les regimes
        for (const platItem of data){
          this.regimeForCurrentCategory.push(platItem.regime);
        }
        // filtre des regimes pour supprimer les duplicatas
        this.regimeForCurrentCategory = this.regimeForCurrentCategory.filter((c, index) => {
          return this.regimeForCurrentCategory.indexOf(c) === index;
        });
        return ({dataState: DataStateEnumResto.LOADED, data});
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  // recuperation des categories à partir du service
  getMenuCategorie(tableName: string): void {
    this.menuCategories$ = this.serviceResto.getPlatMenuCatergorie<MenuItem[]>(tableName, null, null).pipe(
      map(data => {
        this.menuCategorie = data;
        return ({dataState: DataStateEnumResto.LOADED, data});
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );
  }

  onActionEventCustom($event: ActionEventRestoCustom): void {
    if (typeof $event.type === 'number') {
      this.getCurrentMenuItem($event.type);
      for (const  menuItem of this.menuCategorie){
        if ($event.type === menuItem.id && $event.type === 1 ) {
          this.getPlat('plat', null, null);
        }
        if ($event.type === menuItem.id && $event.type !== 1){
          this.getPlat('plat', 'categories', menuItem.nom);
        }
      }
    }
    else if (typeof $event.type === 'string'){
      this.platFiltrer = this.plat.filter(e => e.regime === $event.type);
    }

  }

  // recuperation du menu courant
  getCurrentMenuItem(idMenuItem: number): void{
    this.currentMenuItem$ = this.serviceResto.getMenuItem<MenuItem>(idMenuItem).pipe(
      map(data => {
        this.idCurrentMenuItem = idMenuItem;
        // this.prixMinMax = [];
        this.prixMinimun = data.prixMin;
        this.prixMaximum = data.prixMax;
        this.setNewMaxRange(this.prixMinimun, this.prixMaximum);
        return ({
          dataState: DataStateEnumResto.LOADED,
          data
        });
      }),
      startWith({dataState: DataStateEnumResto.LOADING}),
      catchError(err => of({dataState: DataStateEnumResto.ERROR, errorMessage: err.message}))
    );

    this.currentMenuItem$.subscribe(data => {
        this.currentMenuItemData = data.data;
      }
    );
  }
  setNewMaxRange(minVal: number, maxVal: number): void {
    this.options = {
      floor: minVal,
      ceil: maxVal,
      showSelectionBar: true,
      getSelectionBarColor: (value: number): string => {
        return '#e46e0a';
      },
      getPointerColor: (value: number): string => {
        return '#e46e0a';
      }
    };
    this.manualRefresh.emit();
  }
}
