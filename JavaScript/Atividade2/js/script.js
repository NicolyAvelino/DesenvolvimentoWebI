function adicionar(){
	var novoItem = document.createElement("p");
	novoItem.textContent="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.";
	document.getElementById("paragrafo").appendChild(novoItem);
}
function removerUltimo(){
    var remover = document.getElementsByTagName("p")
    document.getElementById("paragrafo").removeChild(remover);
}