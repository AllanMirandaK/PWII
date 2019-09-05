function validaLogin(elemento) {
    var valida = elemento.form.loginbox;
    var regEx = /^[a-z0-9]{5,32}$/;
    var	teste = regEx.test(valida.value);
    if (teste) {
        alert('debug email foi');
        //elemento.form.loginbox.style.border='2px gray solid';
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
        //elemento.form.loginbox.style.border='2px red solid';
        alert('Nome de usuário inválido!')
        return false;
    }
}
