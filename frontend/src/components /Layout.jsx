const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0"> {/* container-fluid ocupa todo el ancho */}
      
      {/* Navbar de Bootstrap */}
      <nav className="navbar navbar-dark bg-primary px-3">
        <span className="navbar-brand">Sistema SRR</span>
        <button className="btn btn-outline-light btn-sm">Cerrar Sesión</button>
      </nav>

      <div className="d-flex"> {/* d-flex pone la sidebar y el contenido uno al lado del otro */}
        
        {/* Sidebar con Bootstrap */}
        <div className="bg-light border-end" style={{ width: '250px', minHeight: '100vh' }}>
          <div className="list-group list-group-flush">
            <Link to="/dashboard" className="list-group-item list-group-item-action">Panel</Link>
            <Link to="/create-order" className="list-group-item list-group-item-action">Crear Orden</Link>
            <Link to="/tracking" className="list-group-item list-group-item-action">Seguimiento</Link>
          </div>
        </div>

        {/* Contenido Principal */}
        <main className="flex-grow-1 p-4">
          {children}
        </main>

      </div>
    </div>
  );
};
