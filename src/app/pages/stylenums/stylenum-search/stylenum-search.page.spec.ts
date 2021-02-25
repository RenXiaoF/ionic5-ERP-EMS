import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StylenumSearchPage } from './stylenum-search.page';

describe('StylenumSearchPage', () => {
  let component: StylenumSearchPage;
  let fixture: ComponentFixture<StylenumSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylenumSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StylenumSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
