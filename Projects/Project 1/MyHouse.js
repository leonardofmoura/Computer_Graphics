/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
		this.init();
	}
	init() {
		//create materials
		this.marbleMaterial = new CGFappearance(this.scene);
		this.marbleMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.marbleMaterial.setDiffuse(0.5, 0.5, 0.5, 1);
		this.marbleMaterial.setSpecular(1, 1, 1, 1);
		this.marbleMaterial.setShininess(10.0);
		this.marbleMaterial.loadTexture('textures/Marble.jpg');
		this.marbleMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.blueTiledRoofMaterial = new CGFappearance(this.scene);
		this.blueTiledRoofMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.blueTiledRoofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
		this.blueTiledRoofMaterial.setSpecular(0, 0, 0, 1);
		this.blueTiledRoofMaterial.setShininess(10.0);
		this.blueTiledRoofMaterial.loadTexture('textures/BlueTileRoof.jpg');
		this.blueTiledRoofMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.whiteWoodMaterial = new CGFappearance(this.scene);
		this.whiteWoodMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.whiteWoodMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
		this.whiteWoodMaterial.setSpecular(0, 0, 0, 1);
		this.whiteWoodMaterial.setShininess(10.0);
		this.whiteWoodMaterial.loadTexture('textures/WhiteWood.jpg');
		this.whiteWoodMaterial.setTextureWrap('REPEAT', 'REPEAT');

		this.doorMAterial = new CGFappearance(this.scene);
		this.doorMAterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.doorMAterial.setDiffuse(0.9, 0.9, 0.9, 1);
		this.doorMAterial.setSpecular(0, 0, 0, 1);
		this.doorMAterial.setShininess(10.0);
		this.doorMAterial.loadTexture('textures/Door.jpg');
		this.doorMAterial.setTextureWrap('REPEAT', 'REPEAT');

		this.windowMaterial = new CGFappearance(this.scene);
		this.windowMaterial.setAmbient(0.5, 0.5, 0.5, 1);
		this.windowMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
		this.windowMaterial.setSpecular(0, 0, 0, 1);
		this.windowMaterial.setShininess(10.0);
		this.windowMaterial.loadTexture('textures/Window.png');
		this.windowMaterial.setTextureWrap('REPEAT', 'REPEAT');

		//create objects
		this.cube = new MyUnitCubeQuad(this.scene,this.whiteWoodMaterial,this.whiteWoodMaterial,this.whiteWoodMaterial);
		this.prism = new MyPrism(this.scene,7,3,0.5);
		this.pyramid = new MyPyramid(this.scene,4);
		this.quad = new MyQuad(this.scene);
	}
	
	display() {
		// main house walls
		this.scene.pushMatrix();
		this.scene.scale(5,3,12);
		this.scene.translate(0,0.5,0);
		this.cube.display();
		this.scene.popMatrix();

		//roof window walls
		this.scene.pushMatrix();
		this.scene.translate(4,3.001,0);
		this.scene.scale(3,1.5,3);
		this.scene.translate(0,0.5,0);
		this.cube.display();
		this.scene.popMatrix();

		//pillar 1
		this.marbleMaterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(5,0,2);
		this.prism.displayT();
		this.scene.popMatrix();

		//pillar 2
		this.scene.pushMatrix();
		this.scene.translate(5,0,-2);
		this.prism.displayT();
		this.scene.popMatrix();

		//main roof
		this.blueTiledRoofMaterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(0,3,0);
		this.scene.scale(5/Math.sqrt(2),4,12/(Math.sqrt(2)));
		this.scene.rotate(Math.PI/4,0,1,0);
		this.pyramid.display();
		this.scene.popMatrix();

		// outside roof bottom
		this.scene.pushMatrix();
		this.scene.translate(3,3,0);
		this.scene.scale(6,1,7)
		this.scene.rotate(-Math.PI/2,1,0,0);
		// this.quad.enableNormalViz();
		this.quad.display();
		this.scene.popMatrix();

		//outside roof 
		this.scene.pushMatrix();
		this.scene.translate(2.5,3,0);
		this.scene.scale(7/Math.sqrt(2),3,7/(Math.sqrt(2)));
		this.scene.rotate(Math.PI/4,0,1,0);
		this.pyramid.display();
		this.scene.popMatrix();

		//door 
		this.doorMAterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(2.501,1,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(1,2,1);
		this.quad.display();
		this.scene.popMatrix();

		//front right window
		this.windowMaterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(2.501,1.5,-3);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.quad.display();
		this.scene.popMatrix();

		//front left window
		this.scene.pushMatrix();
		this.scene.translate(2.501,1.5,3);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.quad.display();
		this.scene.popMatrix();

		//front top window
		this.scene.pushMatrix();
		this.scene.translate(5.501,3.95,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(2,1,1);
		this.quad.display();
		this.scene.popMatrix();

		//back middle window
		this.scene.pushMatrix();
		this.scene.translate(-2.501,1.5,0);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.scale(2,1,1);
		this.quad.display();
		this.scene.popMatrix();

		//back right window
		this.scene.pushMatrix();
		this.scene.translate(-2.501,1.5,4);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.scale(2,1,1);
		this.quad.display();
		this.scene.popMatrix();

		//back left window
		this.scene.pushMatrix();
		this.scene.translate(-2.501,1.5,-4);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.scale(2,1,1);
		this.quad.display();
		this.scene.popMatrix();
	}
}

