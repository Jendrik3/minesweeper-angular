import {Square} from '../square/square.model'
import {splitMatchedQueriesDsl} from "@angular/core/src/view/util";

export class Field {

	readonly field: Square[][];

	constructor(readonly xDimen: number, readonly yDimen: number, readonly numMines: number) {
		const mineGenerator: Iterator<boolean> = [
			...new Array(xDimen * xDimen - numMines).fill(false),
			...new Array(numMines).fill(true)
		].sort(_ => Math.random() < 0.5 ? 1 : -1)[Symbol.iterator]();

		this.field = new Array(yDimen).fill(undefined).map((_, i) => {
			return new Array(xDimen).fill(undefined).map((_, j) => {
				return new Square(j, i, mineGenerator.next().value); // TODO change
			});
		});

		this.field.forEach((row, y) => {
			row.forEach((sq: Square, x) => {
				if (sq.isMine) {
					this.neighbours(sq).forEach(n => n.count++);
				}
			});
		});

	}

	neighbours(sq: Square): Square[] {
		const ret = [];
		for (let dy of [-1, 0, 1]) {
			for (let dx of [-1, 0, 1]) {
				if (dx === 0 && dy === 0) {
					continue;
				}
				const y = sq.y + dy;
				const x = sq.x + dx;
				if (0 <= y && y < this.field.length) {
					if (0 <= x && x < this.field[y].length) {
						ret.push(this.field[y][x]);
					}
				}
			}
		}
		return ret;
	}
}
