window.onload = createPageList;
document.getElementById("product-area").onload = autoCreateCodeLine(5);

function autoCreateCodeLine(input){
    var myDiv = document.getElementById("product-area");
    var inputCode ="";
    for (var i = 0; i<input; i++){
        inputCode = inputCode + "<div class='product-card'><img src='ok' alt='something'><p>productname</p><p>productiprice</p></div>";
    }
    myDiv.innerHTML = inputCode;
}

function createPageList(input) {
    var myDiv = document.getElementById("page-select");
    var inputText = "<ul>";
    for ( var i = 0; i<5; i++){
        inputText= inputText + "<li>"+i+"</li>";
    }
    inputText=inputText+"</ul>";
    myDiv.innerHTML = inputText;
}