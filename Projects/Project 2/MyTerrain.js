/**
 * MyTerrain
 * @constructor
 */
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.plane = new Plane(scene, 32);

        this.initShaders();
    }

    initShaders() {
        this.terrainTexture = new CGFappearance(this.scene);
        this.terrainTexture.setAmbient(0.3, 0.3, 0.3, 1);
        this.terrainTexture.setDiffuse(0.7, 0.7, 0.7, 1);
        this.terrainTexture.setSpecular(0.0, 0.0, 0.0, 1);
        this.terrainTexture.setShininess(120);
        this.terrainTexture.loadTexture("images/terrain.jpg")
        this.terrainTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.mapTexture = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.altimetryTexture = new CGFtexture(this.scene, "images/altimetry.png");

        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.shader.setUniformsValues({ uSampler2: 1, uSampler3: 2 });
    }

    display() {
        this.mapTexture.bind(1);
        this.altimetryTexture.bind(2);

        this.terrainTexture.apply();
        //this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.setActiveShader(this.shader);
        this.plane.display();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}


