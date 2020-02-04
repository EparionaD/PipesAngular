import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PalabraPipe } from './pipes/palabra.pipe';
import { MostrarPipe } from './pipes/mostrar.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PalabraPipe,
        MostrarPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
