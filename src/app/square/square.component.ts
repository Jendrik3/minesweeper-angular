import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Square} from './square.model';
import {assertIsSet} from '../utils/utils';

@Component({
	selector: 'mc-square',
	templateUrl: './square.component.html',
	styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {

	@Input() square: Square;
	@Output() click = new EventEmitter<SquareComponent>();

	constructor() {
	}

	ngOnInit() {
		assertIsSet(this.square);
	}

}
