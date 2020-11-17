/**
 * MyScene
 * @constructor
 */
class MyScene extends CGFscene {
    constructor() {
        super();
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this)
        this.hill = new MyVoxelHill(this, 5);
        this.hill2 = new MyVoxelHill(this, 4);
        // this.hill3 = new MyVoxelHill(this,6);
        this.fireplace = new MyFireplace(this);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.cubeMap = new MyCubeMap(this);
        this.house = new MyHouse(this);
        this.floor = new MyFloor(this);
        this.lake = new MyLake(this);

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.useTextures = true;
        this.timeOfDay = 0;
        this.timeIds = {'Day': 0, 'Night': 1};

    }

    initLights() {
        this.ambientLight = 0.6;
        this.setGlobalAmbientLight(this.ambientLight, this.ambientLight, this.ambientLight, 1.0);

        //fireplace
        this.lights[0].setPosition(15, 0.1, 0, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 0.5, 1.0);
        this.lights[1].setLinearAttenuation(0.5);
        this.lights[0].disable();
        // this.lights[0].setVisible(true);
        this.lights[0].update();

        //the sun
        this.lights[1].setPosition(100, 100, 0, 1);
        this.lights[1].setDiffuse(1.0, 1.0, 0.5, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.5, 1.0);
        this.lights[1].setLinearAttenuation(0.0001);
        this.lights[1].enable();
        // this.lights[1].setVisible(true);
        this.lights[1].update();

        //the moon
        this.lights[2].setPosition(-100, 100, 0, 1);
        this.lights[2].setDiffuse(0.5, 0.5, 1, 1.0);
        this.lights[2].setSpecular(0.5, 0.5, 1, 1.0);
        this.lights[2].setLinearAttenuation(0.01);
        this.lights[2].disable();
        // this.lights[2].setVisible(true);
        this.lights[2].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(125, 40, -30), vec3.fromValues(0, -3, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    updateTimeOfDay() {
        if (this.timeOfDay == 0) {
            this.cubeMap.dayMode();
            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[2].disable();
            this.ambientLight = 0.6;
            this.setGlobalAmbientLight(this.ambientLight, this.ambientLight, this.ambientLight, 1.0);

        } else if (this.timeOfDay == 1) {
            this.cubeMap.nightMode();
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].enable();
            this.ambientLight = 0.2;
            this.setGlobalAmbientLight(this.ambientLight, this.ambientLight, this.ambientLight, 1.0);
        }
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.enableTextures(this.useTextures);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();

        // Draw axis
        if (this.displayAxis) this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //floor
        this.floor.display();

        //treegroup
        this.pushMatrix();
        this.translate(-4, 0, 19);
        this.treeGroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-23, 0, -4);
        this.treeGroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-41,0.1,19);
        this.treeGroup.display();
        this.popMatrix();

        //treerow
        this.pushMatrix();
        this.translate(35, 0.1, -13);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(25, 0.1, 0);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI/2,0,1,0);
        this.translate(35,0.1,-37);
        this.treeRow.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI/2,0,1,0);
        this.translate(39,0.1,3);
        this.treeRow.display();
        this.popMatrix();

        //house
        this.pushMatrix();
        this.translate(0, 0.01, 0);
        this.house.display();
        this.popMatrix();

        //fireplace
        this.pushMatrix();
        this.translate(15, 0.01, 0);
        this.fireplace.display();
        this.popMatrix();

        //hills
        this.pushMatrix();
        this.translate(16, 0.01, 10);
        this.hill2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-22, 0.01, -19);
        this.hill.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20,0.01,28);
        this.hill2.display();
        this.popMatrix();

        //cubemap
        this.cubeMap.display();

        //lake
        this.lake.display();

        // ---- END Primitive drawing section
    }
}