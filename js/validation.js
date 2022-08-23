
function validation(){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultValidation = validaCPF(cpf);

    if (resultValidation){
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}
