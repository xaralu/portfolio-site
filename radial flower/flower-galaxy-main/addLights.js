import * as THREE from 'three'

export function addLight() {
	const light = new THREE.DirectionalLight(0xff0000, 10)
	light.position.set(1, 1, 1)
	return light
}
