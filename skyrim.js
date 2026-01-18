let message = "";

function setup() {
  createCanvas(1500, 715);
  textSize(24);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("black");

  // Draw a big clickable circle in the center
  stroke(0);
  fill(240);
  ellipse(width / 2, height / 2, 400, 400);

  // Button label
  fill(255,255,255);
  textSize(32);
  text("Click me", width / 2, height / 2);

  // Show result message near bottom
  textSize(24);
  text(message, width / 2, height - 60);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < 200) {
    let games = [
//b
      "befriend a follower",
      "become a master alchemist",
      "become a master blacksmith",
      "become a master enchanter",
      "become a werewolf",
      "become Thane of a hold",
      "brew 5 different potions",
      "build a house in Hearthfire",

      //c
      "complete a Daedric quest",
      "complete a side quest",
      "complete the Companions questline",
      "complete the College of Winterhold questline",
      "complete the Dark Brotherhood questline",
      "complete the Lost to the Ages quest",
      "complete the main questline",
      "complete the Thieves Guild questline",
      "craft a Daedric artifact",
      "craft a full set of armor",

      //d
      "defeat Alduin",
      "defeat a vampire lord",
      "defeat Miraak",
      //e
      "execute Ulfric Stormcloak",
      "explore Apocrypha",
      "explore a new location",
      //f
      "find all 13 Standing Stones",
      "find all Word Walls in Skyrim",
      "find the Aetherial Crown",
      "find the Elder Scroll",
      "find a hidden treasure",
      //h
      "hunt and kill a dragon",
      //j
      "join the Dark Brotherhood",
      "join the Thieves Guild",
      //k
      "kill a friendly npc",
      "kill a giant",
      //l
      "learn 3 new shouts",
      //p
      "punch a dragon to death",
      //r
      "raid a dungeon",
      "rescue a prisoner",
      "rescue Farkas from Silver-Blood Inn",
      //s
      "steal a total of 10,000g worth of stuff",
      "steal the Skeleton Key",
      //t
      "train with a weapon master",
    ];
    let randomIndex = floor(random(games.length));
    let selectedGame = games[randomIndex];
    message = "You should do this: " + selectedGame;
  } else {
    message = "Click the button you bastard!";
  }
}
