// Tool for a user to defend against the creeps
import { Config } from './config';
import { Utils } from './utils';

export class Weapon {
	id: number;
	text: string;
	constructor(id:number, text:string) {
		this.id = id;
		this.text = text;
	};
	action() {
		// action of the weapon by defauly build an dom element
		// The product of the action would be an isolated dom element inside the page a creature could interact with
		let container = document.querySelector('.page');
		let element = document.createElement('div');
		element.setAttribute('class', 'element mdl-card mdl-shadow--2dp');
		// TODO: add random content 
		element.innerHTML = '<div class="mdl-card__title">\
								<h2 class="mdl-card__title-text">' + Utils.pickItem(Config.elementTitle) + '</h2></div>\
								<div class="mdl-card__supporting-text">' + Utils.pickItem(Config.elementContents)+'</div>\
							</div>';
		container.appendChild(element);	
	}
}
