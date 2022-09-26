import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionFinanceComponent } from './task-action-finance.component';

describe('TaskActionFinanceComponent', () => {
  let component: TaskActionFinanceComponent;
  let fixture: ComponentFixture<TaskActionFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskActionFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskActionFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
