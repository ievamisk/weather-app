<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Exception;

class WeatherAPI extends Controller
{
    // API key: 72b601ba86917eb347020fd3579e9274

    function cityWeather($city, $key) {
        //get json from api
        $json = @file_get_contents('http://api.openweathermap.org/data/2.5/weather?q=' . $city . '&appid=' . $key . '&units=metric');

        //handle error
        if ($json !== false) {
            // convert to array
            $response = json_decode($json, true);
            $data = [
                'error' => false,
                'weather' => [
                    'icon' => $response['weather'][0]['id'],
                    'main' => $response['weather'][0]['main'],
                    'description' => $response['weather'][0]['description'],
                    'temp' => $response['main']['temp'],
                    'temp_min' => $response['main']['temp_min'],
                    'temp_max' => $response['main']['temp_max'],
                    'humidity' => $response['main']['humidity'],
                    'wind' => $response['wind']['speed'],
                    'clouds' => $response['clouds']['all'],
                    'sunrise' => $response['sys']['sunrise'],
                    'sunset' => $response['sys']['sunset'],
                    'city' => $response['name']
                ]
            ];
            return json_encode($data);
        } else {
            return json_encode([
                'error' => true,
                'message' => 'Incorrect data provided!'
            ]);
        }
    }
}
