async function main() {
    let resposta = await fetch('http://localhost:3000/usuarios');
    let usuarios = await resposta.json();
    console.log(usuarios);

    resposta = await fetch('http://localhost:3000/usuarios', {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            id: 1,
            nome: "Cadastrado pelo fetch"
        }),
    });
    usuarios = await resposta.json();
    console.log(usuarios);
}

main();