$(document).ready(function() {
    $("#input-cpfcnpj").keydown(function() { 

        //try catch para retirar a mascara do input
        try {
            $("#input-cpfcnpj").unmask();
        } catch (e) {}

        //guardo o tamanho do que foi digitado no input
        var checkSize = $("#input-cpfcnpj").val().length;

        //verificando se o valor digitado é um CPF ou um cnpj
        if(checkSize  < 14) {
            $("#input-cpfcnpj").mask("999.999.999-99");
            $("#input-cpfcnpj").attr('pattern','.{14,}');
        } else if(checkSize >= 14){
            $("#input-cpfcnpj").mask("99.999.999/9999-99");
            $("#input-cpfcnpj").attr('pattern','.{18,}');
        }

        var elem = this;
        setTimeout(function(){
            // muda a posição do seletor
            elem.selectionStart = elem.selectionEnd = 10000;
        }, 0);
        // reaplica o valor para mudar o foco
        var currentValue = $(this).val();
        $(this).val('');
        $(this).val(currentValue);
    })

    $(".input-submit-form-flex").click(function() {
        var nome = document.forms["form-flex"]["input-name"].value;
        var tel = document.forms["form-flex"]["input-tel"].value;
        var cep = document.forms["form-flex"]["input-cep"].value;
        var cpfcnpj = document.forms["form-flex"]["input-cpfcnpj"].value;
        var email = document.forms["form-flex"]["input-email"].value;
      
        alert("Reservation done!" + "\nName: " + nome + "\nTelefone: " + tel + "\nCEP: " + cep + 
              "\nCPF/CNPJ: " + cpfcnpj) + "\nE-MAIL: " + email;
    })
});
