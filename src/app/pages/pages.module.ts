import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ColorPage } from './colors/color/color.page';


const routes: Routes = [
    { path: 'color', component: ColorPage }
]


@NgModule({
    declarations: [ColorPage],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
        ColorPage
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }