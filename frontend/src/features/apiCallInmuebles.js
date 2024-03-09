//Importamos axios y la proxy que es la ip de nuestro servidor.
import axios from "axios";
import BASEURL from "../proxy.js";
//Exportamos la función para obtener todos los inmuebles GET ALL
export const getInmuebles = async () => {
  try {
    const res = await axios.get(`${BASEURL}/api/inmueble/find/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
//Exportamos la función para obtener un inmueble por id GET BY ID
export const getInmueble = async (id_inmueble) => {
  try {
    const res = await axios.get(`${BASEURL}/api/inmueble/find/` + id_inmueble);
    return res.data
  } catch (err) {
    return {error: err.message}
  }
};
//Exportamos la función para crear un inmueble CREATE
export const createInmueble = async (inmueble) => {
  try {
    const res = await axios.post(`${BASEURL}/api/inmueble/create/`, inmueble);
    return res.data;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};
//Exportamos la función para actualizar un inmueble UPDATE
export const updateInmueble = async (inmueble, id_inmueble) => {
  try {
    const res = await axios.put(
      `${BASEURL}/api/inmueble/update/` + id_inmueble,
      inmueble
    );
    return res.data;
  } catch (err) {
    return {
      error: err,
    };
  }
};
//Exportamos la función para eliminar un INMUEBLE
export const deleteInmueble = async (id_inmueble) => {
  try {
    const res = await axios.delete(
      `${BASEURL}/api/inmueble/delete/` + id_inmueble
    );
    window.location.reload()
    return res.data;
  } catch (err) {
    return { error: err };
  }
};
