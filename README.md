# Tech career home exam

## TOC
- [Getting Started](#getting-started)
- [Your mission should you choose to accept it is as follows](#your-mission-should-you-choose-to-accept-it-is-as-follows)
- [Assignment](#assignment)
  - [Bonus](#bonus)
- [Guidelines](#guidelines)
- [Submissions](#submissions)
---


## Getting Started
1. Make sure you have a [GitHub](https://github.com) account.
2. Go [here](https://github.com/new/import) and import this repository into your account. Make sure to select the **private** option.
3. [Clone](https://try.github.io/) your new repository to your computer.
4. Make sure you have *Node.js* 10 or higher and *npm* 6 or higher installed.
5. Before starting to run the local client or the local server on the first time, make sure to install packages by running `npm install` in the client/server folder. 
6. To start the client `cd client && npm start`.
7. To start server `cd server && npm start`.

## Running the tests
To run the E2E test suite run `npm run e2e`.
The tests are located inside `client/e2e` folder
## Your mission, should you choose to accept it
Create a book keeping web app that has two main pages: 
- books search
- books collections

> A book collection is just a list of books under some topic, for example "To read" collection which includes all of the books you want to read or a "Read" collection which includes all of the books you have read.

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

### Bonus
Make the search results sortable by publication year or title, if you have other ideas in mind go ahead and surprise us!


## Guidelines 
- Write a lot of commits - ideally each user story will have at least one commit.



## Submissions 
Once you are done, fill the following [form](https://docs.google.com/forms/d/e/1FAIpQLScet_74IlrtF9-Y_JEyKPQDPmC11G9zX2BH4Yx0n9iNDua3Rw/viewform) and invite `shayco@wix.com` and `gale@wix.com` as contributors to your repository.


