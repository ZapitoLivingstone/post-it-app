// src/components/FormularioNota.js

import React, { useState } from 'react';

const FormularioNota = ({ onAddNote, cancelar }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);
  const [error, setError] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!descripcion.trim()) {
      setError('La descripción es obligatoria.');
      return;
    }
    onAddNote({ 
      title: titulo.trim(), // Usé 'title' en lugar de 'titulo'
      description: descripcion.trim(), // Usé 'description' en lugar de 'descripcion'
      important: importante,
    });
    setTitulo('');
    setDescripcion('');
    setImportante(false);
  };

  return (
    <div className="card p-3">
      <form onSubmit={manejarEnvio}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Título (opcional)"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Descripción (obligatorio)"
            rows="3"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="importante"
            checked={importante}
            onChange={(e) => setImportante(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="importante">
            Marcar como importante
          </label>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
          <button type="button" className="btn btn-secondary" onClick={cancelar}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioNota;
