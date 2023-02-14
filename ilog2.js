/* 1-A */
const meusNumeros = [1,2,3,4,5,6,7,8];

meusNumeros.forEach(numero=> {
    console.log('Meu número da vez é:', numero);
})

/* 1-B */
const meusFilmes = ['matrix', 'Rambo', 'Toy Story', 'it - a coisa'];

meusFilmes.forEach((filme, indice) => {
    console.log(`Meu filme ${filme} está na posição ${indice}`);

})

/* 1-C */
let escrevaMeuNome = ()=> console.log('Meu nome é Luis Carlos')

escrevaMeuNome();
/* 1-D */

let calculadora = ()=> {
    const soma = (a,b)=> {
        console.log('Resultado da soma', a + b)
    }

    return {
        soma,
        subtracao: (a, b)=> {
            console.log('Resultado da subtração', a - b)
        }
    }
}

const calc = calculadora();
calc.soma(2,2);
calc.subtracao(2,2);
/* 2-A */
const meusNumeros2 = [1,2,3,4,5,6,7,8];

meusNumeros2.forEach((numero)=> {console.log('Meu número da vez é:', numero)});

/* 2-b */
const meusFilmes2 = ['matrix', 'Rambo', 'Toy Story', 'it - a coisa'];

meusFilmes2.forEach((filme, indice)=> {console.log(`Meu filme ${filme} está na posição ${indice}`)});

/* 2-c */
let escrevaMeuNome2 = ()=> console.log('Meu nome é Luis Carlos')
escrevaMeuNome2();

/* 2-d */
let calculadora2 = () => {
    const soma = (a,b)=> {
        console.log('Você está somando',a, 'com', b);
        console.log('Resultado da soma', a + b);
    }
    const subtracao = (a, b)=> {
        console.log('Você está subtraindo',b, 'de', a);
        console.log('Resultado da subtração', a - b)
    }

    return {
        soma, subtracao,
    }
}

const calc2 = calculadora2();
calc.soma(2,2);
calc.subtracao(2,2);

/*3-A */

class Time {
    constructor(listaDeJogadores) {
        this._jogadores = listaDeJogadores;
        this._data = new Date();
        this._estadio = 'Ressacada';
    }

    escalacao() {
        this._jogadores.forEach((jogador)=> {
            console.log('O jogador', jogador);
            console.log('Esta na escalação do dia', this._data);
            console.log('para jogar no estádio', this._estadio);    
        });
    }
}

const jogadores = ['Tio patinhas', 'Huguinho', 'Zezinho', 'Luizinho'];
const time = new Time(jogadores);
time.escalacao();