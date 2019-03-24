/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init();
		this.initMaterials();
	}
	init() {
		//create objects
		this.quad = new MyQuad(this.scene);
	}
	initMaterials() {
		//mineSide texture
		this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.loadTexture('images/mineSide.png');
		this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');
		
		//mineTop texture
		this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture('images/mineTop.png');
		this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');
		
		//mineBottom texture
		this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture('images/mineBottom.png');
		this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');
	}
	display() {
		//side faces
		this.sideMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		
		this.scene.pushMatrix();
		this.scene.translate(0,0,0.5); 
		this.quad.display(); 
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(Math.PI,0,1,0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.5,0,0);
		this.scene.rotate(-Math.PI/2,0,1.0,0);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.5,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.quad.display();
		this.scene.popMatrix();

		//bottom face
		this.bottomMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		
		this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.quad.display();
		this.scene.popMatrix();

		//top face
		this.topMaterial.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		
		this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.quad.display();
		this.scene.popMatrix();
	}
}

