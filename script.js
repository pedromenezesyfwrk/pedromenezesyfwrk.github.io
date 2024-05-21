function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var mensagemErro = document.getElementById("mensagemErro");
    if (nome === "" || email === "" || mensagem === "") {
        mensagemErro.innerHTML = "Campos não preenchidos";
        mensagemErro.style.display = "block";
    } else {
        alert("Formulário enviado com sucesso");
        mensagemErro.style.display = "none";
        document.getElementById("orcamentoForm").reset();
    }
}