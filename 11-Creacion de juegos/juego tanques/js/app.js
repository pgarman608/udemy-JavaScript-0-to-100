/**
 * Variables
 */
/**
 * Variable game:
 * Esta variable es la base del juego, donde guardamos el canvas, las balas, 
 * las teclas, los enemigos, los puntos entre otras cosas.
 */
game = {
    canvas: null,
    ctx: null,
    caratula: true,
    x: 0,
    y: 0,
    imagen: null,
    radianes: null,
    teclaPu1sada: null,
    tecla_array: new Array(),
    balas_array: new Array(),
    enemigos_array: new Array(),
    colorEnemigo: ["red" ,"blue" ,"black" ,"white" ,"pink" ,"purple"],
    colorBala :"red",
    centroX: 0,
    centroY: 0,
    w: 0,
    h: 0,
    puntos: 0,
    vidas: 3,
    balas:200,
    finJuego: false,
}
/**
 * Variable Sound:
 * Guardaremos los sonidos del juego.
 */
sound = {
    boing: null,
    disparo: null,
    intro: null,
    fin: null,
    boom: null,
}
/**
 * CONSTANTES
 */
// Boton de la barra espaciadora
const BARRA = 32;
/**
 * Objetos
 */
/**
 * Objeto Bala:
 * El objeto que maneja la informacion de las balas.
 * @param {number} x 
 * @param {number} y 
 * @param {number} radianes 
 */
function Bala(x,y,radianes) {
    this.x = x;
    this.y = y;
    this.w = 5;
    this.velocidad = 8;
    this.radianes = radianes;
    this.dibujar = function () {
        
        game.ctx.save();
        game.ctx.fillStyle = game.colorBala;
        //Saber el ejex e ejey por el cual se va a mover la bala
        this.x += Math.cos(this.radianes) * this.velocidad;
        this.y += Math.sin(this.radianes) * this.velocidad;
        game.ctx.fillRect(this.x, this.y, this.w, this.w);
        game.ctx.restore();
    };

}
/**
 * Objeto tanque:
 * Guardaremos los datos de cada tanque.
 * @param {number} x 
 * @param {number} y 
 * @param {number} radio 
 */
function Tanque(x,y,radio) {
    this.x = x;
    this.y = y;
    this.radio = radio;
    this.escala = 1;
    this.rotacion = 0;
    this.w = 0;
    this.h = 0;
    this.dibujar = function () {
        
        game.imagen.src = "imagenes/tanque.png";
        game.imagen.onload = () => {
            this.w = game.imagen.width;
            this.h = game.imagen.height;
            let halfw = this.w / 2;
            let halfh = this.h / 2;
            game.ctx.drawImage(game.imagen, game.centroX + halfw, game.centroY - halfh)

        };

    }
}
/**
 * Objeto Enemigo:
 * Guardaremos los datos de cada enemigo.
 * @param {*} x 
 * @param {*} y 
 */
function Enemigo(x,y) {
    this.num = 0;
    this.x = x;
    this.y = y;
    this.inicioX = x;
    this.inicioY = y;
    this.estado = 1;
    this.r = 10;
    this.w = this.r * 2;
    this.vive = true;
    this.velocidad = .3 + Math.random();
    this.color = game.colorEnemigo[Math.floor(Math.random() * game.colorEnemigo.length)];
    this.dibujar = function () {
        if (this.num < 100 && this.vive) {
            game.ctx.save();
            game.ctx.beginPath();
            game.ctx.fillStyle = this.color;
            game.ctx.arc(this.x,this.y, this.r, 0, 2 * Math.PI);
            game.ctx.fill();
            this.num += this.velocidad;
            this.x = game.centroX * this.num / 100 + this.inicioX * (100 - this.num) / 100;
            this.y = game.centroY * this.num / 100 + this.inicioY * (100 - this.num) / 100;
            game.ctx.restore();
            
        }
    }
}
/**
 * Funciones
 */
