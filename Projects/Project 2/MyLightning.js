/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
	constructor(scene) {
        super(scene);
        this.scene = scene;

        this.axiom = "X";
        this.startingAxiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0 * Math.PI / 180.0;;
        this.iterations = 3;
        this.scale = Math.pow(0.5, this.iterations-1); 

        this.productions = 
        {
            "F": [  "FF" ],
            "X": [  "F[-X][X]F[-X]+FX",
                    "F[X]F[-X]+XF",
                    "FX+[X]-F[X]F[-X]",
                    "-F[X]F[-X] + F[X]F[-X]"
                 ]
        }

        this.startingTime = 0;
        this.depth = 0;

        this.initGrammar();

        this.iterate();
    }
    
    initGrammar() {
        this.grammar = {
            "F" : new MyLightningUnit(this.scene),
            "X" : new MyLightningUnit(this.scene)
        }
    }

    update(t) {
        var divisions = this.axiom.length/1000;
        this.depth += (50*this.axiom.length)/1000;
    }

    startAnimation(startingTime) {
        this.startingTime = startingTime;
        this.depth = 0;

        this.axiom = this.startingAxiom;

        this.iterate();
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length; ++i){

            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                case "\\":
                    //roda positivo em XX
                    this.scene.rotate(this.angle,1,0,0);   
                    break;
                    
                case "/":
                    this.scene.rotate(-this.angle,1,0,0);
                    break;

                case "^":
                   this.scene.rotate(this.angle,0,1,0);
                   break;

                case "&":
                    this.scene.rotate(-this.angle,0,1,0);
                    break;


                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if ( primitive )
                    {
                        if (i < this.depth) {
                            primitive.display();
                            this.scene.translate(0, 1, 0);
                        }
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
}
