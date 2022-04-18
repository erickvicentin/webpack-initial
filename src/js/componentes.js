const saludar = ( nombre ) => {
    const h1 = document.createElement('h1')
    h1.innerText = `Hola ${nombre}. Gusto en verte!`

    document.body.append(h1)
}

module.export = {
    saludar,
}