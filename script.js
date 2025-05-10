
const images = [
  "img/mela1.JPG",
  "img/mela6.jpg",
  "img/mela2.JPG",
  "img/mela4.jpg",
  "img/mela5.jpg",
  "img/mela 3.JPG"
];

const texts = [
  "Hola mi amor, se que estos tiempos han sido difíciles, pero la capacidad que hemos tenido para poder haber salido adelante me ha demostrado que somos personas fuertes y capaces de muchas cosas.",
  "Pero todo eso no hubiera sido posible si no fuera por ti, tú has sido un pilar fundamental en mi vida y en la de Victoria. ¡Eres una super mamá!",
  "Eres una mamá excelente, que todo lo que hace y hará siempre será para nuestra hija. Nunca olvidaré las veces que trabajabas con Victoria en brazos o estudiabas con ella en tu vientre. ¡Eres la mejor mamá del mundo!",
  "Te amo con todo mi corazón, y no habrá nada ni nadie que cambie eso. Me esforzaré en la vida para darte todo lo que mereces, todo lo que necesites para que seas feliz. Tú y Victoria se merecen todo lo más bonito de este mundo, y es por eso que estamos haciendo todo esto.",
  "Sé que por falta de tiempo y dinero (aunque lo tienes escondido 😅), no puedo darte nada hoy, pero sí puedo hacerte esto, que es lo que más me gusta ❤️.",
  "img", "img", "img", "img", "img", "img"
];

let current = 0;

function startIntro() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
  document.querySelector('.music-toggle').style.display = 'none';
  nextScene();
}

function nextScene() {
  const textBox = document.getElementById("scene-text");
  const imageBox = document.getElementById("scene-image");

  if (current < texts.length) {
    if (texts[current] === "img") {
      imageBox.style.display = "block";
      imageBox.src = images.shift();
      textBox.textContent = getImageText(current - 5);  // desde índice 0 para frases con imagen
    } else {
      imageBox.style.display = "none";
      textBox.textContent = texts[current];
    }
    current++;
  } else {
    document.getElementById("scene").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
    showHearts();
  }
}

function getImageText(index) {
  const imageTexts = [
    "Tu amor es medicina que cura hasta el alma. Gracias por ser esa madre tan fuerte y tierna a la vez. ❤️",
    "Victoria tiene el mejor ejemplo: una mamá valiente, alegre y llena de amor. 💕",
    "Con tu ternura todo es más fácil, tu risa es el sol de nuestra casa. ☀️",
    "Hoy celebramos más que tu maternidad, celebramos tu fuerza, tu esfuerzo y tu infinito corazón. 🎓👩‍👧",
    "No hay palabras suficientes para agradecerte... Solo amor, abrazos y esta sorpresa. 🎈",
    "¡Te amamos! Eres nuestra reina, nuestra compañera y nuestro hogar. 👨‍👩‍👧"
  ];
  return imageTexts[index] || "";
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

// Reemplazar corazones con imágenes
function showHearts() {
  const container = document.getElementById("corazones");
  for (let i = 0; i < 30; i++) {
    const img = document.createElement("img");
    img.src = "img/corazon_cara.png";
    img.className = "heart";
    img.style.left = Math.random() * 100 + "%";
    img.style.animationDelay = Math.random() * 3 + "s";
    img.style.width = "30px";
    img.style.height = "30px";
    img.style.opacity = "0.8";
    container.appendChild(img);
  }
}
