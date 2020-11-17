/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initTextures()

        this.tree = new MyTree(this.scene, 1, 0.5, 4, 2, this.trunkText, this.leavesText);

        this.numb1 = 4 + 2 * Math.random();
        this.numb2 = 4 + 2 * Math.random();
        this.numb3 = 4 + 2 * Math.random();

    }

    initTextures() {
        this.trunkText = new CGFappearance(this.scene);
        this.trunkText.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.trunkText.setDiffuse(1, 1, 1, 1.0);
        this.trunkText.setSpecular(0, 0, 0, 1.0);
        this.trunkText.setShininess(10.0);
        this.trunkText.loadTexture('textures/trunk_texture.jpg');
        this.trunkText.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.leavesText = new CGFappearance(this.scene);
        this.leavesText.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.leavesText.setDiffuse(1, 1, 1, 1.0);
        this.leavesText.setSpecular(0, 0, 0, 1.0);
        this.leavesText.setShininess(10.0);
        this.leavesText.loadTexture('textures/leaves_texture.png');
        this.leavesText.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

    }


    display() {
        // ---- BEGIN Primitive drawing section
        this.scene.pushMatrix();
        this.tree.display();
        this.scene.translate(0.8, 0, this.numb1);
        this.tree.display();
        this.scene.translate(-1.0, 0, this.numb2);
        this.tree.display();
        this.scene.translate(0.8, 0, this.numb3);
        this.tree.display();
        this.scene.translate(1.0, 0, this.numb1);
        this.tree.display();
        this.scene.translate(-1.2, 0, this.numb2);
        this.tree.display();
        this.scene.popMatrix();
    }
}