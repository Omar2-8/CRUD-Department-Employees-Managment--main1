import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManagerTaskListComponent } from './hr-manager-task-list.component';

describe('HrManagerTaskListComponent', () => {
  let component: HrManagerTaskListComponent;
  let fixture: ComponentFixture<HrManagerTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrManagerTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrManagerTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
