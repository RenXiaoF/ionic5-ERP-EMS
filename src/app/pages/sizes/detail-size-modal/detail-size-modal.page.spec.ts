import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSizeModalPage } from './detail-size-modal.page';

describe('DetailSizeModalPage', () => {
  let component: DetailSizeModalPage;
  let fixture: ComponentFixture<DetailSizeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSizeModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSizeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
