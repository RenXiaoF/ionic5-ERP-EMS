import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecdCommonPage } from './secd-common.page';

describe('SecdCommonPage', () => {
  let component: SecdCommonPage;
  let fixture: ComponentFixture<SecdCommonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdCommonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecdCommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
