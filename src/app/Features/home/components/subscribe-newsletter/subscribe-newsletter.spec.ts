import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNewsletter } from './subscribe-newsletter';

describe('SubscribeNewsletter', () => {
  let component: SubscribeNewsletter;
  let fixture: ComponentFixture<SubscribeNewsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeNewsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeNewsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
