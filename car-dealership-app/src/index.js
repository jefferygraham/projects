import readline from 'readline';

import { getUsers } from './user';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start() {
  rl.question(
    `What do you want to do?
        0. Register
        1. Login
        2. Display Contents
        3. Make selection
        4. Restock
        q. Exit\n`,
    function (answer) {
      let valid = false;
      if (!isNaN(answer) || answer === 'q') {
        valid = true;
      }
      if (valid) {
        switch (answer) {
          case '0':
            attemptRegister();
            break;
          case '1':
            attemptLogin();
            break;
          case '2':
            displayContents();
            start();
            break;
          case '3':
            makeSelection();
            break;
          case '4':
            checkUserRole();
            break;
          case 'q':
            exit();
            break;
          default:
            start();
        }
      } else {
        console.log('invalid input.');
        start();
      }
    }
  );
}

start();
