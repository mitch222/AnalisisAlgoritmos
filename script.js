const canvas = document.getElementById("animacion");
const ctx = canvas.getContext("2d");
//Variables globales
var lista = [];
var total = [];
var timeout = 0;
var timeTravel = 0;
var waitUntil = 0;

class ball {
  constructor() {
    this.x = 50;
    this.y = 250;
    this.vx = 150 / timeTravel;
    this.movement = this.vx
    this.radius = 25;
    this.color = "blue";
  }
  update() {
    this.x += this.movement;
  }
  stop(){
    
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function handleCircles() {
  //Cracion de circulos
  if (timeout == 0) {
      var cir = new ball();
      lista.push(cir);
    }
  //Animacion
  for (let i = 0; i < lista.length; i++) {
    lista[i].update();
    lista[i].draw();
  //Condiciones
    console.log(lista)
    
    /*   if (lista.length > 2 && collision(lista[i], lista[i+1])){
            lista[i + 1].movement = 0;
       }*/
    
      if(lista[i].x >= 250 && lista[i].x <= 270){
          lista[i].movement = 0  
          lista[i].x = 300
        }
       
      }
    }    
  

function draw() {
  if (total.length != 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(200, 100, 200, 200);
    handleCircles();
    requestAnimationFrame(draw);

    if (timeout == 0) {
      timeout = total[0].llegada * 40;
      timeTravel = total[0].llegada * 40;
      total.shift();
    }
    
    if (timeout == 0) {
      timeout = total[0].llegada * 10;
      timeTravel = total[0].llegada * 10;
      total.shift();
    }
    timeout--;
  } else {
    cancelAnimationFrame(draw);
  }
}

function collision(first, second) {
  try{
      if (second.x >= first.x - first.radius) {
      return true;
    }
  }catch (error){
    
  }
  
}

//Clases
class Cliente {
  contructor() {
    this.proceso = 0;
    this.llegada = 0;
    this.espera = 0;
    this.cont = 0;
  }

  //Getter y setter
  get proceso() {
    return this._proceso;
  }

  set proceso(proceso) {
    this._proceso = proceso;
  }

  get cont() {
    return this._cont;
  }

  set cont(cont) {
    this._cont = cont;
  }

  get llegada() {
    return this._llegada;
  }

  set espera(espera) {
    this._espera = espera;
  }

  get espera() {
    return this._espera;
  }

  set llegada(llegada) {
    this._llegada = llegada;
  }

  genEsperar() {
    this.cont = 0;
  }

  esperar() {
    this.cont++;
  }
  genLlegada() {
    var x = randomNums();

    if (x < 0.1 && x >= 0) {
      this.llegada = 1;
    } else if (x < 0.2 && x >= 0.1) {
      this.llegada = 2;
    } else if (x < 0.3 && x >= 0.2) {
      this.llegada = 3;
    } else if (x < 0.4 && x >= 0.3) {
      this.llegada = 4;
    } else if (x < 0.5 && x >= 0.4) {
      this.llegada = 5;
    } else if (x < 0.6 && x >= 0.5) {
      this.llegada = 6;
    } else if (x < 0.7 && x >= 0.6) {
      this.llegada = 7;
    } else if (x < 0.8 && x >= 0.7) {
      this.llegada = 8;
    } else if (x < 0.9 && x >= 0.8) {
      this.llegada = 9;
    } else if (x < 1 && x >= 0.9) {
      this.llegada = 10;
    }
  }

  genProceso() {
    var x = randomNums();
    if (x < 0.2 && x >= 0) {
      this.proceso = 1;
      var y = randomNums();

      if (y < 0.2 && y >= 0) {
        this.espera = 5;
      } else if (y < 0.4 && y >= 0.2) {
        this.espera = 6;
      } else if (y < 0.6 && y >= 0.4) {
        this.espera = 7;
      } else if (y < 0.8 && y >= 0.6) {
        this.espera = 8;
      } else if (y < 1 && y >= 0.8) {
        this.espera = 9;
      }
    } else if (x < 0.4 && x >= 0.2) {
      this.proceso = 2;
      var y = randomNums();

      if (y < 0.2 && y >= 0) {
        this.espera = 5;
      } else if (y < 0.4 && y >= 0.2) {
        this.espera = 6;
      } else if (y < 0.6 && y >= 0.4) {
        this.espera = 7;
      } else if (y < 0.8 && y >= 0.6) {
        this.espera = 8;
      } else if (y < 1 && y >= 0.8) {
        this.espera = 9;
      }
    } else if (x < 0.6 && x >= 0.4) {
      this.proceso = 3;
      var y = randomNums();

      if (y < 0.2 && y >= 0) {
        this.espera = 5;
      } else if (y < 0.4 && y >= 0.2) {
        this.espera = 6;
      } else if (y < 0.6 && y >= 0.4) {
        this.espera = 7;
      } else if (y < 0.8 && y >= 0.6) {
        this.espera = 8;
      } else if (y < 1 && y >= 0.8) {
        this.espera = 9;
      }
    } else if (x < 0.8 && x >= 0.6) {
      this.proceso = 4;
      var y = randomNums();
      if (y < 0.2 && y >= 0) {
        this.espera = 5;
      } else if (y < 0.4 && y >= 0.2) {
        this.espera = 6;
      } else if (y < 0.6 && y >= 0.4) {
        this.espera = 7;
      } else if (y < 0.8 && y >= 0.6) {
        this.espera = 8;
      } else if (y < 1 && y >= 0.8) {
        this.espera = 9;
      }
    } else if (x < 1 && x >= 0.8) {
      this.proceso = 5;
      var y = randomNums();

      if (y < 0.2 && y >= 0) {
        this.espera = 5;
      } else if (y < 0.4 && y >= 0.2) {
        this.espera = 6;
      } else if (y < 0.6 && y >= 0.4) {
        this.espera = 7;
      } else if (y < 0.8 && y >= 0.6) {
        this.espera = 8;
      } else if (y < 1 && y >= 0.8) {
        this.espera = 9;
      }
    }
  }
}

class Caja {
  constructor() {
    this.atendidos = 0;
    this.espera1 = 0;
    this.espera2 = 0;
    this.fila = [];
    this.max = 0;
  }

  llegada() {
    if (this.espera2 == 0) {
      var per = new Cliente();

      per.genEsperar();
      per.genLlegada();

      this.espera2 = per.llegada;
      this.fila.push(per);
      total.push(per);
    } else {
      this.espera2--;

      for (var i = 0; i < this.fila.length; i++) {
        this.fila[i].esperar();
      }
    }
  }

  atender() {
    if (this.espera1 == 0 && this.fila.length != 0) {
      this.fila[0].genProceso();
      this.espera1 = this.fila[0].espera;
      if (this.max < this.fila[0].cont) {
        this.max = this.fila[0].cont;
      }
      this.fila.shift();
      this.atendidos++;
    } else if (this.espera1 > 0) {
      this.espera1--;
    }
  }

  resultados() {
    var noAt =
      "% no atendidos: " +
      this.fila.length / (this.atendidos + this.fila.length) +
      "| ";
    var at =
      "% atendidos: " +
      this.atendidos / (this.atendidos + this.fila.length) +
      "| ";
    var total = "Atendidos : " + this.atendidos + "| ";
    var max = " Maximo tiempo de espera: " + this.max + " minutos";
    var msj = noAt + " " + at + " " + total + " " + max;
    return msj;
  }
}

//Funcion para generar Numeros aleatorios
function randomNums() {
  var x = -Math.log(Math.random()) / 0.34;
  while (x > 1) {
    x = x - 1;
  }
  return x;
}

//Funcion para realizar la simulacion
function simulacion(tiempo) {
  var cont = 0;
  var cont2 = 0;
  var actual = new Date();
  var final = new Date();
  var cajero = new Caja();
  final.setHours(final.getHours() + parseInt(tiempo));

  while (actual.getHours() != final.getHours()) {
    //entrada a la fila
    cajero.llegada();
    cajero.atender(cont2);
    actual.setMinutes(actual.getMinutes() + 1);
    cont += 1;
    cont2 += 1;
  }
  return cajero.resultados();
}

/* 
Se Muestran los numeros aleatorios, el promedio y la varianza en el html
*/
//Pruebas

var form = document.getElementById("forms");
var button = document.getElementById("generar");
button.onclick = function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  document.getElementById("numero").innerHTML = simulacion(name);
  draw();
};