const caratula = () => {
    let imagen = new Image();
    imagen.src = "imagenes/caratula.png";
    imagen.width = 10;
    imagen.onload =() => {
        game.ctx.drawImage(imagen,0,0,700,500);
    }
};
const seleccionar = () => {
    if (game.caratula) {
        inicio();
    }
};
const inicio = () => {
    limpiarcanvas();
    game.caratula = false;
    sound.intro.play();

    document.addEventListener("mousemove", (evnt) => {
        //Recogeremos la ubicacion del mouse en variables independientes
        let {x,y} = ajustar(evnt.clientX, evnt.clientY);
        let directionX = x - game.centroX;
        let directionY = y - game.centroY;
    
        
        game.radianes = Math.atan2(directionY,directionX);
    
    });

    game.tanque.dibujar();
    setTimeout(lanzaEnemigo(),1000)
    console.log(game.enemigos_array);
    animar();
};
const animar = () => {
    requestAnimationFrame(animar);
    verificar();
    pintar();
    colisiones();
};
const colisiones = () => {
    game.enemigos_array.map ((enemigo,i) => {
        game.balas_array.map((bala,j)=> {
            if (enemigo && bala) {
                if ((bala.x > enemigo.x) && (bala.x < enemigo.x + enemigo.w) && 
                (bala.y > enemigo.y) && (bala.y < enemigo.y + enemigo.w)) {
                    game.enemigos_array[i] = null;
                    game.balas_array[i] = null;
                    game.puntos += 10;
                    sound.boing.play();
                }
            }
        });
        if (enemigo && enemigo.num >= 95) {
            game.enemigos_array[i] = null;
            game.vidas -= 1;
            sound.boom.play();
            if (game.vidas <= 0) fin();
        }
    });
    
};
const fin = () => {
    limpiarcanvas();
    textoEnPantalla("Fin del juego",0,150,"bold 60px Courier","white")
    textoEnPantalla(`Has conseguido un total de : ${game.puntos} PUNTOS`,0,300,"bold 30px Courier","white");
    game.finJuego = true;
    sound.fin.play();
}
const verificar = () => {
    if (game.tecla_array[BARRA]) {        
        if (game.balas > 0) {
            game.balas_array.push(
                new Bala(
                    game.centroX + Math.cos(game.radianes) * 35,
                    game.centroY + Math.sin(game.radianes) * 35,
                    game.radianes
                )
            );
    
            game.balas--;
            game.tecla_array[BARRA] = false;
            sound.disparo.play();
        }

    }
};
const pintar = () => {
    limpiarcanvas();
    if (!game.finJuego) {
        marcador();
        game.ctx.save();
        game.ctx.translate(game.centroX, game.centroY);
        game.ctx.scale(game.tanque.escala, game.tanque.escala);
        game.ctx.rotate(game.radianes);
        game.ctx.drawImage(game.imagen, -game.imagen.width/2 ,-game.imagen.height/2 );
        game.ctx.restore();
        game.balas_array.map((bala, i) => {
            if (bala != null) {
                
                bala.dibujar();
                if (bala.x < 0
                    || bala.x > game.w
                    || bala.y < 0
                    || bala.y > game.h) {
                    
                        bala = null;
                    
                    }
                
            }
        });
        
        game.enemigos_array.map((enemigo, i) => {
            if (enemigo != null) {
                enemigo.dibujar();
            }
        });
    }else{
        fin();
    }
};

const marcador = () => {
    let texto = `PUNTOS: ${game.puntos} VIDAS: ${game.vidas} BALAS: ${game.balas}`;
    textoEnPantalla(texto,0,10,"bold 20px Courier","black");
}
const lanzaEnemigo = () => {
    let lado = Math.floor(Math.random() * 4) + 1;
    let x, y;

    if (lado == 1){
        
        x = -10;
        y = Math.floor(Math.random() * game.h);

    }else if(lado == 2){

        x = Math.floor(Math.random() * game.w);
        y = -10;

    }else if(lado == 3){

        x = game.w + Math.random() * 10;
        y = Math.floor(Math.random()*game.h);

    }else if(lado == 4){

        x = Math.floor(Math.random()*game.w);
        y = game.h + Math.random() * 10;
        
    }

    game.enemigos_array.push(new Enemigo(x,y));
    setTimeout(lanzaEnemigo,2000);

};
const ajustar = (clientX, clientY) => {
    const position = game.canvas.getBoundingClientRect();
    
    
    const x = clientX - position.left;
    let y = clientY - position.top;
    
    return {x,y};
}

const textoEnPantalla = (cadena, x, y,tipo,color) => {
    let center = (game.canvas.width - x)/2;
    game.ctx.save();
    game.ctx.fillStyle = color;
    game.ctx.strokeStyle = color;
    game.ctx.textBaseline = "top";
    game.ctx.font = tipo;
    game.ctx.textAlign = "center";
    game.ctx.clearRect(x, y, game.canvas.width, game.canvas.height);
    game.ctx.fillText(cadena, x+center, y);
    game.ctx.restore();
};
const limpiarcanvas = () => {
    game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height)
};
/**
 * Listener
 */

document.addEventListener("mousemove", (evnt) => {
    //Recogeremos la ubicacion del mouse en variables independientes
    let {x,y} = ajustar(evnt.clientX, evnt.clientY);
    let directionX = x - game.centroX;
    let directionY = y - game.centroY;

    
    game.radianes = Math.atan2(directionY,directionX);
});
document.addEventListener("keydown", (evnt) => {
    
    game.teclaPulsada = evnt.keyCode;
    game.tecla_array[game.teclaPulsada] = true

});

window.requestAnimationFrame = ( () => {
    return window.requestAnimationFrame ||
    window.webKitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) { window.setTimeout(callback,17); }
})();
window.onload = function() {
    game.canvas = document.getElementById("canvas");
    if(game.canvas && game.canvas.getContext){
        game.ctx = canvas.getContext("2d");
        if (game.ctx) {
            //Guardamos los sonidos en su variable correspondiente
            sound.boing = document.getElementById("boing");
            sound.disparo = document.getElementById("disparo");
            sound.intro = document.getElementById("intro");
            sound.fin = document.getElementById("fin");
            sound.boom = document.getElementById("boom");
            // Guardamos el tamaño del canvas y el centro del canvas en la variable general
            game.w = game.canvas.width;
            game.h = game.canvas.height;
            game.centroX = game.w / 2;
            game.centroY = game.h / 2;

            game.imagen = new Image();
            game.tanque = new Tanque(game.centroX, game.centroY);
            caratula();
            game.canvas.addEventListener("click",seleccionar,false);
        }else{
            alert("No cuentas con Canvas");
        }
    }
};