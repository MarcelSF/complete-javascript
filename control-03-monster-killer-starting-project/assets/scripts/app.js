const ATTACK_VALUE = 10;
const STRONG_VALUE = 25;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 15;

const MODE_ATTACK = 'normal';
const STRONG_ATTACK = 'strong';
const LOG_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_HEAL_EVENT = 'HEAL'
const LOG_GAME_OVER = 'GAME_OVER'

const enteredValue = prompt('Maximum life for you and the mosnter', '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry;
  if (event == 'PLAYER_ATTACK') {
    logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
    battleLog.push(logEntry);
  }
}

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

  writeToLog(
    LOG_MONSTER_ATTACK,
    monsterDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

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
  if (mode === MODE_ATTACK){
    attackVariable = ATTACK_VALUE;
  } else if (mode === STRONG_ATTACK) {
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

function printLogHandler() {
  console.log(battleLog);
}

strongAttackBtn.addEventListener('click', strongAttackHandler);

attackBtn.addEventListener('click', attackHandler);

healBtn.addEventListener('click', healPlayer)

logBtn.addEventListener('click', printLogHandler);
