function validaCPF(cpf){
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numbers = cpf.substring(0, 9);
        var digits = cpf.substring(9);

        var sum = 0;
        for (var i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
        }
        
        var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

            // Validação do primeiro digíto
        if (result != digits.charAt(0)) {
            return false;
        }

        sum = 0;
        numbers = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            sum += numbers.charAt(11 - k) * k;
        }

        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

            // Validação do segundo digíto
        if (result != digits.charAt(1)) {
            return false;
        }

        return true;
    }
}
