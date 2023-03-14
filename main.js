import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



async function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.z = 5;

  const vsh = await fetch('vertexShader.glsl');
  const fsh = await fetch('fragmentShader.glsl');

  
  const colors = [
    new THREE.Color(0xFF00F0),
    new THREE.Color(0xFFF0F0),
    new THREE.Color(0x0000FF),
    new THREE.Color(0xFF00FF),
  ];
  const colorFloats = colors.map(color => color.toArray()).flat();

  const geometry = new THREE.IcosahedronGeometry(2, 20);
 

  const material = new THREE.ShaderMaterial({
   
    vertexShader: await vsh.text(),
    fragmentShader: await fsh.text()
  });
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

  const blob = new THREE.Mesh(geometry, material);

  scene.add(blob);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
  }


  animate();


}



window.addEventListener('DOMContentLoaded', async () => {
  await init();
});