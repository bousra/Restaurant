import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEventResto, ProductActionsTypesResto} from '../../../State/resto.state';
import {Router} from '@angular/router';
@Component({
  selector: 'app-rest-nav',
  templateUrl: './rest-nav.component.html',
  styleUrls: ['./rest-nav.component.css']
})
export class RestNavComponent implements OnInit {

  constructor(private router: Router) {
  }
  @Output() productRestoEventEmitter: EventEmitter<ActionEventResto> = new EventEmitter<ActionEventResto>();
  ngOnInit(): void {
  }
  redirectToHome(): void {
    this.router.navigateByUrl('/restaurant-products').then(r => console.log('echec de redirection'));
  }
  // tslint:disable-next-line:typedef
  /*onButtonGroupClick($event: { target: any; srcElement: any; }){
    /!*
    Fonction A revoir
     *!/
    const clickedElement = $event.target || $event.srcElement;
    console.log('clickedElement: ' + clickedElement + '\n $event.target: ' + $event.target + '\n $event.srcElement: ' + $event.srcElement);
    if ( clickedElement.nodeName === 'A' ) {
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.activeButtonNav');
      // if a Button already has Class: .activeaBUTTONnNav
      if ( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove('activeButtonNav');
      }
      clickedElement.className += ' activeButtonNav';
    }
  }*/

  get_ma_commande(): void {

  }

  get_mes_notifications(): void {

  }

  get_mon_compte(): void {

  }

  go_to_restaurant_products(): void {
    this.router.navigateByUrl('/restaurant-products');
  }
  go_to_speccial_demandes(): void {
    this.router.navigateByUrl('/restaurant-list');
  }
}
