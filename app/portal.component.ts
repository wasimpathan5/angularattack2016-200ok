// Evil portal
import { Component } from '@angular/core';
import { Creature } from './creature';
import { Lab } from './lab.service';
import { CreatureComponent} from './creature.component';
import {Config} from './config';

@Component({
	selector: 'portal',
	templateUrl: 'app/portal.component.html',
	styleUrls: ['app/portal.component.css'],
	providers: [Lab],
	directives: [CreatureComponent]
})

export class PortalComponent {
	constructor(private lab: Lab) {}
	creatures: Creature[] = [];
	private createInterval:any;	
	open() {
		let self = this;
		if (this.createInterval) {
			clearInterval(this.createInterval);
			this.createInterval = null;	
		}
		this.createInterval = setInterval(function () {
			let targets = document.querySelectorAll('.element');
			if (targets.length > 0) {
				let newCreature = self.lab.createCreature(self.creatures.length);
				self.creatures.push(newCreature);
				newCreature.loose();
				//alert('open');
			}

		}, Config.creatureCreationDelay);
	}
	
}