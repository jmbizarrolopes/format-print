Template.registerHelper('$.formatCPF', function (cpf, options) {
    if(cpf.length != 11) {
        if(options.default)
            return '000.000.000-00';
        throw new Error('This CPF: ' + cpf + ' does not have 11 character length.');
    } else {
        return cpf.substring(0,3) + "." + cpf.substring(3,6) + "." + cpf.substring(6,9) + "-" + cpf.substring(9);
    }
});

Template.registerHelper('$.formatCNPJ', function (cnpj, options) {
    if(cnpj.length != 14) {
        if(options.default)
            return '00.000.000/0000-00';
        throw new Error('This CNPJ: ' + cnpj + ' does not have 14 character length.');
    } else {
        return cnpj.substring(0,2) + '.' + cnpj.substring(2,5) + '.' + cnpj.substring(5,8) + '/' + cnpj.substring(8,12) + '-' + cnpj.substring(12);
    }
});

Template.registerHelper('$.formatPhone', function (phone, options) {
    if(phone.length == 11) {
        return "(" + phone.substring(0,2) + ") " + phone.substring(2,3) + " " + phone.substring(3,7) + "-" + phone.substring(7);
    } else if(phone.length == 10){
        return "(" + phone.substring(0,2) + ") " + phone.substring(2,6) + "-" + phone.substring(6);
    } else {
        if(options.default)
            return '(00) 0000-0000';
        throw new Error('This phone number is invalid.');
    }
});

Template.registerHelper('$.formatPersonDoc', function (personDoc) {
    if(personDoc.length == 11) {
        return personDoc.substring(0,3) + "." + personDoc.substring(3,6) + "." + personDoc.substring(6,9) + "-" + personDoc.substring(9);
    } else if(personDoc.length == 14) {
        return personDoc.substring(0,2) + '.' + personDoc.substring(2,5) + '.' + personDoc.substring(5,8) + '/' + personDoc.substring(8,12) + '-' + personDoc.substring(12);
    } else {
        return '';
    }
});

Template.registerHelper('$.formatDate', function (date, options) {
    var localeDate = date.toLocaleDateString().split("/");
    var day   = localeDate[1];
    var month = localeDate[0];
    var year  = localeDate[2];

    var dateString = day + "/" + month + "/" + year;

    if(!options.time)
        return dateString;

    var time = date.toLocaleTimeString();
    var turn = time.split(" ");

    var newTime;
    if(turn[1] == "PM") {
        var completeHour = turn[0].split(":");
        var hour = completeHour[0];
        hour = parseInt(hour) + 12;
        newTime = hour + ":" + completeHour[1] + ":" + completeHour[2];
    } else {
        newTime = turn[0];
    }

    return dateString + " às " + newTime;
});