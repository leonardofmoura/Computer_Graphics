/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
	constructor(scene,levels) {
        super(scene);

        this.scene = scene;
        this.levels = levels;

        this.initTextures();
		this.init();
    }
    
    initTextures() {
        //quad material side
		this.quadSide = new CGFappearance(this.scene);
		this.quadSide.setAmbient(0.7, 0.7, 0.7, 1.0);
		this.quadSide.setDiffuse(1, 1, 1, 1.0);
		this.quadSide.setSpecular(0, 0, 0, 1.0);
		this.quadSide.setShininess(10.0);
		this.quadSide.loadTexture('textures/mineSide.png');
		this.quadSide.setTextureWrap('REPEAT', 'REPEAT');

		//quad material top
		this.quadTop = new CGFappearance(this.scene);
		this.quadTop.setAmbient(0.7, 0.7, 0.7, 1);
		this.quadTop.setDiffuse(1, 1, 1, 1.0);
		this.quadTop.setSpecular(0, 0, 0, 1.0);
		this.quadTop.setShininess(10.0);
		this.quadTop.loadTexture('textures/mineTop.png');
		this.quadTop.setTextureWrap('REPEAT', 'REPEAT');

		//quad material bottom
		this.quadBottom = new CGFappearance(this.scene);
		this.quadBottom.setAmbient(0.7, 0.7, 0.7, 1);
		this.quadBottom.setDiffuse(1, 1, 1, 1.0);
		this.quadBottom.setSpecular(0, 0, 0, 1.0);
		this.quadBottom.setShininess(10.0);
		this.quadBottom.loadTexture('textures/mineBottom.png');
		this.quadBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

	init() {
		//create objects
		this.cube = new MyUnitCubeQuad(this.scene,this.quadTop,this.quadSide,this.quadBottom);
	}
	
	display() {
        var side = 1;

        this.scene.pushMatrix();
        this.scene.translate(-1,-0.5,-1);

        for (var l = 0; l < this.levels; l++) {
            for (var i = 0; i < side; i++) {
                for (var j = 0; j < side; j++) {
                    if (i == 0 || i == (side-1) || j == 0 || j == (side-1)) {
                        this.scene.pushMatrix();
                        this.scene.translate(i - (side - 1)/2 + 1 ,this.levels - l,j - (side-1)/2 + 1);
                        this.cube.display();
                        this.scene.popMatrix();
                    }
                }
            }
            side += 2;
        }

        this.scene.popMatrix();
    }
}

