/**
 * MyCylinder
 * @constructor
 */
class MyCylinder extends CGFobject {
    constructor(scene, slices, height, radius) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.radius = radius;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i <= this.slices; i++) {
            this.vertices.push(this.radius*Math.cos(ang), 0, -Math.sin(ang)*this.radius);
            this.vertices.push(this.radius*Math.cos(ang), this.height, -Math.sin(ang)*this.radius);
            if (i != this.slices) {
                this.indices.push(i * 2, i * 2 + 2, i * 2 + 1);
                this.indices.push(i * 2 + 2, i * 2 + 3, i * 2 + 1);
            }
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.texCoords.push(i / this.slices, 1);
            this.texCoords.push(i / this.slices, 0);
            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 10 + Math.round(20 * complexity); //complexity varies 0-1, so slices varies 10-30

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
