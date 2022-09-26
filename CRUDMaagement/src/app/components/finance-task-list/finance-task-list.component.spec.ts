import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTaskListComponent } from './finance-task-list.component';

describe('FinanceTaskListComponent', () => {
  let component: FinanceTaskListComponent;
  let fixture: ComponentFixture<FinanceTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
