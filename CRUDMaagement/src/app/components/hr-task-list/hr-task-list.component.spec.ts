import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRTaskListComponent } from './hr-task-list.component';

describe('HRTaskListComponent', () => {
  let component: HRTaskListComponent;
  let fixture: ComponentFixture<HRTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
