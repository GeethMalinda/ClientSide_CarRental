// Filter table

$(document).ready(function(){
    $("#tableSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//loadallcar

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

                var modal =` <!-- Modal: modalCart -->
                <div class="modal fade" id="modalCart${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <!--Header-->
                            <div class="modal-header">
                                <h4 class="modal-title" id="myModalLabel">Car Details</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <!--Body-->
                            <div class="modal-body">

                                <table class="table table-hover">
                                   
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>RegisterNumber</td>
                                        <td>${rid}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Brand</td>
                                        <td>${brand}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Color</td>
                                        <td>${color}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>FuelType</td>
                                        <td>${fuelType}</td>

                                    </tr>
                                    <tr >
                                        <th scope="row">5</th>
                                        <td>Availble/Booked</td>
                                        <td>${isAvailable }</td>
                                        <td></td>
                                    </tr>
                                   
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>NumberOfPasengers</td>
                                        <td>${numberOfPassengers}</td>
                                        <td></td>
                                    </tr>
                                     <tr>
                                        <th scope="row">8</th>
                                        <td>PriceForExtraKm</td>
                                        <td>${priceForExtraKm}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>PriceForTheRentDuration</td>
                                        <td>${pricesFortheRentDuration}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>TransmitionType</td>
                                        <td>${transmissionType}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td>Type</td>
                                        <td>${type}</td>
                                        <td></td>
                                    </tr> 
                                    <tr>
                                        <th scope="row">12</th>
                                        <td>Year</td>
                                        <td>${year}</td>
                                        <td></td>
                                    </tr>


                                    </tbody>
                                </table>

                            </div>
                            <!--Footer-->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
                                <button  class="btn btn-primary">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal: modalCart -->`
                var row = `
                <tr class="mb-3"><td class="font-weight-bold"><div>
                    <img id="img${i}" style="width: 300px" src="assests/SONATA-hero-option2-764A4983-640x354.jpg"></div></td>
            <td class="font-weight-bold">${rid}</td><td>
            <td class="font-weight-bold">${brand}</td><td>
            <button  type="button" class="btn btn-orange btn-rounded btn-sm m-0" data-toggle="modal" data-target="#modalCart${i}">Detail</button></td>
            <td><button onclick="showbooking()" type="button"  class="btn-book btn btn-blue btn-rounded btn-sm m-0">Book</button></td></tr>`
                $("#myTable").append(row);
                $("#modaldiv").append(modal);

                let imgid = document.getElementById('img'+i);
                console.log(imgid)
                setImage(image,imgid);

            }
        }
    });
}

//setImage

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
$("#myTable").on('click','.btn-book',function () {
    let row = $(this).closest('tr');
    let col1 = row.find('td:eq(1)').text();
    alert(col1);
    $("#myTable").hide();

})
function hide() {
    $("#myTable").hide();

}
function show(){
    $("#myTable").show();

}

$('.datepicker').datepicker();

// $("#book").click(function () {
//     $("#bookingid").hide();
//     show();
//
//
// });

