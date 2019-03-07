/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTriangleSmall extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -1,0,0, //0
            0,1,0,  //1
            1,0,0   //2
        ]; 

        this.indices = [
            2,1,0
        ];

        this.PrimitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

}