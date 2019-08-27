import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaturalTypingPipe } from './natural-typing.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimatedIfDirective } from './ng-if-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NaturalTypingPipe,
    AnimatedIfDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
