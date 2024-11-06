// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the Merkabah
const merkabah = new THREE.Group();

const geometry = new THREE.ConeGeometry(1, 1.5, 4);
const material = new THREE.MeshBasicMaterial({
  color: 0x3b82f6,
  wireframe: true,
});

// Adjust pyramid position
geometry.translate(0, 0.25, 0);

const upperPyramid = new THREE.Mesh(geometry, material);
merkabah.add(upperPyramid);

const lowerPyramid = new THREE.Mesh(geometry, material);
lowerPyramid.rotation.x = Math.PI;
merkabah.add(lowerPyramid);

scene.add(merkabah);

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  merkabah.rotation.x += 0.01;
  merkabah.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
