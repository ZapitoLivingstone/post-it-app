import React, { useState } from 'react';

const Nota = ({ nota, onEdit, onDelete }) => {
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false);

  const clasesNota = `card bg-${nota.important ? 'danger' : 'warning'} text-dark h-100 ${nota.important ? 'border border-danger border-3' : ''}`;

  return (
    <>
      <div 
        className={clasesNota}
        style={{ transform: 'rotate(' + (Math.random() * 6 - 3) + 'deg)' }}
      >
        <div className="card-body d-flex flex-column">
          {nota.important && (
            <div className="position-absolute top-0 end-0 p-2">
              <span className="badge bg-danger">Importante</span>
              
            </div>
          )}
          <h5 className="card-title">{nota.titulo || 'Sin título'}</h5>
          <p className="card-text flex-grow-1">{nota.descripcion}</p>
          <div className="mt-2">
            <button 
              className="btn btn-sm btn-info me-2"
              onClick={() => onEdit(nota)}
            >
              Editar
            </button>
            <button 
              className="btn btn-sm btn-danger"
              onClick={() => setMostrarModalEliminar(true)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>

      <div className={`modal ${mostrarModalEliminar ? 'show' : ''}`}
           style={{ display: mostrarModalEliminar ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar eliminación</h5>
              <button type="button" className="btn-close" onClick={() => setMostrarModalEliminar(false)}></button>
            </div>
            <div className="modal-body">
              ¿Estás seguro de que deseas eliminar esta nota?
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setMostrarModalEliminar(false)}>
                Cancelar
              </button>
              <button className="btn btn-danger" onClick={() => {
                onDelete(nota);
                setMostrarModalEliminar(false);
              }}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nota;
