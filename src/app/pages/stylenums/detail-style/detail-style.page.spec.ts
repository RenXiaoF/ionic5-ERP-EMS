import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailStylePage } from './detail-style.page';

describe('DetailStylePage', () => {
  let component: DetailStylePage;
  let fixture: ComponentFixture<DetailStylePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStylePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailStylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
