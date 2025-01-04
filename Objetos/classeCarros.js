// Classe carros: marca, cor, consumo/km

class Carro {
    marca;
    cor;
    consumoKmL;

    constructor(marca, cor, consumoKmL){
        this.marca = marca;
        this.cor = cor;
        this.consumoKmL = consumoKmL;
    }
    
    calcularGastoPorDistancia(distancia, valorCombustivel){
        return (distancia/this.consumoKmL) * valorCombustivel;

    }

}

const civic = new Carro('Honda', 'Cinza', 10);

console.log('Seu gasto para viajar este percuso com o seu ' + civic.marca + ' é R$' + civic.calcularGastoPorDistancia(300, 6)+',00');


