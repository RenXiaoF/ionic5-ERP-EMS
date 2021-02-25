import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColormodalPage } from './colormodal.page';

describe('ColormodalPage', () => {
  let component: ColormodalPage;
  let fixture: ComponentFixture<ColormodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColormodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColormodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
