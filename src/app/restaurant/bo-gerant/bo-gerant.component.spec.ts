import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoGerantComponent } from './bo-gerant.component';

describe('BoGerantComponent', () => {
  let component: BoGerantComponent;
  let fixture: ComponentFixture<BoGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
