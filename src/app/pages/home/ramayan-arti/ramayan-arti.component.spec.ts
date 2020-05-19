import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RamayanArtiComponent } from './ramayan-arti.component';

describe('RamayanArtiComponent', () => {
  let component: RamayanArtiComponent;
  let fixture: ComponentFixture<RamayanArtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamayanArtiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RamayanArtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
