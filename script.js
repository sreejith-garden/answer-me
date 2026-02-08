const quiz = [
  {
    q: "What is the most wanted thing for you  ?",
    options: ["me  ", "Sleep 😴", "chicken ", "phone"],
    answer: 0
  },
  {
    q: "what is the most happiest thing we did?",
    options: ["first meet", "first kiss", "first romance", "all of above "],
    answer: 3
  },
  {
    q: "What is the favorite thing for me?",
    options: ["Cricket", "Defender", "Shirt", "All above"],
    answer: 0
  },
  {
    q: "First thing you notice me?",
    options: ["my hair", "my eyes", "my lips", "my body"],
    answer: 1
  },
  {
    q: "next time we meet what do you want ?",
    options: ["kurta", "waist chain ", "jumakha", "anything thing from me "],
    answer: 3
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion() {
  questionEl.innerText = quiz[index].q;
  optionsEl.innerHTML = "";

  quiz[index].options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(i) {
  // ✅ If correct, add score
  if (i === quiz[index].answer) {
    score++;
  } else {
    // ❌ Wrong answer popup
    alert("❌ Wrong answer!");
  }

  // Move to next question (NO RETRY)
  index++;

  if (index < quiz.length) {
    loadQuestion();
  } else {
    questionEl.innerText = `❤️ You scored ${score}/${quiz.length}`;
    optionsEl.innerHTML = "<p> Kunju maniye u are so hot and cute👄</p>";
  }
}






loadQuestion();

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);

