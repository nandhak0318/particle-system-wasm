
import { Particle, ParticleSystem } from 'blah';

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

const particleSystem = ParticleSystem.new();

// Add particles to the particle system
for (let i = 0; i < 100; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const vx = (Math.random() - 0.5) * 2; // Random horizontal velocity
  const vy = (Math.random() - 0.5) * 2; // Random vertical velocity
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  particleSystem.add_particle(Particle.new(x, y, vx, vy, color));
}

function render() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Retrieve particles as an array of JavaScript objects
  const particles = particleSystem.get_particles();

  // Render particles
  particles.forEach((particle) => {
    const x = particle.x;
    const y = particle.y;
    const color = particle.color;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 2, 2); // Render as small squares
  });

  // Update particle positions
  particleSystem.update();

  requestAnimationFrame(render);
}

render();

function add_particle(count){
  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const vx = (Math.random() - 0.5) * 2; // Random horizontal velocity
    const vy = (Math.random() - 0.5) * 2; // Random vertical velocity
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    particleSystem.add_particle(Particle.new(x, y, vx, vy, color));
  }
}

document.getElementById('addparticles').addEventListener('click',()=>{
  console.log('clicked')
  const count = parseInt(document.getElementById('count').value)
  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const vx = (Math.random() - 0.5) * 2; // Random horizontal velocity
    const vy = (Math.random() - 0.5) * 2; // Random vertical velocity
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    particleSystem.add_particle(Particle.new(x, y, vx, vy, color));
  }
})

window.addEventListener('keydown',(e)=>{
  if (e.key =='Enter'){
    const count = parseInt(document.getElementById('count').value)
    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = (Math.random() - 0.5) * 2; // Random horizontal velocity
      const vy = (Math.random() - 0.5) * 2; // Random vertical velocity
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      particleSystem.add_particle(Particle.new(x, y, vx, vy, color));
    }
  }
})