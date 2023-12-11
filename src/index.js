const express = require('express');
const app = express();
const jsonData = require('./informacion'); 
const jsonInfo = require('./infogrupo'); 
const productosInfo = require('./productosInfo'); 

app.get('/',(req,res)=>{
    res.send("Bienvenido <br>Paginas info - infogrupo3 - productos<br> Información: http://localhost:3000/info<br> Información del grupo: http://localhost:3000/infogrupo3<br> Productos: http://localhost:3000/productos")
})

app.get('/info', (req, res) => {
    res.json(jsonData);
});

app.get('/info/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    if (jsonData[nombre]) {
        res.json(jsonData[nombre]);
    } else {
        res.status(404).json({ error: 'Persona no encontrada' });
    }
});

app.get('/infogrupo3', (req, res) => {
    res.json(jsonInfo);
});

app.get('/infogrupo3/:integrante', (req, res) => {
    const integrante = req.params.integrante;
    if (jsonInfo[integrante]) {
        res.json(jsonInfo[integrante]);
    } else {
        res.status(404).json({ error: 'Informacion de integrante no encontrada' });
    }
});


app.get('/productos', (req, res) => {
    res.json(productosInfo);
});

app.get('/productos/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    if (productosInfo[nombre]) {
        res.json(productosInfo[nombre]);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

app.listen(3000)
console.log("El servidor esta corriendo en el puerto 3000")