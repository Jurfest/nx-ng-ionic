import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskWebComponent } from './task-web.component';

describe('TaskWebComponent', () => {
  let component: TaskWebComponent;
  let fixture: ComponentFixture<TaskWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskWebComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
