// Tool for uses to defend against creatures
import { Component, Input } from '@angular/core';
import { Weapon } from './weapon';

@Component({
	selector: 'weapon',
	templateUrl: 'app/weapon.component.html',
	styleUrls: ['app/weapon.component.css']
})

export class WeaponComponent {
	@Input()
	weapon: Weapon
}