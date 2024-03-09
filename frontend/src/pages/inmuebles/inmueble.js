
import React, { useState, useEffect } from 'react'
import { getInmuebles, deleteInmueble } from "../../features/apiCallInmuebles.js";
import { useNavigate } from "react-router-dom";
import Delete from "../../assets/crud/delete.png";
import Edit from "../../assets/crud/edit.png";
import "./inmueble.css"
//Componente principal de inmuebles 
const InmueblePrincipal = () => {
    //Definimos los estados de uso en React y el navigate para llamar a params
    const navigate = useNavigate();
    const [inmueble, setInmuebles] = useState([]);
    const [search, setSearch] = useState("");

    //Función para obtener todos los inmuebles
    async function getInmueblesAll() {
        const response = await getInmuebles();
        setInmuebles(response.data);
    }

    //Función para buscar los inmuebles por sus parámetros
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }
    const results = !search ? inmueble : inmueble.filter((dato) =>
        dato.id_inmueble.toString().includes(search.toLocaleLowerCase())
        || dato.nombre_inmueble.toLowerCase().includes(search.toLocaleLowerCase())
        || dato.direccion.toLowerCase().includes(search.toLocaleLowerCase())
        || dato.numHabitaciones.toString().includes(search.toLocaleLowerCase())
        || dato.tipoPropiedad.toLowerCase().includes(search.toLocaleLowerCase())
        || dato.costoMensual.toString().includes(search.toLocaleLowerCase())
        || dato.estado_arriendo.toLowerCase().includes(search.toLocaleLowerCase())
    )


    useEffect(() => {
        getInmueblesAll();
    }, []);

    //Cargamos en tablas la vista de inmuebles
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center mb-3 pt-3">
                <div className="col-md-4 col-sm-12 mb-3">
                    <label htmlFor="filtro">Búsqueda general</label>
                    <input
                        value={search}
                        onChange={searcher}
                        type="text"
                        placeholder="Search"
                        className="form-control"
                    />
                </div>
                <div className="col-md-4 col-sm-12 mb-3 mx-5">
                    <button type="button" className="btn btn-outline-info btn-block" onClick={() => navigate(`/createInmueble`)}>
                        Crear Inmueble
                    </button>
                </div>

            </div>

            <div className="conttable">
                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr className="table-dark">
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th># Habitaciones</th>
                                <th>Tipo</th>
                                <th>Costo</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody className="table-primary tablauser">
                            {results.map((inmueble) => (
                                <tr key={inmueble.id_inmueble}>
                                    <td>{inmueble.id_inmueble}</td>
                                    <td>{inmueble.nombre_inmueble}</td>
                                    <td>{inmueble.direccion}</td>
                                    <td>{inmueble.numHabitaciones}</td>
                                    <td>{inmueble.tipoPropiedad}</td>
                                    <td>{inmueble.costoMensual}</td>
                                    <td>{inmueble.estado_arriendo}</td>
                                    <td>
                                        <img
                                            onClick={() => deleteInmueble(inmueble.id_inmueble)}
                                            src={Delete}
                                            className="img-icon"
                                            alt="deleteimg"
                                        />
                                        <img
                                            onClick={() => navigate(`/editInmueble/${inmueble.id_inmueble}`)}
                                            src={Edit}
                                            className="img-icon"
                                            alt="editimg"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default InmueblePrincipal;