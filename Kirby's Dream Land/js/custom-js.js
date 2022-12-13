// Make sure all content is loaded
document.addEventListener('DOMContentLoaded',(loaded) => {

    // Call header and footer files
    $(function(){
        $("#header").load("header.html");
        $("#footer").load("footer.html");
      });

    // Hamburger drop down menu on click
    // Set variable to toggle between menu open and closed
    var dropDown = 0;

    // Event delegation for ".hamburger" that is added to the DOM later via load():
    $(document).on('click', '.hamburger',  function(){

        // Open menu
        if (dropDown == 0) {
            $(".dropdown").addClass("dropdown-active")
            $(".hamburger-bar:nth-child(1)").addClass("hamburger-bar-1")
            $(".hamburger-bar:nth-child(2)").addClass("hamburger-bar-2")
            $(".hamburger-bar:nth-child(3)").addClass("hamburger-bar-3")
            $(".menu > div:nth-child(1)").addClass("bottom-menu-padding")
            $(".wrapper").addClass("wrapper-active")
            dropDown = 1;
        }
        // Close menu
        else if (dropDown == 1) {
            $(".dropdown").removeClass("dropdown-active")
            $(".hamburger-bar:nth-child(1)").removeClass("hamburger-bar-1")
            $(".hamburger-bar:nth-child(2)").removeClass("hamburger-bar-2")
            $(".hamburger-bar:nth-child(3)").removeClass("hamburger-bar-3")
            $(".menu > div:nth-child(1)").removeClass("bottom-menu-padding")
            $(".wrapper").removeClass("wrapper-active")
            dropDown = 0;

            // add, and then automatically remove the smooth-dropdown class (to avoid the menu dropping down when re-sizing the screen)
            $(".dropdown").addClass("smooth-dropdown")

            setTimeout(function(){
                $(".dropdown").removeClass("smooth-dropdown");
                }, 1500);

            // Add, and then automatically remove the smooth-wrapper class (to still enable smooth transition, without keeping the page locked into "fixed" positioning)
            $(".wrapper").addClass("smooth-wrapper")

            setTimeout(function(){
                $(".wrapper").removeClass("smooth-wrapper");
                }, 500);
            }
    }); // End hamburger function

    // Also trigger the mobile menu to close if the user clicks on any of the blacked-out (".wrapper") space around it
    $(document).on('click', '.wrapper',  function(){

        if (dropDown == 1) {
            $(".dropdown").removeClass("dropdown-active")
            $(".hamburger-bar:nth-child(1)").removeClass("hamburger-bar-1")
            $(".hamburger-bar:nth-child(2)").removeClass("hamburger-bar-2")
            $(".hamburger-bar:nth-child(3)").removeClass("hamburger-bar-3")
            $(".menu > div:nth-child(1)").removeClass("bottom-menu-padding")
            $(".wrapper").removeClass("wrapper-active")
            dropDown = 0;

            // Add, and then automatically remove the smooth-dropdown class (to avoid the menu dropping down when re-sizing the screen)
            $(".dropdown").addClass("smooth-dropdown")

            setTimeout(function(){
                $(".dropdown").removeClass("smooth-dropdown");
                }, 1500);

            // Add, and then automatically remove the smooth-wrapper class (to still enable smooth transition, without keeping the page locked into "fixed" positioning)
            $(".wrapper").addClass("smooth-wrapper")

            setTimeout(function(){
                $(".wrapper").removeClass("smooth-wrapper");
                }, 500);
        }
    }); // End wrapper function
});