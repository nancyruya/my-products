$.getJSON("https://api.census.gov/data/2007/acs/acs1/profile?get=NAME,DP03_0063E,DP04_0045PE&for=county:*&in=state:06", function(data){
    console.log(data);
});


for(var i=0;i<3;i++){
    $(".product-container").append($(".box").html());
    //you can add other logic here, like you want diferent id or class to add in new box
 }