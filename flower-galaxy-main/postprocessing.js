import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass'
import {RenderPixelatedPass} from 'three/examples/jsm/postprocessing/RenderPixelatedPass'
import {AfterImagePass} from 'three/examples/jsm/postprocessing/AfterImagePass'
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass'



export function postprocessing (scene, camera, renderer) {
    

    const composer = new EffectComposer(renderer)
    composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    composer.setSize(window.innerWidth, window.innerHeight )

    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const glitchPass = new GlitchPass()
    // glitchPass.goWild = true
    composer.addPass(glitchPass)
    
    const pixelPass = new RenderPixelatedPass(2, scene, camera)
    pixelPass.normalEdgeStrength = 20; //change value to manipulate the strength of how well you can see the edges of shapes in the scene
    composer.addPass(pixelPass)

    const afterPass = new AfterImagePass()
    afterPass.uniforms.damp.value = 0.19
    composer.addPass(afterPass)

    const bloomPass = new UnrealBloomPass()
    bloomPass.strength = 0.5
    composer.addPass(bloomPass)
    //bloomPass.enabled = true

    const outputPass = new OutputPass()
    composer.addPass(outputPass)

    return {composer: composer, bloom: bloomPass, after: afterPass}
}