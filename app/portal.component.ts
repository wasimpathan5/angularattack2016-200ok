// Evil portal
import { Component } from '@angular/core';
import { Creature } from './creature';
import { Lab } from './lab.service';
import { CreatureComponent} from './creature.component';
import { WeaponComponent} from './weapon.component';
import { Weapon } from './weapon';

@Component({
	selector: 'portal',
	templateUrl: 'app/portal.component.html',
	providers: [Lab],
	directives: [CreatureComponent, WeaponComponent]
})

export class PortalComponent {
	constructor(private lab: Lab) {}
	creatures: Creature[] = [];
	weapons: Weapon[] = [];
	open() {
		let newCreature = this.lab.createCreature(this.creatures.length);
		this.creatures.push(newCreature);
		newCreature.loose();
		//alert('open');
	}
	createWeapon() {
		let newWeapon = this.lab.createWeapon(this.weapons.length);
		this.weapons.push(newWeapon);
		//newWeapon.attack();
	}
}