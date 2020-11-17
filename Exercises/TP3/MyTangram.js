/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        
        this.initObjects(scene);
        this.initMaterials(scene);
    }
    initObjects(scene) {
        this.topsquare = new MyDiamond(scene);
        this.btriangle = new MyTriangleBig(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangle = new MyTriangle(scene);
        this.striangle = new MyTriangleSmall(scene);

        this.objects = [this.topsquare,this.btriangle,this.parallelogram,this.triangle,this.striangle];
    }
    initMaterials(scene) {
        //green color
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0,1*0.5,0,1.0);
        this.green.setDiffuse(0,1*0.7,0,1.0);
        this.green.setSpecular(0,1,0,1.0);
        this.green.setShininess(10.0);

        //orange color 
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(1*0.5,0.647*0.5,0,1.0);
        this.orange.setDiffuse(1*0.7,0.647*0.7,0,1.0);
        this.orange.setSpecular(1,0.647,0,1.0);
        this.orange.setShininess(10.0);

        //light blue color
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0,0.749*0.5,1*0.5,1.0);
        this.blue.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.blue.setSpecular(0,0.749,1,1.0);
        this.blue.setShininess(10.0);

        //yellow color
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1*0.5,1*0.5,0,1.0);
        this.yellow.setDiffuse(1*0.7,1*0.7,0,1.0);
        this.yellow.setSpecular(1,1,0,1.0);
        this.yellow.setShininess(10.0);

        //purple color
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.58*0.5,0,0.827*0.5,1.0);
        this.purple.setDiffuse(0.58*0.7,0,0.827*0.7,1.0);
        this.purple.setSpecular(0.58,0,0.827,1.0);
        this.purple.setShininess(10.0);

        //pink color
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(1*0.5,0.714*0.5,0.757*0.5,1.0);
        this.pink.setDiffuse(1*0.7,0.714*0.7,0.757*0.7,1.0);
        this.pink.setSpecular(1,0.714,0.757,1.0);
        this.pink.setShininess(10.0);

        //red color
        this.red = new CGFappearance(scene);
        this.red.setAmbient(1*0.5,0,0,1.0);
        this.red.setDiffuse(1*0.7,0,0,1.0);
        this.red.setSpecular(1,0,0,1.0);
        this.red.setShininess(10.0);
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
        this.scene.customMaterial.apply();
        this.topsquare.display();
        this.scene.popMatrix();

        //move and rotate the left big triangle
        this.scene.pushMatrix();
        this.scene.translate(0.0, (2-Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI/2, 0.0, 0.0, 1.0);
        this.orange.apply();
        this.btriangle.display();
        this.scene.popMatrix();

        //move and rotate the right big triangle
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0.0);
        this.scene.rotate(3*Math.PI/4, 0.0, 0.0, 1.0);
        this.blue.apply();
        this.btriangle.display();
        this.scene.popMatrix();

        //rotate the left parallelogram
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0.0, 0.0, 1.0);
        this.scene.rotate(Math.PI, 1.0, 0.0, 0.0);
        this.yellow.apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        //move and rotate the left normal triangle
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(-3*Math.PI/4, 0.0, 0.0, 1.0);
        this.pink.apply();
        this.triangle.display();
        this.scene.popMatrix();

        //move and rotate the left small triangle
        this.scene.pushMatrix();
        this.scene.translate(-2*Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
        this.red.apply();
        this.striangle.display();
        this.scene.popMatrix();

        //move and rotate the right small triangle
        this.scene.pushMatrix();
        this.scene.translate( Math.sqrt(2), -2*Math.sqrt(2), 0.0);
        this.scene.rotate(3*Math.PI/4, 0.0, 0.0, 1.0);
        this.purple.apply();
        this.striangle.display();
        this.scene.popMatrix();
    }
}

