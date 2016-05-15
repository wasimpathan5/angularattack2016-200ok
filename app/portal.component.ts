// Evil portal
import { Component } from '@angular/core';
import { Creature } from './creature';
import { Lab } from './lab.service';
import { CreatureComponent } from './creature.component';
import { Config } from './config';
import { EventService } from './event.service';
import { Utils } from './utils';

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
	gameState:any;
	health:number;
	percentHealth:number;
	ngOnInit() {
		this.health = Config.portalHealth;
		let self = this;		
		EventService.state.subscribe(function(state:any) {
			// Do logic here based on the changed game state
			self.gameState = state;
			if (state == 'start') {
				self.start();	
			} else if (state == 'loose') {				 
				 self.stop();
				 self.win();
			}			
		});
	}
	start() {
		let self = this;
		this.createInterval = setInterval(function () {
			self.open();
		}, Config.creatureCreationDelay);
	}
	hit() {
		this.health = this.health - Config.portalClickDamage;
		this.percentHealth = Utils.normalize(this.health,10, Config.portalHealth);
		console.log('hit', this.health, this.percentHealth);
		Utils.showEmotion('.portal-button-container', '-'+ Config.portalClickDamage);
		if (this.health<=0) {
			this.die();
		}
	}
	die() {
		this.stop();
		void EventService.state.next('win');
		for(let i in this.creatures) {
			this.creatures[i].die();
			delete this.creatures[i];
		}
	}
	stop() {
		if (this.createInterval) {
			clearInterval(this.createInterval);
			this.createInterval = null;
		}
		
	}
	win() {
		// evils wins
		for(let i in this.creatures) {
			this.creatures[i].win();			
		}
	}
	open() {
		let targets = document.querySelectorAll('.element:not([destroyed])');
		if (targets.length > 0) {
			let newCreature = this.lab.createCreature(this.creatures.length);
			this.creatures.push(newCreature);
			newCreature.loose();
		} else {
			if (this.gameState != 'loose') {
				void EventService.state.next('loose');
			}			
		}
	}
}