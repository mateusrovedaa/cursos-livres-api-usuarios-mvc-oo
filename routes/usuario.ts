import { Router } from 'express';
import { UsuariosController } from '../controllers/UsuariosController';

let router: Router = Router();

let usuariosController: UsuariosController = new UsuariosController();

router.get('/usuarios', usuariosController.listarTodos);
router.post('/usuarios', usuariosController.salvar);
router.get('/usuarios/:id', usuariosController.listarUm);
router.put('/usuarios/:id', usuariosController.editar);
router.delete('/usuarios/:id', usuariosController.apagar);

export default router;