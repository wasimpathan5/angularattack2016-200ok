import { Component, Input } from '@angular/core';
import { Creature } from './creature';

@Component({
	selector: 'creature',
	templateUrl: 'app/creature.component.html',
	styleUrls: ['app/creature.component.css']
})

export class CreatureComponent {
	@Input()
	creature: Creature
}