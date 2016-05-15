import {Component} from '@angular/core';
import {PortalComponent} from './portal.component';
import {DemoComponent} from './demo.component';
import {WeaponComponent} from './weapon.component';
import {Weapon} from './weapon';
import {EventService} from './event.service';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [PortalComponent, WeaponComponent, DemoComponent]
})

export class AppComponent {
	weapons: Weapon[] = [new Weapon(1,'Build')];
	ngOnInit() {
    	this.start();
		
		// Example how to use service		
		EventService.state.subscribe(function(state) {
			// Do logic here based on the changed game state
			console.log(state);
		});
		
		// Yeld to other components before publishing new state
		let self = this;
		setTimeout(function () {
			self.start();
		});
	}
	
	start() {
		// Start the game
		void EventService.state.next('start');
		
		// Build 10 random elements
		for(let i = 0; i<10; i++) { 
			this.weapons[0].action();
		}
	}
	end() {
		// End the game
	}
}
