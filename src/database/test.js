const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    //Inserir dados
    proffyValue = {

        name:"Claudio Gabriel",
        avatar:"https://avatars0.githubusercontent.com/u/69055090?s=460&v=4",
        whatsapp:"84 99999-8888",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."

    }
    classValue = {
        subject: 1,
        cost:"20"
        //o proffy id quem vai criar é banco de dados
    }

    classScheduleValues = [
        //class id vira pelo banco de dados apos cadastramos a class
        {
        weekday: 1,
        time_from:720,
        time_to:1220
    },
    {
        weekday: 0,
        time_from:520,
        time_to:1220
    }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado proffy
    //trazer junto os dados do proffy

    const SelectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(SelectClassesAndProffys)

    //o horario que a pessoa trabalha, por exemplo, é das 8 as 18h
    //horario time_from (8h) precisa ser antes ou igual  ao horario solicitado
    //o time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)
    //testes
})