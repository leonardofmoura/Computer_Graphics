/**
 * MyBranch
 * @constructor
 */
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initMaterial();

        this.cylinder = new MyCylinder(this.scene,4,1,0.25);
        
    }

    initMaterial() {
        //brown color
        this.brown = new CGFappearance(this.scene);
        this.brown.setAmbient(0.541,0.271,0.075,1.0);
        this.brown.setDiffuse(0.541,0.271,0.075,1.0);
        this.brown.setSpecular(0,0,0,1.0);
        this.brown.setShininess(10.0);
    }

    display() {
        this.brown.apply();
        this.cylinder.display();
    }
}
