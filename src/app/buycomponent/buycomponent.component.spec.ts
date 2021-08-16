import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycomponentComponent } from './buycomponent.component';

describe('BuycomponentComponent', () => {
  let component: BuycomponentComponent;
  let fixture: ComponentFixture<BuycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
