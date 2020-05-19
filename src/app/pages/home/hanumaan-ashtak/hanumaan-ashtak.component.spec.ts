import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HanumaanAshtakComponent } from './hanumaan-ashtak.component';

describe('HanumaanAshtakComponent', () => {
  let component: HanumaanAshtakComponent;
  let fixture: ComponentFixture<HanumaanAshtakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanumaanAshtakComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HanumaanAshtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
