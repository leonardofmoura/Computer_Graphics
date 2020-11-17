/**
 * MySquare
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySquare extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0,	//0
			0.5, -0.5, 0,	//1
			-0.5, 0.5, 0,	//2
			0.5, 0.5, 0,	//3
			-0.5, -0.5, 0,	//0
			0.5, -0.5, 0,	//1
			-0.5, 0.5, 0,	//2
			0.5, 0.5, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			4, 6, 5,
			5, 6, 7
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];

		/*
		Texture coords (s,t)
		+----------> s
     		|
        	|
		|
		v
        	t
        	*/

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0,
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

}

