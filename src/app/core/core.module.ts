import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent : CoreModule){
    if (parent) {
      throw new Error("load repeat.");
    }
  }
}
