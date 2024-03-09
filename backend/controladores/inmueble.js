//Importamos el esquema Inmueble
import Inmueble from '../modelo/inmueble.js';
await Inmueble.sync();
//Establecemos los controladores para el CRUD y lo documentamos con Swagger.
//Get all inmuebles (Obtiene todos los inmuebles)
/**
 * @swagger
 * /api/inmueble/find:
 *   get:
 *     summary: Obtiene todos los inmuebles.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa.
 */
export const getInmuebles = async (req, res) => {
    try {
        const inmueble = await Inmueble.findAll({
            attributes: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad', 'costoMensual', 'estado_arriendo']
        });
        return res.json({ data: inmueble });
    } catch (error) {
        return res.json({ error: error.message });
    }
};
//Get by id inmueble (Obtiene un inmueble por su id_inmueble)
/**
 * @swagger
 * /api/inmueble/find/{id_inmueble}:
 *   get:
 *     summary: Obtiene un inmueble por su ID.
 *     parameters:
 *       - in: path
 *         name: id_inmueble
 *         required: true
 *         description: ID del inmueble a buscar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Respuesta exitosa.
 *       '404':
 *         description: No se ha encontrado ningún inmueble con el ID especificado.
 *       '500':
 *         description: Error interno del servidor.
 */
export const getInmueble = async (req, res) => {
    try {
        const inmueble = await Inmueble.findOne({
            where: {
                id_inmueble: req.params.id_inmueble
            },
            attributes: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad', 'costoMensual', 'estado_arriendo']
        });
        if (!inmueble) {
            return res.status(404).json({ error: 'No se halló un inmueble con este id.' });
        }
        return res.json({ data: inmueble });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//Create a Inmueble (Crea un inmueble por sus parámetros)
/**
 * @swagger
 * /api/inmueble/create:
 *   post:
 *     summary: Crea un nuevo inmueble.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_inmueble:
 *                 type: string
 *               direccion:
 *                 type: string
 *               numHabitaciones:
 *                 type: integer
 *               tipoPropiedad:
 *                 type: string
 *               costoMensual:
 *                 type: number
 *               estado_arriendo:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Inmueble creado exitosamente.
 *       '500':
 *         description: Error interno del servidor.
 */
export const createInmueble = async (req, res) => {
    try {
        const { nombre_inmueble, direccion, numHabitaciones, tipoPropiedad, costoMensual, estado_arriendo } = req.body;
        const inmueble = await Inmueble.create({
            nombre_inmueble,
            direccion,
            numHabitaciones,
            tipoPropiedad,
            costoMensual,
            estado_arriendo
        }, {
            // Evitar que se incluya el campo id en la consulta de inserción
            fields: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad', 'costoMensual', 'estado_arriendo']
        });
        return res.status(201).json({ data: inmueble });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//Update a Inmueble (actualiza un inmueble)
/**
 * @swagger
 * /api/inmueble/update/{id_inmueble}:
 *   put:
 *     summary: Actualiza un inmueble por su ID.
 *     parameters:
 *       - in: path
 *         name: id_inmueble
 *         required: true
 *         description: ID del inmueble a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_inmueble:
 *                 type: string
 *               direccion:
 *                 type: string
 *               numHabitaciones:
 *                 type: integer
 *               tipoPropiedad:
 *                 type: string
 *               costoMensual:
 *                 type: number
 *               estado_arriendo:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Inmueble actualizado exitosamente.
 *       '404':
 *         description: No se ha encontrado ningún inmueble con el ID especificado.
 *       '500':
 *         description: Error interno del servidor.
 */
export const updateInmueble = async (req, res) => {
    try {
        const inmueble = await Inmueble.findOne({
            where: {
                id_inmueble: req.params.id_inmueble
            },
            attributes: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad', 'costoMensual', 'estado_arriendo']
        });
        if (!inmueble) {
            return res.status(404).json({ error: 'No se ha encontrado ningún inmueble' });
        }
        const { nombre_inmueble, direccion, numHabitaciones, tipoPropiedad, costoMensual, estado_arriendo } = req.body;
        await inmueble.update({
            nombre_inmueble,
            direccion,
            numHabitaciones,
            tipoPropiedad,
            costoMensual,
            estado_arriendo
        }, {
            // Evitar que se incluya el campo id en la consulta de inserción
            fields: ['id_inmueble', 'nombre_inmueble', 'direccion', 'numHabitaciones', 'tipoPropiedad', 'costoMensual', 'estado_arriendo']
        });
        return res.json({ data: inmueble });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//Dete a inmueble (elimina un inmueble)
/**
 * @swagger
 * /api/inmueble/delete/{id_inmueble}:
 *   delete:
 *     summary: Elimina un inmueble por su ID.
 *     parameters:
 *       - in: path
 *         name: id_inmueble
 *         required: true
 *         description: ID del inmueble a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Inmueble eliminado exitosamente.
 *       '404':
 *         description: No se ha encontrado ningún inmueble con el ID especificado.
 *       '500':
 *         description: Error interno del servidor.
 */
export const deleteInmueble = async (req, res) => {
    try {
        const inmueble = await Inmueble.findByPk(req.params.id_inmueble);
        if (!inmueble) {
            return res.status(404).json({ error: 'No se ha encontrado ningún inmueble' });
        }
        await inmueble.destroy();
        return res.json({ data: inmueble });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};