<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Lavue</title>
</head>

<body class="text-gray-500 bg-gray-100 font-sans">
    <div id="app">
        <app></app>
    </div>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>