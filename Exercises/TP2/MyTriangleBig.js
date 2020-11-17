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

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}