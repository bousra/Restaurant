import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../../../model/resto.model';
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

@Input() product: Restaurant | null ;
  BaseLinkImg = 'assets/images/restaurant/';
  quantiteProduct = 1;
  quantiteIngredientUn = 1;
  quantiteIngredientDeux = 1;
  quantiteIngredientTrois = 1;
  quantiteIngredientQuatre = 1;
  multiProduct = 0 ;
  decreaseIngredient = '';
  increaseIngredient = '';
  totalSupplements = 0;
  note: HTMLElement |  null;
  boutonAjouterCommande: HTMLElement | null;
  noteAjouterCommande: HTMLElement | null;
  windowWidth: number;
  quantity: HTMLElement | null;
  ingredients = [ {
    name: 'Ingredient 1'
  },
    {
      name: 'Ingredient 2'
    },
    {
      name: 'Ingredient 3'
    },
    {
      name: 'Ingredient 4'
    }
  ];
  constructor() {

  }

  ngOnInit(): void {
     // this.changePositionNote();
  }

  decreaseQuantity(): void {
    this.quantiteProduct++;
    this.multiProduct = this.product.price * this.quantiteProduct;
  }

  increaseQuantity(): void {
    this.quantiteProduct--;
    this.multiProduct = this.product.price * this.quantiteProduct;

  }

  descreaseQuantiteIngredientUn(): void{
this.quantiteIngredientUn--;
  }
increaseQuantiteIngredientUn(): void{
  this.quantiteIngredientUn++;
}
  descreaseQuantiteIngredientDeux(): void{
    this.quantiteIngredientDeux--;
  }
  increaseQuantiteIngredientDeux(): void{
    this.quantiteIngredientDeux++;
  }
  descreaseQuantiteIngredientTrois(): void{
    this.quantiteIngredientTrois--;
  }
  increaseQuantiteIngredientTrois(): void{
    this.quantiteIngredientTrois++;
  }
  descreaseQuantiteIngredientQuatre(): void{
    this.quantiteIngredientQuatre--;
  }
  increaseQuantiteIngredientQuatre(): void{
    this.quantiteIngredientQuatre++;
  }
  value(): number {
    return this.quantiteProduct * this.product.price ;
  }
  valueTotalSupplements(): number{
    this.totalSupplements = this.quantiteIngredientUn *this.product.price;
    this.totalSupplements += this.quantiteIngredientDeux * this.product.price;
    this.totalSupplements += this.quantiteIngredientTrois * this.product.price;
    this.totalSupplements += this.quantiteIngredientQuatre * this.product.price;
    return this.totalSupplements;
  }
}
