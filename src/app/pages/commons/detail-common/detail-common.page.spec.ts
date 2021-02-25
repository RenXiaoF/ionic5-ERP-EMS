import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCommonPage } from './detail-common.page';

describe('DetailCommonPage', () => {
  let component: DetailCommonPage;
  let fixture: ComponentFixture<DetailCommonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCommonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
