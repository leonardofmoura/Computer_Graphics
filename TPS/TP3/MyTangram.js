/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        

        this.topsquare = new MyDiamond(scene);
        this.btriangle = new MyTriangleBig(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangle = new MyTriangle(scene);
        this.striangle = new MyTriangleSmall(scene);

        this.objects = [this.topsquare,this.btriangle,this.parallelogram,this.triangle,this.striangle];
	}
    display() {
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

