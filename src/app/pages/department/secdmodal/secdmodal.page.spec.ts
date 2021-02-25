import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecdmodalPage } from './secdmodal.page';

describe('SecdmodalPage', () => {
  let component: SecdmodalPage;
  let fixture: ComponentFixture<SecdmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecdmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
