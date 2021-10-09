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
        fs.lstatSync(src).isDirectory() ? true : src.endsWith('.lrcat');
      },
    },
    function (err) {
      if (err) {
        return console.error(err);
      }

      console.log('Folders & .lrcat data copied recursively');
    }
  );

lrcatMigration('../../../../source/', '../../../../documents/target');
