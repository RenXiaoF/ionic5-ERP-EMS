import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSizePage } from './detail-size.page';

describe('DetailSizePage', () => {
  let component: DetailSizePage;
  let fixture: ComponentFixture<DetailSizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
