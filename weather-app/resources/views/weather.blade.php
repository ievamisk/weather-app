<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Weather App</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="{{ asset('/css/weather.css') }}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="{{ asset('/css/weather-icons/css/weather-icons.css') }}" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
    <script src="{{ asset('/js/weather.js') }}"></script>
</head>
<body>
    <div class="container text-center">
        <h1>Current Weather</h1>
        <div class="input-group mb-3" >
            <input type="text" class="form-control" id="api" placeholder="API key" aria-label="API key" value="72b601ba86917eb347020fd3579e9274">
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" id="city" placeholder="City" aria-label="City">
            <div class="input-group-append">
                <button type="button" class="btn btn-success" id="add"><i class="fas fa-check"></i></button>
            </div>
        </div>
        <div class="tabs sm-12" >
            <ul class="nav nav-tabs" data-toggle="tab" id="tabs-list" role="tablist">
            </ul>
            <div class="tab-content">
            </div>
        </div>
    </div>
</body>
</html>
