import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { SquareComponent } from './square/square.component';
import { StartButtonComponent } from './start-button/start-button.component';

@NgModule({
	declarations: [
		AppComponent,
		FieldComponent,
		SquareComponent,
		StartButtonComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
