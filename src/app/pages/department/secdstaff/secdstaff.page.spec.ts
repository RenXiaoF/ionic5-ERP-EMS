import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecdstaffPage } from './secdstaff.page';

describe('SecdstaffPage', () => {
  let component: SecdstaffPage;
  let fixture: ComponentFixture<SecdstaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdstaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecdstaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
