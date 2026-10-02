import * as readline from 'readline';
import Calculo from './calculo';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciar(): void {
    leitor.question('Digite dois números e a operação (Somar, Subtrair ou Multiplicar). Para sair, digite Sair: ', (valor) => {
        const instrucoes = valor.trim().split(' ');
        const operacao = instrucoes[instrucoes.length - 1];

        if (operacao === 'Sair') {
            console.log('Até a próxima!');
            leitor.close();
            return;
        }
        //mertilo
        const numero1 = Number(instrucoes[0]);
        const numero2 = Number(instrucoes[1]);
        let calculo: Calculo;

        switch (operacao) {
            case 'Somar':
                calculo = new Soma();
                break;
            case 'Subtrair':
                calculo = new Subtracao();
                break;
            case 'Multiplicar':
                calculo = new Multiplicacao();
                break;
            default:
                console.log('Operação não entendida.');
                iniciar();
                return;
        }

        if (instrucoes.length !== 3 || Number.isNaN(numero1) || Number.isNaN(numero2)) {
            console.log('Digite no formato: 10 5 Somar');
            iniciar();
            return;
        }

        console.log(`Resultado: ${calculo.calcular(numero1, numero2)}`);
        iniciar();
    });
}

console.log('Bem-vindo à calculadora polimórfica!');
iniciar();
