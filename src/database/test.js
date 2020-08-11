const Database = require('./src/db')
const creatProffy = require('./creatProffy')

Database.then( (db) => {
    //Inserir dados
    proffyValue = {

        name:"Claudio Gabriel",
        avatar:"https://avatars0.githubusercontent.com/u/69055090?s=460&v=4",
        whatsapp:"84 99999-8888",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",

    }
    classValue = {
        subject:"Química",
        cost:"20",
        //o proffy id quem vai criar é banco de dados
    }

    classScheduleValue = [
        //class id vira pelo banco de dados apos cadastramos a class
        {
        weekday: 1,
        time_from:720,
        time_to:1220,
    },
    {
        weekday: 0,
        time_from:520,
        time_to:1220,
    }
    ]

    //creatProffy(db, {proffyValue, classValue, classScheduleValue})

    //consultar dados inseridos

})