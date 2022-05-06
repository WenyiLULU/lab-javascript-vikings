// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health >0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health >0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
    
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(aViking) {
    this.vikingArmy.push(aViking);
  }
  addSaxon(aSaxon){
    this.saxonArmy.push(aSaxon);
  }
  vikingAttack(){
    let saxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    const result = this.saxonArmy[saxonNumber].receiveDamage(this.vikingArmy[vikingNumber].strength)
    if (this.saxonArmy[saxonNumber].health <= 0){this.saxonArmy.splice(saxonNumber, 1)}
    return result
  }
  saxonAttack(){
    let saxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    let vikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    const result = this.vikingArmy[vikingNumber].receiveDamage(this.saxonArmy[saxonNumber].strength)
    if (this.vikingArmy[vikingNumber].health <= 0){this.vikingArmy.splice(vikingNumber, 1)}
    return result
  }
  genericAttack(){
    let attacker, reciver
    let random = Math.floor(Math.random() * 2);
    if (random === 1) {
      attacker = this.saxonArmy;
      reciver = this.vikingArmy;
    } else {
      attacker = this.saxonArmy;
      reciver = this.vikingArmy;
    }

    let attackNumber = Math.floor(Math.random() * attacker.length);
    let reciveNumber = Math.floor(Math.random() * reciver.length);
    const result = reciver[reciveNumber].receiveDamage(attacker[attackNumber].strength)
    if (reciver[reciveNumber].health <= 0){reciver.splice(reciveNumber, 1)}
    return result

  }
  showStatus(){
    if (this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    }  else if (this.vikingArmy.length >=1 && this.saxonArmy.length >=1) {
      return `Vikings and Saxons are still in the thick of battle.` 
    }

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
