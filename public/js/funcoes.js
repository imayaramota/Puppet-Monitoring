// sessão
function validarSessao() {
    // aguardar();
    var idUsuario = sessionStorage.ID_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var setor = sessionStorage.SETOR_USUARIO;
    var fkEmpresa = sessionStorage.EMPRESA_USUARIO;
    var fkAdmin = sessionStorage.FK_ADMIN;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null && setor != nul  && fkEmpresa != null && fkAdmin != null && idUsuario != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        setor_usuario.innerHTML = setor;

        // finalizarAguardar();
    } else {
        window.location = "../Login/login.html";
    }

    let b_usuario = document.getElementById('b_usuario').
    setor_usuario = document.getElementById('setor_usuario')
    
    b_usuario.innerHTML = sessionStorage.getItem('NOME_USUARIO');
    setor_usuario.innerHTML = sessionStorage.getItem('SETOR_USUARIO');
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../Login/login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

