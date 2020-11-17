/**
 * MyUnitCube
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
            0.5, 0.5, 0.5,	  //0
            -0.5, 0.5, 0.5,   //1
            -0.5, -0.5, 0.5,  //2
            0.5, -0.5, 0.5,	  //3
            0.5, 0.5, -0.5,   //4
            -0.5, 0.5, -0.5,  //5
            -0.5, -0.5, -0.5, //6
            0.5, -0.5, -0.5,  //7
            0.5, 0.5, 0.5,	  //8
            -0.5, 0.5, 0.5,   //9
            -0.5, -0.5, 0.5,  //10
            0.5, -0.5, 0.5,	  //11
            0.5, 0.5, -0.5,   //12
            -0.5, 0.5, -0.5,  //13
            -0.5, -0.5, -0.5, //14
            0.5, -0.5, -0.5,  //15
            0.5, 0.5, 0.5,	  //16
            -0.5, 0.5, 0.5,   //17
            -0.5, -0.5, 0.5,  //18
            0.5, -0.5, 0.5,	  //19
            0.5, 0.5, -0.5,   //20
            -0.5, 0.5, -0.5,  //21
            -0.5, -0.5, -0.5, //22
            0.5, -0.5, -0.5   //23
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2, //cima
            2, 3, 0,
            5, 4, 7, //baixo
            7, 6, 5,
            8, 11, 15, //frente
            15, 12, 8,
            13, 14, 10, //tras
            10, 9, 13,
            19, 18, 22, //esquerda
            22, 23, 19,
            17, 16, 20, //direita
            20, 21, 17

        ];
        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            1, 0, 0,
            0, 1, 0,
            0, 1, 0,
            0, -1, 0,
            0, -1, 0,
            0, 1, 0,
            0, 1, 0,
            0, -1, 0,
            0, -1, 0
        ];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    updateBuffers(complexity) {
    }
}

