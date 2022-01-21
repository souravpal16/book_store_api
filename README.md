# Book Store API using node.js

<h2>INTRODUCTION</h2>
This project is a demonstration of basic API operations (C - create, R - read, U - update, D - Delete) on a book store. Mongodb is used as the database for 
storing information since node.js and npm mongoose package(built on top of mongodb) work well together and are beginner friendly.<br>

<h2>The following endpoints are supported by this API:</h2><br>

GET /book/all -> Returns all the books stored in the database<br>
GET /book/:id -> Returns the book with the given id<br>
POST /book/new -> creats a new book<br>
PUT /book/:id -> updates a book with the given id<br>
DELETE /book/:id -> Delete a book with the given id<br>
