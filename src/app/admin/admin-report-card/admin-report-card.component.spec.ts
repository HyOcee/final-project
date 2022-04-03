import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportCardComponent } from './admin-report-card.component';

describe('AdminReportCardComponent', () => {
  let component: AdminReportCardComponent;
  let fixture: ComponentFixture<AdminReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReportCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
