const Sequelize = require('sequelize');

const db = new Sequelize({
    // MySQL Folks
    dialect:'mysql', // dialect is a version of a language
    database:'ORM101',
    username:'ORMUser101',
    password:'ORMPass101#', // We usually don't write passwords like the project. we fetch it from hidden files.

    // SQLite Folks
    // dialect:'sqlite',
    // storage:__dirname + '/tasks.db';
})

// Classes == Models
// Objects == Entities

// Tasks is our Model(Class)
const Tasks = db.define('task', {
    // Here we define Columns
    id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: Sequelize.DataTypes.STRING(140),
        allowNull: false
    },
    done:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
})

// db.authenticate();

// Write & Read Tasks
async function task(){
    await db.sync();

    // Write Tasks
    // Delete and Create Table from Scratch. But, We'd lost data.
    // await db.sync({force: true}); // Seriously, Don't use it in production. We'd lose data.
    
    // Add Task
    // await Tasks.create({
    //     title: 'Learn JavaScript'
    // })
    
    // Add Tasks in Bulk
    // await Tasks.bulkCreate([
    //     {title: 'WakeUp'},
    //     {title: 'Eat'},
    //     {title: 'Code'},
    //     {title: 'Debug'},
    //     {title: 'Repeat'}
    // ])

    // Read Tasks
    const tasks = await Tasks.findAll();
    // Task -> Model, JavaScript representation of Database Table. So, TOM(ORM) ? Like DOM(JS), BOM(JS) and POM(NodeJS).
    // task -> Array of Entities. Like Rows from DB
    console.log('Number of Tasks Found: ', tasks.length);

    tasks.forEach((t) => {
        console.log(`${t.id} \t ${t.done} \t ${t.title}`);
    })
}

task();