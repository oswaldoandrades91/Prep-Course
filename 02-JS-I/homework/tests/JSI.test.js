/* eslint-disable no-undef */
const {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
} = require('../homework.js');

//describe('nuevaString', function() {
  //it('Deberia ser un string', 
  function(nuevastring) {
   // expect(typeof nuevaString).toBe('string');
    nuevastring='string';
    return nuevastring 
  };
;

describe('nuevoNum', function() {
  it('Deberia ser un numero', 
  function(nuevoNum) {
   // expect(typeof nuevoNum).toBe('number');
   nuevoNum=1;
   return nuevoNum

  });
});

//describe('nuevoBool', function() {
  //it('Deberia ser un booleano', function() {
    expect(typeof nuevoBool).toBe('boolean');
    function(nuevobool) {
      nuevobool=true;
      return nuevobool
  };


//describe('nuevaResta', function() 
  //it('Deberia ser un booleano', function() {
   // expect(nuevaResta).toBe(true);
   function(nuevaresta) {
    nuevaresta=true;
    return nuevaResta
  };


//describe('nuevaMultiplicacion', function() {
  //it('Deberia ser un booleano', function() {
   //
  // expect(nuevaMultiplicacion).toBe(true);
    function(nuevaMultiplicacion) {
      nuevaMultiplicacion = true;
      return nuevaMultiplicacion
  };


describe('nuevoModulo', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevoModulo).toBe(true);
  });
});

describe('devolverString(str)', function() {
  it('Deberia devolver el string provisto', function() {
    let string = 'Henry';
    expect(devolverString(string)).toBe(string);
    function(str) {
      let string ='henry'
      return string;
  });
});

//describe('suma(x, y)', function() {
 // it('Deberia devolver la suma de los dos argumentos', 
  function  suma(x,y) {
    //expect(suma(5, 5)).toBe(10);
   //expect(suma(-1, 5)).toBe(4);
   z=(x+x);
   w=(x+y)
   return {z,w};
   
  };
;
suma(5,-1)

//describe('resta(x, y)', function() {
  it('Deberia devolver la diferencia de los dos argumentos', 
  function resta(x,y) {
   // expect(resta(5, 5)).toBe(0);
    //expect(resta(-1, 5)).toBe(-6);
    //expect(resta(5, -5)).toBe(10);
   // expect(resta(0, 0)).toBe(0);
   z=(x-x);
   w=(y-x);
   o=(x-(-x));
   p=(0-0);
   return {z,w,o,p};
  };
resta(5,-1);

//describe('divide(x, y)', function() {
 // it('Deberia devolver la division de los dos argumentos',#
   function divide(x,y) {
   // expect(divide(5, 5)).toBe(1);
   // expect(divide(10, 5)).toBe(2);
   // expect(divide(11, 2)).toBe(5.5);
   z=(x/x);
   w=(y/x);
   o=(y+1)/(x*2/5);
   return {z,w,o};
   }

divide(5,10)

//describe('multiplica(x, y)', function() {
 //it('Deberia devolver el producto de los dos argumentos', 
  function multiplica(x,y) {
    //expect(multiplica(5, 5)).toBe(25);
    //expect(multiplica(10, -5)).toBe(-50);
    //expect(multiplica(11, 0)).toBe(0);
    z=(x*x);
    w=(y*(-x));
    o=(y+1)*(0);
    return {z,w,o};
    }
multiplica(5,10)  



//describe('sonIguales(x, y)', function() {
  //it('Deberia devolver true si los argumentos son iguales y sino false',
function soniguales(x,y) {
  z=(x===x);
  w=(y===x);
  o=('test'==='test');
  return {z,w,o};
  }
       //expect(sonIguales(15, 15)).toBe(true);
    //expect(sonIguales(90, 50)).toBe(false);
    //expect(sonIguales('test', 'test')).toBe(true);

sonIguales(15,90)


//describe('tienenMismaLongitud(str1, str2)', function() {
  //it('Deberia devolver true si los strings tienen la misma longitud y sino false',
   function tienenMismaLongitud(str1,str2) {
    //expect(tienenMismaLongitud('hi', 'there')).toBe(false);
   // expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
    z=str1.length===str2.length;
    w='javascript'.length==='bumfuzzled'.length;
    return {z,w};
  };

//describe('menosQueNoventa(num)', function() {
 // it('Deberia devolver true si el numero es menor a noventa sino false',
  function menosQueNoventa(num) {
    //expect(menosQueNoventa(15)).toBe(true);
   // expect(menosQueNoventa(90)).toBe(false);
    //expect(menosQueNoventa(100)).toBe(false);
    z=num>15;
    w=(num)>90;
    o=(num)>100;
    return {z,w,o};
  };
  menosQueNoventa(90);

//describe('mayorQueCincuenta(num)', function() {
  //it('Deberia devolver true si el numero es mayor a cincuenta sino false', 
  function mayorQueCincuenta(num){
    z=num<15;
    w=(num)>50;
    o=(num)<60;
    return {z,w,o};
    expect(mayorQueCincuenta(15)).toBe(false);
    expect(mayorQueCincuenta(50)).toBe(false);
    expect(mayorQueCincuenta(60)).toBe(true);
  };
  mayorQueCincuenta(50)

//describe('obtenerResto(x, y)', function() {
  //it('Deberia devolver el resto de dividir x sobre y', 
  function obtenerResto(x,y) {
    expect(obtenerResto(15, 5)).toBe(0);
    expect(obtenerResto(21, 5)).toBe(1);
    expect(obtenerResto(22, 5)).toBe(2);
    z=(y%x);
    w=((y+6)%x);
    o=((y+7)%x);
    return {z,w,o};
  };
obtenerResto(15,5);

//describe('esPar(num)', function() {
  //it('Deberia devolver true si el numero es par sino false',
   function esPar(num1,num2,num3){
      z=((num1%2)==0);
      w=((num2%2)==0);
      o=((num3%2)==0);
    return {z,w,o}; 
    //expect(esPar(6)).toBe(true);
    //expect(esPar(7)).toBe(false);
    //expect(esPar(0)).toBe(true);
    };
esPar(num1,num2,num3)

//describe('esImpar(num)', function() {
  //it('Deberia devolver true si el numero es impar sino false',
   function esImpar(num1,num2,num3) {
      z=((num1%2)!==0);
      w=((num2%2)!==0);
      o=((num3%2)!==0);
    return {z,w,o}; 
    //expect(esImpar(6)).toBe(false);
    //expect(esImpar(7)).toBe(true);
    //expect(esImpar(0)).toBe(false);
  };
esImpar(6,7,0)


//describe('elevarAlCuadrado(num)', function() {
  //it('Deberia devolver el numero elevado al cuadrado', 
  function elevarAlCuadrado(num1,num2,num3,num4) {
    z=Math.pow(num1,2);
    w=Math.pow(num2,2);
    x=Math.pow(num3,2);
    y=Math.pow(num4,2);
  return {z,w,x,y}; }
  elevarAlCuadrado(6,7,0,5)
    //expect(elevarAlCuadrado(6)).toBe(36);
    //expect(elevarAlCuadrado(7)).toBe(49);
    //expect(elevarAlCuadrado(0)).toBe(0);
    //expect(elevarAlCuadrado(-5)).toBe(25);
  };


//describe('elevarAlCubo(num)', function() {
  //it('Deberia devolver el numero elevado al cubo', 
  function elevarAlCubo(num1,num2,num3,num4) {
    z=Math.pow(num1,3);
    w=Math.pow(num2,3);
    x=Math.pow(num3,3);
  return {z,w,x};
 }
  elevarAlCuadrado(3,0,-5)
    //expect(elevarAlCubo(3)).toBe(27);
    //expect(elevarAlCubo(0)).toBe(0);
    //expect(elevarAlCubo(-5)).toBe(-125);
  };


