import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';

import { TabName } from '../../../models/tab-name';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let routerMock: Partial<Router>;
  let breakpointObserverMock: Partial<BreakpointObserver>;

  beforeEach(async () => {
    routerMock = {
      navigate: jest.fn(),
      events: new Subject<any>(),
    };

    breakpointObserverMock = {
      observe: jest.fn().mockReturnValue(of({ matches: false })),
    };

    await TestBed.configureTestingModule({
      imports: [NavbarComponent, NoopAnimationsModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: BreakpointObserver, useValue: breakpointObserverMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.each([[TabName.Clients], [TabName.Tasks], [TabName.About]])(
    'should navigate to the correct tab (%tabName) when navigateToTabName is called',
    (tabName) => {
      component.navigateToTabName(tabName);
      expect(routerMock.navigate).toHaveBeenCalledWith([`${tabName}`]);
    }
  );
});
