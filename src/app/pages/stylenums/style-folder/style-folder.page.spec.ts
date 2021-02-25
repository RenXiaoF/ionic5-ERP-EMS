import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StyleFolderPage } from './style-folder.page';

describe('StyleFolderPage', () => {
  let component: StyleFolderPage;
  let fixture: ComponentFixture<StyleFolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleFolderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StyleFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