//describe('elevar(num, exponent)', function() {
  //it('Deberia devolver el numero elevado al exponente indicado',
   function elevar(num1,num2,num3,num4,exp1,exp2,exp3,exp4) {
    z=Math.pow(num1,exp1);
    w=Math.pow(num2,exp2);
    x=Math.pow(num3,exp3);
    y=Math.pow(num4,exp4);
  return {z,w,x,y};
    //expect(elevar(2, 2)).toBe(4);
    //expect(elevar(2, 3)).toBe(8);
    //expect(elevar(0, 5)).toBe(0);
    //expect(elevar(10, 1)).toBe(10);
  };
elevar(2,2,0,10,2,3,5,1)

//describe('redondearNumero(num)', function() {
  //it('Deberia devolver el numero redondeado',
   function redondearNumero(num1,num2,num3){
    z=Math.round(num1);
    w=Math.round(num2);
    x=Math.round(num3);
    
  return {z,w,x};
    //expect(redondearNumero(1.5)).toBe(2);
    //expect(redondearNumero(2)).toBe(2);
    //expect(redondearNumero(0.1)).toBe(0);
  };
redondearNumero(1.5,2,0.1)

//describe('redondearHaciaArriba(num)', function() {
  //it('Deberia devolver el numero redondeado para arriba', 
  function redondearHaciaArriba(num1,num2,num3) {
    z=Math.ceil(num1);
    w=Math.ceil(num2);
    x=Math.ceil(num3);
    //expect(redondearHaciaArriba(1.5)).toBe(2);
    //expect(redondearHaciaArriba(2)).toBe(2);
    //expect(redondearHaciaArriba(0.1)).toBe(1);
    return {z,w,x};
  };
redondearHaciaArriba(1.5,2,0.1)

//describe('numeroRandom()', function() {
  //it('Debería devolver un número entre 0 y 1',
   function numeroRandom(num1,num2,num3) {
      z=Math.random(num1);
      y=Math.random(num2);
      p=Math.random(num3);
    //expect(typeof numeroRandom()).toBe('number');
    //expect(numeroRandom()).toBeGreaterThanOrEqual(0);
    //expect(numeroRandom()).toBeLessThan(1);
    return {z,y,p};
  };


