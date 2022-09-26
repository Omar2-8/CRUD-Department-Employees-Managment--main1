import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionItManagerComponent } from './task-action-it-manager.component';

describe('TaskActionItManagerComponent', () => {
  let component: TaskActionItManagerComponent;
  let fixture: ComponentFixture<TaskActionItManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskActionItManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionItManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
