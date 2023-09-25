import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const AngularMaterialModules: any = [
    //add Angular Material here
];

const Directives: any = [

]

@NgModule({
  declarations: [
    ...AngularMaterialModules,
    ...Directives
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class SharedModule { }
