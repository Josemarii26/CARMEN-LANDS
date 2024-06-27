import React, { useState } from 'react';

// Función para eliminar tildes y diacríticas
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    const text = e.target.value;
    const normalizedText = removeAccents(text); // Normaliza el texto eliminando tildes
    setSearchText(text);
    onSearch(normalizedText); // Llama a la función de búsqueda con el texto normalizado.
  };

  return (
    <input
      type="text"
      placeholder="🔎Buscar productos..."
      value={searchText}
      onChange={handleSearch}
    />
  );
}