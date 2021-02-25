import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorFolderPage } from './color-folder.page';

describe('ColorFolderPage', () => {
  let component: ColorFolderPage;
  let fixture: ComponentFixture<ColorFolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFolderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
