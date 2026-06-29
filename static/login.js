let cadastro = document.querySelector('#cadastro');
let formulario = document.querySelector('#login');
let button = document.querySelector('#cadastrar');
function logar(){
    formulario.innerHTML = `
        <h1>Faça seu login!</h1>
        <label id="name">Nome de usuário:</label><input for="name" type="text" name="name">
        <label id="name">Senha de usuário:</label><input for="name" type="password" name="password">
        <button>Fazer Login</button>
    `
    button.innerHTML = `Cadastrar-se`
    button.setAttribute('onclick', 'cadastrar()')
};
function cadastrar(){
        formulario.innerHTML = `
            <h1>Faça seu cadastro!</h1>
            <label id="name">Nome de usuário:</label><input for="name" type="text" name="name">
            <label id="name">Senha de usuário:</label><input for="name" type="password" name="password">
            <button>Fazer Cadastro</button>
        `
        button.innerHTML = `Logar-se`
        button.setAttribute('onclick', 'logar()')
}
