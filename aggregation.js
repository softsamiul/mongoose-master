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
$group
$min
$max
$avg
$sum
$substract



db.test2.aggregate([
     $match state 
     {$match: {gender: "Male"}},
     {$match: {age: {$gte: 30}}},

     state 2  $project 
     {$project: {name: 1, gender:1, age:1, email:1, gender:1}},

     state 
     {$addFields: {course: "Next Level Dev", edTech: "10xprogrammer.com"}},
     stage 
     {$out: "manual-test"}
     stage
     {$merge: "test2"} 
     stage 
     $group 
     {$group: { _id: "$gender", count: {$sum:1}, city: {$push: "$address.city"}, fullDoc: {$push: "$$ROOT"}}},
     {$project: {"fullDoc.address":1, "fullDoc.phone":1, count:1, city:1}}

     db.test2.aggregate([
         { $group: { _id: "$gender", count: { $sum: 1 }, newDoc: { $push: "$$ROOT" } } },
         { $project: { _id: 1, count: 1, "newDoc.name": 1, "newDoc.email": 1, "newDoc.phone": 1 } }
     ])

    db.test2.aggregate([
        {
            $group: {
                _id: null,  // taking all document in one group
                totalSalary: { $sum: "$salary" }, // refering all salary and sum up them and showing in totalSalary field
                maxSalary: { $max: "$salary" }, // will show the max salary from all documents
                minSalary: { $min: "$salary" }, // will show the min salary from all documents
                averageSalary: { $avg: "$salary" }
            }
        },
        {
            $project: {
                totalSalary: 1,
                maxSalary: 1,
                minSalary: 1,
                avgSalary: "$averageSalary", // creating new field name and assigning previous field name, 
                rangeMaxMin: { $subtract: ["$maxSalary", "$minSalary"] } // doing a calculation within project stage 
            }
        }
    ])

])











*/
