import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestListItemsComponent } from './rest-list-items.component';

describe('RestListItemsComponent', () => {
  let component: RestListItemsComponent;
  let fixture: ComponentFixture<RestListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
