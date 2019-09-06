function validaLogin(elemento) {
    var valida = elemento.form.loginbox;
    var regEx = /^[a-z0-9]{5,32}$/;
    var	teste = regEx.test(valida.value);
    if (teste) {
        alert('debug email foi');
        elemento.form.caixaAlerta.style.visibilty='hidden';
        elemento.form.caixaAlerta.innerHTML='';
        valida = elemento.form.senhabox;
        regEx = /^[a-z0-9]{8,40}$/;
        teste = regEx.test(valida.value);
        if (teste) {
           // elemento.form.senhabox.style.border='2px gray solid';
           alert('debug tudo funcionou');
            return true;
        }
        else {
            //elemento.form.senhabox.style.border='2px red solid';
            alert('Senha inválida!');
            return false;
        }
    }
    else {
        alert('Nome de usuário inválido!')
        return false;
    }
}
