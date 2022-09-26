import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDepartmentDirectorTaskListComponent } from './it-department-director-task-list.component';

describe('ItDepartmentDirectorTaskListComponent', () => {
  let component: ItDepartmentDirectorTaskListComponent;
  let fixture: ComponentFixture<ItDepartmentDirectorTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDepartmentDirectorTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDepartmentDirectorTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
