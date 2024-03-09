
import { createInmueble } from "../../features/apiCallInmuebles.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./crearInmueble.css";

function CreateInmueble() {
    //Establecemos los parámetros de inmueble
    const [inmueble, setInmueble] = useState({
        nombre_inmueble: "",
        direccion: "",
        numHabitaciones: "",
        tipoPropiedad: "",
        costoMensual: "",
        estado_arriendo: "",
    });

    const navigate = useNavigate();
    const [err, setErr] = useState(null);
    //Funcion que guarda Inmueble al dar a guardar
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createInmueble(inmueble);
        } catch (err) {
            setErr(err.response.data);
        }
        navigate("/inmuebles");
    };
    //Vista para crear inmueble
    return (
        <div class="container contact-formus">
            <form
                onSubmit={handleSubmit}
            >
                <fieldset>
                    <h3>Crear un Inmueble</h3>
                    <div class="row">
                        <div class="col-md-6 my-2">
                            <div class="form-group row">
                                <div class="form-group">
                                    <label for="nombre" class="form-label mt-4">Nombre del inmueble</label>
                                    <input type="text" onChange={e => setInmueble({ ...inmueble, nombre_inmueble: e.target.value })} class="form-control" id="nombre" placeholder="Nombre " />
                                </div>
                                <div class="form-group">
                                    <label for="direccion" class="form-label mt-4">Direccion</label>
                                    <input type="text" onChange={e => setInmueble({ ...inmueble, direccion: e.target.value })} class="form-control" id="direccion" placeholder="Direccion" />
                                </div>
                                <div class="form-group">
                                    <label for="numHabitaciones" class="form-label mt-4">Número de habitaciones</label>
                                    <input type="number" onChange={e => setInmueble({ ...inmueble, numHabitaciones: e.target.value })} class="form-control" id="numHabitaciones" placeholder="Num. habitaciones" />
                                </div>

                            </div>
                        </div>
                        <div class="col-md-6 my-2">
                            <div class="form-group row">
                                <div class="form-group">
                                    <label for="tipoPropiedad" class="form-label mt-4">Tipo de propiedad</label>
                                    <input type="text" onChange={e => setInmueble({ ...inmueble, tipoPropiedad: e.target.value })} class="form-control" id="tipoPropiedad" placeholder="Tipo de propiedad" />
                                </div>
                                <div class="form-group">
                                    <label for="costoMensual" class="form-label mt-4">Costo mensual</label>
                                    <input type="number" onChange={e => setInmueble({ ...inmueble, costoMensual: e.target.value })} class="form-control" id="costoMensual" placeholder="Costo ($)" />
                                </div>
                                <div class="form-group">
                                    <label for="estado" class="form-label mt-4">Estado del inmueble</label>
                                    <select onChange={e => setInmueble({ ...inmueble, estado_arriendo: e.target.value })} class="form-select" id="estado">
                                        <option>--Seleccionar--</option>
                                        <option>DISPONIBLE</option>
                                        <option>ARRENDADO</option>
                                        <option>PENDIENTE</option>
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-outline-primary btnContactSubmitus">Crear</button>
                            </div>

                        </div>


                    </div>

                </fieldset>
            </form>
        </div>
    );
}

export default CreateInmueble;