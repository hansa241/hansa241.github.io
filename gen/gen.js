const cardNames = ["Skeletons", "Fire Spirit", "Ice Spirit", "Electro Spirit", "Goblins", "Spear Goblins", "Bomber", "Bats", "Zap", "Giant Snowball", "Knight", "Archers", "Minions", "Arrows", "Cannon", "Goblin Gang", "Skeleton Barrel", "Firecracker", "Royal Delivery", "Skeleton Dragons", "Mortar", "Tesla", "Barbarians", "Minion Horde", "Rascals", "Royal Giant", "Elite Barbarians", "Royal Recruits", "Heal Spirit", "Ice Golem", "Tombstone", "Mega Minion", "Dart Goblin", "Earthquake", "Elixir Golem", "Fireball", "Mini Pekka", "Musketeer", "Goblin Cage", "Valkyrie", "Battle Ram", "Hog Rider", "Flying Machine", "Furnace", "Zappies", "Bomb Tower", "Battle Healer", "Giant", "Wizard", "Inferno Tower", "Royal Hogs", "Goblin Hut", "Rocket", "Elixir Collector", "Barbarian Hut", "3 Musketeers", "Mirror", "Barbarian Barrel", "Wall Breakers", "Rage", "Skeleton Army", "Goblin Barrel", "Guards", "Tornado", "Clone", "Baby Dragon", "Dark Prince", "Freeze", "Poison", "Hunter", "Goblin Drill", "Witch", "Balloon", "Prince", "Electro Dragon", "Executioner", "Bowler", "Cannon Cart", "Giant Skeleton", "X-Bow", "Goblin Giant", "Lightning", "Pekka", "Golem", "Electro Giant", "Log", "Miner", "Princess", "Ice Wizard", "Royal Ghost", "Bandit", "Fisherman", "Inferno Dragon", "Electro Wizard", "Magic Archer", "Night Witch", "Lumberjack", "Mother Witch", "Ram Rider", "Graveyard", "Sparky", "Mega Knight", "Lava Hound", "Golden Knight", "Mighty Miner", "Archer Queen", "Skeleton King"];
const codes = [26000010, 26000031, 26000030, 26000084, 26000002, 26000019, 26000013, 26000049, 28000008, 28000017, 26000000, 26000001, 26000005, 28000001, 27000000, 26000041, 26000056, 26000064, 28000018, 26000080, 27000002, 27000006, 26000008, 26000022, 26000053, 26000024, 26000043, 26000047, 28000016, 26000038, 27000009, 26000039, 26000040, 28000014, 26000067, 28000000, 26000018, 26000014, 27000012, 26000011, 26000036, 26000021, 26000057, 27000010, 26000052, 27000004, 26000068, 26000003, 26000017, 27000003, 26000059, 27000001, 28000003, 27000007, 27000005, 26000028, 28000006, 28000015, 26000058, 28000002, 26000012, 28000004, 26000025, 28000012, 28000013, 26000015, 26000027, 28000005, 28000009, 26000044, 27000013, 26000007, 26000006, 26000016, 26000063, 26000045, 26000034, 26000054, 26000020, 27000008, 26000060, 28000007, 26000004, 26000009, 26000085, 28000011, 26000032, 26000026, 26000023, 26000050, 26000046, 26000061, 26000037, 26000042, 26000062, 26000048, 26000035, 26000083, 26000051, 28000010, 26000033, 26000055, 26000029, 26000074, 26000065, 26000072, 26000069];
const eCost = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 9, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 8, 8, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 6, 7, 7, 4, 4, 5, 4];
let usedNumbers = [];
let usedNames = [];
let one = null;
let two = null;
let three = null;
let four = null;
let five = null;
let six = null;
let seven = null;
let eight = null;
let n = null;

function check(Q){
  n = Math.floor((Math.random() * 107));
  for (let i = 0; i < Q; i++) {
    while(cardNames[n] === usedNames[i]){
      n = Math.floor((Math.random() * 107));
    }
  }
}

function checkChampions(){
  let count = 0;
  for (let i = 0; i < usedNames.length; i++) {
    if(usedNames[i] === "Golden Knight" || usedNames[i] === "Archer Queen" || usedNames[i] === "Skeleton King" || usedNames[i] === "Mighty Miner"){
      count++;
    }
  }
  if(count >= 2){
    return true;
  }
  return false;
}

function clear(){
  usedNames = [];
  usedNumbers = [];
  one = null;
  two = null;
  three = null;
  four = null;
  five = null;
  six = null;
  seven = null;
  eight = null;
  n = null;
}

function gen() {
  n = Math.floor((Math.random() * 107));
  one = cardNames[n];
  usedNames.push(one);
  usedNumbers.push(n);
  check(1);
  two = cardNames[n];
  usedNames.push(two);
  usedNumbers.push(n);
  check(2);
  three = cardNames[n];
  usedNames.push(three);
  usedNumbers.push(n);
  check(3);
  four = cardNames[n];
  usedNames.push(four);
  usedNumbers.push(n);
  check(4);
  five = cardNames[n];
  usedNames.push(five);
  usedNumbers.push(n);
  check(5);
  six = cardNames[n];
  usedNames.push(six);
  usedNumbers.push(n);
  check(6);
  seven = cardNames[n];
  usedNames.push(seven);
  usedNumbers.push(n);
  check(7);
  eight = cardNames[n];
  usedNames.push(eight);
  usedNumbers.push(n);
  document.getElementById("card1").innerHTML = one;
  document.getElementById("card2").innerHTML = two;
  document.getElementById("card3").innerHTML = three;
  document.getElementById("card4").innerHTML = four;
  document.getElementById("card5").innerHTML = five;
  document.getElementById("card6").innerHTML = six;
  document.getElementById("card7").innerHTML = seven;
  document.getElementById("card8").innerHTML = eight;
}

function getECost(){
  const e1 = eCost[usedNumbers[0]];
  const e2 = eCost[usedNumbers[1]];
  const e3 = eCost[usedNumbers[2]];
  const e4 = eCost[usedNumbers[3]];
  const e5 = eCost[usedNumbers[4]];
  const e6 = eCost[usedNumbers[5]];
  const e7 = eCost[usedNumbers[6]];
  const e8 = eCost[usedNumbers[7]];
  
  const sum = e1 + e2 + e3 + e4 + e5 + e6 + e7 + e8;
  const avg = sum / 8;
  
  document.getElementById("avgECost").innerHTML = avg.toFixed(1);
}

function setLink(){
  const c1 = codes[usedNumbers[0]];
  const c2 = codes[usedNumbers[1]];
  const c3 = codes[usedNumbers[2]];
  const c4 = codes[usedNumbers[3]];
  const c5 = codes[usedNumbers[4]];
  const c6 = codes[usedNumbers[5]];
  const c7 = codes[usedNumbers[6]];
  const c8 = codes[usedNumbers[7]];

  const sc = ";";

  const linkVar = `https://link.clashroyale.com/deck/en?deck=${c1 + sc + c2 + sc + c3 + sc + c4 + sc + c5 + sc + c6 + sc + c7 + sc + c8}`;
  document.getElementById("link").innerHTML = linkVar;
}

function runGenerator(){ //skipcq: JS-0128
  clear();
  gen();
  if (checkChampions()){
    runGenerator();
  }
  getECost();
  setLink();
};