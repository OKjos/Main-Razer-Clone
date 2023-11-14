// const awarenesslearn = document.getElementById("awarenesslearn");

// awarenesslearn.addEventListener("click", function() {
//     window.location.href = "Awareness.html";
// });


document.addEventListener('DOMContentLoaded', function() {
    var awarenesslearn = document.getElementById("awarenesslearn");

    if (awarenesslearn) {
        awarenesslearn.addEventListener('click', function() {
            window.location.href = "Pages/AWARENESS/Awareness.html";
        });
    } else {
        console.error("Button with ID 'awarenesslearn' not found.");
    }
});