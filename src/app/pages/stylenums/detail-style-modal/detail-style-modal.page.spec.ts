import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailStyleModalPage } from './detail-style-modal.page';

describe('DetailStyleModalPage', () => {
  let component: DetailStyleModalPage;
  let fixture: ComponentFixture<DetailStyleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStyleModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailStyleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
