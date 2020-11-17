/**
 * MyLPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLPlant extends MyLSystem {
	constructor(scene) {
        super(scene);

        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0 * Math.PI / 180.0;;
        this.iterations = 3;
        this.scale = Math.pow(1, this.iterations-1); 

        this.productions = 
        {
            "F": [ "FF" ],
            "X": [ "F[-X][X]F[-X]+X", 
                    "F[-X][X]+X",  
                    "F[+X]-X",
                    "F[/X][X]F[\\\\X]+X",
                    "F[\\X][X]/X",
                    "F[/X]\\X",
                    "F[^X][X]F[&X]^X",
                    "F[^X]&X",
                    "​F[&X]^X"
                 ]
        };

        this.initGrammar();

        this.iterate();
    }

    initGrammar() {
        this.grammar = {
            "F" : new MyBranch(this.scene),
            "X" : new MyLeaf(this.scene)
        };
    }
}