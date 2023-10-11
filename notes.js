// const getnotes = function(){
//     return "your notes ..."
// } 

// module.exports=getnotes


// // video -> 19
// const fs = require('fs');
// const getnotes = function(){
//     return "your notes ..."
// } 

// const addnote = function(title,body){
//     const notes=loadnotes();

//     let duplicatesnotes = notes.filter(function(notes){
//         return notes.title===title;
//     });

//     if(duplicatesnotes==0){
//         notes.push({
//             title:title,
//             body:body
//         });
    
//         savenotes(notes);
//         console.log("note is added !!");
//     }
//     else{
//         console.log("duplicate note title is found !!");
//     }

// };

// const savenotes = function(notes){
//     const data = JSON.stringify(notes);
//     fs.writeFileSync('notes.json',data);
// }

// const loadnotes = function(){
//     try {
//         const databuffer = fs.readFileSync('notes.json');
//         const datastring=databuffer.toString();
//         const data=JSON.parse(datastring);
//         return data;
//     } catch (err) {
//         return [];
//     }
// }

// module.exports={
//     getnotes:getnotes,
//     addnote:addnote
// }




// video -> 20
const chalk = require('chalk');
const fs = require('fs');
const getnotes = () => {
    return "your notes ..."
} 

const addnote = (title,body) => {
    const notes=loadnotes();
    let duplicatesnotes = notes.filter((note) => note.title===title);  //yh tareeka hota hai 2-arrow-fucntion file mein dekhna
         
    debugger

    if(duplicatesnotes.length==0){
        notes.push({
            title:title,
            body:body
        });
    
        savenotes(notes);
        console.log("note is added !!");
    }
    else{
        console.log("duplicate note title is found !!");
    }

};

const removenote = (title) => {
    const notes = loadnotes();
    let notestokeep = notes.filter((note) => note.title!==title);

    savenotes(notestokeep);

    if(notes.length===notestokeep.length) console.log(chalk.bgRed('no note found'));
    else console.log(chalk.bgGreen('note removed'));
}

const listnotes = () => {
    const heading = getnotes();
    console.log(chalk.bgGreen(heading));
    const notes = loadnotes();
    // notes.filter((note) => {
    //     console.log(note.title);
    // })
    notes.forEach((note) => {
        console.log(note.title);
    })


} 

const readnote = (title) => {
    const notes = loadnotes();
    const findednote = notes.find((note) => {
        return note.title===title;
    })

    if(findednote!==undefined){
        console.log(chalk.bgGreen(findednote.title));
        console.log(findednote.body);
    }
    else{
        console.log(chalk.bgRed('Not found this title'));
    }
}

const savenotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json',data);
}

const loadnotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json');
        const datastring=databuffer.toString();
        const data=JSON.parse(datastring);
        return data;
    } catch (err) {
        return [];
    }
};

module.exports={
    getnotes:getnotes,
    addnote:addnote,
    removenote:removenote,
    listnotes:listnotes,
    readnote:readnote
}


