$(document).ready(function () {
    $('#add').click(function () {
        var apiKey = $('#api').val();
        var city = $('#city').val();

        if (!checkIfExists(city)) {
            $.ajax({
                url: '/weather/' + city + '/api/' + apiKey,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    if (!data.error) {
                        $('#tabs-list').append(newTab(data.weather.city));
                        $('.tab-content').append(newTabContent(data.weather));
                        $('#' + data.weather.city.toLowerCase() + '-tab').click();
                        $('#tabs-list').find('a:last').tab('show');
                    } else {
                        alert(data.message);
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
        else {
            $('#' + city.toLowerCase() + '-tab').click();
        }
    });
});

function convertTime(unixTime) {
    var date = new Date(unixTime*1000);
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    return time = hours + ':' + minutes.substr(-2);
}

function checkIfExists(city) {
    if ($('#' + city.toLowerCase() + '-tab').length === 0) {
        return false;
    }
    else {
        return true;
    }
}

function newTab(city) {
    return '' +
        '<li class="nav-item">' +
        '<a class="nav-link" id="'+city.toLowerCase()+'-tab" data-toggle="tab" href="#'+city.toLowerCase()+'-weather" aria-controls="'+city.toLowerCase()+'-weather"  role="tab" aria-selected="false">'+city+'</a>'+
     '</li>';
}

function newTabContent(data) {
    return '' +
        '<div class="tab-pane" id="'+data.city.toLowerCase()+'-weather">' +
            '<div class="temperature">' +
                '<p class="current-temperature">' + data.temp + '<span>°C</span></p>' +
                '<div class="day-temperature">' +
                    '<p class="max-temperature"><i class="wi wi-direction-up"></i>' + data.temp_max + ' °C</p>' +
                    '<p class="min-temperature"><i class="wi wi-direction-down"></i>' + data.temp_min + ' °C</p>' +
                '</div>' +
            '</div>' +
            '<div class="weather">' +
                '<i class="weather-icon wi wi-owm-201"></i>' +
                '<p class="weather-description">' + data.description + '</p>' +
                '<ul class="weather-details">' +
                    '<li class="weather-details-item">' +
                        '<i class="wi wi-owm-day-' + data.icon + '"></i>' +
                        '<p class="weather-details-item-measurement">' +
                            '<span class="weather-details-item-measurement-number">' + data.wind + 'mph</span>' +
                            '<span class="weather-details-item-measurement-name">Wind</span>' +
                        '</p>' +
                    '</li>' +
                    '<li class="weather-details-item ">' +
                        '<i class="wi wi-humidity"></i>' +
                        '<p class="weather-details-item-measurement">' +
                            '<span class="weather-details-item-measurement-number">' + data.humidity + '%</span>' +
                            '<span class="weather-details-item-measurement-name">Humidity</span>' +
                        '</p>' +
                    '</li>' +
                    '<li class="weather-details-item">' +
                        '<i class="wi wi-cloudy"></i>' +
                        '<p class="weather-details-item-measurement">' +
                            '<span class="weather-details-item-measurement-number">' + data.clouds + '%</span>' +
                            '<span class="weather-details-item-measurement-name">Clouds</span>' +
                        '</p>' +
                    '</li>' +
                    '<li class="weather-details-item">' +
                        '<i class="wi wi-sunrise"></i>' +
                        '<p class="weather-details-item-measurement">' +
                            '<span class="weather-details-item-measurement-number">' + convertTime(data.sunrise) + '</span>' +
                            '<span class="weather-details-item-measurement-name">Sunrise</span>' +
                        '</p>' +
                    '</li>' +
                    '<li class="weather-details-item">' +
                        '<i class="wi wi-sunset"></i>' +
                        '<p class="weather-details-item-measurement">' +
                            '<span class="weather-details-item-measurement-number">' + convertTime(data.sunset) + '</span>' +
                            '<span class="weather-details-item-measurement-name">Sunset</span>' +
                        '</p>' +
                    '</li>' +
                '</ul>' +
            '</div>' +
        '</div>'
}
