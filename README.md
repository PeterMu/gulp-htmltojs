# gulp-html2js

> 将html模板转换为js模块的gulp插件

## Install

```
npm install gulp-html2js --save-dev
```

## Usage

### 使用场景

前端开发的时候require加载各种html模板，如果把html模板转换为js模块，就可以像
加载js模块一样加载html模板。

### 使用样例

```
var gulp = require('gulp')
var html2js = require('gulp-html2js')
    
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
define(function(require){ return '<div>  <h1>Hello World!</h1></div>'})
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


## License

MIT @ [Peter Mu](https://github.com/PeterMu)