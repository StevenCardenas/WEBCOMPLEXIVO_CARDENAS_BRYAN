//Importamos sequalize y la configuración de la DB en index.js
import sequelize from './index.js';
import { DataTypes } from 'sequelize';
//Creamos nuestro esquema ORM
const Inmueble = sequelize.define('inmuebles', {
    id_inmueble: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre_inmueble: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    numHabitaciones: {
        type: DataTypes.INTEGER
    },
    tipoPropiedad: {
        type: DataTypes.STRING
    },
    costoMensual: {
        type: DataTypes.INTEGER
    },
    estado_arriendo: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false, //Desativa la carga de fechas por defecto
    tableName: 'inmuebles', // Usamos la tabla inmuebles
    freezeTableName: true, 
    autoIncrement: false
});
export default Inmueble;