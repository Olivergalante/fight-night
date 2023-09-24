`use strict`;
document.addEventListener("DOMContentLoaded", function () {
	// add a css-class that moves the joker from the left side of the screen to the right side of the screen and batman peeking in from the top of the page.
	// I would like for the images to dissaper and words, and buttons populate to beign the battle
	// to take it a step deeper you should have a drop down of different warriors to choose from, depending on the warrior the stats should change as well.
});
const div1 = document.querySelector("#batman");
const div2 = document.querySelector("#joker");
const p1 = document.querySelector("#only5Left");

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
		if (targetcharacter.health <= 0) {
			const hitWithCainButton = document.querySelector("#hitBat");
			div2.innerHTML = "Well I may have been defeated however!";
			p1.innerHTML = "";
			hitWithCainButton.setAttribute("hidden", true);
		}
	}

	uppercut(targetcharacterupper) {
		targetcharacterupper.health -= 5;
		alert(
			`HIT! ${character2.health} health remaining for ${character2.characterName}`
		);
		if (targetcharacterupper.health <= 0) {
			const hitWithCainButton = document.querySelector("#hitBat");
			div2.innerHTML = "Well I may have been defeated however!";
			p1.innerHTML = "";
			div1.innerHTML = "";
			hitWithCainButton.setAttribute("hidden", true);
		}
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

class Undead extends Warrior {
	constructor(characterName, details, power, imgsrc) {
		const infiniteHealth = Infinity;
		super(characterName, details, infiniteHealth, power);
		this.imgsrc = imgsrc;
	}
	bite(bittenCharacter) {
		bittenCharacter.health = 0;
		alert(
			`${bittenCharacter.characterName} has been bitten by ${this.characterName} and will turn soon!`
		);
	}
}
const character1 = new Hero("Batman", "Genius Human In Peak condition");
const character2 = new Villian("Joker", "Slimy Thief");

const zombie1 = new Undead(
	"Human Zombie",
	"Flesh eating low level zombie",
	5,
	"./images/zombie_gif.gif"
);
const zombie2 = new Undead(
	"Hulk Zombie",
	"Bigger and slower zombie with great strength"
);
const zombie3 = new Undead("Human Zombie2", "Flesh eating lower level zomie");
const zombie4 = new Undead(
	"Flash Zombie",
	"Zombie leader and is the quickest from the group"
);
const zombies = [zombie1, zombie2, zombie3, zombie4];

function zombierandomizere() {
	const randomIndex = Math.floor(Math.random() * zombies.length);
	const randomZombie = zombies[randomIndex];
	const announcementDiv = document.querySelector("#zombieTalk");
	announcementDiv.innerHTML = `A ${randomZombie.characterName} is approaching!`;
}
const button = document.querySelector("#clickThrow");
button.addEventListener("click", function () {
	character1.throwboomerang(character2);
	if (character2.dead(character2.health)) {
		alert(`${character2.characterName} Has been Defeated!`);
		zombierandomizere();
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

const uppercut = document.querySelector("#uppercut");
uppercut.addEventListener("click", function () {
	character1.uppercut(character2);
	if (character2.dead(character2.health)) {
		alert(`${character2.characterName} Has been Defeated!`);
		zombierandomizere();
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
