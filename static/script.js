const questions = [
  { q: "What's your idea of a perfect day?", a: ["A calm day with good music", "A fun day out", "A little bit of everything"] },
  { q: "Which sky would you choose?", a: ["A pink sunset", "A starry night", "A cloudy, rainy sky"] },
  { q: "What's a small thing that instantly makes you happy?", a: ["A favourite song", "A thoughtful message", "Good food", "A random funny moment"] },
  { q: "Pick your comfort soundtrack.", a: ["Soft melodies", "Feel-good songs", "Old favourites", "It changes every day"] },
  { q: "If you could travel anywhere tomorrow…", a: ["A peaceful hill station", "A beach", "A lively city", "Somewhere unexpected"] },
  { q: "How do you like people to show they care?", a: ["Remembering little things", "Spending time together", "Kind words", "Small thoughtful gestures"] },
  { q: "Choose one:", a: ["A handwritten note", "A playlist made just for you", "A spontaneous little outing"] },
  { q: "What makes a person memorable?", a: ["Their kindness", "Their sense of humour", "The way they listen", "Being themselves"] },
  { q: "Your favourite kind of conversation?", a: ["Silly random talks", "Deep late-evening talks", "Talking about dreams", "All of these"] },
  { q: "Choose a tiny adventure:", a: ["Watching the sunset", "Trying a new café", "A long walk and music", "Exploring a new place"] },
  { q: "What's your first impression of me?", a: ["Quiet", "Funny", "Friendly", "Still figuring that out"] },
  { q: "What do you think this surprise is about?", a: ["A fun little game", "A random surprise", "Something sweet", "I have no idea!"] }
];

let current = 0;
let selected = null;
const collected = [];
const screens = ["welcome", "quiz", "reveal"];

function showScreen(id) {
  screens.forEach(name => document.getElementById(name).classList.toggle("active", name === id));
}
function renderQuestion() {
  const item = questions[current];
  selected = null;
  document.getElementById("counter").textContent = `Question ${current + 1} of ${questions.length}`;
  document.getElementById("progressFill").style.width = `${((current + 1) / questions.length) * 100}%`;
  document.getElementById("question").textContent = item.q;
  document.getElementById("nextBtn").disabled = true;
  const holder = document.getElementById("answers");
  holder.innerHTML = "";
  item.a.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      selected = answer;
      holder.querySelectorAll(".answer").forEach(el => el.classList.remove("selected"));
      button.classList.add("selected");
      document.getElementById("nextBtn").disabled = false;
    });
    holder.appendChild(button);
  });
}
document.getElementById("startBtn").addEventListener("click", () => {
  showScreen("quiz");
  renderQuestion();
});
document.getElementById("nextBtn").addEventListener("click", () => {
  if (!selected) return;
  collected[current] = selected;
  current++;
  if (current < questions.length) renderQuestion();
  else showScreen("reveal");
});
document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    const response = document.getElementById("response");
    if (choice === "Yes") response.textContent = "That makes me really happy. Let's plan something simple and fun! ♡";
    else if (choice === "Not sure") response.textContent = "That's completely okay. Take all the time you need — no pressure at all.";
    else response.textContent = "Thank you for being honest. I respect your answer, and I hope we're still good.";
    document.querySelectorAll(".choice").forEach(el => el.disabled = true);
  });
});
