db.runCommand({
  'findAndModify': '%s',
  'update': {
    '$set': {
      'locked': false
    }
  },
  'new': true
});