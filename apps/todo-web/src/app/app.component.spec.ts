import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should display the navbar component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const navbarElement = fixture.debugElement.query(
      By.css('components-web-navbar')
    ).nativeElement;
    expect(navbarElement).toBeTruthy();
  });
});
