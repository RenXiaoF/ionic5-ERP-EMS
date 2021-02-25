import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCommonModalPage } from './detail-common-modal.page';

describe('DetailCommonModalPage', () => {
  let component: DetailCommonModalPage;
  let fixture: ComponentFixture<DetailCommonModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCommonModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCommonModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
