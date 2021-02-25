import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepartmentSearchPage } from './department-search.page';

describe('DepartmentSearchPage', () => {
  let component: DepartmentSearchPage;
  let fixture: ComponentFixture<DepartmentSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
