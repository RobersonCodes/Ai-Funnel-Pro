const revealElements = document.querySelectorAll(
  ".hero-content, .hero-dashboard, .stat-card, .small-card, .feature-card, .pricing-card, .testimonial-card, .cta-box, .section-header"
);
  

const revealOnScroll = () => {

  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.classList.add("active");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* CURSOR GLOW */

const glow =
  document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = `${e.clientX}px`;

  glow.style.top = `${e.clientY}px`;

});
/* PARTICLES */

const canvas =
  document.getElementById("particles");

const ctx =
  canvas.getContext("2d");

canvas.width =
  window.innerWidth;

canvas.height =
  window.innerHeight;

const particles = [];

for (let i = 0; i < 80; i++) {

  particles.push({

    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,

    radius: Math.random() * 2,

    speedX:
      (Math.random() - 0.5) * 0.3,

    speedY:
      (Math.random() - 0.5) * 0.3

  });

}

function animateParticles() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach((particle) => {

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (
      particle.x < 0 ||
      particle.x > canvas.width
    ) {
      particle.speedX *= -1;
    }

    if (
      particle.y < 0 ||
      particle.y > canvas.height
    ) {
      particle.speedY *= -1;
    }

    ctx.beginPath();

    ctx.arc(
      particle.x,
      particle.y,
      particle.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      "rgba(124,58,237,0.7)";

    ctx.fill();

  });

  requestAnimationFrame(
    animateParticles
  );

}

animateParticles();

window.addEventListener("resize", () => {

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

});
/* HEADER SCROLL */

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});
/* HERO 3D */

const heroCanvas = document.getElementById("hero3d");

if (heroCanvas && window.THREE) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    heroCanvas.clientWidth / heroCanvas.clientHeight,
    0.1,
    100
  );

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas: heroCanvas,
    alpha: true,
    antialias: true
  });

  renderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geometry = new THREE.IcosahedronGeometry(1.6, 3);

  const material = new THREE.MeshStandardMaterial({
    color: 0x7c3aed,
    emissive: 0x06b6d4,
    emissiveIntensity: 0.45,
    metalness: 0.75,
    roughness: 0.18,
    wireframe: true
  });

  const orb = new THREE.Mesh(geometry, material);
  scene.add(orb);

  const glowGeometry = new THREE.IcosahedronGeometry(1.9, 2);

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.08,
    wireframe: true
  });

  const glowOrb = new THREE.Mesh(glowGeometry, glowMaterial);
  scene.add(glowOrb);

  const pointLight = new THREE.PointLight(0x7c3aed, 3, 10);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  const cyanLight = new THREE.PointLight(0x06b6d4, 2, 10);
  cyanLight.position.set(-3, -2, 3);
  scene.add(cyanLight);

  function animateHero3D() {
    requestAnimationFrame(animateHero3D);

    orb.rotation.x += 0.004;
    orb.rotation.y += 0.006;

    glowOrb.rotation.x -= 0.002;
    glowOrb.rotation.y += 0.003;

    renderer.render(scene, camera);
  }

  animateHero3D();

  window.addEventListener("resize", () => {
    const width = heroCanvas.clientWidth;
    const height = heroCanvas.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  });
}
/* MOUSE INTERACTION 3D */

document.addEventListener("mousemove", (e) => {

  const x =
    (e.clientX / window.innerWidth) * 2 - 1;

  const y =
    -(e.clientY / window.innerHeight) * 2 + 1;

  orb.rotation.y += x * 0.002;

  orb.rotation.x += y * 0.002;

});
/* MAGNETIC BUTTONS */

const magneticButtons =
  document.querySelectorAll(
    ".btn-primary, .btn-secondary"
  );

magneticButtons.forEach((button) => {

  button.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        button.getBoundingClientRect();

      const x =
        e.clientX - rect.left - rect.width / 2;

      const y =
        e.clientY - rect.top - rect.height / 2;

      button.style.transform =
        `translate(${x * 0.18}px, ${y * 0.18}px)`;

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.transform =
        "translate(0px, 0px)";

    }
  );

});
/* PARALLAX EFFECT */

const heroContent =
  document.querySelector(".hero-content");

const hero3D =
  document.querySelector(".hero-3d");

document.addEventListener(
  "mousemove",
  (e) => {

    const x =
      (e.clientX / window.innerWidth - 0.5);

    const y =
      (e.clientY / window.innerHeight - 0.5);

    heroContent.style.transform =
      `translate(${x * -18}px, ${y * -18}px)`;

    hero3D.style.transform =
      `translate(${x * 28}px, ${y * 28}px)`;

  }
);
/* WHATSAPP LEAD FORM */

const leadForm =
  document.querySelector(".lead-form");

leadForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    const inputs =
      leadForm.querySelectorAll("input");

    const nome = inputs[0].value;
    const email = inputs[1].value;
    const whatsapp = inputs[2].value;

    const mensagem =
`Olá, meu nome é ${nome}.

Email: ${email}
WhatsApp: ${whatsapp}

Quero receber uma estratégia para escalar minhas campanhas.`;

    const numero =
      "5551-99164-0903";

    const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

  }
);