import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarboardComponent } from './carboard.component';

describe('CarboardComponent', () => {
  let component: CarboardComponent;
  let fixture: ComponentFixture<CarboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
