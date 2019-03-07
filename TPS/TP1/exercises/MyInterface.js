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

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Axis');

        //Checkbox to display the square
        this.gui.add(this.scene, 'displaySquare').name('Square');

        //Checkbox to display the triangle
        this.gui.add(this.scene, 'displayTriangle').name('Triangle');

        //Checkbox to display the parallelogram
        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');
        
        //Checkbox to display the small triangle
        this.gui.add(this.scene, 'displaySmallTriangle').name('Small Triangle');

        //Checkbox to display the small triangle
        this.gui.add(this.scene, 'displayBigTriangle').name('Big Triangle');
        
        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        

        return true;
    }
}