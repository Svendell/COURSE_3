const {send} = require('./m05_PIA')

async function main() {
    let sender = 'student2003bstu@gmail.com';
    let receiver = 'student2003bstu@gmail.com';
    let pass = 'nanhsqhsndlbyfxe';
    let message = 'Hello from 05-03!';

    await send(sender, receiver, pass, message);
}
  
main();