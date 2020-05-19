import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HanumaanArtiComponent } from './hanumaan-arti.component';

describe('HanumaanArtiComponent', () => {
  let component: HanumaanArtiComponent;
  let fixture: ComponentFixture<HanumaanArtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanumaanArtiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HanumaanArtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
