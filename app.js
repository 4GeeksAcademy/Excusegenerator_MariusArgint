let who = ['A unicorn', 'My cat', 'An alien', 'A ninja', 'My little brother'];
let action = ['stole', 'destroyed', 'hid', 'vaporized', 'teleported'];
let what = ['my homework', 'my laptop', 'my backpack', 'my project', 'my notes'];
let when = ['at midnight', 'during a storm', 'while I was daydreaming', 'in another dimension', 'during the eclipse'];

function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;

    document.getElementById('excuse').innerHTML = excuse;
}
window.onload = function() {
    generateExcuse();
};