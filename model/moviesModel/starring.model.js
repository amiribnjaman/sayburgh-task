const mongoose = require('mongoose')
const Schema = mongoose.Schema


const starringSchema = new Schema({
    movieId: {
        type: String,
        required: true,
    },
    // starring: {
    //     hero: {
    //         type: String,
    //         required: [true, 'Hero name is required']
    //     },
    //     heroine: {
    //         type: String,
    //         required: [true, 'Heroine name is required']
    //     },
    //     othersCharrecters: {
    //         type: Array,
    //         require: false
    //     }
    // },
})



module.exports = mongoose.model('starring', starringSchema)