/**
 * MyFloor
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFloor extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
		this.init();
	}
	init() {
        //create material
        this.floorMaterial = new CGFappearance(this.scene);
        this.floorMaterial.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.floorMaterial.setDiffuse(1, 1, 1, 1.0);
        this.floorMaterial.setSpecular(0, 0, 0, 1.0);
        this.floorMaterial.setShininess(10.0);
        this.floorMaterial.loadTexture('textures/mineTop.png');
        this.floorMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.quad = new MyQuad(this.scene);
        this.quad.updateTexCoords([0, 100, 100, 100, 0, 0, 100, 0]);
    }

	display() {
        this.floorMaterial.apply();
        this.scene.pushMatrix();
        this.scene.scale(100, 1, 100);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
	}
}

