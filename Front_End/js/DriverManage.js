


$("#btnSave").click(function () {
    saveFile();
    saveDriver();
});

function saveFile() {

    var formData = new FormData();
    formData.append('file', $('input[type=file]')[0].files[0]);
    console.log("form data " + formData);
    $.ajax({
        url : 'http://localhost:8080/upload',
        data : formData,
        processData : false,
        contentType : false,
        type : 'POST',
        success : function(data) {
            alert("Success");
        },
        error : function(err) {
            alert("unsucseess");
        }
    });
};

function saveDriver() {

    var name = $("#DriverName").val();
    var adress = $("#DriverAdress").val();
    var tp = $("#DriverContact").val();
    var age = $("#DriverAge").val();

    var input = document.getElementById("validatedCustomFile");
    var file = input.value.split("\\");
    var fileName = file[file.length-1];

    $.ajax({
        method: "post",
        url: "http://localhost:8080/api/v1/driver",
        contentType: "application/json",
        data: JSON.stringify({
            "name":name,
            "adress":adress,
            "tp":tp,
            "age":age,
            "isAvailable":"Available",
            "photo":fileName

        }),
        success: function (res) {
            if (res.message === "Success") {
                alert("Driver Added");
            } else {
                alert(res.data);
            }
            loadAllDriver();


        }
    });

}
// Filter table

$(document).ready(function(){
    $("#tableSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


function loadAllDriver() {
    $("#myTable").empty();
    $.ajax({
        url: "http://localhost:8080/api/v1/driver",
        dataType: 'json',
        success: function (res) {
            let data = res.data;
            for (var i in data) {
                let id = data[i].id;
                let name = data[i].name;
                let adress = data[i].adress;
                let tp = data[i].tp;
                let age = data[i].age;
                let isAvailable = data[i].isAvailable;
                let image = data[i].photo;

                var row = `<tr>
                    <th scope="row">${id}</th>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${adress}</td>
                    <td>${tp}</td>
                    <td>${isAvailable}</td>
                    <td>
                        <div>
                            <img id="img${i}" style="width: 150px;height: 100px" src="assests/SONATA-hero-option2-764A4983-640x354.jpg">
                        </div>
                    </td>
                    <td>
                        <a href="#"><button id="btnRemove" type="button" class="btn-delete btn btn-danger btn-sm">&nbsp;<i  class="fas fa-trash-alt white-text pr-3" aria-hidden="true"></i>Delete  </button>
                        </a>
                    </td>
                </tr>`
                $("#myTable").append(row);

                let imgid = document.getElementById('img'+i);
                console.log(imgid)
                setImage(image,imgid);

            }
        }
    });

}


function setImage(name,imgid) {
    jQuery.ajax({
        url:"http://localhost:8080/names/"+name,
        cache:false,
        xhrFields:{
            responseType: 'blob'
        },
        success: function(data){
            // var img = document.getElementById('img');
            var img = imgid;
            var url = window.URL || window.webkitURL;
            img.src = url.createObjectURL(data);
        },
        error:function(){

        }
    });
};


function DeleteCustomer(id) {
    $.ajax({
        method:"delete",
        url:"http://localhost:8080/api/v1/driver/"+id,
        success:function (res){
            if (res.message == "Success") {
                alert("Car Removed..!");
            } else {
                alert(res.data);
            }
            loadAllDriver();
        }
    });
}

$("#myTable").on('click','.btn-delete',function () {
    let row = $(this).closest('tr');
    let col1 = row.find('td:eq(0)').text();
    alert(col1);
    DeleteCustomer(col1);
})
$('#tbldirver').on('click', 'tr', function() {
    let row = $(this).closest('tr');
    let col1 = row.find('td:eq(0)').text();
    let col2 = row.find('td:eq(1)').text();
    let col3 = row.find('td:eq(2)').text();
    let col4 = row.find('td:eq(3)').text();

    $("#DriverName").val(col1);
    $("#DriverAdress").val(col2);
    $("#DriverContact").val(col3);
    $("#DriverAge").val(col4);

});

$("#btnrefresh").click(function () {
    $("#DriverName").val("");
    $("#DriverAdress").val("");
    $("#DriverContact").val("");
    $("#DriverAge").val("");
    $("#validatedCustomFile").val('').clone(true);
    document.getElementById("validatedCustomFile").value=null;




})