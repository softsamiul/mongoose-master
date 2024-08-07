/* ------------
Q. What is mongoDB?
Ans: MongoDB is a noSQL database storing data in JSON-like documents. 

Q. Why MongoDB?
Ans: 
1. Scalable high-performance & open source
2. Document oriented database
3. Cost effective datase
4. Rich eco-system of tools, documentation nd coomunity

----- MongoDb Query Operators------
$in: field: {$in: [value]},
$ne: field: {$ne: value}, 
$eq: field: {$eq: value}, 
$nin: field: {$nin: value}, 
$gt: field: {$gt: value}, 
$gte: field: {$gte: value}, 
$lt: field: {$lt:value}, 
$lte: field: {$lt: value}, 
$and: $and: [{field:value}, {field:value}], 
$or: $or: [{field:value}, {field:value}], 
$not: $not: [{field:value}, $field:value], 
$nor: $nor: [{field:value}, $field:value], 
$exists: field: true/false, 
$type: field: type, 
$all: field: [value, value], 
$size: field:size, 
$elemMatch: field: [value, value]
$set: 
updateOne({select what need to update}, $set({add what value need to update}))
updateOne({age:10}, $set({age:1}))

*/
