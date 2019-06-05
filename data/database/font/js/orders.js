$("#submit").click(function () {
    console.log("增加数据")
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/orders",
        data: {
            name: $("#firstName").val(),
            password: $("#lastName").val(),
        },
        success: function (data) {
            window.location.href = "./dashboard.html"
            console.log(data);
        }
    })
})