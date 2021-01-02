$("#btnSignUp").click(function () {
    let email = $("#txtEmail").val();
    let name = $("#txtName").val();
    let passward = $("#txtPassward").val();
    let nic = $("#txtNic").val();
    let dln = $("#txtDlN").val();

    $.ajax({
        method: "post",
        url: "http://localhost:8080/api/v1/customer",
        contentType: "application/json",
        data: JSON.stringify({
            "email": email,
            "username": name,
            "passward": passward,
            "nic": nic,
            "dlnumber": dln,
            "userrole": "Customer",

        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("You are Registerd");
            } else {
                alert(res.data);
            }

        }
    });
})


    function loadAllUsers() {
        $.ajax({
            url: "http://localhost:8080/api/v1/customer",
            dataType: 'json',
            success: function (res) {
                let data = res.data;
                for (var i in data) {
                    let email = data[i].email;
                    let passward = data[i].passward;

                    console.log(email)
                    console.log(passward)

                    if ($("#txtemaillogin").val() === email) {
                        if ($("#txtpasswardlogin").val() === passward) {

                            console.log("are you want to login");


                            window.location.href = "../CustomerDashbord.html";

                        }
                        else {
                                $('#msgs').html("<div class='alert alert-danger'>abc</div>");
                                alert("Your passward Incorect")

                        }


                    }

                }
            }


        })
    }
 function loadAllAdmin() {
        $.ajax({
            url: "http://localhost:8080/api/v1/admin",
            dataType: 'json',
            success: function (res) {
                let data = res.data;

                for (var i in data) {
                    let name = data[i].name;
                    let passward = data[i].passward;

                    console.log(name)
                    console.log(passward)

                    if ($("#txtAdminId").val() === name) {
                        if ($("#txtAdminPassward").val() === passward) {

                            window.location.href = "../DashBord.html";

                        }
                        else {
                                $('#msgs').html("<div class='alert alert-danger'>abc</div>");
                                alert("Your passward Incorect")

                        }


                    }

                }
            }


        })
    }


