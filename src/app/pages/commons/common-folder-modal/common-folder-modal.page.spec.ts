import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonFolderModalPage } from './common-folder-modal.page';

describe('CommonFolderModalPage', () => {
  let component: CommonFolderModalPage;
  let fixture: ComponentFixture<CommonFolderModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFolderModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonFolderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
