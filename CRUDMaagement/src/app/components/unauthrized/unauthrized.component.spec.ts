import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthrizedComponent } from './unauthrized.component';

describe('UnauthrizedComponent', () => {
  let component: UnauthrizedComponent;
  let fixture: ComponentFixture<UnauthrizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthrizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthrizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
