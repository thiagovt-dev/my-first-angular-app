import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCardsComponent } from './food-cards.component';

describe('FoodCardsComponent', () => {
  let component: FoodCardsComponent;
  let fixture: ComponentFixture<FoodCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
