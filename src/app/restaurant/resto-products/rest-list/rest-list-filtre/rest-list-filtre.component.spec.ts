import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestListFiltreComponent } from './rest-list-filtre.component';

describe('RestListFiltreComponent', () => {
  let component: RestListFiltreComponent;
  let fixture: ComponentFixture<RestListFiltreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestListFiltreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestListFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
