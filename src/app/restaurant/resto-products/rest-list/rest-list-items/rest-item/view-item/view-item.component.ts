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
  multiProduct = 0 ;
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
    this.changePositionNote();
  }

  increaseQuantity(): void {
    this.quantiteProduct--;
    this.multiProduct = this.product.price * this.quantiteProduct;
    this.changePositionNote();

  }

  changePositionNote(): void{
    this.note = document.getElementById('notejs');
    this.boutonAjouterCommande = document.getElementById('boutonAjouterCommande');
    this.noteAjouterCommande = document.getElementById('noteAjouterCommande');
    this.quantity = document.getElementById('quantite');
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 767) {
      this.noteAjouterCommande.insertBefore(this.note, this.boutonAjouterCommande);
    }
    else {
      this.quantity.appendChild(this.note);
    }

  }

  value(): number {
    return this.quantiteProduct * this.product.price ;
  }
}
