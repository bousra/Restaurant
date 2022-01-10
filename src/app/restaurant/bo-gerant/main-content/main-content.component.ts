import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private  primeNgConfig: PrimeNGConfig) { }
  test = [
    {
      name: 'test'
    },
    {
      name: 'test'
    },
    {
      name: 'test'
    },
    {
      name: 'test'
    },
    {
      name: 'test'
    }

  ];

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }

}
