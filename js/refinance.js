$(document).ready(function () {
$('#Refinance_D3,#Refinance_E3,#Refinance_F3,#Refinance_G3').html(0.00);
$('#Refinance_D4,#Refinance_E4,#Refinance_F4,#Refinance_G4,#Refinance_D7,#Refinance_D8,#Refinance_E8').html(0.00);
$('#Refinance_D11,#Refinance_E11,#Refinance_F11,#Refinance_G11,#Refinance_G12').html(0.00);
$('#Refinance_D13,#Refinance_E13,#Refinance_F13,#Refinance_G13').html(0.00);
$('#Refinance_D14,#Refinance_E14,#Refinance_F14,#Refinance_G14,#Refinance_G15').html(0.00);
$('#Refinance_D16,#Refinance_E16,#Refinance_F16,#Refinance_G16').html(0.00);
$('#Refinance_D17,#Refinance_E17,#Refinance_F17,#Refinance_G17').html(0.00);
$('#Refinance_E19,#Refinance_E20,#Refinance_E21,#Refinance_D22,#Refinance_E22').html(0.00);
$('#Refinance_G31,#Refinance_F31,#Refinance_F27,#Refinance_D31').html(0.00);
$('td#Refinance_D7,td#Refinance_D8').number( true, 2,'.','' );
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


    $("#Refinance_C3").keyup(function () {
        var Re_C3 = parseFloat($(this).val());
        var D3 = $("#Reference_D3").html();


        /*------start assign value to purchase 3rd row---*/
        if (Re_C3 > R_B29)
        {
            $("#Refinance_D3").html(R_E30);
        }
        else
        {
            if (Re_C3 > R_B28)
            {
                $("#Refinance_D3").html(R_E29);
            }
            else
            {
                if (Re_C3 > R_B27)
                {
                    $("#Refinance_D3").html(R_E28);
                }
                else
                {
                    if (Re_C3 > R_B26)
                    {
                        $("#Refinance_D3").html(R_E27);
                    }
                    else
                    {
                        if (Re_C3 > R_B25)
                        {
                            $("#Refinance_D3").html(R_E26);
                        }
                        else
                        {
                            if (Re_C3 > R_B24)
                                $("#Refinance_D3").html(R_E25);
                            else
                                $("#Refinance_D3").html(R_E24);
                        }
                    }
                }
            }
		}
			// assign value to G11	
        if (Re_C3 > R_B44)
        {	
            var G11 = ((R_C45 * ((Re_C3 - R_B44) / 1000)) + R_C44);
            $("#Refinance_G11").html(G11);
        }
        else
        {
            if (Re_C3 > R_B43 || Re_C3 == R_B43)
            {	
                $("#Refinance_G11").html(R_C44);
            }
            else
            {	
                $("#Refinance_G11").html(R_C43);
            }
        }

        var G11 = $("#Refinance_G11").html();
        var final = (G11 - ((R_G43 / (100 + R_H43)) * 100));
        $("#Refinance_G11").html(final.toFixed(2));
		
		// assign value to D17, E17, F17, G17
        var Re_D11 = parseFloat($("#Refinance_D11").html());
        var Re_E11 = parseFloat($("#Refinance_E11").html());
        var Re_F11 = parseFloat($("#Refinance_F11").html());
        var Re_G11 = parseFloat($("#Refinance_G11").html());

        var Re_G12 = parseFloat($("#Refinance_G12").html());

        var Re_D13 = parseFloat($("#Refinance_D13").html());
        var Re_E13 = parseFloat($("#Refinance_E13").html());
        var Re_F13 = parseFloat($("#Refinance_F13").html());
        var Re_G13 = parseFloat($("#Refinance_G13").html());

        var Re_D14 = parseFloat($("#Refinance_D14").html());
        var Re_E14 = parseFloat($("#Refinance_E14").html());
        var Re_F14 = parseFloat($("#Refinance_F14").html());
        var Re_G14 = parseFloat($("#Refinance_G14").html());

        var Re_G15 = parseFloat($("#Refinance_G15").html());

        var Re_D16 = parseFloat($("#Refinance_D16").html());
        var Re_E16 = parseFloat($("#Refinance_E16").html());
        var Re_F16 = parseFloat($("#Refinance_F16").html());
        var Re_G16 = parseFloat($("#Refinance_G16").html());
		
		$("#Refinance_D17").html((Re_D11 + Re_D13 + Re_D14 + Re_D16).toFixed(2));
        $("#Refinance_E17").html((Re_E11 + Re_E13 + Re_E14 + Re_E16).toFixed(2));
        $("#Refinance_F17").html((Re_F11 + Re_F13 + Re_F14 + Re_F16).toFixed(2));
        $("#Refinance_G17").html((Re_G11 + Re_G12 + Re_G13 + Re_G14 + Re_G15 + Re_G16).toFixed(2));

  
        var Re_E3 = R_B16 + R_B17 + R_B18 + R_B19;

        $("#Refinance_E3,#Refinance_E4").html(Re_E3);
        $("#Refinance_F3,#Refinance_F4").html(R_B3);
        $("#Refinance_G3,#Refinance_G4").html(R_B4);
        $('#Refinance_D4').html($('#Refinance_D3').html());
		$('td.number').number( true, 2,'.','' );

    });
    /*------end assign value to purchase 3rd row---*/


    /*------start assign value to purchase 7 row---*/

    // assign value in purchase D7
    $("#Refinance_C7").keyup(function () {
        $('#Refinance_E8').html(0.00);
        var Re_C7 = parseFloat($("#Refinance_C7").val());
        if (Re_C7 <= 6)
        {  $("#Refinance_D7,#Refinance_D8").html((Re_C7 * R_B15));
            $('td#Refinance_D7,td#Refinance_D8').number( true, 2,'.','' );
        }
        else
        {   $("#Refinance_D7").html("Call Us To Discuss");
            $("#Refinance_D8").html(0.00);
        }
		$('td.number').number( true, 2,'.','' );
    });

    /*------end assign value to purchase 7 row---*/


    /*------start assign value to purchase 11 to 16 row---*/
    $("#Refinance_C11").change(function () {
        var Re_C11 = parseFloat($(this).val());
        var Re_C3 = parseFloat($("#Refinance_C3").val());


        // assign value to D11, E11, F11	
        if (Re_C11 == 1)
        {
            $("#Refinance_D11").html(R_B14);
            $("#Refinance_E11").html(R_B3);
            $("#Refinance_F11").html(R_B4);
        }
        else
        {
            $("#Refinance_D11").html(0.00);
            $("#Refinance_E11").html(0.00);
            $("#Refinance_F11").html(0.00);
        }


        // assign value to G11	
        if (Re_C3 > R_B44)
        {
            var G11 = ((R_C45 * ((Re_C3 - R_B44) / 1000)) + R_C44);
            $("#Refinance_G11").html(G11);
        }
        else
        {
            if (Re_C3 > R_B43 || Re_C3 == R_B43)
            {
                $("#Refinance_G11").html(R_C44);
            }
            else
            {
                $("#Refinance_G11").html(R_C43);
            }
        }

        var G11 = $("#Refinance_G11").html();
        var final = (G11 - ((R_G43 / (100 + R_H43)) * 100));
        $("#Refinance_G11").html(final.toFixed(2));
		
		// assign value to D17, E17, F17, G17
        var Re_D11 = parseFloat($("#Refinance_D11").html());
        var Re_E11 = parseFloat($("#Refinance_E11").html());
        var Re_F11 = parseFloat($("#Refinance_F11").html());
        var Re_G11 = parseFloat($("#Refinance_G11").html());

        var Re_G12 = parseFloat($("#Refinance_G12").html());

        var Re_D13 = parseFloat($("#Refinance_D13").html());
        var Re_E13 = parseFloat($("#Refinance_E13").html());
        var Re_F13 = parseFloat($("#Refinance_F13").html());
        var Re_G13 = parseFloat($("#Refinance_G13").html());

        var Re_D14 = parseFloat($("#Refinance_D14").html());
        var Re_E14 = parseFloat($("#Refinance_E14").html());
        var Re_F14 = parseFloat($("#Refinance_F14").html());
        var Re_G14 = parseFloat($("#Refinance_G14").html());

        var Re_G15 = parseFloat($("#Refinance_G15").html());

        var Re_D16 = parseFloat($("#Refinance_D16").html());
        var Re_E16 = parseFloat($("#Refinance_E16").html());
        var Re_F16 = parseFloat($("#Refinance_F16").html());
        var Re_G16 = parseFloat($("#Refinance_G16").html());
		
		$("#Refinance_D17").html((Re_D11 + Re_D13 + Re_D14 + Re_D16).toFixed(2));
        $("#Refinance_E17").html((Re_E11 + Re_E13 + Re_E14 + Re_E16).toFixed(2));
        $("#Refinance_F17").html((Re_F11 + Re_F13 + Re_F14 + Re_F16).toFixed(2));
        $("#Refinance_G17").html((Re_G11 + Re_G12 + Re_G13 + Re_G14 + Re_G15 + Re_G16).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C12 assign value in purchase G12
    $("#Refinance_C12").change(function () {
        var Re_C12 = parseFloat($(this).val());

        // assign value to G12	
        if (Re_C12 == 1)
        {
            $("#Refinance_G12").html(R_E43);
        }
        else
        {
            $("#Refinance_G12").html(0.00);
        }
		
		// assign value to G17
        var Re_G11 = parseFloat($("#Refinance_G11").html());
		var Re_G12 = parseFloat($("#Refinance_G12").html());
		var Re_G13 = parseFloat($("#Refinance_G13").html());
		var Re_G14 = parseFloat($("#Refinance_G14").html());
		var Re_G15 = parseFloat($("#Refinance_G15").html());
		var Re_G16 = parseFloat($("#Refinance_G16").html());
		$("#Refinance_G17").html((Re_G11 + Re_G12 + Re_G13 + Re_G14 + Re_G15 + Re_G16).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C13 
    $("#Refinance_C13").change(function () {
        var Re_C13 = parseFloat($(this).val());

        //assign value to D13, E13, F13, G13
        if (Re_C13 == 1)
        {
            $("#Refinance_D13").html(R_B9);
            $("#Refinance_E13").html(R_B3);
            $("#Refinance_F13").html(R_B4);
            $("#Refinance_G13").html(R_D43);
        }
        else
        {
            $("#Refinance_D13").html(0.00);
            $("#Refinance_E13").html(0.00);
            $("#Refinance_F13").html(0.00);
            $("#Refinance_G13").html(0.00);
        }
		
		// assign value to D17, E17, F17, G17
        var Re_D11 = parseFloat($("#Refinance_D11").html());
        var Re_E11 = parseFloat($("#Refinance_E11").html());
        var Re_F11 = parseFloat($("#Refinance_F11").html());
        var Re_G11 = parseFloat($("#Refinance_G11").html());

        var Re_G12 = parseFloat($("#Refinance_G12").html());

        var Re_D13 = parseFloat($("#Refinance_D13").html());
        var Re_E13 = parseFloat($("#Refinance_E13").html());
        var Re_F13 = parseFloat($("#Refinance_F13").html());
        var Re_G13 = parseFloat($("#Refinance_G13").html());

        var Re_D14 = parseFloat($("#Refinance_D14").html());
        var Re_E14 = parseFloat($("#Refinance_E14").html());
        var Re_F14 = parseFloat($("#Refinance_F14").html());
        var Re_G14 = parseFloat($("#Refinance_G14").html());

        var Re_G15 = parseFloat($("#Refinance_G15").html());

        var Re_D16 = parseFloat($("#Refinance_D16").html());
        var Re_E16 = parseFloat($("#Refinance_E16").html());
        var Re_F16 = parseFloat($("#Refinance_F16").html());
        var Re_G16 = parseFloat($("#Refinance_G16").html());
		
		$("#Refinance_D17").html((Re_D11 + Re_D13 + Re_D14 + Re_D16).toFixed(2));
        $("#Refinance_E17").html((Re_E11 + Re_E13 + Re_E14 + Re_E16).toFixed(2));
        $("#Refinance_F17").html((Re_F11 + Re_F13 + Re_F14 + Re_F16).toFixed(2));
        $("#Refinance_G17").html((Re_G11 + Re_G12 + Re_G13 + Re_G14 + Re_G15 + Re_G16).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });



    // on change C14 
    $("#Refinance_C14").change(function () {
        var Re_C14 = parseFloat($(this).val());
		var Re_C15 = parseFloat($("#Refinance_C15 option:selected").val());
		var Re_C16 = parseFloat($("#Refinance_C16 option:selected").val());

        //assign value to D14, E14, F14, G14
        if (Re_C14 == 1)
        {
            $("#Refinance_D14").html(R_B10);
            $("#Refinance_E14").html(R_B3);
            $("#Refinance_F14").html(R_B4);
            $("#Refinance_G14").html(R_F43);
			
			if (Re_C15 == 1)
            {
                $("#Refinance_G15").html(R_E43);
            }
            else
                $("#Refinance_G15").html(0.00);
			
			if (Re_C16 == 1)
            {
                $("#Refinance_D16").html(R_B9);
                $("#Refinance_E16").html(R_B3);
                $("#Refinance_F16").html(R_B4);
                $("#Refinance_G16").html(R_D43);
            }
            else
            {
                $("#Refinance_D16").html(0.00);
                $("#Refinance_E16").html(0.00);
                $("#Refinance_F16").html(0.00);
                $("#Refinance_G16").html(0.00);
            }
        }
        else
        {
            $("#Refinance_D14").html(0.00);
            $("#Refinance_E14").html(0.00);
            $("#Refinance_F14").html(0.00);
            $("#Refinance_G14").html(0.00);
			$("#Refinance_G15").html(0.00);
			$("#Refinance_D16").html(0.00);
            $("#Refinance_E16").html(0.00);
            $("#Refinance_F16").html(0.00);
            $("#Refinance_G16").html(0.00);
        }
		
		// assign value to D17, E17, F17, G17
        var Re_D11 = parseFloat($("#Refinance_D11").html());
        var Re_E11 = parseFloat($("#Refinance_E11").html());
        var Re_F11 = parseFloat($("#Refinance_F11").html());
        var Re_G11 = parseFloat($("#Refinance_G11").html());

        var Re_G12 = parseFloat($("#Refinance_G12").html());

        var Re_D13 = parseFloat($("#Refinance_D13").html());
        var Re_E13 = parseFloat($("#Refinance_E13").html());
        var Re_F13 = parseFloat($("#Refinance_F13").html());
        var Re_G13 = parseFloat($("#Refinance_G13").html());

        var Re_D14 = parseFloat($("#Refinance_D14").html());
        var Re_E14 = parseFloat($("#Refinance_E14").html());
        var Re_F14 = parseFloat($("#Refinance_F14").html());
        var Re_G14 = parseFloat($("#Refinance_G14").html());

        var Re_G15 = parseFloat($("#Refinance_G15").html());

        var Re_D16 = parseFloat($("#Refinance_D16").html());
        var Re_E16 = parseFloat($("#Refinance_E16").html());
        var Re_F16 = parseFloat($("#Refinance_F16").html());
        var Re_G16 = parseFloat($("#Refinance_G16").html());
		
		$("#Refinance_D17").html((Re_D11 + Re_D13 + Re_D14 + Re_D16).toFixed(2));
        $("#Refinance_E17").html((Re_E11 + Re_E13 + Re_E14 + Re_E16).toFixed(2));
        $("#Refinance_F17").html((Re_F11 + Re_F13 + Re_F14 + Re_F16).toFixed(2));
        $("#Refinance_G17").html((Re_G11 + Re_G12 + Re_G13 + Re_G14 + Re_G15 + Re_G16).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C15
    $("#Refinance_C15").change(function () {
        var Re_C15 = parseFloat($(this).val());
        var Re_C14 = parseFloat($("#Refinance_C14 option:selected").val());

        //assign value to G15
        if (Re_C14 == 1)
        {
            if (Re_C15 == 1)
            {
                $("#Refinance_G15").html(R_E43);
            }
            else
                $("#Refinance_G15").html(0.00);
        }
        else
        {
            $("#Refinance_G15").html(0.00);
        }
		
		// assign value to G17
        var Re_G11 = parseFloat($("#Refinance_G11").html());
		var Re_G12 = parseFloat($("#Refinance_G12").html());
		var Re_G13 = parseFloat($("#Refinance_G13").html());
		var Re_G14 = parseFloat($("#Refinance_G14").html());
		var Re_G15 = parseFloat($("#Refinance_G15").html());
		var Re_G16 = parseFloat($("#Refinance_G16").html());
		$("#Refinance_G17").html((Re_G11 + Re_G12 + Re_G13 + Re_G14 + Re_G15 + Re_G16).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C16
    $("#Refinance_C16").change(function () {
        var Re_C16 = parseFloat($(this).val());
        var Re_C14 = parseFloat($("#Refinance_C14 option:selected").val());

        //assign value to D16,E16,F16,G16
        if (Re_C14 == 1)
        {
            if (Re_C16 == 1)
            {
                $("#Refinance_D16").html(R_B9);
                $("#Refinance_E16").html(R_B3);
                $("#Refinance_F16").html(R_B4);
                $("#Refinance_G16").html(R_D43);
            }
            else
            {
                $("#Refinance_D16").html(0.00);
                $("#Refinance_E16").html(0.00);
                $("#Refinance_F16").html(0.00);
                $("#Refinance_G16").html(0.00);
            }
        }
        else
        {
            $("#Refinance_D16").html(0.00);
            $("#Refinance_E16").html(0.00);
            $("#Refinance_F16").html(0.00);
            $("#Refinance_G16").html(0.00);
        }
		
		// assign value to D17, E17, F17, G17
        var Re_D11 = parseFloat($("#Refinance_D11").html());
        var Re_E11 = parseFloat($("#Refinance_E11").html());
        var Re_F11 = parseFloat($("#Refinance_F11").html());
        var Re_G11 = parseFloat($("#Refinance_G11").html());

        var Re_G12 = parseFloat($("#Refinance_G12").html());

        var Re_D13 = parseFloat($("#Refinance_D13").html());
        var Re_E13 = parseFloat($("#Refinance_E13").html());
        var Re_F13 = parseFloat($("#Refinance_F13").html());
        var Re_G13 = parseFloat($("#Refinance_G13").html());

        var Re_D14 = parseFloat($("#Refinance_D14").html());
        var Re_E14 = parseFloat($("#Refinance_E14").html());
        var Re_F14 = parseFloat($("#Refinance_F14").html());
        var Re_G14 = parseFloat($("#Refinance_G14").html());

        var Re_G15 = parseFloat($("#Refinance_G15").html());

        var Re_D16 = parseFloat($("#Refinance_D16").html());
        var Re_E16 = parseFloat($("#Refinance_E16").html());
        var Re_F16 = parseFloat($("#Refinance_F16").html());
        var Re_G16 = parseFloat($("#Refinance_G16").html());
		
		$("#Refinance_D17").html((Re_D11 + Re_D13 + Re_D14 + Re_D16).toFixed(2));
        $("#Refinance_E17").html((Re_E11 + Re_E13 + Re_E14 + Re_E16).toFixed(2));
        $("#Refinance_F17").html((Re_F11 + Re_F13 + Re_F14 + Re_F16).toFixed(2));
        $("#Refinance_G17").html((Re_G11 + Re_G12 + Re_G13 + Re_G14 + Re_G15 + Re_G16).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
	});

	
	// on change C19
    $("#Refinance_C19").change(function () {
        var Re_C19 = parseFloat($(this).val());

        //assign value to G20
        if (Re_C19 == 1)
        {
            $("#Refinance_E19").html(R_B7);
        }
        else
        {
            $("#Refinance_E19").html(0.00);
        }

		// assign value to D22, E22
        var Re_E19 = parseFloat($("#Refinance_E19").html());
        var Re_E20 = parseFloat($("#Refinance_E20").html());
        var Re_E21 = parseFloat($("#Refinance_E21").html());

        $("#Refinance_D22").html(0.00);
        $("#Refinance_E22").html((Re_E19 + Re_E20 + Re_E21));
		
		$('td.number').number( true, 2,'.','' );

    });


    // on change C20
    $("#Refinance_C20").change(function () {
        var Re_C20 = parseFloat($(this).val());

        //assign value to E20
        if (Re_C20 == 1)
        {
            $("#Refinance_E20").html(R_B8);
        }
        else
        {
            $("#Refinance_E20").html(0.00);
        }

		// assign value to D22, E22
        var Re_E19 = parseFloat($("#Refinance_E19").html());
        var Re_E20 = parseFloat($("#Refinance_E20").html());
        var Re_E21 = parseFloat($("#Refinance_E21").html());

        $("#Refinance_D22").html(0.00);
        $("#Refinance_E22").html((Re_E19 + Re_E20 + Re_E21));
		
		$('td.number').number( true, 2,'.','' );

    });


    // on change C21
    $("#Refinance_C21").change(function () {
        var Re_C21 = parseFloat($(this).val());

        //assign value to E21
        if (Re_C21 == 1)
        {
            $("#Refinance_E21").html(R_B6);
        }
        else
        {
            $("#Refinance_E21").html(0.00);
        }
		
		// assign value to D22, E22
        var Re_E19 = parseFloat($("#Refinance_E19").html());
        var Re_E20 = parseFloat($("#Refinance_E20").html());
        var Re_E21 = parseFloat($("#Refinance_E21").html());

        $("#Refinance_D22").html(0.00);
        $("#Refinance_E22").html((Re_E19 + Re_E20 + Re_E21));
		
		$('td.number').number( true, 2,'.','' );
	});



    $("#submit_refinance").click(function () {

		/* start assign total of each column */

        // assign value to D26 to D31
        var Re_D4 = parseFloat($("#Refinance_D4").html());
        var Re_D8 = parseFloat($("#Refinance_D8").html());
        var Re_D17 = parseFloat($("#Refinance_D17").html());
        var Re_D22 = parseFloat($("#Refinance_D22").html());

        $("#Refinance_D26").html((Re_D4 + Re_D8 + Re_D17 + Re_D22));


        var Re_E4 = parseFloat($("#Refinance_E4").html());
        var Re_E8 = parseFloat($("#Refinance_E8").html());
        var Re_E22 = parseFloat($("#Refinance_E22").html());

        $("#Refinance_D27").html((Re_E4 + Re_E8 + Re_E22));


        var Re_F4 = parseFloat($("#Refinance_F4").html());
        var Re_E17 = parseFloat($("#Refinance_E17").html());

        $("#Refinance_D28").html((Re_F4 + Re_E17).toFixed(2));


        var Re_G4 = parseFloat($("#Refinance_G4").html());
        var Re_F17 = parseFloat($("#Refinance_F17").html());

        $("#Refinance_D29").html((Re_G4 + Re_F17).toFixed(2));


        var Re_G17 = parseFloat($("#Refinance_G17").html());
           Re_G17=Re_G17.toFixed(2);
        $("#Refinance_D30").html(Re_G17);



        // ASSIGN TO F26 TO F35
        var Re_D26 = parseFloat($("#Refinance_D26").html());
        var Re_D27 = parseFloat($("#Refinance_D27").html());
        var Re_D28 = parseFloat($("#Refinance_D28").html());
        var Re_D29 = parseFloat($("#Refinance_D29").html());
        var Re_D30 = parseFloat($("#Refinance_D30").html());

        $("#Refinance_D31").html((Re_D26 + Re_D27 + Re_D28 + Re_D29 + Re_D30).toFixed(2));

        $("#Refinance_F26").html(((Re_D26 * R_B20) / 100).toFixed(2));
        $("#Refinance_F27").html(((Re_D27 * R_B20) / 100).toFixed(2));
        $("#Refinance_F28").html(0.00);
        $("#Refinance_F29").html(((Re_D29 * R_B20) / 100).toFixed(2));
        $("#Refinance_F30").html(((Re_D30 * R_H43) / 100).toFixed(2));

        var Re_F26 = parseFloat($("#Refinance_F26").html());
        var Re_F27 = parseFloat($("#Refinance_F27").html());
        var Re_F28 = parseFloat($("#Refinance_F28").html());
        var Re_F29 = parseFloat($("#Refinance_F29").html());
        var Re_F30 = parseFloat($("#Refinance_F30").html());

        $("#Refinance_F31").html((Re_F26 + Re_F27 + Re_F28 + Re_F29 + Re_F30).toFixed(2));

        $("#Refinance_F33").html(0.00);
        $("#Refinance_F34").html(0.00);

        var Re_F33 = parseFloat($("#Refinance_F33").html());
        var Re_F34 = parseFloat($("#Refinance_F34").html());
        $("#Refinance_F35").html((Re_F33 + Re_F34));


        var Re_D31 = parseFloat($("#Refinance_D31").html());
        var Re_F31 = parseFloat($("#Refinance_F31").html());
        $("#Refinance_G31").html((Re_D31 + Re_F31).toFixed(2));


        var Re_D35 = parseFloat($("#Refinance_D35").html());
        var Re_F35 = parseFloat($("#Refinance_F35").html());
        $("#Refinance_G35").html(Re_F35); //(Re_D35+Re_F35));
		
		$('td.number').number( true, 2,'.','' );

        /* end assign total of each column */
        var type = $('input[name=type]:checked').val();
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var email = $("#email").val();
        var phone_no = $("#phone_no").val();
        var str = $("#divTab").html();
        $.ajax({
            type: "POST",
            url: "http://dofollowcontent.com/calculator/include/pdfgenerate.php",
            data: {data: str, nameFirst: 'refinance.pdf', nameSecond: 'refinance.csv', first_name: first_name, last_name: last_name, email: email, phone_no: phone_no, type: type},
            success: function (result)
            {
               // alert(result);
            }
        });

    });

});

