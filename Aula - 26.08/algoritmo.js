function calculateSalary() {
    const valorHora = parseFloat(document.getElementById('valor-hora').value);
    const horasTrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value);

    if (isNaN(valorHora) || isNaN(horasTrabalhadas) || valorHora <= 0 || horasTrabalhadas <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const salarioBruto = valorHora * horasTrabalhadas;
    const valorIr = salarioBruto * 0.11;
    const valorInss = salarioBruto * 0.08;
    const valorSindicato = salarioBruto * 0.05;
    const salarioLiquido = salarioBruto - valorIr - valorInss - valorSindicato;

    document.getElementById('salario-bruto').innerText = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}`;
    document.getElementById('valor-ir').innerText = `IR (11%): R$ ${valorIr.toFixed(2)}`;
    document.getElementById('valor-inss').innerText = `INSS (8%): R$ ${valorInss.toFixed(2)}`;
    document.getElementById('valor-sindicato').innerText = `Sindicato (5%): R$ ${valorSindicato.toFixed(2)}`;
    document.getElementById('salario-liquido').innerText = `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;
}