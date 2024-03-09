import React from 'react'

function Navigation() {

  return (

    //Creamos nuestro menú de navegación responsivo.
    <nav class="navbar navbar-expand-lg navbar-dark bg-info" id="navbar" data-bs-theme="light">
      <div class="container-fluid">
        <h1 class="navbar-brand" href="#">InmobiliariaSA</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Inicio</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Servicios</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/inmuebles">Inmubles</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">Clientes</a>
                <a class="dropdown-item" href="/">Arriendos</a>
              </div>
            </li>
          </ul>
          <li class="nav-link text-light"><h6>Bienvenido</h6></li>
          <ul class="nav navbar-nav navbar-right">
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
