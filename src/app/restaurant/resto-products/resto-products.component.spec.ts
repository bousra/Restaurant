import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoProductsComponent } from './resto-products.component';

describe('RestoProductsComponent', () => {
  let component: RestoProductsComponent;
  let fixture: ComponentFixture<RestoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
