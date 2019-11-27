================================================================
Collection name : Familygroup
family group collection where few basic info can be stored
================================================================

const schema = new Schema({
    //family group name
    name : {
        type : String,
        required : true,
    },
    //sort description
    description : {
        type : String
    },
    // referensing to user collection who created this family group
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : "Users"
    }
})