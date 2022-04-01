import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateProfilesComponent } from './admin-create-profiles.component';

describe('AdminCreateProfilesComponent', () => {
  let component: AdminCreateProfilesComponent;
  let fixture: ComponentFixture<AdminCreateProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
