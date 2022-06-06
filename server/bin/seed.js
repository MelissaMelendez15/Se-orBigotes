require('dotenv').config()
require('../db/index')


const Cat = require('../models/cat.model')

const cats = [
   
    {
        name: 'Bribon',
        age: '9',
        race: 'Gato Común Europeo',
        gender: 'Macho',
        description: 'Soy un gatito súper picaro y quiero tener una familia para hacerles reir.',
        imageUrl: 'https://www.notigatos.es/wp-content/uploads/2017/12/gato-blanco-y-negro-en-un-apartamento.jpg'
      
    
    },
    {
        name: 'Bombon',
        age: '2',
        race: 'Gato Común Europeo',
        gender: 'Hembra',
        description: 'Soy una gatita mayor pero soy un bombon.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKNsrYA1quUtV1LLm3x3HqSqtwGHi7j2Wag&usqp=CAU'
      
      
    },
    {
        name: 'Guayoyo',
        age: '3',
        race: 'Gato Común Europeo',
        gender: 'Macho',
        description: 'Soy un gatito súper listo y pequeñito. Voy súper agil y me como toda la comida. Llenare tu vida de risas.',
        imageUrl: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2019/04/02/5fa51b47772ec.jpeg'
      
       
    },
    {
        name: 'Avena',
        age: '1',
        race: 'Gato Común Europeo',
        gender: 'Macho',
        description: 'Soy un gatito timido y tal vez lo sea pero soy muy bueno.',
        imageUrl: 'https://www.tiendanimal.es/articulos/wp-content/uploads/2018/01/que-necesita-un-gato-1200x800.jpg'
      
       
    },
    {
        name: 'Joy',
        age: '9',
        race: 'Gato Común Europeo',
        gender: 'Hembra',
        description: 'Soy súper glamurosa y coqueta pero soy tan fiel y cariñosa que me muero por tener una familia.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JFvIo_04gUQ26_fytmQ4ldxg1hgL3jSV1w&usqp=CAU'
      
    },
    {
        name: 'Ginger',
        age: '8',
        race: 'Gato Común Europeo',
        gender: 'Macho',
        description: 'Soy un poquito timido pero más bueno que el pan.',
        imageUrl: 'https://i.pinimg.com/236x/95/b6/9a/95b69a3ed5922bc92a6b95beece22102.jpg'
      
       
    },
    {
        name: 'Manchitas',
        age: '1',
        race: 'Gato Común Europeo',
        gender: 'Hembra',
        description: 'Gatita muy tranquila y me encanta como a todos los demás trepar hasta arriba, arriba los arboles.',
        imageUrl: 'https://s1.eestatic.com/2022/01/12/curiosidades/mascotas/641945915_221038023_1024x576.jpg'
      
       
    },
    {
        name: 'Simba',
        age: '1',
        race: 'Gato Común Europeo',
        gender: 'Macho',
        description: 'Hola, me llamo Simba, soy el gato más grande con vetas. El otro es mi amigo, Richie, que es un poco llorón pero ya tiene una mamá que lo quiere muchísimo. Soy súper inteligente, en serío.',
        imageUrl: 'https://res.cloudinary.com/dawsulzqj/image/upload/v1641371880/cats/IMG_20211226_123314_275_p4ohht.jpg'
      
    }
]

Cat.create(cats)
   .then(cats => console.log(`Se han creado ${cats.length} señores bigotes en la DDBB`))
   .catch(err => console.log(err))