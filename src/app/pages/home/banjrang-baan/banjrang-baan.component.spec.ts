import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BanjrangBaanComponent } from './banjrang-baan.component';

describe('BanjrangBaanComponent', () => {
  let component: BanjrangBaanComponent;
  let fixture: ComponentFixture<BanjrangBaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanjrangBaanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BanjrangBaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
