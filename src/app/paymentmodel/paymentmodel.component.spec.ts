import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmodelComponent } from './paymentmodel.component';

describe('PaymentmodelComponent', () => {
  let component: PaymentmodelComponent;
  let fixture: ComponentFixture<PaymentmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
