import React, { useState } from 'react';

export const FinalizarPedido = ({ Cart }) => {
    // Definir estados para los mensajes de error
    const [errores, setErrores] = useState({
        nombre: '',
        apellidos: '',
        direccion: '',
        tlfn: '',
    });

    // Función para manejar la validación y envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes realizar la validación de los campos y establecer los mensajes de error según tus necesidades.
        // Ejemplo de validación simple:
        if (!e.target.nombre.value) {
            setErrores({ ...errores, nombre: 'Campo requerido' });
        } else {
            setErrores({ ...errores, nombre: '' });
            // Continuar con el envío del formulario si es válido
        }
    };

    console.log(Cart);

    return (
        <>
            <div className="container-compra">
                <form className="formulario-compra" onSubmit={handleSubmit}>
                    <h2>Información de Compra</h2>

                    <div className="campo">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" title="Campo requerido" />
                        <span className="error">{errores.nombre}</span> {/* Mensaje de error */}
                    </div>

                    <div className="campo">
                        <label htmlFor="apellidos">Apellidos:</label>
                        <input type="text" id="apellidos" name="apellidos" title="Campo requerido" />
                        <span className="error">{errores.apellidos}</span> {/* Mensaje de error */}
                    </div>

                    <div className="campo">
                        <label htmlFor="direccion">Dirección:</label>
                        <input type="text" id="direccion" name="direccion" title="Campo requerido" />
                        <span className="error">{errores.direccion}</span> {/* Mensaje de error */}
                    </div>

                    <div className="campo">
                        <label htmlFor="tlfn">Teléfono:</label>
                        <input type="number" id="tlfn" name="tlfn" title="Campo requerido" />
                        <span className="error">{errores.tlfn}</span> {/* Mensaje de error */}
                    </div>

                    {/* Agrega más campos según tus necesidades */}
                    <div className="campo">
                        <input type="submit" value="Realizar Compra" />
                    </div>

                    
                </form>

                <div className="imagen">
                    <img src='https://i.ibb.co/hX48XyD/Whats-App-Image-2023-11-19-at-22-54-32-1.jpg' alt="Producto" />
                </div>
            </div>
        </>
    );
};
