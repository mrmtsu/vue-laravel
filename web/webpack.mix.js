const mix = require("laravel-mix");

mix
  .browserSync("campstyle.test")
  .js("resources/js/app.js", "public/js")
  .version();
