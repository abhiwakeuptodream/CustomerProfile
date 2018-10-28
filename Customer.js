$(document).ready(function () {
    var settings = {};
    settings.url = "/api/Customers";
    settings.type = "GET";
    settings.contentType = "application/xml";
    settings.dataType = "xml";
    settings.success = function (customers) {
        $(customers).find("Customer")
            .each(function () {
                var cusId = $(this).find
                    ("CustomerID").text();
                $("#customerid").append("<option>"
                    + cusId + "</option>");
                var foreName = $(this)
                    .find("ForeName").text();
                var surName = $(this)
                    .find("SurName").text();
                var dob = $(this)
                    .find("DOB").text();
                var gender = $(this)
                    .find("Gender").text();
                var homePhone = $(this)
                    .find("HomePhone").text();
                var workPhone = $(this)
                    .find("WorkPhone").text();
                var mobilePhone = $(this)
                    .find("MobilePhone").text();
                $("#forename").val(foreName);
                $("#surname").val(surName);
                $("#dob").val(dob);
                $("#gender").val(gender);
                $("#homephone").val(homePhone);
                $("#workphone").val(workPhone);
                $("#mobilephone").val(mobilePhone);
            });
    };
    settings.error = function (data) {
        $("#msg").append("Error while calling the Web API !!!");
    };
    $.ajax(settings);
})

$("#customerid").change(function () {
        var settings = {};
        settings.url = "/api/Customers/"
            + $("#customerid").val();
        settings.type = "GET";
        settings.contentType = "application/xml";
        settings.dataType = "xml";
        settings.success = function (customer) {
            var foreName = $(customer)
                .find("ForeName").text();
            var surName = $(customer)
                .find("SurName").text();
            var dob = $(customer)
                .find("DOB").text();
            var gender = $(customer)
                .find("Gender").text();
            var homePhone = $(customer)
                .find("HomePhone").text();
            var workPhone = $(customer)
                .find("WorkPhone").text();
            var mobilePhone = $(customer)
                .find("MobilePhone").text();
            $("#forename").val(foreName);
            $("#surname").val(surName);
            $("#dob").val(dob);
            $("#gender").val(gender);
            $("#homephone").val(homePhone);
            $("#workphone").val(workPhone);
            $("#mobilephone").val(mobilePhone);

        };
        settings.error = function () {
            $("#msg").append("Error while calling the Web API !!!");
        };
        $.ajax(settings);
});

$("#insert").on("click",function () {
    var settings = {};
    settings.url = "/api/Customers";
    settings.type = "POST";
    settings.contentType = "application/xml";
    settings.dataType = "xml";

    var foreName = $("#forename").val();
    var surName = $("#surname").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var homePhone = $("#homephone").val();
    var workPhone = $("#workphone").val();
    var mobilePhone = $("#mobilephone").val();

    settings.data = "<Customer xmlns = 'http://schemas.datacontract.org/2004 / 07 / XMLWebApi.Models' xmlns: i = 'http://www.w3.org/2001/XMLSchema-instance' ><ForeName>" + foreName + "</ForeName> <SurName>" + surName + "</SurName> <DOB>" + dob + "</DOB> <Gender>" + gender + "</Gender> <HomePhone>" + homePhone + "</HomePhone> <WorkPhone>" + workPhone + "</WorkPhone> <MobilePhone>" + mobilePhone + "</MobilePhone></Customer> ";

    settings.success = function (msg) {
        $("#msg").html($(msg).text());
    };

    settings.error = function () {
        $("#msg").append("Error while calling the Web API!!!");
    };

    $.ajax(settings);

});