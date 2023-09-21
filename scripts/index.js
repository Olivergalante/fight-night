`use strict`;
document.addEventListener("DOMContentLoaded", function () {
	// add a css-class that moves the joker from the left side of the screen to the right side of the screen and batman peeking in from the top of the page.
	// I would like for the images to dissaper and words, and buttons populate to beign the battle
	// to take it a step deeper you should have a drop down of different warriors to choose from, depending on the warrior the stats should change as well.
});
const div1 = document.querySelector("#batman");
const div2 = document.querySelector("#joker");
const p1 = document.querySelector("#only5Left");
const uppercut = document.querySelector("#uppercut");

class Warrior {
	constructor(characterName, details, health = 10, power = 5) {
		this.characterName = characterName;
		this.health = health;
		this.power = power;
	}
	dead(characterhealth) {
		return characterhealth <= 0;
	}
}
class Hero extends Warrior {
	constructor(characterName, details, health = 100, power = 50) {
		super(characterName, details, health, power);
	}
	greet1() {
		div1.innerHTML = `STOP there ${character2.characterName} its me ${character1.characterName}`;
	}
	throwboomerang(targetcharacter) {
		targetcharacter.health -= 5;
		alert(
			`HIT! - ${targetcharacter.health} ... Health has been depleated from ${character2.characterName}!`
		);
	}
	uppercut(targetcharacterupper) {
		targetcharacterupper.health -= 5;
		alert(
			`HIT! ${character2.health} health remaining for ${character2.characterName}`
		);
	}
}
class Villian extends Warrior {
	constructor(characterName, details, health = 10, power = 5) {
		super(characterName, details, health, power);
	}
	hitWithCain(targetcharacter1) {
		targetcharacter1.health -= 1;
		alert(
			`HIT! ${character1.characterName} has ${targetcharacter1.health} health remaining!`
		);
		div2.innerHTML = "";
	}
	greet2(character1) {
		div2.innerHTML = `I know its you again ${character1.characterName} !`;
	}
}
const character1 = new Hero("Batman", "Genius Human In Peak condition");
const character2 = new Villian("Joker", "Slimy Thief");

const button = document.querySelector("#clickThrow");
button.addEventListener("click", function () {
	character1.throwboomerang(character2);
	if (character2.dead(character2.health)) {
		console.log(`${character2.characterName} Has been Defeated!`);
		return;
	}
	div2.innerHTML = `${character2.characterName}: Owwwww Ive lost 5 health thanks to you! I only have ${character2.health} Left 😰!`;
	div1.innerHTML = "";
	p1.innerHTML = `${character1.characterName}: Yea, and only ${character2.health} health left to go 😎`;
});
const button2 = document.querySelector("#hitBat");
button2.addEventListener("click", function () {
	character2.hitWithCain(character1);
	div1.innerHTML = `${character1.characterName}: Good hit ${character2.characterName}`;
	p1.innerHTML = "";
});
uppercut.addEventListener("click", function () {
	character1.uppercut(character2);
	if (character2.dead(character2.health)) {
		alert(`${character2.characterName} Has been Defeated!`);
		return;
	}
	div1.innerHTML = `${character1.characterName} You dont Kill people!`;
	div2.innerHTML = "";
	p1.innerHTML = "";
});

//console.log(character1.characterName);
//console.log(character2.characterName);
character1.greet1(character2);
character2.greet2(character1);
