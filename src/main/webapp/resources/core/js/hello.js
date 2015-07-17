var str = $("#myForm").serialize();

$.ajax({
    type:"post",
    data:str,
    url:"/spring3/submitform",
    dataType: "json",
    success: function(){
       alert("success");
    }
});