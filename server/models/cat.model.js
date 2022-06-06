const { Schema, model } = require("mongoose")

const catSchema = new Schema({

    name: {
        type: String,
        required: true,
        default: 'cat'
    }, 

   
    age: {
        type: String,
        required: true,
        default: 'To be noticed'
    },
    
    race: {
        type: String
    },

    gender: {
        type: String,
        trim: true,
        required: true,
        default: 'To be noticed'
    },

    description: {
        type: String
    },

    imageUrl: {
        type: [String]
    }, 

    // owner: {
    //    type: mongoose.SchemaTypes.ObjectId,
    //    rel: 'User'
    // }
},
   {
        timestamps: true
    })

const Cat = model('Cat', catSchema);

module.exports = Cat;