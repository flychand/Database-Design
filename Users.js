=============================================================================================
Collection name : User
Desc: This is user collection, where user related information can be store.
here "Familygroup" collection is being reference, which shows user and family group association.
=============================================================================================
const schema = new Schema({
    name :{
        type : String,
        required : true,
    },
    dob:{
        type : String,
    }
    email:{
        type : String,
        required : true,
    }
    // This is refresning to family group in which he/she conneted with
    familyGroup :{
        //status of the invitaions
        status : {
            type: String,
            enum : ["Accepted", "Waiting","Decline"]
        },
        //family group ObjectId
        familyGroup : {
            type : Schema.Types.ObjectId,
            ref : "Familygroups"
        }
    }
})