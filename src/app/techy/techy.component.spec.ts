import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechyComponent } from './techy.component';

describe('TechyComponent', () => {
  let component: TechyComponent;
  let fixture: ComponentFixture<TechyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
