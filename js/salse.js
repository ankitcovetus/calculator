$(document).ready(function () {
$('#sales_d2,#sales_e2,#sales_f2,#sales_d3,#sales_e3,#sales_f3').html(0.00);
$('#sales_d5,#sales_e5,#sales_d6,#sales_e6,#sales_d11,#sales_e11,#sales_f11').html(0.00);
$('#sales_d9,#sales_e9,#sales_f9,#sales_d10,#sales_e10,#sales_f10').html(0.00);
$('#first_name,#last_name,#email,#phone_no').val('');
    /*----------start: get all reference -----*/
    var R_B3 = parseFloat($("#Reference_B3").html());
    var R_B4 = parseFloat($("#Reference_B4").html());
    var R_B5 = parseFloat($("#Reference_B5").html());
    var R_B6 = parseFloat($("#Reference_B6").html());
    var R_B7 = parseFloat($("#Reference_B7").html());
    var R_B8 = parseFloat($("#Reference_B8").html());
    var R_B9 = parseFloat($("#Reference_B9").html());
    var R_B10 = parseFloat($("#Reference_B10").html());
    var R_B11 = parseFloat($("#Reference_B11").html());
    var R_B12 = parseFloat($("#Reference_B12").html());
    var R_B13 = parseFloat($("#Reference_B13").html());
    var R_B14 = parseFloat($("#Reference_B14").html());
    var R_B15 = parseFloat($("#Reference_B15").html());
    var R_B16 = parseFloat($("#Reference_B16").html());
    var R_B17 = parseFloat($("#Reference_B17").html());
    var R_B18 = parseFloat($("#Reference_B18").html());
    var R_B19 = parseFloat($("#Reference_B19").html());
    var R_B20 = parseFloat($("#Reference_B20").html());

    var R_B24 = parseFloat($("#Reference_B24").html());
    var R_C24 = parseFloat($("#Reference_C24").html());
    var R_D24 = parseFloat($("#Reference_D24").html());
    var R_E24 = parseFloat($("#Reference_E24").html());
    var R_F24 = parseFloat($("#Reference_F24").html());

    var R_B25 = parseFloat($("#Reference_B25").html());
    var R_C25 = parseFloat($("#Reference_C25").html());
    var R_D25 = parseFloat($("#Reference_D25").html());
    var R_E25 = parseFloat($("#Reference_E25").html());
    var R_F25 = parseFloat($("#Reference_F25").html());

    var R_B26 = parseFloat($("#Reference_B26").html());
    var R_C26 = parseFloat($("#Reference_C26").html());
    var R_D26 = parseFloat($("#Reference_D26").html());
    var R_E26 = parseFloat($("#Reference_E26").html());
    var R_F26 = parseFloat($("#Reference_F26").html());

    var R_B27 = parseFloat($("#Reference_B27").html());
    var R_C27 = parseFloat($("#Reference_C27").html());
    var R_D27 = parseFloat($("#Reference_D27").html());
    var R_E27 = parseFloat($("#Reference_E27").html());
    var R_F27 = parseFloat($("#Reference_F27").html());

    var R_B28 = parseFloat($("#Reference_B28").html());
    var R_C28 = parseFloat($("#Reference_C28").html());
    var R_D28 = parseFloat($("#Reference_D28").html());
    var R_E28 = parseFloat($("#Reference_E28").html());
    var R_F28 = parseFloat($("#Reference_F28").html());

    var R_B29 = parseFloat($("#Reference_B29").html());
    var R_C29 = parseFloat($("#Reference_C29").html());
    var R_D29 = parseFloat($("#Reference_D29").html());
    var R_E29 = parseFloat($("#Reference_E29").html());
    var R_F29 = parseFloat($("#Reference_F29").html());

    var R_B30 = parseFloat($("#Reference_B30").html());
    var R_C30 = parseFloat($("#Reference_C30").html());
    var R_D30 = parseFloat($("#Reference_D30").html());
    var R_E30 = parseFloat($("#Reference_E30").html());
    var R_F30 = parseFloat($("#Reference_F30").html());


    var R_B36 = parseFloat($("#Reference_B36").html());
    var R_F36 = parseFloat($("#Reference_F36").html());
    var R_G36 = parseFloat($("#Reference_G36").html());
    var R_H36 = parseFloat($("#Reference_H36").html());
    var R_I36 = parseFloat($("#Reference_I36").html());
    var R_L36 = parseFloat($("#Reference_L36").html());
    var R_J36 = parseFloat($("#Reference_J36").html());
    var R_K36 = parseFloat($("#Reference_K36").html());
    var R_M36 = parseFloat($("#Reference_M36").html());

    var R_B37 = parseFloat($("#Reference_B37").html());
    var R_C37 = parseFloat($("#Reference_C37").html());
    var R_E37 = parseFloat($("#Reference_E37").html());
    var R_D37 = parseFloat($("#Reference_D37").html());

    var R_C38 = parseFloat($("#Reference_C38").html());
    var R_D38 = parseFloat($("#Reference_D38").html());
    var R_E38 = parseFloat($("#Reference_E38").html());

    var R_B43 = parseFloat($("#Reference_B43").html());
    var R_C43 = parseFloat($("#Reference_C43").html());
    var R_D43 = parseFloat($("#Reference_D43").html());
    var R_E43 = parseFloat($("#Reference_E43").html());
    var R_F43 = parseFloat($("#Reference_F43").html());
    var R_G43 = parseFloat($("#Reference_G43").html());
    var R_H43 = parseFloat($("#Reference_H43").html());

    var R_B44 = parseFloat($("#Reference_B44").html());
    var R_C44 = parseFloat($("#Reference_C44").html());

    var R_C45 = parseFloat($("#Reference_C45").html());

    var R_E54 = parseFloat($("#Reference_E54").html());

    var R_B55 = parseFloat($("#Reference_B55").html());


    var R_E61 = parseFloat($("#Reference_E61").html());


    var R_E67 = parseFloat($("#Reference_E67").html());

    var R_B68 = parseFloat($("#Reference_B68").html());


    var R_E75 = parseFloat($("#Reference_E75").html());

    /*----------end: get all reference-----*/


    $("#sales_c2 input").keyup(function () {
        /*-----------------Salse Fee----------*/
        S_C2 = parseFloat($("#sales_c2 input").val());
        if (S_C2 > R_B29)
        {
            $("#sales_d2").html(R_D30);
        }
        else
        {
            if (S_C2 > R_B28)
            {
                $("#sales_d2").html(R_D29);
            }
            else
            {
                if (S_C2 > R_B27)
                {
                    $("#sales_d2").html(R_D28);
                }
                else 
                {
                    if (S_C2 > R_B26)
                    {
                        $("#sales_d2").html(R_D27);
                    }
                    else
                    {
                        if (S_C2 > R_B25)
                        {
                            $("#sales_d2").html(R_D26);
                        }
                        else
                        {
                            if (S_C2 > R_B24)
                            {
                                $("#sales_d2").html(R_D25);
                            }
                            else
                            {
                                $("#sales_d2").html(R_D24);
                            }
                        }
                    }
                }
            }
        }
        /*-----------------Salse Fee----------*/
        /*-----------------Disbursement----------*/
        $("#sales_e2").html(R_B16+R_B17+R_B19); 
        /*-----------------Disbursement----------*/
        /*-------------Law Society Transaction Levy------------------*/
        $("#sales_f2").html($("#Reference_B5").html());
        /*-------------Law Society Transaction Levy------------------*/
        $("#sales_d3").html($("#sales_d2").html());
        $("#sales_e3").html(R_B16+R_B17+R_B19);
        $("#sales_f3").html($("#Reference_B5").html()); 
        /*-----------------Salse Fee----------*/
		
		$('td.number').number( true, 2,'.','' );
    });
    /*------------------If value is zero then output is number-------------*/
    $("#sales_c5").keyup(function () {
        S_C5 = parseFloat($(this).val());
        if (S_C5 <= 6)
        {
            $("#sales_d5").html(S_C5 * R_B15);
            $("#sales_d6").html(S_C5 * R_B15);
            $('td.number').number( true, 2,'.','' );
        }
        else
        {
            $("#sales_d5").html("Call Us To Discuss");
            $("#sales_d6").html(0.00);
            $('td#sales_d6.number').number( true, 2,'.','' );
        }
		
		
    });
    /*------------------If value is zero then output is number-------------*/
    /*------------------If selected value is yes then output reflect-------------*/
    $("#sales_c9 select,#sales_c10 select").change(function () {
        $("#sales_d9,#sales_e9,#sales_f9").html('0');
        S_C9 = ($('#sales_c9 select').val());

        if (S_C9 == "Yes")
        {
            $("#sales_d9").html(R_B11);
            $("#sales_e9").html(R_B3);
            $("#sales_f9").html(R_B4);
        }
        $("#sales_d10,#sales_e10,#sales_f10").html('0');
        S_C10 = ($('#sales_c10 select').val());
        if (S_C10 == "Yes")
        {
            $("#sales_d10").html(R_B12);
            $("#sales_e10").html(R_B3);
            $("#sales_f10").html(R_B4);
        }
        $("#sales_d11").html(parseFloat($("#sales_d9").html()) + parseFloat($("#sales_d10").html()));
        $("#sales_e11").html(parseFloat($("#sales_e9").html()) + parseFloat($("#sales_e10").html()));
        $("#sales_f11").html(parseFloat($("#sales_f9").html()) + parseFloat($("#sales_f10").html()));
		
		$('td.number').number( true, 2,'.','' );
    });
    /*------------------If selected value is yes then output reflect-------------*/
    /*------------------Report prepir Button---------------*/
    $('#update').click(function () {
        /*---------------VARIABLE DECLEAR---------------*/
        
        var S_D3 = parseFloat($("#sales_d3").html());
        var S_D6 = parseFloat($("#sales_d6").html());
        var S_D11 = parseFloat($("#sales_d11").html());
        var S_E3 = parseFloat($("#sales_e3").html());
        var S_E6 = parseFloat($("#sales_e6").html());
        var S_E11 = parseFloat($("#sales_e11").html());
        var S_F11 = parseFloat($("#sales_f11").html());
        /*---------------VARIABLE DECLEAR---------------*/

        $('#salse_d15').html((S_D11 + S_D6 + S_D3).toFixed(2));
        $("#salse_d16").html((S_E3 + S_E6).toFixed(2));
        $("#salse_d17").html(S_E11);
        $("#salse_d18").html(S_F11);

        var S_D15 = parseFloat($('#salse_d15').html());
        var S_D16 = parseFloat($('#salse_d16').html());
        var S_D17 = parseFloat($('#salse_d17').html());
        var S_D18 = parseFloat($('#salse_d18').html());

        $('#salse_d20').html((S_D15 + S_D16 + S_D17 + S_D18).toFixed(2));
        $('#salse_f15').html((S_D15 / 100 * R_B20).toFixed(2));
        $('#salse_f16').html((S_D16 / 100 * R_B20).toFixed(2));

        $('#salse_f18').html((S_D18 / 100 * R_B20).toFixed(2));


        var S_F15 = parseFloat($('#salse_f15').html());
        var S_F16 = parseFloat($('#salse_f16').html());
        var S_F17 = parseFloat($('#salse_f17').html());
        var S_F18 = parseFloat($('#salse_f18').html());
        var S_F19 = parseFloat($('#salse_f19').html());

        $('#salse_f20').html((S_F15 + S_F16 + S_F17 + S_F18 + S_F19).toFixed(2));

        var S_F20 = parseFloat($('#salse_f20').html());
        var S_D20 = parseFloat($('#salse_d20').html());

        $('#salse_g20').html((S_F20 + S_D20).toFixed(2));
		
		
        $('#salse_d40').html($(sales_f3).html());
        $('#salse_f40').html((parseFloat($(sales_f3).html())*R_B20)/100);
        $('td.number').number( true, 2,'.','' );
        var type = $('input[name=type]:checked').val();
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var email = $("#email").val();
        var phone_no = $("#phone_no").val();
        var str = $("#divTab").html();
        $.ajax({
            type: "POST",
            url: "http://dofollowcontent.com/calculator/include/pdfgenerate.php",
            data: {data: str, nameFirst: 'sales.pdf', nameSecond: 'sales.csv', first_name: first_name, last_name: last_name, email: email, phone_no: phone_no, type: type},
            success: function (result)
            {
                //alert(result);
            }
        });


    });

})