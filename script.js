const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices");
const rewardImage = document.getElementById("reward-image");

const story = [
  {
    text: "You fly into the Enchanted Forest. A glowing path splits in two. Do you go left toward the singing flowers or right toward the twinkling cave?",
    choices: [
      { text: "Left (Singing Flowers)", next: 1 },
      { text: "Right (Twinkling Cave)", next: 1 }
    ],
    reward: "🧸 Soft Toy 1"
  },
  {
    text: "A squirrel wizard offers you a riddle. Solve it or follow the butterfly trail?",
    choices: [
      { text: "Solve the Riddle", next: 2 },
      { text: "Follow the Butterflies", next: 2 }
    ],
    reward: "🎁 Soft Toy 2"
  },
  {
    text: "You reach the Crystal Lake. A fairy queen asks: Do you offer her a flower or sing her a melody?",
    choices: [
      { text: "Offer Flower", next: "end" },
      { text: "Sing a Melody", next: "end" }
    ],
    reward: "🎀 Final Soft Toy"
  }
];

function startGame() {
  showLevel(0);
}

function showLevel(index) {
  const level = story[index];
  storyText.innerText = level.text;

  // Show reward for the level
  rewardImage.style.display = "block";
  rewardImage.src = getRewardImage(index);
  rewardImage.alt = level.reward;

  // Clear previous buttons
  choicesContainer.innerHTML = "";

  level.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => {
      if (choice.next === "end") {
        storyText.innerText = "✨ You completed the quest! Bahnishikha wins all her magical soft toys! ✨";
        choicesContainer.innerHTML = "";
        rewardImage.src = getRewardImage(2);
      } else {
        showLevel(choice.next);
      }
    };
    choicesContainer.appendChild(button);
  });
}

function getRewardImage(index) {
  const rewards = [
    "https://i.imgur.com/1Y7ZzwZ.png", // Soft Toy 1 image URL
    "https://i.imgur.com/7BhtJCy.png", // Soft Toy 2 image URL
    "https://i.imgur.com/VAdyr2d.png"  // Final reward image URL
  ];
  return rewards[index];
}

startGame();
