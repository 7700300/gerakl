$(function() {
       var toDisplay = 1;
       $("#ourPlace h2").click(function() {
           var $this = $(this);
           $this.next("div").slideToggle("slow").siblings("p:visible").slideUp("slow");
           $this.toggleClass("active");
           $this.siblings("h2").removeClass("active");
        }).eq(toDisplay).addClass("active").next().show();
    });