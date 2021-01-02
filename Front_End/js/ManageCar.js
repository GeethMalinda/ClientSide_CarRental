
$("#btnSave").click(function () {
    saveFile();
    saveCustomer();
})

$("#btnUpdate").click(function () {
    saveFile();
    updateCustomer();
});


// $("#btnFile").click(function () {
//
//     saveFile();
//     setImage();
//     console.log(name);
//     let intervel;
//     clearInterval(interval);
//     let interval = setInterval(getId,null);
//     console.log(fileName)
//
//
//
//
// })

function saveCustomer() {

    function CarType(){
        let type = $("input[name='ctype']:checked").val();
        if (type==="General"){
            return "General";
        }

        else if (type==="Premium"){
            return "Premium";
        }
        else {
            return "Luxury";
        }
    }
    function TransmissionType() {
        let type = $("input[name='ttype']:checked").val();
        if (type ==="Manual") {
            return "Manual";
        }
        else if ((type ==="Auto") ) {
            return "Auto";
        }

    }
    function FuelType() {
        let type = $("input[name='ftype']:checked").val();
        if (type ==="Diesel") {
            return "Diesel";
        }
        else if ((type ==="Petrol") ) {
            return "Petrol";
        }

    }
    function PriceRent() {
        let type = $("input[name='prent']:checked").val();
        if (type ==="HourlyRate") {
            return "HourlyRate";
        }
        else if ((type ==="DailyRate") ) {
            return "DailyRate";
        }

    }
    const carType = CarType();
    console.log(carType);
    const transmissionType = TransmissionType();
    console.log(transmissionType);
    const fuelType = FuelType();
    console.log(fuelType);
    const priceRent=PriceRent();
    console.log(priceRent);
    const RegisterNumber = $("#txtRegisterNumber").val();
    console.log(RegisterNumber);
    const extramkmprice = $("#txtExtramKmPrice").val();
    console.log(extramkmprice);
    // let freemeilage = $("#txtFreeMeileage").val();
    const npasengers = $("#txtNumberOfPassengers").val();
    console.log(npasengers);
    const brand = $("#txtBrand").val();
    console.log(brand);
    const color=$("#txtColor").val();
    console.log(color);
    const year = $("#txtYear").val();

    let input = document.getElementById("validatedCustomFile");
    let file = input.value.split("\\");
    let fileName = file[file.length-1];

    alert(fileName);

    $.ajax({
        method: "post",
        url: "http://localhost:8080/api/v1/car",
        contentType: "application/json",
        data: JSON.stringify({
            "registrationNumber":RegisterNumber,
            "brand": brand,
            "type": carType,
            "numberOfPassengers": parseInt(npasengers),
            "transmissionType": transmissionType,
            "fuelType": fuelType,
            "pricesFortheRentDuration": priceRent,
            "priceForExtraKm": parseFloat(extramkmprice),
            "color":color,
            "path":"abc",
            "year":year,
            "isAvailable":"Available",
            "image":fileName
        }),
        success: function (res) {
            if (res.message === "Success") {
                alert("Vehicle Added");
            } else {
                alert(res.data);
            }
            loadAllCars();


        }
    });
}
function getId(){
    let input = document.getElementById("validatedCustomFile");
    let file = input.value.split("\\");
    let fileName = file[file.length-1];

    $.ajax({
        url: "http://localhost:8080/names/" +fileName,
        success: function (res) {
            console.log(res);
            let id = res.data;
            // console.log(id.id);
            alert(res);

        }
    });
}
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



