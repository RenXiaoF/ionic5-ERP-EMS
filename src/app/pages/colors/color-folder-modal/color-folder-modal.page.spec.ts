import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorFolderModalPage } from './color-folder-modal.page';

describe('ColorFolderModalPage', () => {
  let component: ColorFolderModalPage;
  let fixture: ComponentFixture<ColorFolderModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFolderModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorFolderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
