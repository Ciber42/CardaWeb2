import React from "react";

const ConfigerroEloading = ({ loading, error, retry }) => {
  if (loading) return <p className="loading-message">Carregando...</p>;
  if (error)
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={retry} className="retry-button">Tentar novamente</button>
      </div>
    );
  return null;
};

export default ConfigerroEloading;
