import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'mc-start-button',
	templateUrl: './start-button.component.html',
	styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent implements OnInit {

	@Input() xDimen: number;
	@Input() yDimen: number;
	@Input() mines: number;

	@Output() start = new EventEmitter<StartButtonComponent>();

	constructor() { }

	ngOnInit() {
	}

	startGame() {
		this.start.emit(this);
	}
}
