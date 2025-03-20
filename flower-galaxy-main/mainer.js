import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh, addBackground, addGlassKnot, addMatCap} from './addMeshes'
import { addLight } from './addLights'
import Model from './Model'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
camera.position.set(9, 9, 13)
// let mesh
const meshes = {}
const mixers = []
const clock = new THREE.Clock()
const controls = new OrbitControls(camera, renderer.domElement)


init()

function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//meshes
	meshes.default = addBoilerPlateMesh()
	meshes.standard = addStandardMesh()
	meshes.background = addBackground()
	meshes.knot = addGlassKnot()
	meshes.cap = addMatCap()
	// meshes.side1 = addSides(0);
	// meshes.side2 = addSides(1);
	// meshes.side3 = addSides(2);
	// meshes.side4 = addSides(3);
	// meshes.side4 = addSides(4);
	// meshes.side4 = addSides(5);

	//console.log(addSides(1));


	//lights
	meshes.defaultLight = addLight()

	//scene operations
		//scene.add(meshes.default)
		//scene.add(meshes.standard)
	scene.add(meshes.defaultLight)
		//scene.add(meshes.background)
		//scene.add(meshes.knot)
		//scene.add(meshes.cap)
	// scene.add(meshes.side1)
	// scene.add(meshes.side2)
	// scene.add(meshes.side3)
	// scene.add(meshes.side4)
	// scene.add(meshes.side5)
	// scene.add(meshes.side5)
	scene.fog = new THREE.Fog(0x3d4035, 0, 100);
	//rotateSides(side1, side2, side3, side4);


	models()
	resize()
	animate()
}

function models() {
	const Computer = new Model({
		name: 'computer',
		url: '/test.glb',
		scene: scene,
		meshes: meshes,
		scale: new THREE.Vector3(1, 2.5, 1),
		position: new THREE.Vector3(0, -0.8, 3),
		// replace: true,
		// replaceURL: '/bubble3.jpg',
		//animationState: true,
		//mixers: mixers,
	})
	Computer.init()
}



function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
	const delta = clock.getDelta()

	meshes.default.rotation.x += 0.01
	meshes.default.rotation.z += 0.01

	meshes.standard.rotation.x += 0.01
	meshes.standard.rotation.z += 0.01

	for (const mixer of mixers) {
		mixer.update(delta)
	}
	if (meshes.longLeaves) {
		meshes.longLeaves.rotation.y -= 0.002
	}
	// meshes.default.scale.x += 0.01

	renderer.render(scene, camera)
	
}