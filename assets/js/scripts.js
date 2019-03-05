$(document).ready (function() {

    
    
    var topics = ["salsa dancing", "tap dancing", "flamenco dancing", "paso doble dancing","hip hop dancing","ballet dancing"];
    
    displayButtons();
    
    function displayButtons() {
        $(".buttons").empty();
        
        for (var i = 0; i < topics.length; i++) {
            var btn = `<button class="renderBtn"> ${topics[i]} </button>`
            
            $(".buttons").append(btn);
            
        }
    }
});
    
    /*
    
$("button").on("click", function() {});

*/
