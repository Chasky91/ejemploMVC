import { Router } from "express"
import {obtenerTodos, crear} from "./controller.js"

const router = Router()

router.get('/todos', obtenerTodos )
router.post('/nuevo', crear )

export  default router