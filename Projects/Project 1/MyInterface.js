/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;
        this.gui.add(this.scene, 'displayAxis').name("Display axis");
        this.gui.add(this.scene, 'useTextures').name("Textures");
        this.gui.add(this.scene, 'timeOfDay', this.scene.timeIds).name('Time of Day').onChange(this.scene.updateTimeOfDay.bind(this.scene));

        return true;
    }
}