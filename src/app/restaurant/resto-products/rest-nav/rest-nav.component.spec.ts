import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestNavComponent } from './rest-nav.component';

describe('RestNavComponent', () => {
  let component: RestNavComponent;
  let fixture: ComponentFixture<RestNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
