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
        "<td>" + res[i].datePublished + "</td>"
        }
    } catch (err) {console.log(err)}


}

/* async function addBooks(){
    try{
        let addedForm = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",{
            method: "POST"
        })
        let form = await addedForm.text()
        let outputForm = document.getElementById("form")
        outputForm.innerHTML = form;
    } catch (err) {console.log(err)}
} */


