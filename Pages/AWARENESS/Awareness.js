$(document).ready(function () {
    $.getJSON('https://restcountries.com/v3.1/all', function (countries) {
        $.each(countries, function (i, country) {
            $('#countries').append($('<option>', {
                value: country.cca3,
                text: country.translations.en
            }));
        });
    });
});