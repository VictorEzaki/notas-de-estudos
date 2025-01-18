const users = [];
async function fetchUser(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const user = await response.json();
    if (user.message) {
        console.log('Usuário não encontrado!');
    }
    else {
        users.push(user);
        console.log(`O usuário ${user.name} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nnome: ${user.name}` +
            `\nbio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`);
    }
}
async function showUser(userName) {
    const user = users.find(user => user.login === userName);
    if (typeof user === 'undefined') {
        console.log('Usuário não encontrado!');
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`;
        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        alert(message);
    }
}
function showAllUsers() {
    let message = 'Usuários:\n';
    users.forEach(user => {
        message += `\n- ${user.login}`;
    });
    console.log(message);
}
function showReposTotal() {
    const resposTotal = users.reduce((accumlator, user) => accumlator + user.public_repos, 0);
    console.log(`O grupo possui um total de ${resposTotal} repositórios públicos!`);
}
function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    let message = 'Top 5 usuários com mais repositórios públicos: \n';
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios.`;
    });
    console.log(message);
}
async function main() {
    await fetchUser('isaacpontes');
    await fetchUser('julianaconde');
    await fetchUser('pcaldass');
    await fetchUser('lucasqueirogaa');
    await fetchUser('frans203');
    await fetchUser('LeDragoX');
    await showUser('isaacpontes');
    await showUser('julianaconde');
    showAllUsers();
    showReposTotal();
    showTopFive();
}
main();
