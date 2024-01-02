/*
Type Of Vulnerability : Arbitrary File Write via Archive Extraction (Zip Slip)
CWE : CWE-22
*/

import * as fs from 'fs';
import * as unzipper from 'unzipper'; // Assuming you are using 'unzipper' package

fs.createReadStream('archive.zip')
  .pipe(unzipper.Parse()) // Source
  .on('entry', (entry: unzipper.Entry) => {
    const fileName = entry.path;
    // WARNING: This could write any file on the filesystem.
    entry.pipe(fs.createWriteStream(fileName)); //Sink
});
