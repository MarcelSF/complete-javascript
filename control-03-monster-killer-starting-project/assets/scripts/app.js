const ATTACK_VALUE = 10;
const STRONG_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= monsterDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You beat the monster!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('The monster has defeated you!')
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have both died in an epic fight')
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

function StrongAttackHandler() {
  attackMonster('strong')
}

function healPlayer() {
  increasePlayerHealth(HEAL_VALUE);
  endRound();
}

strongAttackBtn.addEventListener('click', attackHandler);

attackBtn.addEventListener('click', StrongAttackHandler);

healBtn.addEventListener('click', healPlayer)
