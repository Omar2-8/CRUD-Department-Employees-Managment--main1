import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeesListComponent } from './emoployees-list.component';

describe('EmoployeesListComponent', () => {
  let component: EmoployeesListComponent;
  let fixture: ComponentFixture<EmoployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoployeesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
