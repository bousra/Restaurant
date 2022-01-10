import {Component, OnInit} from '@angular/core';
import {RestoService} from '../../../services/resto.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

enum statuts  {
  PRIS_EN_CHARGE= 'PRIS_EN_CHARGE',
    RECU = 'RECU',
    PAS_ENCORE_SOUMISE = 'PAS_ENCORE_SOUMISE'
};
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  isSubmitted = false;

  statut: string;
  statuts = statuts;
  commande$: Observable<any> = new Observable<any>();
  constructor(private service: RestoService) {
  }

  ngOnInit(): void {
    this.statut = this.statuts.PAS_ENCORE_SOUMISE;
    this.commande$ = this.service.getPlatMenuCatergorie('commande', null, null).pipe(
      map(
        value => {
          return ({
            value
          });
        }
      )
    );
  }

  delete(): void {
    console.log('delete');
  }
  submit(): void{
    this.isSubmitted = true;
    this.statut = this.statuts.PRIS_EN_CHARGE;
    console.log(this.isSubmitted);
    console.log(this.statut);
  }
}
