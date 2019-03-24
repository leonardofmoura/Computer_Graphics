/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyParallelogram extends CGFobject {
    constructor(scene) {
        super (scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0,0,0,  //0
            1,1,0,  //1
            2,0,0,  //2
            3,1,0   //3
        ];

        this.normals = [];
		for (var i = 0; i < 4; i++) {
			this.normals.push(0,0,-1);
		}

        this.indices = [
            0,1,2,
            2,1,0,
            1,2,3,
            3,2,1
        ];

        this.texCoords = [
            0.25,0.75,
            0.5,1,
            0.748,0.75,
            1,1
        ]

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}