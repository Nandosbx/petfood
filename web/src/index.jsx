import React from 'react'
import ReactDOM from 'react-dom'
import Cadastro from './pages/Cadastro'
import Checkout from './pages/Checkout'
import Petshop from './pages/Petshop'

import './styles/global.scss'

ReactDOM.render(
    <React.StrictMode>
        <Petshop />
    </React.StrictMode>,
    document.getElementById('root')
)
