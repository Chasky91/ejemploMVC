import  pool from './config.db.js'
import  modelUsuario from './model.js'  

const crear = async (req, res) => {

    const user = req.body.username
    const  email = req.body.email
    const password = req.body.password
    const  fecha_nac = req.body.fehca_nac
    const pais = req.body.pais

    const result = await modelUsuario.crear(user,email,password,fecha_nac,pais)

    res.json(result)


}

const  obtenerTodos = async (req, res) => {       
    const  usuarios = await modelUsuario.todos()
    res.json(usuarios)
}


const  modificar = async (req, res) => {
    const id = req.params.id

    const user = req.body.username
    const  email = req.body.email
    const password = req.body.password
    const  fecha_nac = req.body.fehca_nac
    const pais = req.body.pais

    const datos = {
        user,
        email,
        password,
        fecha_nac,
        pais
    }

    const resultadoActualizar = await modelUsuario.actualizar(datos, Number(id))

    res.json(
        resultadoActualizar
    )
} 

const  ontenerUsuario = () => {

}


const  darDeBaja = () => {
    
}




export { 
    obtenerTodos, 
    crear,
    modificar
}