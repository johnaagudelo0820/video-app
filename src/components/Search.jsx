import React from 'react'

import '../assets/styles/components/Search.scss'

export const Search = () => (
  <section className="main">
    <h2 className="main__title">¿Que quieres ver hoy?</h2>
    <input className="input" type="text" placeholder="Buscar..." />
  </section>
)