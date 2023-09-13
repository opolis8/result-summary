const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];
htmlAdd();
function htmlAdd() {
  let todoHtml = "";
  data.forEach((dataObject, index) => {
    const { category, score, icon } = dataObject;

    const output = `
    <div class="post js-${category}"><img src="${icon}" alt="image of ${category}"></img><div class="${category}">${category}</div>     <div class="score">${score}/<span class="span-score">100</span></div></div>`;
    todoHtml += output;
  });

  document.querySelector(
    ".summary"
  ).innerHTML = `<div class="js-summary">Summary</div>${todoHtml}<button class="js-button btn-continue" >Continue</button>`;

  console.log(todoHtml);
}

const continueBtn = document.querySelector(".js-button");
continueBtn.addEventListener("click", () => {
  if (!continueBtn.classList.contains("js-buttons")) {
    continueBtn.classList.add("js-buttons");
    continueBtn.classList.remove("btn-continue");
  } else {
    continueBtn.classList.remove("js-buttons");
    continueBtn.classList.add("btn-continue");
    console.log("none");
  }
});
