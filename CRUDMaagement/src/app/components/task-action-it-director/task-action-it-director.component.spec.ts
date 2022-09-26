import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionItDirectorComponent } from './task-action-it-director.component';

describe('TaskActionItDirectorComponent', () => {
  let component: TaskActionItDirectorComponent;
  let fixture: ComponentFixture<TaskActionItDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskActionItDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionItDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
