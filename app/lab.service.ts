// Evil lab to produce creatures
import { Injectable } from '@angular/core';
import { Creature } from './creature';
import { Weapon } from './weapon';
@Injectable()
export class Lab {
	createCreature(id: number) {
		let creature = new Creature(id, 'Test');
		return creature;
	}
	
	// Should this be moved to a separate service?
	createWeapon(id: number) {
		let weapon = new Weapon(id, 'Dare to kill me!');
		return weapon;
	}
}