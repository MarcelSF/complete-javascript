const ATTACK_VALUE = 10;
const STRONG_VALUE = 25;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 15;

const enteredValue = prompt('Maximum life for you and the mosnter', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;


adjustHealthBars(chosenMaxLife);

function reset() {
  playerHealthBar.value = chosenMaxLife;
  monsterHealthBar.value = chosenMaxLife;
  resetGame(chosenMaxLife);
}


function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= monsterDamage;
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('Saved by a miracle!')
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You beat the monster!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('The monster has defeated you!')
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have both died in an epic fight')
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let attackVariable;
  if (mode === 'normal'){
    attackVariable = ATTACK_VALUE;
  } else if (mode === 'strong') {
    attackVariable = STRONG_VALUE;
  }
  const damage = dealMonsterDamage(attackVariable);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('normal')
}

function strongAttackHandler() {
  attackMonster('strong')
}

function healPlayer() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert('You cannnot heal to more than your max initial health!')
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

strongAttackBtn.addEventListener('click', strongAttackHandler);

attackBtn.addEventListener('click', attackHandler);

healBtn.addEventListener('click', healPlayer)
