import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HanumaanChalisaComponent } from './hanumaan-chalisa.component';

describe('HanumaanChalisaComponent', () => {
  let component: HanumaanChalisaComponent;
  let fixture: ComponentFixture<HanumaanChalisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanumaanChalisaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HanumaanChalisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
