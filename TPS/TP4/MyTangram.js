/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.init();
    }
    init() {
        //create objects
        this.topsquare = new MyDiamond(this.scene);
        this.btriangle = new MyTriangleBig(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.striangle = new MyTriangleSmall(this.scene);

        //create material
        this.tangMaterial = new CGFappearance(this.scene);
        this.tangMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangMaterial.setShininess(10.0);
        this.tangMaterial.loadTexture('images/tangram.png');
        this.tangMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        //apply the material
        this.tangMaterial.apply();

        //move the top square
        this.scene.pushMatrix();
        var move_top_diamond = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            3*Math.sqrt(2)-4, 5-Math.sqrt(2), 0.0, 1 
        ];
        this.scene.multMatrix(move_top_diamond);
        this.topsquare.display();
        this.scene.popMatrix();

        //move and rotate the left big triangle
        this.scene.pushMatrix();
        this.scene.translate(0.0, (2-Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI/2, 0.0, 0.0, 1.0);
        this.btriangle.display();
        this.scene.popMatrix();

        //move and rotate the right big triangle
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0.0);
        this.scene.rotate(3*Math.PI/4, 0.0, 0.0, 1.0);
        this.btriangle.display();
        this.scene.popMatrix();

        //rotate the left parallelogram
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0.0, 0.0, 1.0);
        this.scene.rotate(Math.PI, 1.0, 0.0, 0.0);
        this.parallelogram.display();
        this.scene.popMatrix();

        //move and rotate the left normal triangle
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(-3*Math.PI/4, 0.0, 0.0, 1.0);
        this.triangle.display();
        this.scene.popMatrix();

        //move and rotate the left small triangle
        this.scene.pushMatrix();
        this.scene.translate(-2*Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
        this.striangle.display();
        this.scene.popMatrix();

        //move and rotate the right small triangle
        this.scene.pushMatrix();
        this.scene.translate( Math.sqrt(2), -2*Math.sqrt(2), 0.0);
        this.scene.rotate(3*Math.PI/4, 0.0, 0.0, 1.0);
        this.striangle.display();
        this.scene.popMatrix();
    }
}

