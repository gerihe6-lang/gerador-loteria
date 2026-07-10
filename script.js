// Função genérica para gerar números ordenados e sem repetição
function gerarNumerosLoteria(quantidade, maximo) {
    const numeros = [];
    
    while (numeros.length < quantidade) {
        // Gera número aleatório entre 1 e o máximo permitido
        const numeroAleatorio = Math.floor(Math.random() * maximo) + 1;
        
        // Verifica se o número já foi sorteado para evitar duplicados
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    
    // Ordena os números em ordem crescente
    return numeros.sort((a, b) => a - b);
}