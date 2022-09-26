import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTaskListComponent } from './it-task-list.component';

describe('ItTaskListComponent', () => {
  let component: ItTaskListComponent;
  let fixture: ComponentFixture<ItTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
