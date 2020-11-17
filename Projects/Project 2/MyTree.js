/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 10, trunkHeight, trunkRadius);
        this.cone = new MyCone(scene, 10, treeTopHeight, treeTopRadius);
        this.height = trunkHeight;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
    }
    display() {
        // ---- BEGIN Primitive drawing section
        this.trunkTexture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.cylinder.display();

        this.scene.pushMatrix();
        this.treeTopTexture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.translate(0, this.height, 0);
        this.cone.display();
        this.scene.translate(0, this.cone.height / 3, 0);
        this.scene.scale(0.9, 0.9, 0.9);
        this.cone.display();
        this.scene.translate(0, this.cone.height / 3, 0);
        this.scene.scale(0.9, 0.9, 0.9);
        this.cone.display();
        this.scene.popMatrix();

    }
    enableNormalViz() {
        this.cone.enableNormalViz();
        this.cylinder.enableNormalViz();
    }
}