import  pool from './config.db.js'

const crear = (req, res) => {

    const user = req.body.username
    const  email = req.body.email
    const password = req.body.password
    const  edad = req.body.fehca_nac
    const pais = req.body.pais

    const [result] = await pool.execute('INSERT INTO usuarios (username, email, password, fecha_nac, pais) VALUES (?, ?, ?, ?, ?)', [user, email, password, edad, pais])

    res.json({
        "username": user,
        "email": email,
        "password": password,
        "edad": edad,
        "pais": pais
    })


}

const  obtenerTodos = async (req, res) => {       
    const  usuarios = await pool.execute('SELECT * FROM usuarios')
    res.json(usuarios[0])
}



export { 
    obtenerTodos, 
    crear
}