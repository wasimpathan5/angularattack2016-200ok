// Evil portal
import { Component } from '@angular/core';
import { Creature } from './creature';
import { Lab } from './lab.service';
import { CreatureComponent} from './creature.component';
import { Config } from './config';

@Component({
	selector: 'portal',
	templateUrl: 'app/portal.component.html',
	styleUrls: ['app/portal.component.css'],
	providers: [Lab],
	directives: [CreatureComponent]
})

export class PortalComponent {
	constructor(private lab: Lab) { }
	creatures: Creature[] = [];
	private createInterval: any;
	start() {
		let self = this;
		this.createInterval = setInterval(function () {
			self.open();
		}, Config.creatureCreationDelay);
	}
	stop() {
		if (this.createInterval) {
			clearInterval(this.createInterval);
			this.createInterval = null;
		}
	}

	open() {
		let targets = document.querySelectorAll('.element:not([destroyed])');
		if (targets.length > 0) {
			let newCreature = this.lab.createCreature(this.creatures.length);
			this.creatures.push(newCreature);
			newCreature.loose();
		} else {
			// TODO: web is destroyed
		}
	}

}