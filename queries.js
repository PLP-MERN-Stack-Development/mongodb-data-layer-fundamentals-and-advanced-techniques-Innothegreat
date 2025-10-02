// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year
db.books.find({ year: { $gt: 2015 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne(
    { title: "To Kill a Mockingbird" },       // Filter
    { $set: { price: 15.00 } }                // Update
)

// Delete a specific book by its title
db.books.deleteOne({ title: "Brave New World" })


// Find books that are both in stock and published after 2010
db.books.find({ 
    in_stock: true,
    published_year: { $gt: 2010 } 
})

// Use projection to return only the title, author, and price fields in your queries
db.books.find(
    {},                                      // No filter, return all documents
    { title: 1, author: 1, price: 1, _id: 0 } // Projection
)

// Implement sorting to display books by price (both ascending and descending)
db.books.find().sort({ price: 1 })   // Ascending
db.books.find().sort({ price: -1 })  // Descending

//  Use the `limit` and `skip` methods to implement pagination (5 books per page)
db.books.find().skip(0).limit(5)  // Page 1
db.books.find().skip(5).limit(5)  // Page 2
db.books.find().skip(10).limit(5) // Page 3
db.books.find().skip(15).limit(5) // Page 4
db.books.find().skip(20).limit(5) // Page 5

// an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
    { $group: {
        _id: "$genre",                      // Group by genre
        averagePrice: { $avg: "$price" }   // Calculate average price
    } }
])

// an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
    { $group: {
        _id: "$author",                     // Group by author
        bookCount: { $sum: 1 }             // Count number of books
    } },
    { $sort: { bookCount: -1 } },            // Sort by bookCount in descending order
    { $limit: 1 }                            // Limit to the top result
])

// groups books by publication decade and counts them
db.books.aggregate([
    {
        $project: {
        decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] }
    }
},
{
    $group: {
      _id: "$decade",         // decade (e.g., 1990, 2000, 2010)
      bookCount: { $sum: 1 }  // count books in that decade
    }
},
  { $sort: { _id: 1 } }       // sort decades ascending
])

// Create an index on the `title` field for faster searches
db.books.createIndex({ title: "text" })

// Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: -1 })

// Use the `explain()` method to demonstrate the performance improvement with your indexes
db.books.find({ $text: { $search: "1984" } }).explain("executionStats")
db.books.find({ author: "George Orwell", published_year: { $gt: 1940 } }).explain("executionStats")
