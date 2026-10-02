"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const soma_1 = __importDefault(require("./soma"));
const subtracao_1 = __importDefault(require("./subtracao"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function iniciar() {
    leitor.question('Digite dois números e a operação (Somar, Subtrair ou Multiplicar). Para sair, digite Sair: ', (valor) => {
        const instrucoes = valor.trim().split(' ');
        const operacao = instrucoes[instrucoes.length - 1];
        if (operacao === 'Sair') {
            console.log('Até a próxima!');
            leitor.close();
            return;
        }
        const numero1 = Number(instrucoes[0]);
        const numero2 = Number(instrucoes[1]);
        let calculo;
        switch (operacao) {
            case 'Somar':
                calculo = new soma_1.default();
                break;
            case 'Subtrair':
                calculo = new subtracao_1.default();
                break;
            case 'Multiplicar':
                calculo = new multiplicacao_1.default();
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
