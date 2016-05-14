export class Creature {
	id: number;
	name: string;
	active: boolean;
	left: number;
	top: number;
	targetLocation: string;
	constructor(id:number, name:string) {
		this.id = id;
		this.name = name;
		this.active = false;
		this.top = 0;
		this.left = 0;
		this.targetLocation = "translate(" + 0 + "px, " + 0 + "px)";
	}
	loose() {
		this.active = true;
		let self = this;
		// setInterval(function() {
		// 	self.left++;
		// },500);
		setTimeout(function() {
			self.findNextTarget();
		}, 1000);
	}
	findNextTarget() {
		let target = document.querySelector('.weapon');
		this.targetLocation = "translate(" + target.offsetLeft + "px, " + target.offsetTop + "px)";
	}
}