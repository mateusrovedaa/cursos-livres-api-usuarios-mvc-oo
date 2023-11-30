import express, { Express, Request, Response } from 'express';

const app: Express = express();
let usuarios: Array<{ id: number, nome: string }> = [];

app.use(express.json());

app.get('/batata', function (req: Request, res: Response): Response {
    return res.status(200).json({ message: "Hello World" });
});

app.get('/usuarios', function (req: Request, res: Response): Response {
    return res.status(200).json(usuarios);
});

app.post('/usuarios', function (req: Request, res: Response): Response {
    let idUsuario: number = req.body.id;
    let nomeUsuario: string = req.body.nome;

    usuarios.push({
        id: idUsuario,
        nome: nomeUsuario
    });

    return res.status(201).json(usuarios);
});

app.get('/usuarios/:id', function (req: Request, res: Response): Response {
    let id: number = Number(req.params.id);
    let usuario = usuarios.find((obj) => {
        return obj.id === id;
    });
    if (usuario) {
        return res.status(200).json(usuario);
    } else {
        return res.status(404).send("Not found");
    }
});

app.put('/usuarios/:id', function (req: Request, res: Response): Response {
    let id: number = Number(req.params.id);
    let usuario = usuarios.find((obj) => {
        return obj.id === id;
    });
    if (usuario) {
        usuario.nome = req.body.nome;
        return res.status(200).json(usuarios);
    } else {
        return res.status(404).send("Not found");
    }
});

app.delete('/usuarios/:id', function (req: Request, res: Response): Response {
    let id: number = Number(req.params.id);
    let indexUsuarioArray = usuarios.findIndex(object => {
        return object.id === id;
    });

    usuarios.splice(indexUsuarioArray, 1);
    return res.status(204).send();
});

app.listen(3000, () => {
    console.log("Servidor foi iniciado na porta 3000");
});