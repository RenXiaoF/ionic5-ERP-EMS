import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecdStylePage } from './secd-style.page';

describe('SecdStylePage', () => {
  let component: SecdStylePage;
  let fixture: ComponentFixture<SecdStylePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdStylePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecdStylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
