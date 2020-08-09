// // reading files

// const fs = require('fs');

// // fs.readFile('./blog/blogs.txt', (err, data) => {
// //     if(err) {
// //         console.log(err);
// //     }
// //     console.log(data.toString());
// // })

// // wring files

// // fs.writeFile('./blog/blogs.txt', 'hello world!', () => {
// //     console.log('File was written!');
// // })

// // directoreis 

// // if(!fs.existsSync('./newFolder')) {
// //     fs.mkdir('./newFolder', (err) => {
// //     if(err) {
// //         console.log(err);
// //     }
// //     console.log('New folder was created!');
// // })
// // } else {
// //     fs.rmdir('./newFolder', (err) => {
// //         if(err) {
// //             console.log(err);
// //         }
// //         console.log('NewFolder was removed!');
// //     })
// // }


// // deleting files

// if (fs.existsSync('./blog/blogs.txt')) {
//     fs.unlink('./blog/blogs.txt', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('File was deleted!');
//     });
// }