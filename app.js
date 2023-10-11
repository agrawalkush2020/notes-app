// const fs = require('fs');
// // fs.writeFileSync('notes.txt','this file is created by node.js');
// fs.appendFileSync('notes.txt','my name is kushagra and i live in uttarpradesh');


// const add=require('./utilis.js');
// const sum=add(4,-2);
// console.log(sum);

// video ->10
// const getnotes=require('./notes.js');
// console.log(getnotes());

// video 11
// const validator = require('validator');
// const getnotes=require('./notes.js');
// console.log(getnotes());
// console.log(validator.isEmail('kushagra@example.com'));

// // vidoe -> 12
// const chalk = require('chalk');
// const message = chalk.green('success !!');
// console.log(message);
// console.log(process.argv[2]); 

// vidoe -> 15
// const chalk = require('chalk');
// const message = chalk.green('success !!');
// console.log(message);

// const command = process.argv[2];

// if(command==='add'){
//     console.log('adding numbers ');
// }
// else if(command==='remove'){
//     console.log('removing numbers ');
// }

// console.log(process.argv);



// // video -> 16
// const yargs = require('yargs');

// // console.log(process.argv);
// // yargs.version('1.1.0');

// yargs.command({
//     command:'add',
//     description:'add a note',
//     handler:function(){
//         console.log('adding a note !!');
//     }
// })

// yargs.command({
//     command:'remove',
//     description:'remove a note',
//     handler:function(){
//         console.log('removing a note !!');
//     }
// })

// yargs.command({
//     command:'list',
//     description:'list the notes',
//     handler:function(){
//         console.log('listing the notes !!');
//     }
// })

// yargs.command({
//     command:'read',
//     description:'read a note',
//     handler:function(){
//         console.log('reading the notes !!');
//     }
// })

// const temp = yargs.argv;
// console.log(temp);




// // video -> 16
// const yargs = require('yargs');

// // console.log(process.argv);
// // yargs.version('1.1.0');

// yargs.command({
//     command:'add',
//     description:'add a note',
//     builder:{
//         title:{
//             description:'note title',
//             required:true,
//             type:'string'
//         },
//         body:{
//             description:'added note body',
//             required:true,
//             type:'string'
//         }
//     },

//     handler:function(){
//         // console.log('adding a note !!',yargs.argv);
//         console.log('Title:',yargs.argv.title);
//         console.log('Body:',yargs.argv.body);   //challenge
//     }
// })

// yargs.command({
//     command:'remove',
//     description:'remove a note',
//     handler:function(){
//         console.log('removing a note !!');
//     }
// })

// yargs.command({
//     command:'list',
//     description:'list the notes',
//     handler:function(){
//         console.log('listing the notes !!');
//     }
// })

// yargs.command({
//     command:'read',
//     description:'read a note',
//     handler:function(){
//         console.log('reading the notes !!');
//     }
// })

// const temp = yargs.argv;
// console.log(temp);

// yargs.parse();

// // video -> 19
// const yargs = require('yargs');
// const notes = require('./notes.js');

// yargs.command({
//     command:'add',
//     description:'add a note',
//     builder:{
//         title:{
//             description:'note title',
//             required:true,
//             type:'string'
//         },
//         body:{
//             description:'added note body',
//             required:true,
//             type:'string'
//         }
//     },

//     handler:function(){
//         notes.addnote(yargs.argv.title,yargs.argv.body);
//     }
// })

// yargs.command({
//     command:'remove',
//     description:'remove a note',
//     handler:function(){
//         console.log('removing a note !!');
//     }
// })

// yargs.command({
//     command:'list',
//     description:'list the notes',
//     handler:function(){
//         console.log('listing the notes !!');
//     }
// })

// yargs.command({
//     command:'read',
//     description:'read a note',
//     handler:function(){
//         console.log('reading the notes !!');
//     }
// })

// const temp = yargs.argv;
// // console.log(temp);


//-------------// video -> 20------
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command:'add',
    description:'add a note',
    builder:{
        title:{
            description:'note title',
            required:true,
            type:'string'
        },
        body:{
            description:'added note body',
            required:true,
            type:'string'
        }
    },

    handler(){
        notes.addnote(yargs.argv.title,yargs.argv.body);
    }
})

yargs.command({
    command:'remove',
    description:'remove a note',
    builder:{
        title:{
            description:'note title',
            required:true,
            type:'string'
        }
    },

    handler(){
        notes.removenote(yargs.argv.title);
    }
})

yargs.command({
    command:'list',
    description:'list the notes',
    handler(){
        notes.listnotes();
    }
})

yargs.command({
    command:'read',
    description:'read a note',
    builder:{
        title:{
            description:'note title',
            required:true,
            type:'string'
        }
    },

    handler(){
        notes.readnote(yargs.argv.title);
    }
})

const temp = yargs.argv;
// console.log(temp);





