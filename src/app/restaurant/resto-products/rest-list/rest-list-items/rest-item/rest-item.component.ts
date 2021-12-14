import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../../model/resto.model';

@Component({
  selector: 'app-rest-item',
  templateUrl: './rest-item.component.html',
  styleUrls: ['./rest-item.component.css']
})
export class RestItemComponent implements OnInit {
  BaseLinkImg = 'assets/images/restaurant/';
  @Input() productItem: Restaurant | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
