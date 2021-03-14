<!DOCTYPE html>
<html lang="en">
    <head>
    @include('plugins.dashboard.top')

    @stack('css')
    </head>

    <body>

        {{-- for change theme form dark to light just set assets/light to assets/light --}}

        <!-- Begin page -->
        <div id="wrapper">

            @include('includes.dashboard.leftbar')


            <div class="content-page">

                @include('includes.dashboard.topbar')
            <!-- ============================================================== -->
                <!-- Start Page Content here -->
            <!-- ============================================================== -->

                @yield('content')

            <!-- ============================================================== -->
                <!-- End Page content -->
            <!-- ============================================================== -->

                @include('includes.dashboard.footer')

            </div>

        </div>
        <!-- END wrapper -->
        @include('includes.dashboard.rightbar')

        @include('plugins.dashboard.bottom')
        @stack('js')
    </body>
</html>
