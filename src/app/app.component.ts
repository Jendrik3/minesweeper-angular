import { Component } from '@angular/core';

import { StartButtonComponent } from './start-button/start-button.component';
import { Field } from './field/field.model';

@Component({
	selector: 'mc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Minesweeper';

	field: Field|undefined = undefined;

	start(startButton: StartButtonComponent) {
		this.field = new Field(startButton.xDimen, startButton.yDimen, startButton.mines);
	}
}
