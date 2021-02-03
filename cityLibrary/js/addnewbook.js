
window.onload = addingBookApp

function addingBookApp(){

    document.getElementById("save").addEventListener("click", save)
    function save(){
   

        let title = document.getElementById("bookTitle").value
        let isbn = document.getElementById("isbn").value
        let publisher = document.getElementById("publisher").value
        let overdueFee = document.getElementById("overDueFee").value
        let datePublished = document.getElementById("publishedDate").value
 

    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isbn: isbn,
                title: title,
                publisher: publisher,
                overdueFee: overdueFee,
                datePublished: datePublished
            })

        });

    }

}
