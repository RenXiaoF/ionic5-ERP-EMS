import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecdColorPage } from './secd-color.page';

describe('SecdColorPage', () => {
  let component: SecdColorPage;
  let fixture: ComponentFixture<SecdColorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdColorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecdColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
