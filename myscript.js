$(document).ready(function(){

   $(document).ajaxStart(function(){
   console.log("Ajax startes");
}).ajaxStop(function(){
console.log("Ajax Stopped.")
}).ajaxSuccess(function(){
console.log("Ajax Success")
}).ajaxComplete(function(){
console.log("Ajax Completed")
})
$("#b1").click(function(){
var uid = $("#input1").val();
$.ajax({

url:"https://public-api.wordpress.com/rest/v1/sites/25262138/posts/"+uid,
success: function(data){
   alert("user name : "+data.author.first_name)
 console.log(data);
 console.log("fname :"+data.author.first_name);
  $("#name").text(data.author.first_name+" "+data.author.last_name);
},
error: function(){
 alert("no user found")
}
})
});
});
