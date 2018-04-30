// jQuery Code
$(document).ready(function() {
    
    $("#username").change(function() {
       $.ajax({

            type: "GET",
            url: "checkUsername.php",
            dataType: "json",
            data: { "username": $("#username").val() },
            success: function(data,status) {
            
                //alert(data.password);
                
                if (data.length == 0) {  //data == false
                    
                    $("#message").empty();
                    $("#message").append("<span class='alert alert-success' role='alert'><strong>Username Available </strong></span>");
                    
                } else if(data.length > 0) {
                    $("#message").empty();
                    $("#message").append("<span class='alert alert-danger' role='alert'><strong>Username Taken </strong></span>");
                }
            
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
            }
            
        });//ajax
    });


    $("#zipcode").change(function() { // When you provide input
        $.ajax({
            type: "GET",
            url: "http://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
            dataType: "JSON",
            data: { "zip": $("#zipcode").val() },
            success: function(data,status) {
                // alert(data.city);
                if(data){
                    $("#badZip").html("");
                    $("#city").html(data.city);
                    $("#latitude").html(data.latitude);
                    $("#longitude").html(data.longitude);
                }
                else{
                    $("#badZip").html("<span class='alert alert-danger'> Zip Code not Found! </span>");
                    $("#city").html("");
                    $("#latitude").html("");
                    $("#longitude").html("");
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            }
        });//ajax
    });
    
    
    
    $("#state").change(function() {
       $.ajax({
            type: "GET",
            url: "http://itcdland.csumb.edu/~milara/ajax/countyList.php",
            dataType: "JSON",
            data: { "state": $("#state").val() },
            success: function(data,status) {
                $("#county").html("<option> Select One </option>");
                for(var i = 0; i < data.length; ++i) {
                    $("#county").append("<option value='" + data[i].county + "'>" + data[i].county + "</option>");
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
                //alert(status);
            }
        });//ajax 
    });
    
});

function validateForm(){
    if($("#password").val() != $("#rePassword").val()){
       $("#badPass").html("<span class='alert alert-danger'> Passwords must match </span>")
       
       return false;
    }
    
    else{
        return true;
    }
}