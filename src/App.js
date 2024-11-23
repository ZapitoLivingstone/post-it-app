import React, { useState } from 'react';
import FormularioNota from './components/FormularioNota';
import Nota from './components/Nota';
import ModalEditar from './components/ModalEditar';
import Footer from './components/Footer';
const App = () => {
  const [notas, setNotas] = useState([
    { 
      id: 1, 
      titulo: 'Subir las notas', 
      descripcion: 'Antes de fin de semestre', 
      color: 'warning',
      important: true 
    },
    { 
      id: 2, 
      titulo: 'Regar las plantas', 
      descripcion: 'Día por medio', 
      color: 'danger',
      important: false 
    },
    { 
      id: 3, 
      titulo: 'Renovar Tarjeta Auto', 
      descripcion: 'Antes de fin de mes que se está por vencer', 
      color: 'warning',
      important: true 
    },
    { 
      id: 4, 
      titulo: 'Cambiar Aceite Auto', 
      descripcion: 'Programar para antes de diciembre', 
      color: 'warning',
      important: false 
    }
  ]);

  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const manejarAgregarNota = (nuevaNota) => {
    setNotas([
      ...notas,
      {
        id: Date.now(),  
        ...nuevaNota,
        color: nuevaNota.important ? 'danger' : 'warning'
      }
    ]);
    setMostrarFormulario(false);
  };
  

  const manejarEditarNota = (nota) => {
    setNotaSeleccionada(nota);
    setMostrarModalEditar(true);
  };

  const manejarGuardarEdicion = (notaEditada) => {
    setNotas(notas.map(nota => 
      nota.id === notaEditada.id ? {
        ...notaEditada,
        color: notaEditada.important ? 'danger' : 'warning'
      } : nota
    ));
  };

  const manejarEliminarNota = (notaEliminar) => {
    setNotas(notas.filter(nota => nota.id !== notaEliminar.id));
  };

  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex flex-column">
      <div className="flex-grow-1 p-4">
        <div className="row mb-4">
          <div className="col">
            <h1 className="text-white text-center">¡Simulador de Post It!</h1>
          </div>
        </div>

        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            {!mostrarFormulario ? (
              <button 
                className="btn btn-primary w-100"
                onClick={() => setMostrarFormulario(true)}
                disabled={false}  
              >
                AGREGAR
              </button>
            ) : (
              <FormularioNota 
                onAddNote={manejarAgregarNota}
                onCancel={() => setMostrarFormulario(false)}
              />
            )}
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
          {notas.map(nota => (
            <div className="col" key={nota.id}>
              <Nota
                nota={nota}
                onEdit={manejarEditarNota}
                onDelete={manejarEliminarNota}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {notaSeleccionada && (
        <ModalEditar
          show={mostrarModalEditar}
          onClose={() => setMostrarModalEditar(false)}
          onSave={manejarGuardarEdicion}
          nota={notaSeleccionada}
        />
      )}
    </div>
  );
};

export default App;
