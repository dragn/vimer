require('shelljs/global');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a github name: ", function(user) {
  var repo = 'https://github.com/' + user + '/vim-setup';
  console.log('Checking for repository ' + repo);

  exec('git ls-remote ' + repo, { silent: true }, function(code) {
    if (code == 0) {
      console.log('OK!');
    } else {
      console.error('Repository not found! Fork dragn/vim-setup, or create your own!');
    }
  });

  rl.close();
});
