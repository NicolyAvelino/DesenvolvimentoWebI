// Definição das Variáveis
var js_n1;
var js_n2;
var js_soma;

// Definição da função soma() para capturar dados, processar somátoria e apresentar o resultado
function soma(){
    // Entrada de Dados
    js_n1 = parseInt(document.Formulario.f_n1.value);
    js_n2 = parseInt(document.Formulario.f_n2.value);    

    // Processamento de Dados
    js_soma = js_n1 + js_n2;

    // Saida de Dados
    window.alert('Resultado da Somatória = ' + js_soma.toString());
}