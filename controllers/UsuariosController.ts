import { Usuario } from '../models/Usuario';
import { Request, Response } from 'express';

export class UsuariosController {
    private usuarios: Array<Usuario> = [];

    public listarTodos = (req: Request, res: Response): Response => {
        return res.status(200).json(this.usuarios);
    }

    public salvar = (req: Request, res: Response): Response => {
        let idUsuario: number = req.body.id;
        let nomeUsuario: string = req.body.nome;
        let usuario = new Usuario(idUsuario, nomeUsuario);
        this.usuarios.push(usuario);

        return res.status(201).json(this.usuarios);
    }

    public listarUm = (req: Request, res: Response): Response => {
        let id: number = Number(req.params.id);
        let usuario = this.usuarios.find((obj) => {
            return obj.getId() === id;
        });
        if (usuario) {
            return res.status(200).json(usuario);
        } else {
            return res.status(404).send("Not found");
        }
    }

    public editar = (req: Request, res: Response): Response => {
        let id: number = Number(req.params.id);
        let usuario = this.usuarios.find((obj) => {
            return obj.getId() === id;
        });
        if (usuario) {
            usuario.setNome(req.body.nome);
            return res.status(200).json(this.usuarios);
        } else {
            return res.status(404).send("Not found");
        }
    }

    public apagar = (req: Request, res: Response): Response => {
        let id: number = Number(req.params.id);
        let indexUsuarioArray = this.usuarios.findIndex(object => {
            return object.getId() === id;
        });
    
        this.usuarios.splice(indexUsuarioArray, 1);
        return res.status(204).send();
    }
}