// Assuming you have a container element with id="model-container"
const container = document.getElementById('model-container');

// Scene and Camera Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Adjust position as needed

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 5); // Adjust position for directional lighting
scene.add(directionalLight);

// Load the GLTF model
const loader = new THREE.GLTFLoader();
let model; // Declare variable to hold the model
loader.load('mall2.gltf', (gltf) => {
  model = gltf.scene;
  scene.add(model);
});

// Raycaster for cursor interaction
const raycaster = new THREE.Raycaster();

document.addEventListener('mousemove', (event) => {
  // Get normalized device coordinates (NDC) of cursor position
  const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
  const normalizedY = - ((event.clientY / window.innerHeight) * 2 - 1);

  // Set raycaster origin and direction based on camera and cursor position
  raycaster.setFromCamera({ x: normalizedX, y: normalizedY }, camera);

  // Perform raycast against the model
  const intersects = raycaster.intersectObject(model, true);

  // Check for intersection
  if (intersects.length > 0) {
    const intersection = intersects[0];

    // Access the hit point on the model (provides X, Y, and Z coordinates)
    const hitPoint = intersection.point;

    // Update model rotation based on cursor position (adjust sensitivity as needed)
    model.rotation.y = (hitPoint.x / model.scale.x) * Math.PI;
    model.rotation.x = (hitPoint.y / model.scale.y) * Math.PI;

    // Optional: Use hitPoint.z for depth-based effects
  }
});

// Basic Animation (optional)
function animate() {
  requestAnimationFrame(animate);

  if (model) {
    // ... (existing animation logic)
  }

  renderer.render(scene, camera);
}

animate();

// Optional: Handle window resize events
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});
