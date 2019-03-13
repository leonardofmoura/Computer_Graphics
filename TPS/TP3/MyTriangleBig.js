/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTriangleBig extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -2,0,0, //0
            0,2,0,  //1
            2,0,0   //2
        ]; 

        this.indices = [
            2,1,0
        ];

        this.normals = [];
		for (var i = 0; i < 3; i++) {
			this.normals.push(0,0,1);
		}

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}