import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientModalMobileComponent } from './client-modal-mobile.component';

describe('ClientModalMobileComponent', () => {
  let component: ClientModalMobileComponent;
  let fixture: ComponentFixture<ClientModalMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ClientModalMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientModalMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
