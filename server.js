//1.requires
const express = require('express'); //2.tener mi servidor
const hbs = require('hbs'); //3.para usar los handlebars
//4.traer las funciones de express
const app = express();

//12.por si se usan los helpers se importan
require('./hbs/helpers');

//6.declaramos el puerto que tambien puede ser estatico per sirve ai para cambiar al desplegar la app en la web
const port = process.env.PORT || 3000;

/*5.creamos un medleware (es una callback que sirve para indicar la runa que se ejecutara siempre)
con esto hacemos publica una carpeta que servira como base en el proyecto*/
app.use(express.static(__dirname + '/public'));

//7.indicamos donde estaran las particicones del codigo (partes que separemos del codigo)
hbs.registerPartials(__dirname + '/views/partials');

//8.hablilitaremos el view engine que nos sirve para poder inyectar el codigo con los mostaches
app.set('view engine', 'hbs');

/*9.indicaremos cual sera nuestra pagina principal de los views
esto lo toma hbs por defecto la carpeta views (solo especificamos el nombre del archivo que este dentro de esta carpeta)*/
app.get('/', (req, res) => {
    res.render('home', { //10.renderizamos la pagina con los mostaches
        nombre: 'Jefferson Pineda' //11.se puede enviar helpers
    });
});

//5.Hacemos que el server este pendiente e indicamos que purto utilizara
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});