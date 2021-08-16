import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtravelinsuranceComponent } from './addtravelinsurance.component';

describe('AddtravelinsuranceComponent', () => {
  let component: AddtravelinsuranceComponent;
  let fixture: ComponentFixture<AddtravelinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtravelinsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtravelinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
