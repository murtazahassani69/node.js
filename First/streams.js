const fs = require('fs');
const readStream = fs.createReadStream('./blog/blog.txt');
const writeStream = fs.createWriteStream('./blog/blog1.txt');

// readStream.on('data', (chunk) => {
//     console.log('--- New Chunk ---');
//     console.log(chunk.toString());

//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);