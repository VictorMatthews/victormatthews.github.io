import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerFundComponent } from './beer-fund.component';

describe('BeerFundComponent', () => {
  let component: BeerFundComponent;
  let fixture: ComponentFixture<BeerFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
