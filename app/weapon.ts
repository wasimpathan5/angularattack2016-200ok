export class Weapon {
	id: number;
	text: string;
	health: number;
	constructor(id:number, text:string) {
		this.id = id;
		this.text = text;
		this.health = 100;
	}
	attack() {
		// Implmentation goes here
		alert('attack');
	}	
}