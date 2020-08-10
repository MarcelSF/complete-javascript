console.log(square(4));

function square(number) {
return number * number
}

// Testing JS Objects

let user = {
  firstName: 'Marcel',
  lastName: 'Fonseca',
  role: 'Admin',
  loginCount: 32
}

let samurai = {
  firstName: 'Jin',
  lastName: 'Sakai',
  sword: 'Storm of Sakai',
  alias: 'Ghost',
  clan: 'Sakai',
  armor: 'Gosuke\'s armor',
  weapons: [],
  attackNow: function () {
    return 'Wrath of Yarikawa!';
  },
  reflectOnSelf: function () {
    return this
  },
  pickUpWeapon: function (weapon) {
    this.weapons.push(weapon);
    return `${weapon} was added to ${this.firstName}'s arsenal!`
  }
}

console.log(user.firstName); // Accessing the object info directly.
console.log(samurai.attackNow());// ARRAY notation!!! Custom indexes! :D
samurai.pickUpWeapon('Kunai');
console.log(samurai.reflectOnSelf());
