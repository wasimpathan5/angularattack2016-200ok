// Evil portal
import { Component } from '@angular/core';
import { Creature } from './creature';
import { Lab } from './lab.service';
import { CreatureComponent} from './creature.component';

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
	open() {
		let newCreature = this.lab.createCreature(this.creatures.length);
		this.creatures.push(newCreature);
		newCreature.loose();
		//alert('open');
	}
	
}