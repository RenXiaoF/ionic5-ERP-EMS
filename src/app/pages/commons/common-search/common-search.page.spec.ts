import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonSearchPage } from './common-search.page';

describe('CommonSearchPage', () => {
  let component: CommonSearchPage;
  let fixture: ComponentFixture<CommonSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
