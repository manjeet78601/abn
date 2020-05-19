import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SunderkandComponent } from './sunderkand.component';

describe('SunderkandComponent', () => {
  let component: SunderkandComponent;
  let fixture: ComponentFixture<SunderkandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunderkandComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SunderkandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
