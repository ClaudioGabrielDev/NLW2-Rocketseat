module.exports = async function (db, {proffyValue, classValue, ClassScheduleValue}){
    //inserir dados da tabela de Proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio,
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio},
            
        );

    `)

    const proffy_id = insertedProffy.lastID
}