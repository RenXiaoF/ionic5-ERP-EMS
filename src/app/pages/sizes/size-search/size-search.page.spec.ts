import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SizeSearchPage } from './size-search.page';

describe('SizeSearchPage', () => {
  let component: SizeSearchPage;
  let fixture: ComponentFixture<SizeSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SizeSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
