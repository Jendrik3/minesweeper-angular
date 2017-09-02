export class Square {

	revealed = false;
	count = 0;

	constructor(readonly x: number, readonly y: number, readonly isMine: boolean) {}

}
