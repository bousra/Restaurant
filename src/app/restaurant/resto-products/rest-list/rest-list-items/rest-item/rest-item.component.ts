import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plat, Restaurant} from '../../../../../model/resto.model';
import {ActionEventResto, ProductActionsTypesResto} from '../../../../../State/resto.state';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../../../../../services/resto.service';

@Component({
  selector: 'app-rest-item',
  templateUrl: './rest-item.component.html',
  styleUrls: ['./rest-item.component.css']
})
export class RestItemComponent implements OnInit {
  productItemId: number;
  BaseLinkImg = 'assets/images/restaurant/';
  @Output() productRestoEventEmitter: EventEmitter<ActionEventResto> = new EventEmitter<ActionEventResto>();
  @Input() productItem: Plat | null = null;
  product: Plat | null = null;
  constructor(private activatedRoute: ActivatedRoute, private restoService: RestoService) {
    // this.productItemId = this.activatedRoute.snapshot.params.id;
  }


  ngOnInit(): void {
    /*this.restoService.getProduct(this.productItemId).subscribe(data => {
      console.log(data);
      this.product = data;
    });*/
  }
  // tslint:disable-next-line:typedef
  onGetProductItem(product: Plat) {
      // this.productRestoEventEmitter.emit({
      //   type: ProductActionsTypesResto.GET_PRODUCT,
      //   payload: product
      // });
    this.product = product;
  }

  getModalName(): string {
    return  'product' + this.productItem.id;
  }

  getCallModalName(): string {
    return '#' + this.getModalName();
  }
}
