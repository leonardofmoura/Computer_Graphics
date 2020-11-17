/**
 * MyPrism
 * @constructor
 */
class MyPrism extends CGFobject {
    constructor(scene, slices, height, radius) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.radius = radius;
        this.scene = scene;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i < this.slices; i++) {
            var sa = Math.sin(ang);
            var saa = Math.sin(ang + alphaAng);
            var ca = Math.cos(ang);
            var caa = Math.cos(ang + alphaAng);

            //push the new vertices
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);
            this.vertices.push(caa, 0, -saa);
            this.vertices.push(caa, 1, -saa);

            //normal auxiliary array
            var normal = [
                saa - sa,
                0,
                caa - ca
            ];

            //normalization
            var nsize = Math.sqrt(normal[0] * normal[0] + normal[2] * normal[2]);
            normal[0] /= nsize;
            normal[2] /= nsize;

            //push normals once for each vertice
            for (var j = 0; j < 4; j++) {
                this.normals.push(...normal);
            }

            this.indices.push(4 * i + 2, 4 * i + 1, 4 * i, 4 * i + 1, 4 * i + 2, 4 * i + 3);

            //add texCoords
            this.texCoords.push(i / this.slices, 1);
            this.texCoords.push(i / this.slices, 0);
            this.texCoords.push((i + 1) / this.slices, 1);
            this.texCoords.push((i + 1) / this.slices, 0);

            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    displayT() {
        this.scene.pushMatrix();
        this.scene.scale(this.radius, this.height, this.radius);
        this.display();
        this.scene.popMatrix();
    }
    updateBuffers(complexity) {
        this.slices = 3 * Math.round(9 * complexity);

        //reinitialize buffers
        this.initBuffers();
        this.initNormalVisBuffers();
    }
}
