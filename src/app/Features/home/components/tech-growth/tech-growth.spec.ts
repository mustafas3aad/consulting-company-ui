import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechGrowth } from './tech-growth';

describe('TechGrowth', () => {
  let component: TechGrowth;
  let fixture: ComponentFixture<TechGrowth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechGrowth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechGrowth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
