// Evil lab to produce creatures
import { Injectable } from '@angular/core';
import { Creature } from './creature';
@Injectable()
export class Lab {
	createCreature(id: number) {
		let creature = new Creature(id, 'Test');
		return creature;
	}
}