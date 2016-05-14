export class Weapon {
	id: number;
	text: string;
	health: number;
	top: number;
	left: number;
	constructor(id:number, text:string) {
		this.id = id;
		this.text = text;
		this.health = 100;
		this.top = getRandomOffset();
		this.left = getRandomOffset();
	}
	attack() {
		// Implmentation goes here
		alert('attack');
	}	
}

function getRandomOffset() {
	let max = 800;
	let min = 200;
	return Math.floor(Math.random() * (max - min)) + min;
}