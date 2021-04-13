import mongoose from 'mongoose';

const inventorySchema = mongoose.Schema({
    name: String,
    description: String,
    imageurl: String,
    mootpoints: String,
    limit: Number,
    vendor: String,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    active: Boolean,

    section: {
        type: String,
        default: 'Any'
    },

    categories: [String]

});

const inventory = mongoose.model('inventory', inventorySchema);

export default inventory;