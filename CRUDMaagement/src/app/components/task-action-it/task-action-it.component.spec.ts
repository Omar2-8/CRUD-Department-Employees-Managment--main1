import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionItComponent } from './task-action-it.component';

describe('TaskActionItComponent', () => {
  let component: TaskActionItComponent;
  let fixture: ComponentFixture<TaskActionItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskActionItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
