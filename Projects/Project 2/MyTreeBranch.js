/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeBranch extends CGFobject {
    constructor(scene, coordX, coordY, coordZ, rotation) {
        super(scene);
        this.scene = scene;
        this.coordX = coordX;
        this.coordY = coordY;
        this.coordZ = coordZ;
        this.rotation = rotation;
        this.onTheGround = true;

        this.cylinder = new MyCylinder(this.scene, 10, 3, 0.1);
        this.smallCylinder = new MyCylinder(this.scene, 10, 1, 0.05);
        this.initTexture();
    }

    initTexture() {
        this.woodTexture = new CGFappearance(this.scene);
        this.woodTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.woodTexture.setDiffuse(0.7, 0.7, 0.7, 1);
        this.woodTexture.setSpecular(0.0, 0.0, 0.0, 1);
        this.woodTexture.setShininess(120);
        this.woodTexture.loadTexture("textures/trunk_texture.jpg");
        this.woodTexture.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.woodTexture.apply();

        this.scene.pushMatrix();
        this.scene.translate(this.coordX, this.coordZ, this.coordY);
        this.scene.rotate(this.rotation, 0, 1, 0);

        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.cylinder.display();

        this.scene.pushMatrix();
        this.scene.translate(0, 2.3, 0);
        this.scene.rotate(-Math.PI / 6, 0, 0, 1);
        this.smallCylinder.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

    }
}
