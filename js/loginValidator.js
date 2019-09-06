function validaLogin(elemento) {
    var valida = elemento.form.loginbox;
    var regEx = /^[a-z0-9]{5,32}$/;
    var	teste = regEx.test(valida.value);
    if (teste) {
        document.getElementById('caixaAlerta').style.visibility='hidden';
        valida = elemento.form.senhabox;
        regEx = /^[a-z0-9]{8,40}$/;
        teste = regEx.test(valida.value);
        if (teste) {
            document.getElementById('caixaAlerta').style.visibility='hidden';
            return true;
        }
        else {
            document.getElementById('caixaAlerta').innerHTML='Senha inválida!';
            document.getElementById('caixaAlerta').style.visibility='visible';
            //alert('Senha inválida!');
            return false;
        }
    }
    else {
        document.getElementById('caixaAlerta').innerHTML='Nome de usuário inválido!';
        document.getElementById('caixaAlerta').style.visibility='visible';
        //alert('Nome de usuário inválido!')
        return false;
    }
}
