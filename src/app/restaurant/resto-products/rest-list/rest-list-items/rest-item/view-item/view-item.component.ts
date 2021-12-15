import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../../../model/resto.model';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../../../../../../services/resto.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  @Input() product: Restaurant | null = null;
  constructor() {
  }

  ngOnInit(): void {
  }

}
