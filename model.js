import pool from  'config.db.js'

const  getAll = () => {
    const  result = pool.execute('SELECT * FROM usuarios')
    return result[0]
}

const  crear = async (username, email, password, fech_nac, pais ) => {

    const result = await pool.execute(
        'INSERT INTO usuarios (username, email, password, fecha_nac, pais) VALUES (?, ?, ?, ?, ?)', 
        [username, email, password, fech_nac, pais]
    )
    console.log(result)
    return result
}