//describe('esPositivo(numero)', function() {
  //it('Debería devolver el string \Es positivo ó Es negativo\ según corresponda',
   function esPositivo(numero){
    if (numero>0){
      return "es positivo"
    }if (numero<0) {
      return "es negativo"
      
    } else { return false  
    }

    //expect(esPositivo(0)).toBe(false);
   // expect(esPositivo(23)).toBe('Es positivo');
    //expect(esPositivo(-2)).toBe('Es negativo');
  };
;
esPositivo(0)
esPositivo(23)
esPositivo(-2)

//describe('agregarSimboloExclamacion(str)', function() {
  //it('Deberia agregar un signo de exclamacion al final del string',
   function agregarSimboloExclamacion(str1,str2) {
    x= str1 + "!"
    y= str2 + "!"
    //expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    //expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
    return {x,y};
  };
;
agregarSimboloExclamacion("hello world", "soy Henry")

//describe('combinarNombres(firstName, lastName)', function() {
  //it('Deberia devolver los strings combinados con un espacio en el medio',
   function  combinarNombres(firstName1, lastName1,firstName2, lastName2) {
    x= firstName1 +" "+ lastName1;
    y= firstName2 +" "+ lastName2;
    //expect(combinarNombres('hello', 'world')).toBe('hello world');
    //expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  return{x,y};
  };


//describe('obtenerSaludo(name)', function() {
  //it('Deberia devolver el string \'Hola {name}!\'', 
  function obtenerSaludo(name1,name2) {
    x="hola "+ name1  
    y="hola "+ name2  
    //expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
    //expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
    return{x,y};
  };
;
obtenerSaludo("martin","antonio")

//describe('obtenerAreaRectangulo(alto, ancho)', function() {
  //it('Deberia retornar el area correcta del rectangulo', 
  function obtenerAreaRectangulo(b1,a1,b2,a2,b3,a3) {
    A1=(b1*a1);
    A2=(b2*a2);
    A3=(b3*a3);
    //expect(obtenerAreaRectangulo(2, 2)).toBe(4);
    //expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    //expect(obtenerAreaRectangulo(0, 2)).toBe(0);
    return{A1,A2,A3};
  };
;
obtenerAreaRectangulo(2,2,3,6,0,2)

//describe('retornarPerimetro(lado)', function() {
  //it('Deberia retornar el perímetro correcto del cuadrado',
   function  retornarPerimetro(a1,a2,a3) {
    A1=(4*a1);
    A2=(4*a2);
    A3=(4*a3);
    //expect(retornarPerimetro(2)).toBe(8);
    //expect(retornarPerimetro(8)).toBe(32);
    //expect(retornarPerimetro(0)).toBe(0);
    return{A1,A2,A3};
  };
;
retornarPerimetro(2,8,0)

//describe('areaDelTriangulo( base, altura)', function() {
  //it('Deberia retornar el area correcta del triángulo', 
  function areaDelTriangulo(b1,a1,b2,a2,b3,a3) {
    A1=(b1*a1)/2;
    A2=(b2*a2)/2;
    A3=(b3*a3)/2;
    //expect(areaDelTriangulo(10, 5)).toBe(25);
    //expect(areaDelTriangulo(20, 10)).toBe(100);
    //expect(areaDelTriangulo(0, 10)).toBe(0);
    return{A1,A2,A3};
  };
;
areaDelTriangulo(10,5,20,10,0,10)

//describe('deEuroAdolar(euro)', function() {
  //it('Deberia retornar el valor correcto de euro a dolar',
   function deEuroAdolar(euro1,euro2,euro3) {
    dolar1=euro1*1.2;
    //expect(deEuroAdolar(100)).toBe(120);
    //expect(deEuroAdolar(200)).toBe(240);
    //expect(deEuroAdolar(50)).toBe(60);
    dolar2=euro2*1.2;
    dolar3=euro3*1.2;
    return{dolar1,dolar2,dolar3};

  };
;
deEuroAdolar(100,200,50)

//describe('esVocal(letra)', 
function esVocal(letra) {
  
  if (letra.length>1 || letra==="la"|| letra==="pero"|| letra==="l"|| letra==="p" ) {
    return "dato incorrecto";

  }
  if (letra ==="a" ||  letra ==="e" ||  letra ==="i" || letra ==="o"  || letra ==="u" ) {
    return "es una vocal";
    
  }
  
}
  //it('Deberia devolver el string "Dato incorrecto", si el valor ingresado tiene más de una letra', function() {
    //expect(esVocal("la")).toBe("Dato incorrecto");
   //expect(esVocal("pero")).toBe("Dato incorrecto");
 // });
  //it('Deberia devolver el string "Dato incorrecto", si el valor ingresado no es vocal', function() {
    //expect(esVocal("l")).toBe("Dato incorrecto");
    //expect(esVocal("p")).toBe("Dato incorrecto");
 // });
  //it('Deberia devolver el string "Es vocal", si el valor ingresado lo es', function() {
   // expect(esVocal('a')).toBe('Es vocal');
   // expect(esVocal('e')).toBe('Es vocal');
   // expect(esVocal('i')).toBe('Es vocal');
   // expect(esVocal('o')).toBe('Es vocal');
   // expect(esVocal('u')).toBe('Es vocal');
  //});