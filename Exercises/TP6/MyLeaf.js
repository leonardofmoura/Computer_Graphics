/**
 * MyLeaf
 * @constructor
 */
class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initMaterial();

        this.triangle = new MyTriangle(this.scene);
    }

    initMaterial() {
        //green color
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0.0,0.502,0.0,1.0);
        this.green.setDiffuse(0.0,0.502,0.0,1.0);
        this.green.setSpecular(0,0,0,1.0);
        this.green.setShininess(10.0);
    }

    display() {
        this.green.apply();
        this.triangle.display();
    }
}
