const images = [
  "img/mela1.JPG",
  "img/mela6.jpg",
  "img/mela2.JPG",
  "img/mela4.jpg",
  "img/mela5.jpg",
  "img/mela 3.JPG"
];

const texts = [
  "Tu amor es medicina que cura hasta el alma. Gracias por ser esa madre tan fuerte y tierna a la vez. ❤️",
  "Victoria tiene el mejor ejemplo: una mamá valiente, alegre y llena de amor. 💕",
  "Con tu ternura todo es más fácil, tu risa es el sol de nuestra casa. ☀️",
  "Hoy celebramos más que tu maternidad, celebramos tu fuerza, tu esfuerzo y tu infinito corazón. 🎓👩‍👧",
  "No hay palabras suficientes para agradecerte... Solo amor, abrazos y esta sorpresa. 🎈",
  "¡Te amamos! Eres nuestra reina, nuestra compañera y nuestro hogar. 👨‍👩‍👧"
];

let current = 0;

function nextScene() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(e => console.log("Error al reproducir audio:", e));
  }

  current++;
  if (current < images.length) {
    document.getElementById("scene-image").src = images[current];
    document.getElementById("scene-text").textContent = texts[current];
  } else {
    document.getElementById("scene").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
    showHearts();
  }
}

function showHearts() {
  const container = document.getElementById("corazones");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 3 + "s";
    heart.textContent = "💖";
    container.appendChild(heart);
  }
}


function toggleMusic() {
  const music = document.getElementById("bg-music");
  const toggle = document.getElementById("toggleMusic");
  if (toggle.checked) {
    music.play().catch(e => console.log("Error al reproducir audio:", e));
  } else {
    music.pause();
  }
}
