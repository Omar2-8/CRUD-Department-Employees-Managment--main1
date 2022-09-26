import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionHrManagerComponent } from './task-action-hr-manager.component';

describe('TaskActionHrManagerComponent', () => {
  let component: TaskActionHrManagerComponent;
  let fixture: ComponentFixture<TaskActionHrManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskActionHrManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionHrManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
