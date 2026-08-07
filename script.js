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

// Configuração do sorteio da Mega-Sena (Com bolinhas)
document.getElementById('btn-mega').addEventListener('click', function() {
    const resultado = gerarNumerosLoteria(6, 60);
    document.getElementById('resultado-mega').innerHTML = resultado
        .map(num => `<span class="bola-loteria bola-mega">${String(num).padStart(2, '0')}</span>`)
        .join('');
});

// Configuração do sorteio da Quina (Com bolinhas)
document.getElementById('btn-quina').addEventListener('click', function() {
    const resultado = gerarNumerosLoteria(5, 80);
    document.getElementById('resultado-quina').innerHTML = resultado
        .map(num => `<span class="bola-loteria bola-quina">${String(num).padStart(2, '0')}</span>`)
        .join('');
});

// Configuração do sorteio da Lotofácil (Com bolinhas)
document.getElementById('btn-lotofacil').addEventListener('click', function() {
    const resultado = gerarNumerosLoteria(15, 25);
<<<<<<< HEAD
    document.getElementById('resultado-lotofacil').innerText = resultado.join(' - ');
});
// Sorteio da Lotofacil: 15 numeros de 1 a 25.
// Todos os jogos integrados com sucesso. Prontos para V1.0.
// Configuração do sorteio da Mega-Sena (Com bolinhas)
document.getElementById('btn-mega').addEventListener('click', function() {
    const resultado = gerarNumerosLoteria(6, 60);
    // Cria uma bolinha com a classe CSS correspondente para cada número
    document.getElementById('resultado-mega').innerHTML = resultado
        .map(num => <span class="bola-loteria bola-mega">${String(num).padStart(2, '0')}</span>)
        .join('');
});

// Configuração do sorteio da Quina (Com bolinhas)
document.getElementById('btn-quina').addEventListener('click', function() {
    const resultado = gerarNumerosLoteria(5, 80);
    document.getElementById('resultado-quina').innerHTML = resultado
        .map(num => <span class="bola-loteria bola-quina">${String(num).padStart(2, '0')}</span>)
        .join('');
});

// Configuração do sorteio da Lotofácil (Com bolinhas)
document.getElementById('btn-lotofacil').addEventListener('click', function() {
    const resultado = gerarNumerosLoteria(15, 25);
    document.getElementById('resultado-lotofacil').innerHTML = resultado
        .map(num => <span class="bola-loteria bola-loto">${String(num).padStart(2, '0')}</span>)
=======
    document.getElementById('resultado-lotofacil').innerHTML = resultado
        .map(num => `<span class="bola-loteria bola-loto">${String(num).padStart(2, '0')}</span>`)
>>>>>>> bbf653c (MUDANDO TUDO)
        .join('');
});