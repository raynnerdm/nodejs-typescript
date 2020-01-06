const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// Indicates to gulp the typescript configuration
const tsProject = ts.createProject('tsconfig.json');

const scripts = () => {

    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(babel())
        .pipe(gulp.dest('dist'));
};

const watch = () => {

    gulp.watch('src/**/*.ts', scripts);
};

const assets = () => {

    return gulp.src(JSON_FILES).pipe(gulp.dest('dist'));
};

exports.scripts = scripts;
exports.watch = watch;
exports.assets = assets;

const build = gulp.series(gulp.parallel(scripts));
gulp.task('build', build);
gulp.task('default', build);