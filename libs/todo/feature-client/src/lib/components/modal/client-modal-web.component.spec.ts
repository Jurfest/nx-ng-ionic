import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientModalWebComponent } from './client-modal-web.component';

describe('ClientModalWebComponent', () => {
  let component: ClientModalWebComponent;
  let fixture: ComponentFixture<ClientModalWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientModalWebComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientModalWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
