/*
--- Aggregation & Indexing ---


// Aggregation
Ans. Aggregation is a way of processing large number of data and creating a new collection by passing some stages.

 - pipeline => stages known as pipeline.
 
/*
// normal flow of aggregation
input -> $match -> $group -> $sort -> output

$project -> work as projection 
$addFields -> add New fields
$out -> export to an new collection with  name 
$merge -> will merge with the existing collection with name

*/

db.test2.aggregate([
    // $match state 
    // {$match: {gender: "Male"}},
    // {$match: {age: {$gte: 30}}},
    
    // state 2  $project 
    // {$project: {name: 1, gender:1, age:1}},
    
    // state 
    {$addFields: {course: "Next Level Dev", edTech: "10xprogrammer.com"}},
    // stage 
    // {$out: "manual-test"}
    
    {$merge: "test2"}
    
    ])











*/