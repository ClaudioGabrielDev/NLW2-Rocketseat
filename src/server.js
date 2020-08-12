const express = require('express')
const sever = express()
const { pageLanding, pageStudy, pageGiveClasses} = require('./pages')

//configurar nunjucks
const nunjucks = require("nunjucks")

nunjucks.configure('src/views', {
    express: sever,
    noCache: true,
})



sever
//Configurar arquivos estáticos (css, scripts, images)
.use(express.static('public'))
//rotas da aplicação
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.listen(5500)