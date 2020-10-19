// JAVASCRIPT
"use strict";

document.getElementById("randomNick").addEventListener("click", () => nicknameGen("rand"));
document.getElementById("allNick").addEventListener("click", () => nicknameGen("all"));

let nicknames = [
  "The Dragon Warrior",
  "The Mighty",
  "The Computer Whiz",
  "The Jester",
  "Iron Abs",
  "Torpedo Belly",
  "All Knowing",
  "The Sniper",
  "The Mom Friend"
]


function nicknameGen(type) {
  if(type == "rand") {
    // clear div
    document.getElementById("container").innerHTML = "";

    // randomly choose a nickname
    let random = Math.floor(Math.random() * nicknames.length);

    // append a new paragraph to nickname container

    let pEl = document.createElement("p");
    pEl.innerHTML = `${document.getElementById("firstn").value} "${nicknames[random]}" ${document.getElementById("lastn").value}`

    document.getElementById("container").append(pEl);

  } else if(type == "all") {
    // clear div
    document.getElementById("container").innerHTML = "";

    // loop thru entire div for every single nickname
    for(let i = 0; i < nicknames.length; i++) {
      let pEl = document.createElement("p");
      pEl.innerHTML = `${document.getElementById("firstn").value} "${nicknames[i]}" ${document.getElementById("lastn").value}`
      document.getElementById("container").append(pEl);
    }
  }
}