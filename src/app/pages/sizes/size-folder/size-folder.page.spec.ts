import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SizeFolderPage } from './size-folder.page';

describe('SizeFolderPage', () => {
  let component: SizeFolderPage;
  let fixture: ComponentFixture<SizeFolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeFolderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SizeFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
