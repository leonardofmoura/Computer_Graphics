/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0.5,	//0
			-0.5, 0.5, 0.5,	    //1
			0.5, -0.5, 0.5,	    //2
            0.5, 0.5, 0.5,		//3
            -0.5, -0.5, -0.5,   //4
            -0.5, 0.5, -0.5,    //5
            0.5, -0.5, -0.5,    //6
            0.5, 0.5, -0.5      //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,    // front face
            1, 2, 3,
            4, 5, 6,    //back face
            7, 6, 5,
            0, 1, 4,    //left face
            5, 4, 1,    
            1, 3, 5,    //top face
            7, 5, 3,
            6, 3, 2,    //right face
            3, 6, 7,
            4, 2, 0,    //bottom face
            2, 4, 6
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

