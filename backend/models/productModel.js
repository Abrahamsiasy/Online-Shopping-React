import mongoose from 'mongoose';
import User from './userModel.js'
import reviewSchema from './reviewModel.js'




const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    review: [reviewSchema],
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    countInStock: {
        type: String,
        required: true,
        default: 0
    },
    rating: {
        type: String,
        required: true,
        default: 0
    },
    numReviews: {
        type: String,
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)
export default Product