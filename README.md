# gulp-htmltojs  [![npm](https://img.shields.io/npm/v/gulp-htmltojs.svg)](https://www.npmjs.com/package/gulp-htmltojs)  [![npm](https://img.shields.io/npm/dt/gulp-htmltojs.svg)](https://www.npmjs.com/package/gulp-htmltojs)


> 将html模板转换为js模块的gulp插件

## Install

```
npm install gulp-htmltojs --save-dev
```

## Usage

### 使用场景

前端开发的时候require加载各种html模板，如果把html模板转换为js模块，就可以像
加载js模块一样加载html模板。

### 使用样例

```
var gulp = require('gulp')
var html2js = require('gulp-htmltojs')
    
gulp.task('html2js', function(){
    return gulp.src('src/test/**/*.html')
        .pipe(html2js())
})

gulp.task('watch', ['html2js'], function(){
    gulp.watch('src/test/**/*.html', ['html2js'])
})
```
### 转换规则

html模块 a.html
```
<div>
  <h1>Hello World!</h1>
</div>
```
转换后， 会在同级目录下生成 a.html.js

```
define(function(require){ return '<div><h1>Hello World!</h1></div>'})
```

### 运行
```
gulp watch
```
运行完成后，会打印转换日志：
```
[14:29:43] compile: /work/gulp/templates/a.html
[14:29:43] compile: /work/gulp/templates/b.html
[14:29:43] compile: /work/gulp/templates/c.html
```

## Release Notes

### v1.1.0

在转换为js模块时，去除每行html代码首尾多余空格

### v1.0.0

在生产环境验证通过，发布v1.0.0


## License

MIT @ [Peter Mu](https://github.com/PeterMu)
