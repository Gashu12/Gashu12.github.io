/**
 * 
 * library.js
 * 
 * @author Gashaw Kassa
 * @since 2021-02-01
 */

window.onload = libraryApp

function libraryApp(){

    fetchBooklists()
    let btn = document.getElementsByClassName("btn btn-secondary")
    btn.addEventListener("click", addBooks)

}

async function fetchBooklists(){

    try{
        let listOfBooks = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list",{
            method: "GET"
        })
        let res = await listOfBooks.json()
        console.log(res)
        let output = document.getElementById("booksTable")
        for(let i = 0; i <= res.length; i++){
            let count = 1
            output.innerHTML += '<table id="booksTable">' + "<td>" + +(count+i) + "</td>"
        + "<td>" + res[i].isbn + "</td>" + "<td>" + res[i].title + "</td>" +
        "<td>" + res[i].overdueFee + "</td>" + "<td>" + res[i].publisher + "</td>" +
        "<td>" + res[i].datePublished + "</td>" + "<td>" + `<a href='editBook.html?bookid=${res[i].bookId}'>Edit</a>` + "</td>" +
        "<td>" + "<a id='delete' onclick='deleteRow()' href='deletRow(this)'>Delete</a>" + "</td>" + '</table>'
        }
       /*  temp += "<td>" + `<a href="Edit.html?bookid=${element.bookId}">Edit</a>` + "</td>"
        temp += "<td>" + `<a href="delete.html?bookid=${element.bookId}">Delete</a>` + "</td>" */
    } catch (err) {console.log(err)}

    
    function deletRow(bookId){
        var i = bookId.parentNode.parentNode.rowIndex;
        document.getElementById("booksTable").deleteRow(i);
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/{res.bookId}", {
            method: "DELETE"
        })
    }

}





