import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-bo-gerant',
  templateUrl: './bo-gerant.component.html',
  styleUrls: ['./bo-gerant.component.css']
})
export class BoGerantComponent implements OnInit {
  hiddenToggle: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  hiddenEmit($event: boolean): void{
    this.hiddenToggle = $event;
  }

}
