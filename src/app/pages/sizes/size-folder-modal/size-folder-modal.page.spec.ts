import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SizeFolderModalPage } from './size-folder-modal.page';

describe('SizeFolderModalPage', () => {
  let component: SizeFolderModalPage;
  let fixture: ComponentFixture<SizeFolderModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeFolderModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SizeFolderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
