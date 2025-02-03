var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;
var algaVerde; // Variável para a alga verde

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixe_serio.png');
    this.load.image('alga', 'assets/Alga Verde PNG.png');  // Carregando a alga verde
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);

    // Adicionando a alga verde no centro da tela
    algaVerde = this.add.image(400, 300, 'alga');
    algaVerde.setOrigin(0.5, 0.5);  // Centraliza a imagem pelo meio
    algaVerde.setScale(0.5);        // Ajusta o tamanho, se necessário

    // Guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);  // Faz o peixe olhar para o lado certo
}

function update() {
    // Adicionando controles no peixe para seguir o mouse
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}