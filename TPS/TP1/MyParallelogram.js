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

        this.indices = [
            0,1,2,
            2,1,0,
            1,2,3,
            3,2,1
        ];

        this.PromitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}