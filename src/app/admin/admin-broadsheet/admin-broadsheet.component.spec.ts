import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBroadsheetComponent } from './admin-broadsheet.component';

describe('AdminBroadsheetComponent', () => {
  let component: AdminBroadsheetComponent;
  let fixture: ComponentFixture<AdminBroadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBroadsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBroadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
