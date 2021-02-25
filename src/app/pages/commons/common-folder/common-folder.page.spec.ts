import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonFolderPage } from './common-folder.page';

describe('CommonFolderPage', () => {
  let component: CommonFolderPage;
  let fixture: ComponentFixture<CommonFolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFolderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
