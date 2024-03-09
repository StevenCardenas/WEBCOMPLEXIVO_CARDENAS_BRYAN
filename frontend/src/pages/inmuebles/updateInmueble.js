
import { getInmueble, updateInmueble } from "../../features/apiCallInmuebles.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./crearInmueble.css";

function UpdateInmueble() {
    //Llamamos a params para el parametro de la ruta y a use navigate para navegar entre pagínas
    const params = useParams();
    const navigate = useNavigate();
    //Creamos un efecto para obtener los datos del inmueble del id por la ruta que le pasamos
    useEffect(() => {
        if (params.id_inmueble) {
            getInmueble(params.id_inmueble)
                .then(res => {
                    console.log(res)
                    setValues({
                        ...values,
                        nombre_inmueble: res.data.nombre_inmueble,
                        direccion: res.data.direccion,
                        numHabitaciones: res.data.numHabitaciones,
                        tipoPropiedad: res.data.tipoPropiedad,
                        costoMensual: res.data.costoMensual,
                        estado_arriendo: res.data.estado_arriendo,
                    })
                })
                .catch(err => console.log(err))
        }
    }, []);
    //Creamos los parámetros
    const [values, setValues] = useState({
        nombre_inmueble: "",
        direccion: "",
        numHabitaciones: "",
        tipoPropiedad: "",
        costoMensual: "",
        estado_arriendo: "",
    })
    //Función que actualiza un inmueble al guardar
    const handleSubmit = (event) => {
        event.preventDefault();
        updateInmueble(values, params.id_inmueble);
        navigate("/inmuebles");
        setValues({
            nombre_inmueble: "",
            direccion: "",
            numHabitaciones: "",
            tipoPropiedad: "",
            costoMensual: "",
            estado_arriendo: "",
        });
    }

    return (
        <div class="container contact-formus">
            <form
                onSubmit={handleSubmit}
            >
                <fieldset>
                    <h3>Actualizar un Inmueble</h3>
                    <div class="row">
                        <div class="col-md-6 my-2">
                            <div class="form-group row">
                                <div class="form-group">
                                    <label for="nombre" class="form-label mt-4">Nombre del inmueble</label>
                                    <input type="text" value={values.nombre_inmueble} onChange={e => setValues({ ...values, nombre_inmueble: e.target.value })} class="form-control" id="nombre" placeholder="Nombre " />
                                </div>
                                <div class="form-group">
                                    <label for="direccion" class="form-label mt-4">Direccion</label>
                                    <input type="text" value={values.direccion} onChange={e => setValues({ ...values, direccion: e.target.value })} class="form-control" id="direccion" placeholder="Direccion" />
                                </div>
                                <div class="form-group">
                                    <label for="numHabitaciones" class="form-label mt-4">Número de habitaciones</label>
                                    <input type="number" value={values.numHabitaciones} onChange={e => setValues({ ...values, numHabitaciones: e.target.value })} class="form-control" id="numHabitaciones" placeholder="Num. habitaciones" />
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6 my-2">
                            <div class="form-group row">
                                <div class="form-group">
                                    <label for="tipoPropiedad" class="form-label mt-4">Tipo de propiedad</label>
                                    <input type="text" value={values.tipoPropiedad} onChange={e => setValues({ ...values, tipoPropiedad: e.target.value })} class="form-control" id="tipoPropiedad" placeholder="Tipo de propiedad" />
                                </div>
                                <div class="form-group">
                                    <label for="costoMensual" class="form-label mt-4">Costo mensual</label>
                                    <input type="number" value={values.costoMensual} onChange={e => setValues({ ...values, costoMensual: e.target.value })} class="form-control" id="costoMensual" placeholder="Costo ($)" />
                                </div>
                                <div class="form-group">
                                    <label for="estado" class="form-label mt-4">Estado del inmueble</label>
                                    <select value={values.estado_arriendo} onChange={e => setValues({ ...values, estado_arriendo: e.target.value })} class="form-select" id="estado">
                                        <option>--Seleccionar--</option>
                                        <option>DISPONIBLE</option>
                                        <option>ARRENDADO</option>
                                        <option>PENDIENTE</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-outline-primary btnContactSubmitus">Actualizar</button>
                            </div>

                        </div>


                    </div>

                </fieldset>
            </form>
        </div>
    );
}

export default UpdateInmueble;