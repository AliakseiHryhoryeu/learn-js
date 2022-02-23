const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const sync = require('browser-sync').create()
const concat = require('gulp-concat')
const autoPrefixer = require('gulp-autoprefixer')

function clear() {
    return del('dist')
}

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(autoPrefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('dist'))

}

function serve() {
    sync.init({
        server: './dist'
    })
    watch('src/**.html', series(html)).on('change',sync.reload)
    watch('src/scss/**.scss',series(scss)).on('change',sync.reload)

}

exports.build = series(
    clear,
    html,
    scss
)

exports.dev = series(
    clear,
    html,
    scss,
    serve
)
