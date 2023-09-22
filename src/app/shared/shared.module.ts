import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ]
})
export class SharedModule { }
