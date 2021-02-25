import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StyleFolderModalPage } from './style-folder-modal.page';

describe('StyleFolderModalPage', () => {
  let component: StyleFolderModalPage;
  let fixture: ComponentFixture<StyleFolderModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleFolderModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StyleFolderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
