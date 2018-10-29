$(document).ready(function(){
    getData();
});
function getData() {
    $.ajax({
        type: "GET",
        url: "https://www.jasonbase.com/things/q4R5.json",
        success: function (response) {
            var data = response.data;
            var html = "";
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                html += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"./type.html?key="+element.key+"\">"+element.name+"</a></li>";
            }
            $('.type').prepend(html);
        },

        error: function (error) {
            
                console.log(error);
            }
    });
}
