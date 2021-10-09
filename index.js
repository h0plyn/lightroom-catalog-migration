const fs = require('fs');
const ncp = require('ncp').ncp;

// Represents the number of pending
// file system requests at a time.
ncp.limit = 16;

const lrcatMigration = (source, target) =>
  ncp(
    source,
    target,
    {
      filter: (src) => {
        if (fs.lstatSync(src).isDirectory()) {
          return true;
        } else {
          return src.endsWith('.lrcat');
        }
      },
    },
    function (err) {
      if (err) {
        return console.error(err);
      }

      console.log('Folders & .lrcat copied recursively');
    }
  );

lrcatMigration('../../../../Pictures', '../../../../Documents/CopyTest');
