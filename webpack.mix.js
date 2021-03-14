const mix = require('laravel-mix');

mix.styles([
        'public/assets/light/css/bootstrap.css',
        'public/assets/light/css/icons.min.css',
        'public/assets/light/css/app.css',
        'public/assets/light/libs/custombox/custombox.min.css',
        'public/assets/light/libs/spinkit/spinkit.css',
        'public/assets/light/libs/switchery/switchery.min.css',
        'public/assets/light/libs/datatables/dataTables.bootstrap4.css',
        'public/assets/light/libs/datatables/buttons.bootstrap4.css',
        'public/assets/light/libs/datatables/responsive.bootstrap4.css',
        'public/assets/light/libs/select2/select2.min.css',
    ], 'public/css/app.css').options({
    processCssUrls: false,
    postCss: [
        require('autoprefixer'),
    ],
})
