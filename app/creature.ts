export class Creature {
	id: number;
	name: string;
	active: boolean;
	left: number;
	top: number;	
	constructor(id:number, name:string) {
		this.id = id;
		this.name = name;
		this.active = false;
		this.top = 20;
		this.left = 20;
	}
	loose() {
		this.active = true;
		let self = this;
		setInterval(function() {
			self.left++;
		},500);
	}	
}