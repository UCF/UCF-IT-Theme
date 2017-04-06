/* UCF IT Search Bar */
/**
 * Theme functions file.
 *
 * Sends search to Service Portal
 */
jQuery( document ).ready(function() {

  jQuery("#val").keypress(function (e) {
    if(e.which == 13) {
      submit();
      return false;
    }
  });

 jQuery('#sub').click(function() {

       submit();

     });

     function submit(){
       var navStrin = "https://ucf.service-now.com/ucfit?id=search&t=&q="+jQuery("#val").val()+"&search=";

       navStrin = navStrin.replace(/\ /g, '%20');

       window.location.href = navStrin;
     }

});
