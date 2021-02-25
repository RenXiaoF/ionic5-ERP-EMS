import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestDatetimePage } from './test-datetime.page';

describe('TestDatetimePage', () => {
  let component: TestDatetimePage;
  let fixture: ComponentFixture<TestDatetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDatetimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestDatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
