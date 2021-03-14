<!DOCTYPE html>
<html lang="en">
    <head>
    @include('plugins.dashboard.top')

    @stack('css')
    </head>

    <body>

        @yield('content')

        @include('plugins.dashboard.bottom')
        @stack('js')
    </body>
</html>
