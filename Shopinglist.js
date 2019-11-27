================================================================
Collection name : Shoppinglist
Desc : Here all shoping list related information can be store.
and following are some points related to referenced colletions
1.family_group_id : By which family group this item belong to.
2.createdBy : who (users) created this item
3.updatedBy : who (users) updated this item last time.  
=================================================================
const options = {
    timestamps: { 
        createdAt: 'createdAt',
        updatedAt : 'updatedAt'
    }
}
const schema = new Schema({
    name:{
        type : String,
        required : true,
    },
    quantity:{
        type : String,
    },
    note:{
        type : String,
    },
    category:{
        type : String,
    },
    //By which family_group this item belong to
    family_group_id :{
        type : Schema.Types.ObjectId,
        ref : "Familygroups"
    }
    //The person who created this item
    createdBy :{
        type : Schema.Types.ObjectId,
        ref : "Users"
    },
    //The person who updated last time
    updatedBy :{
        type : Schema.Types.ObjectId,
        ref : "Users"
    },
    // We wont delete list rather set true for deletion
    isDeleted:{
        type : Boolean,
        default : false 
    }
})