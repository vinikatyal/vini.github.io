var addLikes = (function () {

    var counter = parseInt(document.getElementById("likeCount").value);
    return function () {return counter += 1;}
})();

document.getElementById("likeCount").addEventListener("click", function(event){
    event.preventDefault();
    addLikes();
});

