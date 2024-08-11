import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskModalWebComponent } from './task-modal-web.component';

describe('TaskModalWebComponent', () => {
  let component: TaskModalWebComponent;
  let fixture: ComponentFixture<TaskModalWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskModalWebComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskModalWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
