import pool from  './config.db.js'

const  todos = async () => {
    const  result = await pool.execute('SELECT * FROM usuarios')
    return result[0]
}

const  crear = async (username, email, password, fech_nac, pais ) => {

    const result = await pool.execute(
        'INSERT INTO usuarios (username, email, password_hash, fecha_nacimiento, pais) VALUES (?, ?, ?, ?, ?)', 
        [username, email, password, fech_nac, pais]
    )
    const  nuevo = buscarUno(result[0].insertId)
    return nuevo
}

const buscarUno = async (id) => {
    const  result = await pool.execute('SELECT * FROM usuarios WHERE id = ?', [id])
    return result[0]
}

const actualizar = async (datos, id) => {
    console.log(datos)
    const  result = await pool.execute(
        'UPDATE usuarios  SET username = ?, email = ?, password_hash = ?, fecha_nacimiento = ?, pais  = ? WHERE id = ?', 
        [datos.user, datos.email, datos.password, datos.fecha_nac, datos.pais, id]
    )
    return result[0]
}

const  eliminar = (id) => {
    const  result = pool.execute(' DELETE FROM usuarios WHERE  id ? ', [id])
    return result[0]
}

export default   {
    crear,
    todos,
    buscarUno,
    actualizar,
    eliminar
}