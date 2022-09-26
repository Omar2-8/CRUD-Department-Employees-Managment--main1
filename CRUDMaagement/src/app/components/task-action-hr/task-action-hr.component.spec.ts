import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionHrComponent } from './task-action-hr.component';

describe('TaskActionHrComponent', () => {
  let component: TaskActionHrComponent;
  let fixture: ComponentFixture<TaskActionHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskActionHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
