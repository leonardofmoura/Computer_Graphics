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
			-0.5, -0.5, 0.5,	//0 -> Front face
			-0.5, 0.5, 0.5,	    //1
			0.5, -0.5, 0.5,	    //2
            0.5, 0.5, 0.5,		//3 
            -0.5, -0.5, -0.5,   //4 -> Back face
            -0.5, 0.5, -0.5,    //5
            0.5, -0.5, -0.5,    //6
			0.5, 0.5, -0.5,     //7
			-0.5,-0.5,0.5,		//8 -> left face
			-0.5,0.5,0.5,		//9 
			-0.5,-0.5,-0.5,		//10
			-0.5,0.5,-0.5,		//11
			-0.5,0.5,0.5,		//12 -> top face
			0.5,0.5,0.5,		//13
			-0.5,0.5,-0.5,		//14
			0.5,0.5,-0.5,		//15
			0.5,-0.5,-0.5,		//16 -> right face
			0.5,0.5,0.5,		//17
			0.5,-0.5,0.5,		//18
			0.5,0.5,-0.5,		//19
			-0.5,-0.5,-0.5,		//20 -> bottom face
			0.5,-0.5,0.5,		//21
			-0.5,-0.5,0.5,		//22
			0.5,-0.5,-0.5		//23
			];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,    	// front face
            1, 2, 3,
            4, 5, 6,    	//back face
            7, 6, 5,
            8, 9, 10,    	//left face
            11, 10, 9,    
            12, 13, 14,    	//top face
            15, 14, 13,
            16, 17, 18,    	//right face
            17, 16, 19,
            20, 21, 22,    	//bottom face
            21, 20, 23
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			-1,0,0,
			-1,0,0,
			-1,0,0,
			-1,0,0,
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0,
			1,0,0,
			1,0,0,
			1,0,0,
			1,0,0,
			0,-1,0,
			0,-1,0,
			0,-1,0,
			0,-1,0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

