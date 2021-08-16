import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvehicleComponent } from './newvehicle.component';

describe('NewvehicleComponent', () => {
  let component: NewvehicleComponent;
  let fixture: ComponentFixture<NewvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