function updateCustomer() {
    function CarType(){
        let type = $("input[name='ctype']:checked").val();
        if (type==="General"){
            return "General";
        }

        else if (type==="Premium"){
            return "Premium";
        }
        else {
            return "Luxury";
        }
    }
    function TransmissionType() {
        let type = $("input[name='ttype']:checked").val();
        if (type ==="Manual") {
            return "Manual";
        }
        else if ((type ==="Auto") ) {
            return "Auto";
        }

    }
    function FuelType() {
        let type = $("input[name='ftype']:checked").val();
        if (type ==="Diesel") {
            return "Diesel";
        }
        else if ((type ==="Petrol") ) {
            return "Petrol";
        }

    }
    function PriceRent() {
        let type = $("input[name='prent']:checked").val();
        if (type ==="HourlyRate") {
            return "HourlyRate";
        }
        else if ((type ==="DailyRate") ) {
            return "DailyRate";
        }

    }
    const carType = CarType();
    console.log(carType);
    const transmissionType = TransmissionType();
    console.log(transmissionType);
    const fuelType = FuelType();
    console.log(fuelType);
    const priceRent=PriceRent();
    console.log(priceRent);
    const RegisterNumber = $("#txtRegisterNumber").val();
    console.log(RegisterNumber);
    const extramkmprice = $("#txtExtramKmPrice").val();
    console.log(extramkmprice);
    // let freemeilage = $("#txtFreeMeileage").val();
    const npasengers = $("#txtNumberOfPassengers").val();
    console.log(npasengers);
    const brand = $("#txtBrand").val();
    console.log(brand);
    const color=$("#txtColor").val();
    console.log(color);
    const year = $("#txtYear").val();

    let input = document.getElementById("validatedCustomFile");
    let file = input.value.split("\\");
    let fileName = file[file.length-1];

    alert(fileName);

    $.ajax({
        method: "put",
        url: "http://localhost:8080/api/v1/car",
        contentType: "application/json",
        data: JSON.stringify({
            "registrationNumber":RegisterNumber,
            "brand": brand,
            "type": carType,
            "numberOfPassengers": parseInt(npasengers),
            "transmissionType": transmissionType,
            "fuelType": fuelType,
            "pricesFortheRentDuration": priceRent,
            "priceForExtraKm": parseFloat(extramkmprice),
            "color":color,
            "path":"abc",
            "year":year,
            "isAvailable":"Available",
            "image":fileName
        }),
        success: function (res) {
            if (res.message === "Success") {
                alert("Updated Sucessfully");
            } else {
                alert(res.data);
            }
            loadAllCars();

        }
    });

}

$("#Viewli").click(function () {
    $("#formmanange").hide();
    $("#viewcar").show();
})
$("#Manageli").click(function () {
    $("#formmanange").show();
    $("#viewcar").hide();

});
function hideviewcar(){
    $("#viewcar").hide();

}
$("#btnrefresh").click(function () {

})





// Filter table

$(document).ready(function(){
    $("#tableSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function loadAllCars() {

    $("#myTable").empty();
    $.ajax({
        url: "http://localhost:8080/api/v1/car",
        dataType: 'json',
        success: function (res) {
            let data = res.data;
            for (var i in data) {
                let rid = data[i].registrationNumber;
                let brand = data[i].brand;
                let type = data[i].type;
                let numberOfPassengers = data[i].numberOfPassengers;
                let transmissionType = data[i].transmissionType;
                let fuelType = data[i].fuelType;
                let pricesFortheRentDuration = data[i].pricesFortheRentDuration;
                let priceForExtraKm = data[i].priceForExtraKm;
                let color = data[i].color;
                let year = data[i].year;
                let isAvailable = data[i].isAvailable;
                let image = data[i].image;


                var row = `<tr><td>${rid}</td><td>${brand}</td><td>${type}</td><td>${numberOfPassengers}</td>
                <td>${transmissionType}</td><td>${fuelType}</td><td>${pricesFortheRentDuration}</td>
                <td>${priceForExtraKm}</td><td>${color}</td><td>${year}</td><td>${isAvailable}</td>
                <td>
            <div>
                <img id="img${i}" style="width: 100px" src="assests/SONATA-hero-option2-764A4983-640x354.jpg">
            </div>
            </td>
            <td>
                <a href="#"><button id="btnRemove" type="button" class="btn-delete btn btn-danger">&nbsp;<i  class="fas fa-trash-alt white-text pr-3" aria-hidden="true"></i>Delete  </button>
                </a>
            </td></tr>`;
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
        url:"http://localhost:8080/api/v1/car/"+id,
        success:function (res){
            if (res.message == "Success") {
                alert("Car Removed..!");
            } else {
                alert(res.data);
            }
            loadAllCars();
        }
    });
}

$("#myTable").on('click','.btn-delete',function () {
    let row = $(this).closest('tr');
    let col1 = row.find('td:eq(0)').text();
    alert(col1);
    DeleteCustomer(col1);
});


