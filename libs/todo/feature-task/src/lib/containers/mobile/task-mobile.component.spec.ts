import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskMobileComponent } from './task-mobile.component';

describe('TaskMobileComponent', () => {
  let component: TaskMobileComponent;
  let fixture: ComponentFixture<TaskMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
