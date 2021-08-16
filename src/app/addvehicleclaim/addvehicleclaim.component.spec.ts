import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvehicleclaimComponent } from './addvehicleclaim.component';

describe('AddvehicleclaimComponent', () => {
  let component: AddvehicleclaimComponent;
  let fixture: ComponentFixture<AddvehicleclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvehicleclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvehicleclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
