/*
// all ---> All will check value along with the index
db.test2.find({
    $and: [
        {friends: {$size: 5}},
        {friends: { $all: ["Najmus Sakib"] }}
        ]
    
})
  .projection({age:1, friends:1, name:1})
  .sort({})
  .limit(0)

// elemMatch --> this will try to match the value present inside the array or not, will not check index of those values
db.test2.find({
    skills: {$elemMatch: {name: ""}}
})
  .projection({age:1, skills:1})
  .sort({})
  .limit(0)

// $set --> this will add any type of value and will replace the previous value without checking any type or anything
db.test2.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000066")}, 
    {$set: {
        interests:["TESTING"]
    }}
)

// $addToSet 
db.test2.updateOne(
    // selecting which document needs to update
    {_id : ObjectId("6406ad63fc13ae5a40000066")}, 

    ----$set--- 
    {$set: {
        interests: ["TESTING"]
    }}
    
    ---$addToSet single value---
    {$addToSet: {
        interests: "TESTING4"
    }}
    
    ---$addToSet multiple values with $each---
    {$addToSet: {
        interests: {$each: ["TESTING2", "TESTING3"]}
    }}
    
    ---$push single value---
    {$push: {
        interests: "TESTING4"}
    }}
    
    --- $push with multiple value $each------
    {$push: {
        interests: {$each: ["TESTING4", "TESTING5"]}
    }}
    
)


*/

db.test2.updateOne(
    // selecting which document needs to update
    { _id: ObjectId("6406ad63fc13ae5a40000066") },
    /*
    --- $unset--- will remove the field
    {$unset: {age: 1 }}
    
    --- $pop ---
    { $pop: { friends: 1 } } --> remove the last elem from the array
    { $pop: { friends: -1 } } ---> remove the first elem from the array
    
    ---$pull---
    { $pull: { friends: "Nahid Hasan Bulbul" } }
     
    ---$pullAll---
    { $pullAll: { friends: [ "Tanmoy Parvez", "Mir Hussain" ] } }
     
    ---$set for object---
    { $set: { "address.city": "Kolkata" } } --> update single value
    { $set: { "address.city": "Kolkata", "address.country": "India", "address.postalCode": 742303, "name.firstName": "Samiul" } } ---> update multiple valaues from that same object
    
    { $set: {"skills.$.level": "Entry"}}
    ---$inc ---
    {$inc: {age: 1}}
    */
    { $inc: { age: 5 } }
)