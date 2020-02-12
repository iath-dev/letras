import React from 'react';
import { defaultForm } from '../../data';
import { ErrorMessage } from '..';
import PropTypes from 'prop-types';

const Form = ({ setInfo }) => {

    const [data, setData] = React.useState(defaultForm);
    const [error, setError] = React.useState(false);

    const { artist, song } = data;

    /**
     * Función para manejar los cambios de variables.
     * @param {event} event Evento de cambio
     */
    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    };

    /**
     * Método para validar el formulario.
     * @param {event} event 
     */
    const handleSubmit = event => {
        event.preventDefault();

        if (artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setInfo(data);

    }

    return ( 
        <div className="bg-info">
            { error && <ErrorMessage message="Todos los campos son obligatorios" /> }
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={handleChange}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={handleChange}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">BUSCAR</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}

Form.propTypes = {
    setInfo: PropTypes.func.isRequired,
}
 
export default Form;
