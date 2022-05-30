import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuloComponentesModule } from './components/modulo-componentes.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ModuloComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
