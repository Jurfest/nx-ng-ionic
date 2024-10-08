import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TabName } from '../../../models/tab-name';
import { ToggleButtonComponent } from './toggle-button.component';

describe('ToggleButtonComponent', () => {
  let component: ToggleButtonComponent;
  let fixture: ComponentFixture<ToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('isHandset', false);
    fixture.componentRef.setInput('activeTab', TabName.Clients);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleActive when onToggle method is called', () => {
    const toggleActiveSpy = jest.spyOn(component.toggleActive, 'emit');
    component.onToggle(TabName.Tasks);

    fixture.detectChanges();

    expect(toggleActiveSpy).toHaveBeenCalledWith(TabName.Tasks);
  });
});
