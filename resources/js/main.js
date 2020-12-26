$(document).ready(function(){
    
    //MIXITUP
    var mixer = mixitup('.container');
    
    //SCROLLIFY
     $(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false,
          });
    });
    
 //SMOOTH SCROOL FOR IE / EDGE / SAFARI
    $("a").on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html,body').animate({
                scrolltop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
        
    });
    
    
});

function openNav() {
    document.getElementById("mynav").style.width = "100%"
}
function closeNav() {
    document.getElementById("mynav").style.width = "0%"
}










