array = [1,3,5,7,9,11,13,15]

array.forEach(element => {
    console.log("Ex1",element);    
});


array2 = [{nome: "Luis", idade:45}, {nome:"Karina", idade:43},{nome:"Pedro", idade:12}, {nome:"João", idade:6}]
array2.forEach(element=>{
    console.log(`"Ex2,"Olá, meu nome é ${element.nome} e tenho ${element.idade}`)
});


array3 = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]
array3.forEach(element=>{
    console.log("Ex3",element)
})

array4 = [1,3,5,7,9,11,13,15]
array4.forEach(element=>{
    console.log("Ex4",array4.indexOf(element))
})

/*******************************************************************************************************************************************/

array5 = [10,5,60,3,55,70,21,30]

    let resultado =[];
    resultado = array5.filter(element => element>=21)
    console.log ("Ex5",resultado)

array6 = [{nome: "Luis", idade:45}, {nome:"Karina", idade:43},{nome:"Pedro", idade:12}, {nome:"João", idade:6}]
let resultado2 = array6.filter(element => element.idade>18)
console.log ("Ex6",resultado2);


/*******************************************************************************************************************************************/

array7 = [10,5,60,3,55,70,21,30]
resultado = array7.find(numero=> numero===70);
console.log ("Ex7",resultado, array7.indexOf(resultado));

function procuraItem (array, elementoProcurado){
    resultado = array.find(elemento=> elemento == elementoProcurado )
    console.log ("Ex8",resultado)
}
procuraItem(array7,5);

/*******************************************************************************************************************************************/

array8 = [1,3,5,7,9,11,13,15]
resultado = array8.every(el=>el%2!=0)
console.log(resultado)

array9 = [1,3,5,7,9,12,13,15]
resultado = array9.every(el=>el%2!=0)
console.log(resultado)

/*******************************************************************************************************************************************/

array10 = [1,3,5,7,9,11,13,15]
resultado = array10.some(el=>el%2==0)
console.log(resultado)

array11 = [1,3,5,7,9,12,13,15]
resultado = array9.some(el=>el%2==0)
console.log(resultado)

/*******************************************************************************************************************************************/

array12 = [{nome: "Luis", idade:45}, {nome:"Karina", idade:43},{nome:"Pedro", idade:12}, {nome:"João", idade:6}]
resultado = array12.map(element => element.nome);
console.log(resultado);


/*EX 13*/
array13 = [{nome: "Luis", idade:45}, {nome:"Karina", idade:43},{nome:"Pedro", idade:12}, {nome:"João", idade:6}]
resultado = array13.map(element=>`Ex 13 - Meu nome é ${element.nome} e tenho ${element.idade}`)
console.log (resultado)

/*******************************************************************************************************************************************/

array14 = [{nome: "Luis", idade:45}, {nome:"Karina", idade:43},{nome:"Pedro", idade:12}, {nome:"João", idade:6}]
valorInicial = 0;
resultado = array14.reduce((totalizador,valor) => totalizador + valor.idade, valorInicial);
console.log(resultado)

array15 = [7,9.3,6.8,8,10,3.5]
valorInicial = 0;
resultado = array15.reduce((totalizador,valor) => totalizador + valor / array15.length, valorInicial);
console.log(resultado)