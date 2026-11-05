import { Router } from "express"
import {obtenerTodos, crear,modificar} from "./controller.js"

const router = Router()

router.get('/todos', obtenerTodos )
router.post('/nuevo', crear )
router.put('/actualizar/:id', modificar )
export  default router