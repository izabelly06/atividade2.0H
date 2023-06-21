function exibirItens() {
  var inputElement = document.getElementById('inputElement');
  var listaItens = document.getElementById('listaItens');
  
  // Limpa a lista antes de exibir os novos itens
  listaItens.innerHTML = '';
  
  var itens = inputElement.value.split(',');
  
  // Utiliza o método forEach() para iterar nos itens
  itens.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item.trim(); // Remove espaços em branco extras
    listaItens.appendChild(li);
  });
}
