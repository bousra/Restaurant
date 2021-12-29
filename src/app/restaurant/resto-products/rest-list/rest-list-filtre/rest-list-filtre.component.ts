import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {async, Observable, of} from 'rxjs';
import {
  ActionEventResto, ActionEventRestoCustom,
  AppDataStateResto, DataStateEnumResto,
  EventProductActionsTypesResto,
  ProductActionsTypesResto
} from '../../../../State/resto.state';
import {MenuItem, PlatMenuItem, Restaurant} from '../../../../model/resto.model';
import {Options} from '@angular-slider/ngx-slider';
import {RestoService} from '../../../../services/resto.service';
import {catchError, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-rest-list-filtre',
  templateUrl: './rest-list-filtre.component.html',
  styleUrls: ['./rest-list-filtre.component.css']
})
export class RestListFiltreComponent implements OnInit {
  @Output() productRestoEventEmitter: EventEmitter<ActionEventRestoCustom> = new EventEmitter<ActionEventRestoCustom>();
  manualRefresh: EventEmitter<void> = new EventEmitter();
  @Input() platMenuItem: PlatMenuItem [] | null;
  @Input() regimeForCurrentCategory: string[] = [];
  @Input() currentMenuItem$: Observable<AppDataStateResto<MenuItem>> | null = null;
  @Input() prixMinimun = 0;
  @Input() prixMaximum = 0;
  @Input() currentMenuItemData: MenuItem | null = null;
  starNumber = 0;
  // ngx-slider
  // https://angular-slider.github.io/ngx-slider/demos#trigger-focus-slider
  value = 1000;
  highValue = 1500;
  @Input() options: Options | null = null;

  constructor(private service: RestoService) {
  }

  ngOnInit(): void {

  }

  onGetFilter(types: string | number): void {
    this.productRestoEventEmitter.emit({
      type: types
    });
  }
}
