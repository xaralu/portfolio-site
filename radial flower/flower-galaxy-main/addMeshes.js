import * as THREE from 'three'
const textureLoader = new THREE.TextureLoader()

export function addBoilerPlateMesh() {
	const box = new THREE.BoxGeometry(1, 1, 1)
	const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(2, 0, 0)
	return boxMesh
}

export function addStandardMesh() {
	const box = new THREE.BoxGeometry(1, 1, 1)
	const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(-2, 0, 0)
	return boxMesh
}

export function addBackground() {
	const color = textureLoader.load('./color.jpg')
	const geometry = new THREE.PlaneGeometry(5, 5)
	const material = new THREE.MeshBasicMaterial(
		{map: color}
	)
	const mesh = new THREE.Mesh(geometry, material)
	mesh.position.set(0, 0, -2)

	return mesh
}

export function addGlassKnot () {
	const displace = textureLoader.load('./displace.png')
	const ambient = textureLoader.load('./ambient.jpg')
	const normals = textureLoader.load('./normal.jpg')
	const roughness = textureLoader.load('./roughness.jpg')

	const geometry = new THREE.TorusKnotGeometry(0.6, 0.01, 100, 100, 2, 3)
	const material = new THREE.MeshPhysicalMaterial({
		displacementMap: displace,
		aoMap: ambient,
		normalMap: normals,
		roughnessMap: roughness,
		displacementScale: 0.3,
		transmission: 1.0,
		ior: 2.33,
		metalness: 0.1, 
		roughness: 0.0,
		thickness: 1,
	})
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}

export function addMatCap() {
	const matcap = textureLoader.load('./matcap.png')
	const geometry = new THREE.TorusKnotGeometry(0.6, 0.5, 100, 100, 2, 3)
	const material = new THREE.MeshMatcapMaterial({
		matcap: matcap,
	})
	const mesh = new THREE.Mesh(geometry, material)
	mesh.position.set (2, 0, 0)
	return mesh
}

export function addSides(num) {
	const img1 = textureLoader.load('./side1.jpg')
	const img2 = textureLoader.load('./side2.jpg')
	const img3 = textureLoader.load('./side3.jpg')
	const img4 = textureLoader.load('./side4.jpg')
	const img5 = textureLoader.load('./ceiling.jpg')
	const img6 = textureLoader.load('./ground.jpg')

	const geometry = new THREE.PlaneGeometry(90, 80)
	const geometryBack = new THREE.PlaneGeometry(80, 130)

	const material1 = new THREE.MeshBasicMaterial(
		{map: img1}
	)
	const material2 = new THREE.MeshBasicMaterial(
		{map: img2}
	)
	const material3 = new THREE.MeshBasicMaterial(
		{map: img3}
	)
	const material4 = new THREE.MeshBasicMaterial(
		{map: img4}
	)
	const material5 = new THREE.MeshBasicMaterial(
		{map: img5}
	)
	const material6 = new THREE.MeshBasicMaterial(
		{map: img6}
	)
	const side1 = new THREE.Mesh(geometryBack, material1)
	side1.position.set(-40, -40, -10)
	side1.rotation.set(0, Math.PI / 2, 0)
	//left


	const side2 = new THREE.Mesh(geometry, material2)
	side2.position.set(0, 0, -30)
	side2.rotation.set(0, 0, 0)
	//the back I want


	const side3 = new THREE.Mesh(geometryBack, material3)
	side3.position.set(0, 0, 60)
	side3.rotation.set(0, -1 * Math.PI, 0)
	//behind camera

	const side4 = new THREE.Mesh(geometryBack, material4)
	side4.position.set(40, 10, 10)
	side4.rotation.set(0, -1 * Math.PI / 2, 0)
	//right

	const side5 = new THREE.Mesh(geometryBack, material5)
	side5.position.set(-40, -40, -10)
	side5.rotation.set(0, Math.PI / 2, 0)
	//ceiling

	const side6 = new THREE.Mesh(geometryBack, material6)
	side6.position.set(0, -70, -10)
	side6.rotation.set(-1 * Math.PI / 2,  0,  0)
	//ground

	const sides = [side1, side2, side3, side4, side5, side6];

	return sides[num];
}

