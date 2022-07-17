const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => choice.addEventListener("mouseover", maximize));
choices.forEach((choice) => choice.addEventListener("mouseout", minimize));

// const players = document.querySelectorAll(".player");
// players.forEach((player) => player.addEventListener("mouseover", maximize));
// players.forEach((player) => player.addEventListener("mouseout", minimize));

function maximize(e) {
  let originalSrc = e.target.src;
  e.target.src = originalSrc.replace("images/", "images/color_");
  this.classList.toggle("choice-maybe");
}

function minimize(e) {
  let modifiedSrc = e.target.src;
  e.target.src = modifiedSrc.replace("images/color_", "images/");
  this.classList.toggle("choice-maybe");
}
