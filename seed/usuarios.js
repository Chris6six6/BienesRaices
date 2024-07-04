import bcrypt from 'bcrypt';

const usuarios = [{
    nombre: 'Chris',
    email: 'correo@correo.com',
    confirmado: 1,
    password: bcrypt.hashSync('correo@correo.com', 10)
}]

export default usuarios