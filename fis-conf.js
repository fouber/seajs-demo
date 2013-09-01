fis.config.set('roadmap.path', [
    {
        //lib下的所有js文件
        reg : /^\/lib\/(.*)\.js$/i,
        //id是去掉/lib/和.js之后的
        //比如/lib/underscore.js的id就是underscore
        id : '$1'
    },
    {
        //剩下的其他js
        reg : /^\/(.*)\.js$/i,
        //id不要js后缀
        id : '$1'
    }
]);