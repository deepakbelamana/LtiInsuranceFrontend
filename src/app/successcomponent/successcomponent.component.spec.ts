import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesscomponentComponent } from './successcomponent.component';

describe('SuccesscomponentComponent', () => {
  let component: SuccesscomponentComponent;
  let fixture: ComponentFixture<SuccesscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
