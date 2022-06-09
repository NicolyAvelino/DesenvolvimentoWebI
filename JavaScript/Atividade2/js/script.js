function adicionar(){
	var novoItem = document.createElement("p");
	novoItem.textContent="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.";
	document.getElementById("paragrafo").appendChild(novoItem);
}
function removerUltimo(){
	var ultimo = document.getElementById("paragrafo");
	ultimo.removeChild(ultimo.lastElementChild)
}
function removerTudo(){
	var tudo = document.getElementById("paragrafo");
	tudo.remove()
}