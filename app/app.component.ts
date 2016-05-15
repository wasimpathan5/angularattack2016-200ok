import {Component} from '@angular/core';
import {PortalComponent} from './portal.component';
import {DemoComponent} from './demo.component';
import {WeaponComponent} from './weapon.component';
import {Weapon} from './weapon';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [PortalComponent, WeaponComponent, DemoComponent]
})

export class AppComponent {
	test: number[] = [1,2,3];
	weapons: Weapon[] = [new Weapon(1,'Build'), new Weapon(2, 'Freeze')];
	ngOnInit() {
    	this.start();
  	}	
	start () {
		// Start the game
		// TODO: start portal from here
		// alert('Start demo here');
	}
	end() {
		// End the game
	}
}
