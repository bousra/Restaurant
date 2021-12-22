import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../../../model/resto.model';
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
enum ingredientType {
  INGREDIENT_UN= 'INGREDIENT_UN',
  INGREDIENT_DEUX= 'INGREDIENT_DEUX',
  INGREDIENT_TROIS= 'INGREDIENT_TROIS',
  INGREDIENT_QUATRE= 'INGREDIENT_QUATRE',
}

interface Ingredient {
  id: number;
  nom: string;
  quantite: number;
  description: string;
  prix: number;
  total: number;
}

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})

export class ViewItemComponent implements OnInit {

  constructor() {

  }
  static totalSupplements = 0;

  @Input() product: Restaurant | null;
  BaseLinkImg = 'assets/images/restaurant/';
   quantiteIngredientUn = 1;
   quantiteIngredientDeux = 1;
   quantiteIngredientTrois = 1;
   quantiteIngredientQuatre = 1;
  totalSupp = 0;
  quantiteProduct = 0;
  multiProduct = 0;
  note: HTMLElement | null;
  boutonAjouterCommande: HTMLElement | null;
  noteAjouterCommande: HTMLElement | null;
  windowWidth: number;
  quantity: HTMLElement | null;
  ingredients: Ingredient [] | null = [{
    id: 1,
    nom: 'Ingredient 1',
    description: 'desc',
    quantite: 0,
    prix: 100,
    total: 0
  },
    {
      id: 2,
      nom: 'Ingredient 2',
      description: 'desc',
      quantite: 0,
      prix: 200,
      total: 0
    },
    {
      id: 3,
      nom: 'Ingredient 3',
      description: 'desc',
      quantite: 0,
      prix: 150,
      total: 0
    },
    {
      id: 4,
      nom: 'Ingredient 4',
      description: 'desc',
      quantite: 0,
      prix: 200,
      total: 0
    }
  ];

  ngOnInit(): void {
    // this.changePositionNote();
  }

  decreaseQuantity(): void {
    this.quantiteProduct--;
    this.multiProduct = this.product.price * this.quantiteProduct;
  }

  increaseQuantity(): void {
    this.quantiteProduct++;
    this.multiProduct = this.product.price * this.quantiteProduct;
  }

  decreaseQuantiteIngredient(ingredient: Ingredient): void {
    ingredient.quantite--;
    ingredient.total = ingredient.quantite * ingredient.prix;
  }

  increaseQuantiteIngredient(ingredient: Ingredient): void {
    ingredient.quantite++;
    ingredient.total = ingredient.quantite * ingredient.prix;
  }

  value(): number {
    return this.quantiteProduct * this.product.price;
  }

  valueTotalSupplements(): number {
    return ViewItemComponent.totalSupplements;
  }
 /* increase(ingredientInput: any): void {
    if (ingredientInput === ingredientType.INGREDIENT_UN) {
      this.increaseQuantiteIngredientUn();
    } else if (ingredientInput === ingredientType.INGREDIENT_DEUX) {
      this.increaseQuantiteIngredientDeux();
    } else if (ingredientInput === ingredientType.INGREDIENT_TROIS) {
      this.increaseQuantiteIngredientTrois();
    } else if (ingredientInput === ingredientType.INGREDIENT_QUATRE) {
      this.increaseQuantiteIngredientQuatre();
    } else {
      console.log(ingredientInput);
    }

  }
  decrease(ingredientInput: Ingredient): void {
    if (ingredientInput === ingredientType.INGREDIENT_UN) {
      this.decreaseQuantiteIngredientUn();
    } else if (ingredientInput === ingredientType.INGREDIENT_DEUX) {
      this.decreaseQuantiteIngredientDeux();
    } else if (ingredientInput === ingredientType.INGREDIENT_TROIS) {
      this.decreaseQuantiteIngredientTrois();
    } else if (ingredientInput === ingredientType.INGREDIENT_QUATRE) {
      this.decreaseQuantiteIngredientQuatre();
    } else {
      console.log(ingredientInput);
    }

  }*/
  increase(ingredient: Ingredient): void {
      this.increaseQuantiteIngredient(ingredient);
      console.log(ingredient.quantite);
      // this.totalSupp += ingredient.total;
  }
  decrease(ingredient: Ingredient): void {
    this.decreaseQuantiteIngredient(ingredient);
    console.log(ingredient.quantite);
    // this.totalSupp -= ingredient.total;
  }

}
