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
            output.innerHTML += "<td>" + +(count+i) + "</td>"
        + "<td>" + res[i].isbn + "</td>" + "<td>" + res[i].title + "</td>" +
        "<td>" + res[i].overdueFee + "</td>" + "<td>" + res[i].publisher + "</td>" +
        "<td>" + res[i].datePublished + "</td>" + "<td>" + "<a href=''>Edit</a>" + "</td>" +
        "<td>" + "<a id='delete' href='deletRow(this)'>Delete</a>" + "</td>"
        }
    } catch (err) {console.log(err)}

  /*   document.getElementById('delete').addEventListener("click", deletRow)
    
    function deletRow(r){
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
    } */

}





