// src/components/ModalEditar.js

import React, { useState, useEffect } from 'react';

const ModalEditar = ({ show, onClose, onSave, nota }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [important, setImportant] = useState(false);

  useEffect(() => {
    if (nota) {
      setTitulo(nota.titulo); // Cambié 'titulo' por 'title'
      setDescripcion(nota.descripcion); // Cambié 'descripcion' por 'description'
      setImportant(nota.important);
    }
  }, [nota]);

  const handleSave = () => {
    onSave({ ...nota, titulo, descripcion, important });
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Nota</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Título</label>
              <input 
                type="text" 
                className="form-control" 
                id="titulo" 
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Descripción</label>
              <textarea 
                className="form-control" 
                id="descripcion" 
                value={descripcion} 
                onChange={(e) => setDescripcion(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="important" className="form-label">Importante</label>
              <input 
                type="checkbox" 
                id="important" 
                checked={important} 
                onChange={() => setImportant(!important)} 
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            <button className="btn btn-primary" onClick={handleSave}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditar;
