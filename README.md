# Tech career home exam

## TOC
- [Getting Started](#getting-started)
- [The mission should you choose to accept it is as follows](#the-mission-should-you-choose-to-accept-it-is-as-follows)
- [First assignment](#first-assignment)
- [Second assignment](#second-assignment)
- [Third assignment](#third-assignment)
  * [collections](#collections)
---


## Getting Started
1. Make sure you have a [GitHub](https://github.com) account.
2. Go [here](https://github.com/new/import) and import this repository into your account. Make sure to select the **private** option.
3. [Clone](https://try.github.io/) your new repository to your computer.
4. Make sure you have *Node.js* 10 or higher and *npm* 6 or higher installed.
5. To start the client `cd client && npm start`.
6. To start server `cd server && npm start`.
7. **SHAYKA who they should send their submissions? they need to add someone/entity as a contributor. we probabyl need a generic github user from IT to handle this submissions...**

## Your mission, should you choose to accept it
Create a book keeping web app that has two main components: 
- books search
- books collections

As a user you want to be able to do the following actions: 
 - Search for books by name and show some basic info on each search result, like cover image, authors and publication year (feel free to show more info). 
 - Add books to existing collections.
 - Delete books from collections.
 - Move books from collections to collection.
 - Create new collections.
 - Delete collections.
 - Rename collections.

**Go crazy with the design and bring your own ideas to life.**   

---

## Assignment
All of the data about the books (search and cover images) should be acquired from the [openLibrary api](https://openlibrary.org/developers/api).  
For the first assignment you should implement all of the user  stories above.  
collections and books should be persisted using local storage.  

### collections
**GET** /collections - list of all collections.  
**POST** /collections -  create a new collection.  
**DELETE** /collections/:collectionId - delete collection with the specified id.  
**PUT** /collections/:collectionId - update collection with the specified id (rename).  
**DELETE** /collections/:collectionId/books/:bookId - delete a book with the specified id from the collection with the specified id.   
**POST** /collections/:collectionId/books - add a book to the collection with the specified id.   
