//Importamos Sequelize para el ORM
import { Sequelize } from 'sequelize';
//Creamos la conexión con la BD asignando el nombre, usuario, contraseña y otros parámetros de seguridad
const sequelize = new Sequelize('inmobiliariadb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
//Llamos al sequalize para que corra la base de datos si todo fue correcto, caso contrario de error.
await sequelize
.authenticate()
.then(() => {
  console.log('Conexión con la BD exitosa.');
})
 .catch(err => {
 console.error('No se puede conectar con la BD: ', err);
});

export default sequelize;