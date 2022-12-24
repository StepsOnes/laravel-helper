const mix = require('laravel-mix');

mix.postCss('resourses/css/main.css', 'public/css')
    .js('resourses/js/app.js') // иницилизация библиотеки
    .js('resourses/js/main.js').version();