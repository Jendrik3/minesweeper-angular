import {Component, OnInit, Input} from '@angular/core';

import {Field} from './field.model';
import {assertIsSet} from '../utils/utils';
import {SquareComponent} from '../square/square.component';
import {Square} from '../square/square.model';

@Component({
	selector: 'mc-field',
	templateUrl: './field.component.html',
	styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

	@Input() field: Field;

	constructor() {
	}

	ngOnInit() {
		assertIsSet(this.field);
	}

	// noinspection JSMethodCanBeStatic
	onSquareClick(squareComponent: SquareComponent) {
		let sq = squareComponent.square;
		sq.revealed = true;
		if (sq.count === 0 && !sq.isMine) {
			this.revealAll(sq);
		}
		// TODO check if mine
	}

	private revealAll(sq: Square) {
		sq.revealed = true;
		if (sq.count === 0) {
			this.field.neighbours(sq).forEach(n => {
				if (!n.revealed) {
					this.revealAll(n);
				}
			});
		}
	}
}
