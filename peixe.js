var config = {
    type: Phaser.AUTO,
    width: 800,
    height:600,
    
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);

var tubarao;

var baiacu;


function preload(){
    //Essa parte carrega o Arquivo do oceano.
    this.load.image('oceano',"Assets/bg_azul-escuro.png");

// Essa parte adiciona a logo do inteli na página.
    this.load.image("logo","Assets/logo-inteli_branco.png")

    //Essa parte adiciona o baiacu na página.
    this.load.image('baiacu',"Assets/peixes/baiacu.png")

    // Essa parte adicona o Tubarão na página.
    this.load.image("tubarao","Assets/peixes/tubarao.png")
}

function create(){
    this.add.image(400,300,'oceano');

    this.add.image(400,525,"logo").setScale(0.5);

//Guarda o tubarão dentro da variável 'tubarao'.
    tubarao = this.add.image(400,300,'tubarao')

    // Transforma a variável
    tubarao.setFlip(true, false);

   baiacu = this.add.image(400,300,'baiacu')

}

function update(){

    // Adiciona controle nos peixes.
    tubarao.x = this.input.x;
    tubarao.y = this.input.y;

};




