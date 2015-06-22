$(document).ready(function () {
    $('select').prop('selectedIndex', 0);
    
    $('input').val(0);
    $('#Purchase_D3,#Purchase_E3,#Purchase_F3,#Purchase_G3').html(0.00);
    $('#Purchase_D4,#Purchase_E4,#Purchase_F4,#Purchase_G4').html(0.00);
    $('#Purchase_F8,#Purchase_G8,#Purchase_D9,#Purchase_F10,#Purchase_G10').html(0.00);
    $('#Purchase_D11,#Purchase_E11,#Purchase_F11,#Purchase_G11,#Purchase_G14').html(0.00);
    $('#Purchase_D15,#Purchase_E16,#Purchase_F16,#Purchase_G16,#Purchase_G17').html(0.00);
    $('#Purchase_D18,#Purchase_E18,#Purchase_F18,#Purchase_G18').html(0.00);
    $('#Purchase_D19,#Purchase_E19,#Purchase_F19,#Purchase_G19').html(0.00);
    $('#Purchase_G20,#Purchase_E24,#Purchase_E25,#Purchase_E26').html(0.00);
    $('#Purchase_D21,#Purchase_E21,#Purchase_F21,#Purchase_G21').html(0.00);
    $('#Purchase_D21,#Purchase_E21,#Purchase_F21,#Purchase_G21').html(0.00);
    $('#Purchase_D22,#Purchase_E22,#Purchase_F22,#Purchase_G22').html(0.00);
    $('#Purchase_E27,#Purchase_D27,#Purchase_G22,#Purchase_G15').html(0.00);
$('td.hide1001').number( true, 2,'.','' ); 
    var R_E36 = parseFloat($("#Reference_E36").html());
    var R_H87 = parseFloat($("#Reference_H87").html());
    var R_H93 = parseFloat($("#Reference_H93").html());
    var R_H98 = parseFloat($("#Reference_H98").html());
    var R_H103 = parseFloat($("#Reference_H103").html()); 

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
	var R_C36 = parseFloat($("#Reference_C36").html());
	var R_D36 = parseFloat($("#Reference_D36").html());
	var R_E36 = parseFloat($("#Reference_E36").html());
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


    $("#Purchase_C3").keyup(function (){	 
        var P_C3 = parseFloat($(this).val());
        var D3 = $("#Reference_D3").html();
        /*------start assign value to purchase 3rd & 4th row---*/
        var P_E3 = R_B16 + R_B17 + R_B18 + R_B19;
        if (P_C3 > R_B29)
        {
            $("#Purchase_D3").html(R_C30);	 
        }
        else
        {
            if (P_C3 > R_B28) 
            {
                $("#Purchase_D3").html(R_C29);
            }
            else
            {
                if (P_C3 > R_B27)
                {
                    $("#Purchase_D3").html(R_C28);
                }
                else
                {
                    if (P_C3 > R_B26)
                    {
                        $("#Purchase_D3").html(R_C27);
                    }
                    else
                    {
                        if (P_C3 > R_B25)
                        {
                            $("#Purchase_D3").html(R_C26);
                        }
                        else
                        {
                            if (P_C3 > R_B24)
                                $("#Purchase_D3").html(R_C25);
                            else
                                $("#Purchase_D3").html(R_C24);
                        }
                    }
                }
            }
        }	
        $("#Purchase_E3").html(P_E3);
        $("#Purchase_F3").html(R_B3);
        $("#Purchase_G3").html(R_B4);
		
		
		/* assign value in total start ---*/
		
		var P_D3 = parseFloat($("#Purchase_D3").html());
        var P_E3 = parseFloat($("#Purchase_E3").html());
        var P_F3 = parseFloat($("#Purchase_F3").html());
        var P_G3 = parseFloat($("#Purchase_G3").html());

		
        $("#Purchase_D4").html(P_D3);	
        $("#Purchase_E4").html(P_E3);
        $("#Purchase_F4").html(P_F3); 
        $("#Purchase_G4").html(P_G3);
	    /* assign value in total end ---*/
		
		
        /* start assign value for reference tab*/

        var P_C3 = parseFloat($("#Purchase_C3").val());
        var R_C50 = parseFloat($("#Reference_C50").html());
        var R_D50 = parseFloat($("#Reference_D50").html());

        var R_C51 = parseFloat($("#Reference_C51").html());
        var R_D51 = parseFloat($("#Reference_D51").html());

        var R_C52 = parseFloat($("#Reference_C52").html());
        var R_D52 = parseFloat($("#Reference_D52").html());

        var R_C53 = parseFloat($("#Reference_C53").html());
        var R_D53 = parseFloat($("#Reference_D53").html());

        // assign value in E50, E51, E52, E53
        if (P_C3 <= R_C50)
        {	
            $("#Reference_E50").html(((R_D50 * P_C3)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E50").html(((R_D50 * R_C50)/100).toFixed(2));
        }


        if (P_C3 > R_C50)
        {
            if (P_C3 <= R_C51)
            {
                $("#Reference_E51").html((R_D51 * (P_C3 - R_C50)/100).toFixed(2));
            }
            else
            {
                $("#Reference_E51").html((R_D51 * (R_C51 - R_C50)/100).toFixed(2));
            }
        }
        else
        {
            $("#Reference_E51").html(0.00);
        }


        if (P_C3 > R_C51)
        {
            if (P_C3 <= R_C52)
            {
                $("#Reference_E52").html((R_D52 * (P_C3 - R_C51)/100).toFixed(2));
            }
            else
            {
                $("#Reference_E52").html((R_D52 * (R_C52 - R_C51)/100).toFixed(2));
            }
        }
        else
        {
            $("#Reference_E52").html(0.00);
        }


        if (P_C3 > R_C52)
        {
            $("#Reference_E53").html((R_D53 * (P_C3 - R_C52)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E53").html(0.00);
        }


        // assign value to E54
        var R_E50 = parseFloat($("#Reference_E50").html());
        var R_E51 = parseFloat($("#Reference_E51").html());
        var R_E52 = parseFloat($("#Reference_E52").html());
        var R_E53 = parseFloat($("#Reference_E53").html());

        $("#Reference_E54").html((R_E50 + R_E51 + R_E52 + R_E53).toFixed(2));


        // get value of C58 to C60 & D58 to D60
        var R_C58 = parseFloat($("#Reference_C58").html());
        var R_D58 = parseFloat($("#Reference_D58").html());

        var R_C59 = parseFloat($("#Reference_C59").html());
        var R_D59 = parseFloat($("#Reference_D59").html());

        var R_C60 = parseFloat($("#Reference_C60").html());
        var R_D60 = parseFloat($("#Reference_D60").html());


        // assign value in E58, E59, E60
        if (P_C3 <= R_C58)
        {	
            $("#Reference_E58").html(((R_D58 * P_C3)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E58").html(((R_D58 * R_C58)/100).toFixed(2));
        }


        if (P_C3 > R_C58)
        {
            if (P_C3 <= R_C59)
            {
                $("#Reference_E59").html((R_D59 * (P_C3 - R_C58)/100).toFixed(2));
            }
            else
            {
                $("#Reference_E59").html((R_D59 * (R_C59 - R_C58)/100).toFixed(2));
            }
        }
        else
        {
            $("#Reference_E59").html(0.00);
        }


        if (P_C3 > R_C59)
        {
            $("#Reference_E60").html((R_D60 * (P_C3 - R_C59)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E60").html(0.00);
        }


        // assign value to E61
        var R_E58 = parseFloat($("#Reference_E58").html());
        var R_E59 = parseFloat($("#Reference_E59").html());
        var R_E60 = parseFloat($("#Reference_E60").html());

        $("#Reference_E61").html((R_E58 + R_E59 + R_E60).toFixed(2));


        // get value of C64 to C66 & D64 to D66
        var R_C64 = parseFloat($("#Reference_C64").html());
        var R_D64 = parseFloat($("#Reference_D64").html());

        var R_C65 = parseFloat($("#Reference_C65").html());
        var R_D65 = parseFloat($("#Reference_D65").html());

        var R_C66 = parseFloat($("#Reference_C66").html());
        var R_D66 = parseFloat($("#Reference_D66").html());


        // assign value in E64, E65, E66
        if (P_C3 <= R_C64)
        {
            $("#Reference_E64").html(((R_D64 * P_C3)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E64").html(((R_D64 * R_C64)/100).toFixed(2));
        }


        if (P_C3 > R_C64)
        {
            if (P_C3 <= R_C65)
            {
                $("#Reference_E65").html((R_D65 * (P_C3 - R_C64)/100).toFixed(2));
            }
            else
            {
                $("#Reference_E65").html((R_D65 * (R_C65 - R_C64)/100).toFixed(2));
            }
        }
        else
        {
            $("#Reference_E65").html(0.00);
        }


        if (P_C3 > R_C65)
        {
            $("#Reference_E66").html((R_D66 * (P_C3 - R_C65)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E66").html(0.00);
        }


        // assign value to E67
        var R_E64 = parseFloat($("#Reference_E64").html());
        var R_E65 = parseFloat($("#Reference_E65").html());
        var R_E66 = parseFloat($("#Reference_E66").html());

        $("#Reference_E67").html((R_E64 + R_E65 + R_E66).toFixed(2));


        // get value of C71 to C74 & D71 to D74
        var R_C71 = parseFloat($("#Reference_C71").html());
        var R_D71 = parseFloat($("#Reference_D71").html());

        var R_C72 = parseFloat($("#Reference_C72").html());
        var R_D72 = parseFloat($("#Reference_D72").html());

        var R_C73 = parseFloat($("#Reference_C73").html());
        var R_D73 = parseFloat($("#Reference_D73").html());

        var R_C74 = parseFloat($("#Reference_C74").html());
        var R_D74 = parseFloat($("#Reference_D74").html());


        // assign value in E71, E72, E73, E74
        if (P_C3 <= R_C71)
        {
            $("#Reference_E71").html(((R_D71 * P_C3)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E71").html(((R_D71 * R_C71)/100).toFixed(2));
        }


        if (P_C3 > R_C71)
        {
            if (P_C3 <= R_C72)
            {
                $("#Reference_E72").html((R_D72 * (P_C3 - R_C71)/100).toFixed(2));
            }
            else
            {
                $("#Reference_E72").html((R_D72 * (R_C72 - R_C71)/100).toFixed(2));
            }
        }
        else
        {
            $("#Reference_E72").html(0.00);
        }

        if (P_C3 > R_C72)
        {
            if (P_C3 <= R_C73)
            {
                $("#Reference_E73").html((R_D73 * (P_C3 - R_C72)/100).toFixed(2));
            }
            else
            {
                $("#Reference_E73").html((R_D73 * (R_C73 - R_C72)/100).toFixed(2));
            }
        }
        else
        {
            $("#Reference_E73").html(0.00);
        }


        if (P_C3 > R_C73)
        {
            $("#Reference_E74").html((R_D74 * (P_C3 - R_C73)/100).toFixed(2));
        }
        else
        {
            $("#Reference_E74").html(0.00);
        }


        // assign value to E61
        var R_E71 = parseFloat($("#Reference_E71").html());
        var R_E72 = parseFloat($("#Reference_E72").html());
        var R_E73 = parseFloat($("#Reference_E73").html());
        var R_E74 = parseFloat($("#Reference_E74").html());

        $("#Reference_E75").html((R_E71 + R_E72 + R_E73 + R_E74).toFixed(2));


        /* start assign value in amount due  */

        var R_F82 = parseFloat($("#Reference_F82").html());
        var R_G82 = parseFloat($("#Reference_G82").html());
		var R_H82 = parseFloat($("#Reference_H82").html());
        var R_I82 = parseFloat($("#Reference_I82").html());
        var R_J82 = parseFloat($("#Reference_J82").html());
        var R_K82 = parseFloat($("#Reference_K82").html());
        var R_M82 = parseFloat($("#Reference_M82").html());
        var R_N82 = parseFloat($("#Reference_N82").html());
        var R_O82 = parseFloat($("#Reference_O82").html());

        // assign value in P82
        if (P_C3 < R_F82)
        {
            $("#Reference_P82").html(R_G82);
        }
        else
        {
            $("#Reference_P82").html(0.00);
        }

        var R_P82 = parseFloat($("#Reference_P82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_P82").html((((R_P82 * (1 + R_O82)) * 100) - last).toFixed(2));


        // assign value in Q82
        if (P_C3 < R_F82)
        {
            $("#Reference_Q82").html((R_G82 - R_G82));
        }
        else
        {
            $("#Reference_Q82").html(0.00);
        }

        var R_Q82 = parseFloat($("#Reference_Q82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_N82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_Q82").html((((R_Q82 * (1 + R_O82)) * 100) - last).toFixed(2));


        // assign value in R82
        if (P_C3 < R_F82)
        {
            $("#Reference_R82").html((R_G82 + R_I82));
        }
        else
        {
            $("#Reference_R82").html(0.00);
        }

        var R_R82 = parseFloat($("#Reference_R82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_R82").html((((R_R82 * (1 + R_O82)) * 100) - last).toFixed(2));



        // assign value in S82
        if (P_C3 < R_F82)
        {
            $("#Reference_S82").html((R_G82 + R_K82));
        }
        else
        {
            $("#Reference_S82").html(0.00);
        }

        var R_S82 = parseFloat($("#Reference_S82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_S82").html((((R_S82 * (1 + R_O82)) * 100) - last).toFixed(2));


        // assign value in T82
        if (P_C3 < R_F82)
        {
            $("#Reference_T82").html((R_G82 + R_J82));
        }
        else
        {
            $("#Reference_T82").html(0.00);
        }

        var R_T82 = parseFloat($("#Reference_T82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_T82").html((((R_T82 * (1 + R_O82)) * 100) - last).toFixed(2));


        // assign value in U82
        if (P_C3 < R_F82)
        {
            $("#Reference_U82").html((R_G82 + R_J82 + R_K82));
        }
        else
        {
            $("#Reference_U82").html(0.00);
        }

        var R_U82 = parseFloat($("#Reference_U82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U82").html((((R_U82 * (1 + R_O82)) * 100) - last).toFixed(2));

        // assign value in V82
        if (P_C3 < R_F82)
        {
            $("#Reference_V82").html((R_G82 + R_J82 + R_K82 + R_I82));
        }
        else
        {
            $("#Reference_V82").html(0.00);
        }

        var R_V82 = parseFloat($("#Reference_V82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V82").html((((R_V82 * (1 + R_O82)) * 100) - last).toFixed(2));


        // assign value in U82
        if (P_C3 < R_F82)
        {
            $("#Reference_U82").html((R_G82 + R_J82 + R_K82));
        }
        else
        {
            $("#Reference_U82").html(0.00);
        }

        var R_U82 = parseFloat($("#Reference_U82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U82").html((((R_U82 * (1 + R_O82)) * 100) - last).toFixed(2));

        // assign value in V82
        if (P_C3 < R_F82)
        {
            $("#Reference_V82").html((R_G82 + R_J82 + R_K82 + R_I82));
        }
        else
        {
            $("#Reference_V82").html(0.00);
        }

        var R_V82 = parseFloat($("#Reference_V82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V82").html((((R_V82 * (1 + R_O82)) * 100) - last).toFixed(2));


        // assign value in U82
        if (P_C3 < R_F82)
        {
            $("#Reference_U82").html((R_G82 + R_J82 + R_K82));
        }
        else
        {
            $("#Reference_U82").html(0.00);
        }

        var R_U82 = parseFloat($("#Reference_U82").html());

        var last = '';
        if (P_C3 < R_F82)
        {
            last = R_M82;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U82").html((((R_U82 * (1 + R_O82)) * 100) - last).toFixed(2));


        // assign value in P83
        var R_F83 = parseFloat($("#Reference_F83").html());
        var R_G83 = parseFloat($("#Reference_G83").html());
		var R_H83 = parseFloat($("#Reference_H83").html());
        var R_I83 = parseFloat($("#Reference_I83").html());
        var R_J83 = parseFloat($("#Reference_J83").html());
        var R_K83 = parseFloat($("#Reference_K83").html());
        var R_M83 = parseFloat($("#Reference_M83").html());
        var R_N83 = parseFloat($("#Reference_N83").html());
        var R_O83 = parseFloat($("#Reference_O83").html());

        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_P83").html(R_G83);
            }
            else
            {
                $("#Reference_P83").html(0.00);
            }
        }
        else
        {
            $("#Reference_P83").html(0.00);
        }

        var R_P83 = parseFloat($("#Reference_P83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_M83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P83").html((((R_P83 * (1 + R_O83)) * 100) - last).toFixed(2));


        // assign value in Q83
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_Q83").html((R_G83 - R_H83));
            }
            else
            {
                $("#Reference_Q83").html(0.00);
            }
        }
        else
        {
            $("#Reference_Q83").html(0.00);
        }

        var R_Q83 = parseFloat($("#Reference_Q83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_N83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q83").html((((R_Q83 * (1 + R_O83)) * 100) - last).toFixed(2));


        // assign value in R83
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_R83").html((R_G83 + R_I83));
            }
            else
            {
                $("#Reference_R83").html(0.00);
            }
        }
        else
        {
            $("#Reference_R83").html(0.00);
        }

        var R_R83 = parseFloat($("#Reference_R83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_M83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R83").html((((R_R83 * (1 + R_O83)) * 100) - last).toFixed(2));



        // assign value in S83
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_S83").html((R_G83 + R_K83));
            }
            else
            {
                $("#Reference_S83").html(0.00);
            }
        }
        else
        {
            $("#Reference_S83").html(0.00);
        }

        var R_S83 = parseFloat($("#Reference_S83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_M83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S83").html((((R_S83 * (1 + R_O83)) * 100) - last).toFixed(2));


        // assign value in T83
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_T83").html((R_G83 + R_J83));
            }
            else
            {
                $("#Reference_T83").html(0.00);
            }
        }
        else
        {
            $("#Reference_T83").html(0.00);
        }

        var R_T83 = parseFloat($("#Reference_T83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_M83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T83").html((((R_T83 * (1 + R_O83)) * 100) - last).toFixed(2));


        // assign value in U83
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_U83").html((R_G83 + R_K83 + R_J83));
            }
            else
            {
                $("#Reference_U83").html(0.00);
            }
        }
        else
        {
            $("#Reference_U83").html(0.00);
        }

        var R_U83 = parseFloat($("#Reference_U83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_M83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U83").html((((R_U83 * (1 + R_O83)) * 100) - last).toFixed(2));


        // assign value in V83
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_V83").html((R_G83 + R_K83 + R_J83 + R_I83));
            }
            else
            {
                $("#Reference_V83").html(0.00);
            }
        }
        else
        {
            $("#Reference_V83").html(0.00);
        }

        var R_V83 = parseFloat($("#Reference_V83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_M83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V83").html((((R_V83 * (1 + R_O83)) * 100) - last).toFixed(2));


        // assign value in V83
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                $("#Reference_V83").html((R_G83 + R_K83 + R_J83 + R_I83));
            }
            else
            {
                $("#Reference_V83").html(0.00);
            }
        }
        else
        {
            $("#Reference_V83").html(0.00);
        }

        var R_V83 = parseFloat($("#Reference_V83").html());

        var last = '';
        if (P_C3 >= R_F82)
        {
            if (P_C3 <= R_F83)
            {
                last = R_M83;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V83").html((((R_V83 * (1 + R_O83)) * 100) - last).toFixed(2));



        // assign value in P84
        var R_F84 = parseFloat($("#Reference_F84").html());
        var R_G84 = parseFloat($("#Reference_G84").html());
        var R_H84 = parseFloat($("#Reference_H84").html());
        var R_I84 = parseFloat($("#Reference_I84").html());
        var R_J84 = parseFloat($("#Reference_J84").html());
        var R_K84 = parseFloat($("#Reference_K84").html());
        var R_M84 = parseFloat($("#Reference_M84").html());
        var R_N84 = parseFloat($("#Reference_N84").html());
        var R_O84 = parseFloat($("#Reference_O84").html());

        var last = '';
        var start = '';
        if (P_C3 > R_F83)
        {
            start = ((R_G83 + R_G84) * ((P_C3 - R_F83) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F83)
        {
            last = R_M84;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P84").html((((start * (1 + R_O84)) * 100) - last).toFixed(2));


        // assign value in Q84
        var last = '';
        var start = '';
        if (P_C3 > R_F83)
        {
            start = (((R_G83 - R_H84) + R_G84) * ((P_C3 - R_F83) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F83)
        {
            last = R_N84;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q84").html((((start * (1 + R_O84)) * 100) - last).toFixed(2));


        // assign value in R84
        var last = '';
        var start = '';
        if (P_C3 > R_F83)
        {
            start = ((R_G83 + R_I84 + R_G84) * ((P_C3 - R_F83) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F83)
        {
            last = R_M84;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R84").html((((start * (1 + R_O84)) * 100) - last).toFixed(2));


        // assign value in S84
        var last = '';
        var start = '';
        if (P_C3 > R_F83)
        {
            start = ((R_G83 + R_K84 + R_G84) * ((P_C3 - R_F83) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F83)
        {
            last = R_M84;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S84").html((((start * (1 + R_O84)) * 100) - last).toFixed(2));


        // assign value in T84
        var last = '';
        var start = '';
        if (P_C3 > R_F83)
        {
            start = ((R_G83 + R_J84 + R_G84) * ((P_C3 - R_F83) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F83)
        {
            last = R_M84;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T84").html((((start * (1 + R_O84)) * 100) - last).toFixed(2));


        // assign value in U84
        var last = '';
        var start = '';
        if (P_C3 > R_F83)
        {
            start = ((R_G83 + R_K84 + R_J84 + R_G84) * ((P_C3 - R_F83) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F83)
        {
            last = R_M84;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U84").html((((start * (1 + R_O84)) * 100) - last).toFixed(2));


        // assign value in V84
        var last = '';
        var start = '';
        if (P_C3 > R_F83)
        {
            start = ((R_G83 + R_K84 + R_J84 + R_I84 + R_G84) * ((P_C3 - R_F83) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F83)
        {
            last = R_M84;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V84").html((((start * (1 + R_O84)) * 100) - last).toFixed(2));
        /* end assign value in amount due  */

		/* ---- start to get updated reference tab velue -----*/
		R_E54 = parseFloat($("#Reference_E54").html());	
		R_B55 = parseFloat($("#Reference_B55").html());
		R_E61 = parseFloat($("#Reference_E61").html());
		R_E67 = parseFloat($("#Reference_E67").html());
		R_B68 = parseFloat($("#Reference_B68").html());
		R_E75 = parseFloat($("#Reference_E75").html());
		

		
        /* start assign value in amount due second box */

        var R_F87 = parseFloat($("#Reference_F87").html());
        var R_G87 = parseFloat($("#Reference_G87").html());
		var R_H87 = parseFloat($("#Reference_H87").html());
        var R_I87 = parseFloat($("#Reference_I87").html());
        var R_J87 = parseFloat($("#Reference_J87").html());
        var R_K87 = parseFloat($("#Reference_K87").html());
        var R_M87 = parseFloat($("#Reference_M87").html());
        var R_N87 = parseFloat($("#Reference_N87").html());
        var R_O87 = parseFloat($("#Reference_O87").html());
		var P_C3 = $('#Purchase_C3').val()
        // assign value in P87
        if (P_C3 < R_F87)
        {
            $("#Reference_P87").html(R_G87);
        }
        else
        {
            $("#Reference_P87").html(0.00);
        }

        var R_P87 = parseFloat($("#Reference_P87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_P87").html((((R_P87 * (1 + R_O87)) * 100) - last).toFixed(2));


        // assign value in Q87
        if (P_C3 < R_F87)
        {
            $("#Reference_Q87").html((R_G87 - R_H87));
        }
        else
        {
            $("#Reference_Q87").html(0.00);
        }

        var R_Q87 = parseFloat($("#Reference_Q87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_N87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_Q87").html((((R_Q87 * (1 + R_O87)) * 100) - last).toFixed(2));


        // assign value in R87
        if (P_C3 < R_F87)
        {
            $("#Reference_R87").html((R_G87 + R_I87));
        }
        else
        {
            $("#Reference_R87").html(0.00);
        }

        var R_R87 = parseFloat($("#Reference_R87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_R87").html((((R_R87 * (1 + R_O87)) * 100) - last).toFixed(2));



        // assign value in S87
        if (P_C3 < R_F87)
        {
            $("#Reference_S87").html((R_G87 + R_K87));
        }
        else
        {
            $("#Reference_S87").html(0.00);
        }

        var R_S87 = parseFloat($("#Reference_S87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_S87").html((((R_S87 * (1 + R_O87)) * 100) - last).toFixed(2));


        // assign value in T87
        if (P_C3 < R_F87)
        {
            $("#Reference_T87").html((R_G87 + R_J87));
        }
        else
        {
            $("#Reference_T87").html(0.00);
        }

        var R_T87 = parseFloat($("#Reference_T87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_T87").html((((R_T87 * (1 + R_O87)) * 100) - last).toFixed(2));


        // assign value in U87
        if (P_C3 < R_F87)
        {
            $("#Reference_U87").html((R_G87 + R_J87 + R_K87));
        }
        else
        {
            $("#Reference_U87").html(0.00);
        }

        var R_U87 = parseFloat($("#Reference_U87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U87").html((((R_U87 * (1 + R_O87)) * 100) - last).toFixed(2));

        // assign value in V87
        if (P_C3 < R_F87)
        {
            $("#Reference_V87").html((R_G87 + R_J87 + R_K87 + R_I87));
        }
        else
        {
            $("#Reference_V87").html(0.00);
        }

        var R_V87 = parseFloat($("#Reference_V87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V87").html((((R_V87 * (1 + R_O87)) * 100) - last).toFixed(2));


        // assign value in U87
        if (P_C3 < R_F87)
        {
            $("#Reference_U87").html((R_G87 + R_J87 + R_K87));
        }
        else
        {
            $("#Reference_U87").html(0.00);
        }

        var R_U87 = parseFloat($("#Reference_U87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U87").html((((R_U87 * (1 + R_O87)) * 100) - last).toFixed(2));

        // assign value in V87
        if (P_C3 < R_F87)
        {
            $("#Reference_V87").html((R_G87 + R_J87 + R_K87 + R_I87));
        }
        else
        {
            $("#Reference_V87").html(0.00);
        }

        var R_V87 = parseFloat($("#Reference_V87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V87").html((((R_V87 * (1 + R_O87)) * 100) - last).toFixed(2));


        // assign value in U87
        if (P_C3 < R_F87)
        {
            $("#Reference_U87").html((R_G87 + R_J87 + R_K87));
        }
        else
        {
            $("#Reference_U87").html(0.00);
        }

        var R_U87 = parseFloat($("#Reference_U87").html());

        var last = '';
        if (P_C3 < R_F87)
        {
            last = R_M87;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U87").html((((R_U87 * (1 + R_O87)) * 100) - last).toFixed(2));


        // assign value in P88
        var R_F88 = parseFloat($("#Reference_F88").html());
        var R_G88 = parseFloat($("#Reference_G88").html());
		var R_H88 = parseFloat($("#Reference_H88").html());
        var R_I88 = parseFloat($("#Reference_I88").html());
        var R_J88 = parseFloat($("#Reference_J88").html());
        var R_K88 = parseFloat($("#Reference_K88").html());
        var R_M88 = parseFloat($("#Reference_M88").html());
        var R_N88 = parseFloat($("#Reference_N88").html());
        var R_O88 = parseFloat($("#Reference_O88").html());

        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_P88").html(R_G88);
            }
            else
            {
                $("#Reference_P88").html(0.00);
            }
        }
        else
        {
            $("#Reference_P88").html(0.00);
        }

        var R_P88 = parseFloat($("#Reference_P88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_M88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P88").html((((R_P88 * (1 + R_O88)) * 100) - last).toFixed(2));


        // assign value in Q88
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_Q88").html((R_G88 - R_H88));
            }
            else
            {
                $("#Reference_Q88").html(0.00);
            }
        }
        else
        {
            $("#Reference_Q88").html(0.00);
        }

        var R_Q88 = parseFloat($("#Reference_Q88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_N88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q88").html((((R_Q88 * (1 + R_O88)) * 100) - last).toFixed(2));


        // assign value in R88
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_R88").html((R_G88 + R_I88));
            }
            else
            {
                $("#Reference_R88").html(0.00);
            }
        }
        else
        {
            $("#Reference_R88").html(0.00);
        }

        var R_R88 = parseFloat($("#Reference_R88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_M88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R88").html((((R_R88 * (1 + R_O88)) * 100) - last).toFixed(2));



        // assign value in S88
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_S88").html((R_G88 + R_K88));
            }
            else
            {
                $("#Reference_S88").html(0.00);
            }
        }
        else
        {
            $("#Reference_S88").html(0.00);
        }

        var R_S88 = parseFloat($("#Reference_S88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_M88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S88").html((((R_S88 * (1 + R_O88)) * 100) - last).toFixed(2));


        // assign value in T88
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_T88").html((R_G88 + R_J88));
            }
            else
            {
                $("#Reference_T88").html(0.00);
            }
        }
        else
        {
            $("#Reference_T88").html(0.00);
        }

        var R_T88 = parseFloat($("#Reference_T88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_M88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T88").html((((R_T88 * (1 + R_O88)) * 100) - last).toFixed(2));


        // assign value in U88
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_U88").html((R_G88 + R_K88 + R_J88));
            }
            else
            {
                $("#Reference_U88").html(0.00);
            }
        }
        else
        {
            $("#Reference_U88").html(0.00);
        }

        var R_U88 = parseFloat($("#Reference_U88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_M88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U88").html((((R_U88 * (1 + R_O88)) * 100) - last).toFixed(2));


        // assign value in V88
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_V88").html((R_G88 + R_K88 + R_J88 + R_I88));
            }
            else
            {
                $("#Reference_V88").html(0.00);
            }
        }
        else
        {
            $("#Reference_V88").html(0.00);
        }

        var R_V88 = parseFloat($("#Reference_V88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_M88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V88").html((((R_V88 * (1 + R_O88)) * 100) - last).toFixed(2));


        // assign value in V88
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                $("#Reference_V88").html((R_G88 + R_K88 + R_J88 + R_I88));
            }
            else
            {
                $("#Reference_V88").html(0.00);
            }
        }
        else
        {
            $("#Reference_V88").html(0.00);
        }

        var R_V88 = parseFloat($("#Reference_V88").html());

        var last = '';
        if (P_C3 >= R_F87)
        {
            if (P_C3 <= R_F88)
            {
                last = R_M88;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V88").html((((R_V88 * (1 + R_O88)) * 100) - last).toFixed(2));



        // assign value in P89
        var R_F89 = parseFloat($("#Reference_F89").html());
        var R_G89 = parseFloat($("#Reference_G89").html());
        var R_H89 = parseFloat($("#Reference_F89").html());
        var R_I89 = parseFloat($("#Reference_I89").html());
        var R_J89 = parseFloat($("#Reference_J89").html());
        var R_K89 = parseFloat($("#Reference_K89").html());
        var R_M89 = parseFloat($("#Reference_M89").html());
        var R_N89 = parseFloat($("#Reference_N89").html());
        var R_O89 = parseFloat($("#Reference_O89").html());


        var last = '';
        var start = '';
        if (P_C3 > R_F88)
        {
            start = ((R_G88 + R_G89) * ((P_C3 - R_F88) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F88)
        {
            last = R_M89;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P89").html((((start * (1 + R_O89)) * 100) - last).toFixed(2));


        // assign value in Q89
        var last = '';
        var start = '';
        if (P_C3 > R_F88)
        {
            start = (((R_G88 - R_H89) + R_G89) * ((P_C3 - R_F88) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F88)
        {
            last = R_N89;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q89").html((((start * (1 + R_O89)) * 100) - last).toFixed(2));


        // assign value in R89
        var last = '';
        var start = '';
        if (P_C3 > R_F88)
        {
            start = ((R_G88 + R_I89 + R_G89) * ((P_C3 - R_F88) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F88)
        {
            last = R_M89;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R89").html((((start * (1 + R_O89)) * 100) - last).toFixed(2));


        // assign value in S89
        var last = '';
        var start = '';
        if (P_C3 > R_F88)
        {
            start = ((R_G88 + R_K89 + R_G89) * ((P_C3 - R_F88) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F88)
        {
            last = R_M89;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S89").html((((start * (1 + R_O89)) * 100) - last).toFixed(2));


        // assign value in T89
        var last = '';
        var start = '';
        if (P_C3 > R_F88)
        {
            start = ((R_G88 + R_J89 + R_G89) * ((P_C3 - R_F88) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F88)
        {
            last = R_M89;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T89").html((((start * (1 + R_O89)) * 100) - last).toFixed(2));


        // assign value in U89
        var last = '';
        var start = '';
        if (P_C3 > R_F88)
        {
            start = ((R_G88 + R_K89 + R_J89 + R_G89) * ((P_C3 - R_F88) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F88)
        {
            last = R_M89;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U89").html((((start * (1 + R_O89)) * 100) - last).toFixed(2));


        // assign value in V89
        var last = '';
        var start = '';
        if (P_C3 > R_F88)
        {
            start = ((R_G88 + R_K89 + R_J89 + R_I89 + R_G89) * ((P_C3 - R_F88) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F88)
        {
            last = R_M89;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V89").html((((start * (1 + R_O89)) * 100) - last).toFixed(2));

        /* end assign value in amount due second box */


        /* start assign value in amount due third box */
        var R_F93 = parseFloat($("#Reference_F93").html());
        var R_G93 = parseFloat($("#Reference_G93").html());
		var R_H93 = parseFloat($("#Reference_H93").html());
        var R_I93 = parseFloat($("#Reference_I93").html());
        var R_J93 = parseFloat($("#Reference_J93").html());
        var R_K93 = parseFloat($("#Reference_K93").html());
        var R_M93 = parseFloat($("#Reference_M93").html());
        var R_N93 = parseFloat($("#Reference_N93").html());
        var R_O93 = parseFloat($("#Reference_O93").html());

        // assign value in P93
        if (P_C3 < R_F93)
        {
            $("#Reference_P93").html(R_G93);
        }
        else
        {
            $("#Reference_P93").html(0.00);
        }

        var R_P93 = parseFloat($("#Reference_P93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_P93").html((((R_P93 * (1 + R_O93)) * 100) - last).toFixed(2));


        // assign value in Q93
        if (P_C3 < R_F93)
        {
            $("#Reference_Q93").html((R_G93 - R_H93));
        }
        else
        {
            $("#Reference_Q93").html(0.00);
        }

        var R_Q93 = parseFloat($("#Reference_Q93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_N93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_Q93").html((((R_Q93 * (1 + R_O93)) * 100) - last).toFixed(2));


        // assign value in R93
        if (P_C3 < R_F93)
        {
            $("#Reference_R93").html((R_G93 + R_I93));
        }
        else
        {
            $("#Reference_R93").html(0.00);
        }

        var R_R93 = parseFloat($("#Reference_R93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_R93").html((((R_R93 * (1 + R_O93)) * 100) - last).toFixed(2));



        // assign value in S93
        if (P_C3 < R_F93)
        {
            $("#Reference_S93").html((R_G93 + R_K93));
        }
        else
        {
            $("#Reference_S93").html(0.00);
        }

        var R_S93 = parseFloat($("#Reference_S93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_S93").html((((R_S93 * (1 + R_O93)) * 100) - last).toFixed(2));


        // assign value in T93
        if (P_C3 < R_F93)
        {
            $("#Reference_T93").html((R_G93 + R_J93));
        }
        else
        {
            $("#Reference_T93").html(0.00);
        }

        var R_T93 = parseFloat($("#Reference_T93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_T93").html((((R_T93 * (1 + R_O93)) * 100) - last).toFixed(2));


        // assign value in U93
        if (P_C3 < R_F93)
        {
            $("#Reference_U93").html((R_G93 + R_J93 + R_K93));
        }
        else
        {
            $("#Reference_U93").html(0.00);
        }

        var R_U93 = parseFloat($("#Reference_U93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U93").html((((R_U93 * (1 + R_O93)) * 100) - last).toFixed(2));

        // assign value in V93
        if (P_C3 < R_F93)
        {
            $("#Reference_V93").html((R_G93 + R_J93 + R_K93 + R_I93));
        }
        else
        {
            $("#Reference_V93").html(0.00);
        }

        var R_V93 = parseFloat($("#Reference_V93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V93").html((((R_V93 * (1 + R_O93)) * 100) - last).toFixed(2));


        // assign value in U93
        if (P_C3 < R_F93)
        {
            $("#Reference_U93").html((R_G93 + R_J93 + R_K93));
        }
        else
        {
            $("#Reference_U93").html(0.00);
        }

        var R_U93 = parseFloat($("#Reference_U93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U93").html((((R_U93 * (1 + R_O93)) * 100) - last).toFixed(2));

        // assign value in V93
        if (P_C3 < R_F93)
        {
            $("#Reference_V93").html((R_G93 + R_J93 + R_K93 + R_I93));
        }
        else
        {
            $("#Reference_V93").html(0.00);
        }

        var R_V93 = parseFloat($("#Reference_V93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V93").html((((R_V93 * (1 + R_O93)) * 100) - last).toFixed(2));


        // assign value in U93
        if (P_C3 < R_F93)
        {
            $("#Reference_U93").html((R_G93 + R_J93 + R_K93));
        }
        else
        {
            $("#Reference_U93").html(0.00);
        }

        var R_U93 = parseFloat($("#Reference_U93").html());

        var last = '';
        if (P_C3 < R_F93)
        {
            last = R_M93;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U93").html((((R_U93 * (1 + R_O93)) * 100) - last).toFixed(2));


        // assign value in P94
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_P94").html(R_G94);
            }
            else
            {
                $("#Reference_P94").html(0.00);
            }
        }
        else
        {
            $("#Reference_P94").html(0.00);
        }

        var R_P94 = parseFloat($("#Reference_P94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_M94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P94").html((((R_P94 * (1 + R_O94)) * 100) - last).toFixed(2));


        // assign value in Q94
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_Q94").html((R_G94 - R_H94));
            }
            else
            {
                $("#Reference_Q94").html(0.00);
            }
        }
        else
        {
            $("#Reference_Q94").html(0.00);
        }

        var R_Q94 = parseFloat($("#Reference_Q94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_N94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q94").html((((R_Q94 * (1 + R_O94)) * 100) - last).toFixed(2));


        // assign value in R94
        var R_F94 = parseFloat($("#Reference_F94").html());
        var R_G94 = parseFloat($("#Reference_G94").html());
		var R_H94 = parseFloat($("#Reference_H94").html());
        var R_I94 = parseFloat($("#Reference_I94").html());
        var R_J94 = parseFloat($("#Reference_J94").html());
        var R_K94 = parseFloat($("#Reference_K94").html());
        var R_M94 = parseFloat($("#Reference_M94").html());
        var R_N94 = parseFloat($("#Reference_N94").html());
        var R_O94 = parseFloat($("#Reference_O94").html());

        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_R94").html((R_G94 + R_I94));
            }
            else
            {
                $("#Reference_R94").html(0.00);
            }
        }
        else
        {
            $("#Reference_R94").html(0.00);
        }

        var R_R94 = parseFloat($("#Reference_R94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_M94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R94").html((((R_R94 * (1 + R_O94)) * 100) - last).toFixed(2));



        // assign value in S94
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_S94").html((R_G94 + R_K94));
            }
            else
            {
                $("#Reference_S94").html(0.00);
            }
        }
        else
        {
            $("#Reference_S94").html(0.00);
        }

        var R_S94 = parseFloat($("#Reference_S94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_M94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S94").html((((R_S94 * (1 + R_O94)) * 100) - last).toFixed(2));


        // assign value in T94
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_T94").html((R_G94 + R_J94));
            }
            else
            {
                $("#Reference_T94").html(0.00);
            }
        }
        else
        {
            $("#Reference_T94").html(0.00);
        }

        var R_T94 = parseFloat($("#Reference_T94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_M94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T94").html((((R_T94 * (1 + R_O94)) * 100) - last).toFixed(2));


        // assign value in U94
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_U94").html((R_G94 + R_K94 + R_J94));
            }
            else
            {
                $("#Reference_U94").html(0.00);
            }
        }
        else
        {
            $("#Reference_U94").html(0.00);
        }

        var R_U94 = parseFloat($("#Reference_U94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_M94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U94").html((((R_U94 * (1 + R_O94)) * 100) - last).toFixed(2));


        // assign value in V94
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_V94").html((R_G94 + R_K94 + R_J94 + R_I94));
            }
            else
            {
                $("#Reference_V94").html(0.00);
            }
        }
        else
        {
            $("#Reference_V94").html(0.00);
        }

        var R_V94 = parseFloat($("#Reference_V94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_M94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V94").html((((R_V94 * (1 + R_O94)) * 100) - last).toFixed(2));


        // assign value in V94
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                $("#Reference_V94").html((R_G94 + R_K94 + R_J94 + R_I94));
            }
            else
            {
                $("#Reference_V94").html(0.00);
            }
        }
        else
        {
            $("#Reference_V94").html(0.00);
        }

        var R_V94 = parseFloat($("#Reference_V94").html());

        var last = '';
        if (P_C3 >= R_F93)
        {
            if (P_C3 <= R_F94)
            {
                last = R_M94;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V94").html((((R_V94 * (1 + R_O94)) * 100) - last).toFixed(2));



        // assign value in P95
        var R_F95 = parseFloat($("#Reference_F95").html());
        var R_G95 = parseFloat($("#Reference_G95").html());
        var R_H95 = parseFloat($("#Reference_H95").html());
        var R_I95 = parseFloat($("#Reference_I95").html());
        var R_J95 = parseFloat($("#Reference_J95").html());
        var R_K95 = parseFloat($("#Reference_K95").html());
        var R_M95 = parseFloat($("#Reference_M95").html());
        var R_N95 = parseFloat($("#Reference_N95").html());
        var R_O95 = parseFloat($("#Reference_O95").html());

        var last = '';
        var start = '';
        if (P_C3 > R_F94)
        {
            start = ((R_G94 + R_G95) * ((P_C3 - R_F94) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F94)
        {
            last = R_M95;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P95").html((((start * (1 + R_O95)) * 100) - last).toFixed(2));


        // assign value in Q95
        var last = '';
        var start = '';
        if (P_C3 > R_F94)
        {
            start = (((R_G94 - R_H95) + R_G95) * ((P_C3 - R_F94) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F94)
        {
            last = R_N95;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q95").html((((start * (1 + R_O95)) * 100) - last).toFixed(2));


        // assign value in R95
        var last = '';
        var start = '';
        if (P_C3 > R_F94)
        {
            start = ((R_G94 + R_I95 + R_G95) * ((P_C3 - R_F94) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F94)
        {
            last = R_M95;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R95").html((((start * (1 + R_O95)) * 100) - last).toFixed(2));


        // assign value in S95
        var last = '';
        var start = '';
        if (P_C3 > R_F94)
        {
            start = ((R_G94 + R_K95 + R_G95) * ((P_C3 - R_F94) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F94)
        {
            last = R_M95;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S95").html((((start * (1 + R_O95)) * 100) - last).toFixed(2));


        // assign value in T95
        var last = '';
        var start = '';
        if (P_C3 > R_F94)
        {
            start = ((R_G94 + R_J95 + R_G95) * ((P_C3 - R_F94) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F94)
        {
            last = R_M95;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T95").html((((start * (1 + R_O95)) * 100) - last).toFixed(2));


        // assign value in U95
        var last = '';
        var start = '';
        if (P_C3 > R_F94)
        {
            start = ((R_G94 + R_K95 + R_J95 + R_G95) * ((P_C3 - R_F94) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F94)
        {
            last = R_M95;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U95").html((((start * (1 + R_O95)) * 100) - last).toFixed(2));


        // assign value in V95
        var last = '';
        var start = '';
        if (P_C3 > R_F94)
        {
            start = ((R_G94 + R_K95 + R_J95 + R_I95 + R_G95) * ((P_C3 - R_F94) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F94)
        {
            last = R_M95;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V95").html((((start * (1 + R_O95)) * 100) - last).toFixed(2));

        /* end assign value in amount due third box */




	/* start assign value in amount due forth box */

        // assign value in P98
        var R_F98 = parseFloat($("#Reference_F98").html());
        var R_G98 = parseFloat($("#Reference_G98").html());
		var R_H98 = parseFloat($("#Reference_H98").html());
        var R_I98 = parseFloat($("#Reference_I98").html());
        var R_J98 = parseFloat($("#Reference_J98").html());
        var R_K98 = parseFloat($("#Reference_K98").html());
        var R_M98 = parseFloat($("#Reference_M98").html());
        var R_N98 = parseFloat($("#Reference_N98").html());
        var R_O98 = parseFloat($("#Reference_O98").html());

        if (P_C3 < R_F98)
        {
            $("#Reference_P98").html(R_G98);
        }
        else
        {
            $("#Reference_P98").html(0.00);
        }

        var R_P98 = parseFloat($("#Reference_P98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_P98").html((((R_P98 * (1 + R_O98)) * 100) - last).toFixed(2));


        // assign value in Q98
        if (P_C3 < R_F98)
        {
            $("#Reference_Q98").html((R_G98 - R_H98));
        }
        else
        {
            $("#Reference_Q98").html(0.00);
        }

        var R_Q98 = parseFloat($("#Reference_Q98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_N98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_Q98").html((((R_Q98 * (1 + R_O98)) * 100) - last).toFixed(2));


        // assign value in R98
        if (P_C3 < R_F98)
        {
            $("#Reference_R98").html((R_G98 + R_I98));
        }
        else
        {
            $("#Reference_R98").html(0.00);
        }

        var R_R98 = parseFloat($("#Reference_R98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_R98").html((((R_R98 * (1 + R_O98)) * 100) - last).toFixed(2));



        // assign value in S98
        if (P_C3 < R_F98)
        {
            $("#Reference_S98").html((R_G98 + R_K98));
        }
        else
        {
            $("#Reference_S98").html(0.00);
        }

        var R_S98 = parseFloat($("#Reference_S98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_S98").html((((R_S98 * (1 + R_O98)) * 100) - last).toFixed(2));


        // assign value in T98
        if (P_C3 < R_F98)
        {
            $("#Reference_T98").html((R_G98 + R_J98));
        }
        else
        {
            $("#Reference_T98").html(0.00);
        }

        var R_T98 = parseFloat($("#Reference_T98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_T98").html((((R_T98 * (1 + R_O98)) * 100) - last).toFixed(2));


        // assign value in U98
        if (P_C3 < R_F98)
        {
            $("#Reference_U98").html((R_G98 + R_J98 + R_K98));
        }
        else
        {
            $("#Reference_U98").html(0.00);
        }

        var R_U98 = parseFloat($("#Reference_U98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U98").html((((R_U98 * (1 + R_O98)) * 100) - last).toFixed(2));

        // assign value in V98
        if (P_C3 < R_F98)
        {
            $("#Reference_V98").html((R_G98 + R_J98 + R_K98 + R_I98));
        }
        else
        {
            $("#Reference_V98").html(0.00);
        }

        var R_V98 = parseFloat($("#Reference_V98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V98").html((((R_V98 * (1 + R_O98)) * 100) - last).toFixed(2));


        // assign value in U98
        if (P_C3 < R_F98)
        {
            $("#Reference_U98").html((R_G98 + R_J98 + R_K98));
        }
        else
        {
            $("#Reference_U98").html(0.00);
        }

        var R_U98 = parseFloat($("#Reference_U98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U98").html((((R_U98 * (1 + R_O98)) * 100) - last).toFixed(2));

        // assign value in V98
        if (P_C3 < R_F98)
        {
            $("#Reference_V98").html((R_G98 + R_J98 + R_K98 + R_I98));
        }
        else
        {
            $("#Reference_V98").html(0.00);
        }

        var R_V98 = parseFloat($("#Reference_V98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V98").html((((R_V98 * (1 + R_O98)) * 100) - last).toFixed(2));


        // assign value in U98
        if (P_C3 < R_F98)
        {
            $("#Reference_U98").html((R_G98 + R_J98 + R_K98));
        }
        else
        {
            $("#Reference_U98").html(0.00);
        }

        var R_U98 = parseFloat($("#Reference_U98").html());

        var last = '';
        if (P_C3 < R_F98)
        {
            last = R_M98;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U98").html((((R_U98 * (1 + R_O98)) * 100) - last).toFixed(2));


        // assign value in P99
        var R_F99 = parseFloat($("#Reference_F99").html());
        var R_G99 = parseFloat($("#Reference_G99").html());
		var R_H99 = parseFloat($("#Reference_H99").html());
        var R_I99 = parseFloat($("#Reference_I99").html());
        var R_J99 = parseFloat($("#Reference_J99").html());
        var R_K99 = parseFloat($("#Reference_K99").html());
        var R_M99 = parseFloat($("#Reference_M99").html());
        var R_N99 = parseFloat($("#Reference_N99").html());
        var R_O99 = parseFloat($("#Reference_O99").html());

        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_P99").html(R_G99);
            }
            else
            {
                $("#Reference_P99").html(0.00);
            }
        }
        else
        {
            $("#Reference_P99").html(0.00);
        }

        var R_P99 = parseFloat($("#Reference_P99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_M99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P99").html((((R_P99 * (1 + R_O99)) * 100) - last).toFixed(2));


        // assign value in Q99
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_Q99").html((R_G99 - R_H99));
            }
            else
            {
                $("#Reference_Q99").html(0.00);
            }
        }
        else
        {
            $("#Reference_Q99").html(0.00);
        }

        var R_Q99 = parseFloat($("#Reference_Q99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_N99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q99").html((((R_Q99 * (1 + R_O99)) * 100) - last).toFixed(2));


        // assign value in R99
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_R99").html((R_G99 + R_I99));
            }
            else
            {
                $("#Reference_R99").html(0.00);
            }
        }
        else
        {
            $("#Reference_R99").html(0.00);
        }

        var R_R99 = parseFloat($("#Reference_R99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_M99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R99").html((((R_R99 * (1 + R_O99)) * 100) - last).toFixed(2));



        // assign value in S99
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_S99").html((R_G99 + R_K99));
            }
            else
            {
                $("#Reference_S99").html(0.00);
            }
        }
        else
        {
            $("#Reference_S99").html(0.00);
        }

        var R_S99 = parseFloat($("#Reference_S99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_M99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S99").html((((R_S99 * (1 + R_O99)) * 100) - last).toFixed(2));


        // assign value in T99
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_T99").html((R_G99 + R_J99));
            }
            else
            {
                $("#Reference_T99").html(0.00);
            }
        }
        else
        {
            $("#Reference_T99").html(0.00);
        }

        var R_T99 = parseFloat($("#Reference_T99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_M99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T99").html((((R_T99 * (1 + R_O99)) * 100) - last).toFixed(2));


        // assign value in U99
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_U99").html((R_G99 + R_K99 + R_J99));
            }
            else
            {
                $("#Reference_U99").html(0.00);
            }
        }
        else
        {
            $("#Reference_U99").html(0.00);
        }

        var R_U99 = parseFloat($("#Reference_U99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_M99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U99").html((((R_U99 * (1 + R_O99)) * 100) - last).toFixed(2));


        // assign value in V99
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_V99").html((R_G99 + R_K99 + R_J99 + R_I99));
            }
            else
            {
                $("#Reference_V99").html(0.00);
            }
        }
        else
        {
            $("#Reference_V99").html(0.00);
        }

        var R_V99 = parseFloat($("#Reference_V99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_M99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V99").html((((R_V99 * (1 + R_O99)) * 100) - last).toFixed(2));


        // assign value in V99
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                $("#Reference_V99").html((R_G99 + R_K99 + R_J99 + R_I99));
            }
            else
            {
                $("#Reference_V99").html(0.00);
            }
        }
        else
        {
            $("#Reference_V99").html(0.00);
        }

        var R_V99 = parseFloat($("#Reference_V99").html());

        var last = '';
        if (P_C3 >= R_F98)
        {
            if (P_C3 <= R_F99)
            {
                last = R_M99;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V99").html((((R_V99 * (1 + R_O99)) * 100) - last).toFixed(2));



        // assign value in P100
        var R_F100 = parseFloat($("#Reference_F100").html());
        var R_G100 = parseFloat($("#Reference_G100").html());
        var R_H100 = parseFloat($("#Reference_H100").html());
        var R_I100 = parseFloat($("#Reference_I100").html());
        var R_J100 = parseFloat($("#Reference_J100").html());
        var R_K100 = parseFloat($("#Reference_K100").html());
        var R_M100 = parseFloat($("#Reference_M100").html());
        var R_N100 = parseFloat($("#Reference_N100").html());
        var R_O100 = parseFloat($("#Reference_O100").html());


        var last = '';
        var start = '';
        if (P_C3 > R_F99)
        {
            start = ((R_G99 + R_G100) * ((P_C3 - R_F99) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F99)
        {
            last = R_M100;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P100").html((((start * (1 + R_O100)) * 100) - last).toFixed(2));


        // assign value in Q100
        var last = '';
        var start = '';
        if (P_C3 > R_F99)
        {
            start = (((R_G99 - R_H100) + R_G100) * ((P_C3 - R_F99) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F99)
        {
            last = R_N100;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q100").html((((start * (1 + R_O100)) * 100) - last).toFixed(2));


        // assign value in R100
        var last = '';
        var start = '';
        if (P_C3 > R_F99)
        {
            start = ((R_G99 + R_I100 + R_G100) * ((P_C3 - R_F99) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F99)
        {
            last = R_M100;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R100").html((((start * (1 + R_O100)) * 100) - last).toFixed(2));


        // assign value in S100
        var last = '';
        var start = '';
        if (P_C3 > R_F99)
        {
            start = ((R_G99 + R_K100 + R_G100) * ((P_C3 - R_F99) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F99)
        {
            last = R_M100;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S100").html((((start * (1 + R_O100)) * 100) - last).toFixed(2));


        // assign value in T100
        var last = '';
        var start = '';
        if (P_C3 > R_F99)
        {
            start = ((R_G99 + R_J100 + R_G100) * ((P_C3 - R_F99) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F99)
        {
            last = R_M100;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T100").html((((start * (1 + R_O100)) * 100) - last).toFixed(2));


        // assign value in U100
        var last = '';
        var start = '';
        if (P_C3 > R_F99)
        {
            start = ((R_G99 + R_K100 + R_J100 + R_G100) * ((P_C3 - R_F99) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F99)
        {
            last = R_M100;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U100").html((((start * (1 + R_O100)) * 100) - last).toFixed(2));


        // assign value in V100
        var last = '';
        var start = '';
        if (P_C3 > R_F99)
        {
            start = ((R_G99 + R_K100 + R_J100 + R_I100 + R_G100) * ((P_C3 - R_F99) / 1000));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F99)
        {
            last = R_M100;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V100").html((((start * (1 + R_O100)) * 100) - last).toFixed(2));
        /* end assign value in amount due forth box */





        /* start assign value in amount due fifth box */

        // assign value in P103
        var R_F103 = parseFloat($("#Reference_F103").html());
        var R_G103 = parseFloat($("#Reference_G103").html());
		var R_H103 = parseFloat($("#Reference_H103").html());
        var R_I103 = parseFloat($("#Reference_I103").html());
        var R_J103 = parseFloat($("#Reference_J103").html());
        var R_K103 = parseFloat($("#Reference_K103").html());
        var R_M103 = parseFloat($("#Reference_M103").html());
        var R_N103 = parseFloat($("#Reference_N103").html());
        var R_O103 = parseFloat($("#Reference_O103").html());

        if (P_C3 < R_F103)
        {
            $("#Reference_P103").html(R_G103);
        }
        else
        {
            $("#Reference_P103").html(0.00);
        }

        var R_P103 = parseFloat($("#Reference_P103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_P103").html((((R_P103 * (1 + R_O103)) * 105) - last).toFixed(2));


        // assign value in Q103
        if (P_C3 < R_F103)
        {
            $("#Reference_Q103").html((R_G103 - R_H103));
        }
        else
        {
            $("#Reference_Q103").html(0.00);
        }

        var R_Q103 = parseFloat($("#Reference_Q103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_N103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_Q103").html((((R_Q103 * (1 + R_O103)) * 105) - last).toFixed(2));


        // assign value in R103
        if (P_C3 < R_F103)
        {
            $("#Reference_R103").html((R_G103 + R_I103));
        }
        else
        {
            $("#Reference_R103").html(0.00);
        }

        var R_R103 = parseFloat($("#Reference_R103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_R103").html((((R_R103 * (1 + R_O103)) * 105) - last).toFixed(2));



        // assign value in S103
        if (P_C3 < R_F103)
        {
            $("#Reference_S103").html((R_G103 + R_K103));
        }
        else
        {
            $("#Reference_S103").html(0.00);
        }

        var R_S103 = parseFloat($("#Reference_S103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_S103").html((((R_S103 * (1 + R_O103)) * 105) - last).toFixed(2));


        // assign value in T103
        if (P_C3 < R_F103)
        {
            $("#Reference_T103").html((R_G103 + R_J103));
        }
        else
        {
            $("#Reference_T103").html(0.00);
        }

        var R_T103 = parseFloat($("#Reference_T103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_T103").html((((R_T103 * (1 + R_O103)) * 105) - last).toFixed(2));


        // assign value in U103
        if (P_C3 < R_F103)
        {
            $("#Reference_U103").html((R_G103 + R_J103 + R_K103));
        }
        else
        {
            $("#Reference_U103").html(0.00);
        }

        var R_U103 = parseFloat($("#Reference_U103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U103").html((((R_U103 * (1 + R_O103)) * 105) - last).toFixed(2));

        // assign value in V103
        if (P_C3 < R_F103)
        {
            $("#Reference_V103").html((R_G103 + R_J103 + R_K103 + R_I103));
        }
        else
        {
            $("#Reference_V103").html(0.00);
        }

        var R_V103 = parseFloat($("#Reference_V103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V103").html((((R_V103 * (1 + R_O103)) * 105) - last).toFixed(2));


        // assign value in U103
        if (P_C3 < R_F103)
        {
            $("#Reference_U103").html((R_G103 + R_J103 + R_K103));
        }
        else
        {
            $("#Reference_U103").html(0.00);
        }

        var R_U103 = parseFloat($("#Reference_U103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U103").html((((R_U103 * (1 + R_O103)) * 105) - last).toFixed(2));

        // assign value in V103
        if (P_C3 < R_F103)
        {
            $("#Reference_V103").html((R_G103 + R_J103 + R_K103 + R_I103));
        }
        else
        {
            $("#Reference_V103").html(0.00);
        }

        var R_V103 = parseFloat($("#Reference_V103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_V103").html((((R_V103 * (1 + R_O103)) * 105) - last).toFixed(2));


        // assign value in U103
        if (P_C3 < R_F103)
        {
            $("#Reference_U103").html((R_G103 + R_J103 + R_K103));
        }
        else
        {
            $("#Reference_U103").html(0.00);
        }

        var R_U103 = parseFloat($("#Reference_U103").html());

        var last = '';
        if (P_C3 < R_F103)
        {
            last = R_M103;
        }
        else
        {
            last = 0.00;
        }
        $("#Reference_U103").html((((R_U103 * (1 + R_O103)) * 105) - last).toFixed(2));


        // assign value in P104
        var R_F104 = parseFloat($("#Reference_F104").html());
        var R_G104 = parseFloat($("#Reference_G104").html());
		var R_H104 = parseFloat($("#Reference_H104").html());
        var R_I104 = parseFloat($("#Reference_I104").html());
        var R_J104 = parseFloat($("#Reference_J104").html());
        var R_K104 = parseFloat($("#Reference_K104").html());
        var R_M104 = parseFloat($("#Reference_M104").html());
        var R_N104 = parseFloat($("#Reference_N104").html());
        var R_O104 = parseFloat($("#Reference_O104").html());

        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_P104").html(R_G104);
            }
            else
            {
                $("#Reference_P104").html(0.00);
            }
        }
        else
        {
            $("#Reference_P104").html(0.00);
        }

        var R_P104 = parseFloat($("#Reference_P104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_M104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P104").html((((R_P104 * (1 + R_O104)) * 105) - last).toFixed(2));


        // assign value in Q104
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_Q104").html((R_G104 - R_H104));
            }
            else
            {
                $("#Reference_Q104").html(0.00);
            }
        }
        else
        {
            $("#Reference_Q104").html(0.00);
        }

        var R_Q104 = parseFloat($("#Reference_Q104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_N104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q104").html((((R_Q104 * (1 + R_O104)) * 105) - last).toFixed(2));


        // assign value in R104
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_R104").html((R_G104 + R_I104));
            }
            else
            {
                $("#Reference_R104").html(0.00);
            }
        }
        else
        {
            $("#Reference_R104").html(0.00);
        }

        var R_R104 = parseFloat($("#Reference_R104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_M104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R104").html((((R_R104 * (1 + R_O104)) * 105) - last).toFixed(2));



        // assign value in S104
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_S104").html((R_G104 + R_K104));
            }
            else
            {
                $("#Reference_S104").html(0.00);
            }
        }
        else
        {
            $("#Reference_S104").html(0.00);
        }

        var R_S104 = parseFloat($("#Reference_S104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_M104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S104").html((((R_S104 * (1 + R_O104)) * 105) - last).toFixed(2));


        // assign value in T104
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_T104").html((R_G104 + R_J104));
            }
            else
            {
                $("#Reference_T104").html(0.00);
            }
        }
        else
        {
            $("#Reference_T104").html(0.00);
        }

        var R_T104 = parseFloat($("#Reference_T104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_M104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T104").html((((R_T104 * (1 + R_O104)) * 105) - last).toFixed(2));


        // assign value in U104
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_U104").html((R_G104 + R_K104 + R_J104));
            }
            else
            {
                $("#Reference_U104").html(0.00);
            }
        }
        else
        {
            $("#Reference_U104").html(0.00);
        }

        var R_U104 = parseFloat($("#Reference_U104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_M104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U104").html((((R_U104 * (1 + R_O104)) * 105) - last).toFixed(2));


        // assign value in V104
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_V104").html((R_G104 + R_K104 + R_J104 + R_I104));
            }
            else
            {
                $("#Reference_V104").html(0.00);
            }
        }
        else
        {
            $("#Reference_V104").html(0.00);
        }

        var R_V104 = parseFloat($("#Reference_V104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_M104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V104").html((((R_V104 * (1 + R_O104)) * 105) - last).toFixed(2));


        // assign value in V104
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                $("#Reference_V104").html((R_G104 + R_K104 + R_J104 + R_I104));
            }
            else
            {
                $("#Reference_V104").html(0.00);
            }
        }
        else
        {
            $("#Reference_V104").html(0.00);
        }

        var R_V104 = parseFloat($("#Reference_V104").html());

        var last = '';
        if (P_C3 >= R_F103)
        {
            if (P_C3 <= R_F104)
            {
                last = R_M104;
            }
            else
            {
                last = 0.00;
            }
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V104").html((((R_V104 * (1 + R_O104)) * 105) - last).toFixed(2));



        // assign value in P105
        var R_F105 = parseFloat($("#Reference_F105").html());
        var R_G105 = parseFloat($("#Reference_G105").html());
        var R_H105 = parseFloat($("#Reference_H105").html());
        var R_I105 = parseFloat($("#Reference_I105").html());
        var R_J105 = parseFloat($("#Reference_J105").html());
        var R_K105 = parseFloat($("#Reference_K105").html());
        var R_M105 = parseFloat($("#Reference_M105").html());
        var R_N105 = parseFloat($("#Reference_N105").html());
        var R_O105 = parseFloat($("#Reference_O105").html());


        var last = '';
        var start = '';
        if (P_C3 > R_F104)
        {
            start = ((R_G104 + R_G105) * ((P_C3 - R_F104) / 1050));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F104)
        {
            last = R_M105;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_P105").html((((start * (1 + R_O105)) * 105) - last).toFixed(2));


        // assign value in Q105
        var last = '';
        var start = '';
        if (P_C3 > R_F104)
        {
            start = (((R_G104 - R_H105) + R_G105) * ((P_C3 - R_F104) / 1050));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F104)
        {
            last = R_N105;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_Q105").html((((start * (1 + R_O105)) * 105) - last).toFixed(2));


        // assign value in R105
        var last = '';
        var start = '';
        if (P_C3 > R_F104)
        {
            start = ((R_G104 + R_I105 + R_G105) * ((P_C3 - R_F104) / 1050));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F104)
        {
            last = R_M105;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_R105").html((((start * (1 + R_O105)) * 105) - last).toFixed(2));


        // assign value in S105
        var last = '';
        var start = '';
        if (P_C3 > R_F104)
        {
            start = ((R_G104 + R_K105 + R_G105) * ((P_C3 - R_F104) / 1050));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F104)
        {
            last = R_M105;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_S105").html((((start * (1 + R_O105)) * 105) - last).toFixed(2));


        // assign value in T105
        var last = '';
        var start = '';
        if (P_C3 > R_F104)
        {
            start = ((R_G104 + R_J105 + R_G105) * ((P_C3 - R_F104) / 1050));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F104)
        {
            last = R_M105;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_T105").html((((start * (1 + R_O105)) * 105) - last).toFixed(2));


        // assign value in U105
        var last = '';
        var start = '';
        if (P_C3 > R_F104)
        {
            start = ((R_G104 + R_K105 + R_J105 + R_G105) * ((P_C3 - R_F104) / 1050));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F104)
        {
            last = R_M105;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_U105").html((((start * (1 + R_O105)) * 105) - last).toFixed(2));


        // assign value in V105
        var last = '';
        var start = '';
        if (P_C3 > R_F104)
        {
            start = ((R_G104 + R_K105 + R_J105 + R_I105 + R_G105) * ((P_C3 - R_F104) / 1050));
        }
        else
        {
            start = 0.00;
        }

        if (P_C3 > R_F104)
        { 
            last = R_M105;
        }
        else
        {
            last = 0.00;
        }

        $("#Reference_V105").html((((start * (1 + R_O105)) * 105) - last).toFixed(2));
        /* end assign value in amount due fifth box */
		/* end reference tab value---*/
		
		
		
		
		// assign value to G15	
		var P_C14 = parseFloat($("#Purchase_C14 option:selected").val());
        var P_C15 = parseFloat($("#Purchase_C15 option:selected").val());
		
        if (P_C14 == 1)
        {	
            if (P_C3 > R_B37)
            {	
                var G15 = ((R_E38 * ((P_C3 - R_B37) / 1000)) + R_E37).toFixed(2);
                $("#Purchase_G15").html(G15);
            }
            else if (P_C3 >= R_B36)
            {	
                $("#Purchase_G15").html(R_E37.toFixed(2));
            }
            else
            {	
                $("#Purchase_G15").html(R_E36.toFixed(2));
            }
			
        }
        else
        {	
            if (P_C15 == 1)
            {
                if (P_C3 > R_B37)
                {	
                    var G15 = (((R_C38 * ((P_C3 - R_B37) / 1000)) + R_C37).toFixed(2)).toFixed(2);
                    $("#Purchase_G15").html(G15);
                }
                else
                {	
                    if (P_C3 >= R_B36)
                    {
                        $("#Purchase_G15").html(R_C37.toFixed(2));
                    }
                    else
                    {
                        $("#Purchase_G15").html(R_C36.toFixed(2));
                    }
                }
            }
            else
            {	
                if (P_C3 > R_B37)
                {	
                    var G15 = (((R_D38 * ((P_C3 - R_B37) / 1000)) + R_D37).toFixed(2));
                    $("#Purchase_G15").html(G15);
                }
                else
                {	
                    if (P_C3 >= R_B36)
                    {
                        $("#Purchase_G15").html(R_D37.toFixed(2));
                    }
                    else
                    {
                        $("#Purchase_G15").html(R_D36.toFixed(2));
                    }
                }
            }
        }

		

		var P_G14 = parseFloat($("#Purchase_G14").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());
		var P_G17 = parseFloat($("#Purchase_G17").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());
		var P_G20 = parseFloat($("#Purchase_G20").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to G22
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));
		
		
		var P_C7 = parseFloat($("#Purchase_C7 option:selected").val());
        var P_C8 = parseFloat($("#Purchase_C8 option:selected").val());
        var P_C9 = parseFloat($("#Purchase_C9").val());
		var P_C10 = parseFloat($("#Purchase_C10").val());


        // assign value in purchase F8
        if (P_C8 == 1)
        {
            $("#Purchase_F8").html(R_E54);
        }
        else
        {
            $("#Purchase_F8").html(R_E61);
            $("#Purchase_F10").html(0.00);
            $("#Purchase_G10").html(0.00);
        }


        // assign value in purchase G8
        if (P_C7 == 1)
        {
            if (P_C8 == 1)
			{	
                $("#Purchase_G8").html(R_E67);
				
				
				// assign value to G10	
				if (R_E67 > R_B68)
					$("#Purchase_G10").html((P_C10 * R_B68) / 100);
				else
					$("#Purchase_G10").html((P_C10 * R_E67) / 100);
			}
            else
			{
                $("#Purchase_G8").html(R_E75);
				$("#Purchase_G10").html(0.00);
			}
        }
        else
		{
            $("#Purchase_G8").html(0.00);
			$("#Purchase_G10").html(0.00);
		}


        

		// assign value to F10
		if (P_C8 == 1) 
		{
			if (R_E54 > R_B55)
				$("#Purchase_F10").html((P_C10 * R_B55) / 100);
			else
				$("#Purchase_F10").html((P_C10 * R_E54) / 100);
		}
		else
			$("#Purchase_F10").html(0.00);

 
               
        
        // assign value to F11, G11
        var P_F8 = parseFloat($("#Purchase_F8").html());
        var P_F10 = parseFloat($("#Purchase_F10").html());
        var P_G8 = parseFloat($("#Purchase_G8").html());
        var P_G10 = parseFloat($("#Purchase_G10").html());

		$("#Purchase_F11").html((P_F8 - P_F10).toFixed(2));
        $("#Purchase_G11").html((P_G8 - P_G10).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
    /*------end assign value to purchase 3rd & 4th row---*/
    
	
   /*------start assign value to purchase 7 row---*/
    $("#Purchase_C7").change(function () {
        //console.log($(this).val()); 
        if ($(this).val() == 1)
        { 
            if (parseFloat($("#Purchase_C8 option:selected").val()) == 1)
            {
                $("#Purchase_G8").html(R_E67);
            }
            else
            {
                $("#Purchase_G8").html(R_E75);
            }
        }
        if ($(this).val() == 0)
        {
            $("#Purchase_G8").html(0)
        }
        
      
            var P_C10 = parseFloat($("#Purchase_C10").val());
            var P_C8 = parseFloat($("#Purchase_C8 option:selected").val());
            var P_C7 = parseFloat($("#Purchase_C7").val());
           
            if($("#Purchase_C7").val()==1)
            {   
               

			// assign value to F10
                if (P_C8 == 1) 
                {
                    if (R_E54 > R_B55)
                        $("#Purchase_F10").html((P_C10 * R_B55) / 100);
                    else
                        $("#Purchase_F10").html((P_C10 * R_E54) / 100);
                }
                else
                    $("#Purchase_F10").html(0.00);

			}
                // assign value to G10	
                if (P_C7 == 1)
                {
                    if (P_C8 == 1)
                    {
                        if (R_E67 > R_B68)
                            $("#Purchase_G10").html((P_C10 * R_B68) / 100);
                        else
                            $("#Purchase_G10").html((P_C10 * R_E67) / 100);
                    }
                    else
                    {
                        $("#Purchase_G10").html(0.00);
                    }
                }
                else
                {
                    $("#Purchase_G10").html(0.00);
                }
				
		// assign value to F11, G11
        var P_F8 = parseFloat($("#Purchase_F8").html());
        var P_F10 = parseFloat($("#Purchase_F10").html());
        var P_G8 = parseFloat($("#Purchase_G8").html());
        var P_G10 = parseFloat($("#Purchase_G10").html());

		$("#Purchase_F11").html((P_F8 - P_F10).toFixed(2));
        $("#Purchase_G11").html((P_G8 - P_G10).toFixed(2));	
		
		$('td.number').number( true, 2,'.','' );
        
    });
    /*------start assign value to purchase 8,9,10,11 row---*/
    $("#Purchase_C8").change(function () {
        var P_C7 = parseFloat($("#Purchase_C7 option:selected").val());
        var P_C8 = parseFloat($(this).val());
        var P_C9 = parseFloat($("#Purchase_C9").val());
		var P_C10 = parseFloat($("#Purchase_C10").val());


        // assign value in purchase F8
        if (P_C8 == 1)
        {
            $("#Purchase_F8").html(R_E54);
        }
        else
        {
            $("#Purchase_F8").html(R_E61);
            $("#Purchase_F10").html(0.00);
            $("#Purchase_G10").html(0.00);
        }


        // assign value in purchase G8
        if (P_C7 == 1)
        {
            if (P_C8 == 1)
			{	
                $("#Purchase_G8").html(R_E67);
				
				
				// assign value to G10	
				if (R_E67 > R_B68)
					$("#Purchase_G10").html((P_C10 * R_B68) / 100);
				else
					$("#Purchase_G10").html((P_C10 * R_E67) / 100);
			}
            else
			{
                $("#Purchase_G8").html(R_E75);
				$("#Purchase_G10").html(0.00);
			}
        }
        else
		{
            $("#Purchase_G8").html(0.00);
			$("#Purchase_G10").html(0.00);
		}


        

		// assign value to F10
		if (P_C8 == 1) 
		{
			if (R_E54 > R_B55)
				$("#Purchase_F10").html((P_C10 * R_B55) / 100);
			else
				$("#Purchase_F10").html((P_C10 * R_E54) / 100);
		}
		else
			$("#Purchase_F10").html(0.00);

 
               
        
        // assign value to F11, G11
        var P_F8 = parseFloat($("#Purchase_F8").html());
        var P_F10 = parseFloat($("#Purchase_F10").html());
        var P_G8 = parseFloat($("#Purchase_G8").html());
        var P_G10 = parseFloat($("#Purchase_G10").html());

		$("#Purchase_F11").html((P_F8 - P_F10).toFixed(2));
        $("#Purchase_G11").html((P_G8 - P_G10).toFixed(2));
     
		$('td.number').number( true, 2,'.','' );
    });


    // assign value in purchase D9
    $("#Purchase_C9").keyup(function () {
        var P_C9 = parseFloat($("#Purchase_C9").val());
        if (P_C9 <= 6)
        {  $("#Purchase_D9").html(P_C9 * R_B15);
            $('td.hide1001').number( true, 2,'.','' );
        }
        else
            $("#Purchase_D9").html("Call Us To Discuss");
		
		// assign value to D11
		var P_D9 = parseFloat($("#Purchase_D9").html());
		$("#Purchase_D11").html(P_D9);
		$('td.number').number( true, 2,'.','' );		
    });


    // assign value in purchase F10, G10
    $("#Purchase_C10").keyup(function () {

        var P_C10 = parseFloat($(this).val());
        var P_C8 = parseFloat($("#Purchase_C8 option:selected").val());
        var P_C7 = parseFloat($("#Purchase_C7").val());
        var P_D9 = parseFloat($("#Purchase_D9").html());

        // assign value to F10
        if (P_C8 == 1)
        {
            if (R_E54 > R_B55)
                $("#Purchase_F10").html((P_C10 * R_B55) / 100);
            else
                $("#Purchase_F10").html((P_C10 * R_E54) / 100);
        }
        else
            $("#Purchase_F10").html(0.00);


        // assign value to G10	
        if (P_C7 == 1)
        {
            if (P_C8 == 1)
            {
                if (R_E67 > R_B68)
                    $("#Purchase_G10").html((P_C10 * R_B68) / 100);
                else
                    $("#Purchase_G10").html((P_C10 * R_E67) / 100);
            }
            else
            {
                $("#Purchase_G10").html(0.00);
            }
        }
        else
        {
            $("#Purchase_G10").html(0.00);
        }
		
		// assign value to F11, G11
        var P_F8 = parseFloat($("#Purchase_F8").html());
        var P_F10 = parseFloat($("#Purchase_F10").html());
        var P_G8 = parseFloat($("#Purchase_G8").html());
        var P_G10 = parseFloat($("#Purchase_G10").html());
		
		$("#Purchase_F11").html((P_F8 - P_F10).toFixed(2));
        $("#Purchase_G11").html((P_G8 - P_G10).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    /*------end assign value to purchase 8,9,10,11 row---*/


    /*------start assign value to purchase 14 to 21 row---*/
    // assign value in purchase G14
    $("#Purchase_C14").change(function () {
        var P_C14 = parseFloat($(this).val());
		var P_C3 = parseFloat($("#Purchase_C3").val());
		var P_C15 = parseFloat($("#Purchase_C16").val());
        var P_C16 = parseFloat($("Purchase_C16 option:selected").val());


        // assign value to G14	
        if (P_C14 == 1)
        {
            $("#Purchase_G14").html(R_L36);
			
			// assign value to D15	
			if (P_C15 == 1)
            {
                $("#Purchase_D15").html(R_B13);
            }
            else
            {
                $("#Purchase_D15").html(0.00);
            }
			
			// assign value to G15	
			if (P_C3 > R_B37)
            {
                var G15 = ((R_E38 * ((P_C3 - R_B37) / 1000)) + R_E37);
                $("#Purchase_G15").html(G15);
            }
            else if (P_C3 >= R_B36)
            {
                $("#Purchase_G15").html(R_E37);
            }
            else
            {
                $("#Purchase_G15").html(R_E36);
            }
			
        }
        else
        {
            if (P_C16 == 1)
            {
                $("#Purchase_G14").html(R_J36);
            }
            else
            {
                $("#Purchase_G14").html(R_K36);
            }
			
			// assign value to D15	
			$("#Purchase_D15").html(0.00);
			
			// assign value to G15	
			if (P_C15 == 1)
            {
                if (P_C3 > R_B37)
                {
                    var G15 = (((R_C38 * ((P_C3 - R_B37) / 1000)) + R_C37).toFixed(2));
                    $("#Purchase_G15").html(G15);
                }
                else
                {
                    if (P_C3 >= R_B36)
                    {
                        $("#Purchase_G15").html(R_C37);
                    }
                    else
                    {
                        $("#Purchase_G15").html(R_C36);
                    }
                }
            }
            else
            {
                if (P_C3 > R_B37)
                {
                    var G15 = (((R_D38 * ((P_C3 - R_B37) / 1000)) + R_D37).toFixed(2));
                    $("#Purchase_G15").html(G15);
                }
                else
                {
                    if (P_C3 >= R_B36)
                    {
                        $("#Purchase_G15").html(R_D37);
                    }
                    else
                    {
                        $("#Purchase_G15").html(R_D36);
                    }
                }
            }

        }
		
		// assign value in G14 on change of C16
        var P_G14 = parseFloat($("#Purchase_G14").html()).toFixed(2);
        var divideVal = (100 + R_M36);
        var final = ((parseFloat(P_G14)/parseFloat(divideVal))*100).toFixed(2);
       
        $("#Purchase_G14").html(final);

		var P_G14 = parseFloat($("#Purchase_G14").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());
		var P_G17 = parseFloat($("#Purchase_G17").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());
		var P_G20 = parseFloat($("#Purchase_G20").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to G22
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));
        $('td.number').number( true, 2,'.','' );
    });


    // assign value in purchase D15, G15, G14
    $("#Purchase_C15").change(function () {	
        var P_C15 = parseFloat($(this).val());
        var P_C14 = parseFloat($("#Purchase_C14 option:selected").val());
        var P_C3 = parseFloat($("#Purchase_C3").val());

        // assign value to D15	
        if (P_C14 == 1)
        {	
            if (P_C15 == 1)
            {
                $("#Purchase_D15").html(R_B13);
            }
            else
            {
                $("#Purchase_D15").html(0.00);
            }
			
			if (P_C3 > R_B37)
            {	
                var G15 = ((R_E38 * ((P_C3 - R_B37) / 1000)) + R_E37);
                $("#Purchase_G15").html(G15);
            }
            else if (P_C3 >= R_B36)
            {	
                $("#Purchase_G15").html(R_E37);
            }
            else
            {	
                $("#Purchase_G15").html(R_E36);
            }
			
        }
        else
        {	
            $("#Purchase_D15").html(0.00);
			
			if (P_C15 == 1)
            {
                if (P_C3 > R_B37)
                {	
                    var G15 = (((R_C38 * ((P_C3 - R_B37) / 1000)) + R_C37).toFixed(2));
                    $("#Purchase_G15").html(G15);
                }
                else
                {	
                    if (P_C3 >= R_B36)
                    {
                        $("#Purchase_G15").html(R_C37);
                    }
                    else
                    {
                        $("#Purchase_G15").html(R_C36);
                    }
                }
            }
            else
            {	
                if (P_C3 > R_B37)
                {	
                    var G15 = (((R_D38 * ((P_C3 - R_B37) / 1000)) + R_D37).toFixed(2));
                    $("#Purchase_G15").html(G15);
                }
                else
                {	
                    if (P_C3 >= R_B36)
                    {
                        $("#Purchase_G15").html(R_D37);
                    }
                    else
                    {
                        $("#Purchase_G15").html(R_D36);
                    }
                }
            }
        }

		

		var P_G14 = parseFloat($("#Purchase_G14").html());
		
		var P_D15 = parseFloat($("#Purchase_D15").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());

		
		var P_G16 = parseFloat($("#Purchase_G16").html());

		var P_G17 = parseFloat($("#Purchase_G17").html());

		var P_D18 = parseFloat($("#Purchase_D18").html());
		
		var P_G18 = parseFloat($("#Purchase_G18").html());

		var P_D19 = parseFloat($("#Purchase_D19").html());
		
		var P_G19 = parseFloat($("#Purchase_G19").html());

		var P_G20 = parseFloat($("#Purchase_G20").html());

		var P_D21 = parseFloat($("#Purchase_D21").html());
		
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_D22").html((P_D15 + P_D18 + P_D19 + P_D21).toFixed(2));
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));
	
		$('td.number').number( true, 2,'.','' );
    });



    // assign value in purchase G16, F16, E16
    $("#Purchase_C16").change(function () {
        var P_C16 = parseFloat($(this).val());
        var P_C14 = parseFloat($("#Purchase_C14 option:selected").val());
		var P_C18 = parseFloat($("#Purchase_C18 option:selected").val());
		var P_C19 = parseFloat($("#Purchase_C19 option:selected").val());
		var P_C20 = parseFloat($("#Purchase_C20 option:selected").val());
		var P_C21 = parseFloat($("#Purchase_C21 option:selected").val());
         
        // assign value to D15	
        if (P_C16 == 1)
        { 
            $("#Purchase_E16").html(R_B3);
            $("#Purchase_F16").html(R_B4);
            $("#Purchase_G16").html(0.00);
			
	    if (P_C18 == 1)
            {
                $("#Purchase_D18").html(R_B9);
                $("#Purchase_E18").html(R_B3);
                $("#Purchase_F18").html(R_B4);
                $("#Purchase_G18").html(R_G36);
            }
            else
            {
                $("#Purchase_D18").html(0.00);
                $("#Purchase_E18").html(0.00);
                $("#Purchase_F18").html(0.00);
                $("#Purchase_G18").html(0.00);
            }
			
	    if (P_C19 == 1)
            {
                $("#Purchase_D19").html(R_B10);
                $("#Purchase_E19").html(R_B3);
                $("#Purchase_F19").html(R_B4);
                $("#Purchase_G19").html(R_I36);
		$("#Purchase_G17").html(R_G36);		
				if (P_C20 == 1)
                    $("#Purchase_G20").html(R_H36);
                else
                    $("#Purchase_G20").html(0.00);
				
				if (P_C21 == 1)
                {
                    $("#Purchase_D21").html(R_B9);
                    $("#Purchase_E21").html(R_B3);
                    $("#Purchase_F21").html(R_B4);
                    $("#Purchase_G21").html(R_G36);
                }
                else
                {
                    $("#Purchase_D21").html(0.00);
                    $("#Purchase_E21").html(0.00);
                    $("#Purchase_F21").html(0.00);
                    $("#Purchase_G21").html(0.00);
                }
            }
            else
            {
                $("#Purchase_D19").html(0.00);
                $("#Purchase_E19").html(0.00);
                $("#Purchase_F19").html(0.00);
                $("#Purchase_G19").html(0.00);
				$("#Purchase_G20").html(0.00);
				
				$("#Purchase_D21").html(0.00);
                $("#Purchase_E21").html(0.00);
                $("#Purchase_F21").html(0.00);
                $("#Purchase_G21").html(0.00);
            }
		}
        else
        { 
			$("#Purchase_G17").html(0.00);
            $("#Purchase_D18").html(0.00);
            $("#Purchase_E18").html(0.00);
            $("#Purchase_F18").html(0.00);
            $("#Purchase_G18").html(0.00);
            
            $("#Purchase_D19").html(0.00);
            $("#Purchase_E19").html(0.00);
            $("#Purchase_F19").html(0.00);
            $("#Purchase_G19").html(0.00);
            
            $("#Purchase_G20").html(0.00);
            $("#Purchase_D21").html(0.00);
            $("#Purchase_E21").html(0.00);
            $("#Purchase_F21").html(0.00);
            $("#Purchase_G21").html(0.00);
             
            $("#Purchase_E16").html(0.00);
            $("#Purchase_F16").html(0.00);
            $("#Purchase_G16").html(R_F36);    
        }
		
		var P_G14 = parseFloat($("#Purchase_G14").html());
		
		var P_D15 = parseFloat($("#Purchase_D15").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());

		var P_E16 = parseFloat($("#Purchase_E16").html());
		var P_F16 = parseFloat($("#Purchase_F16").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());

		var P_G17 = parseFloat($("#Purchase_G17").html());

		var P_D18 = parseFloat($("#Purchase_D18").html());
		var P_E18 = parseFloat($("#Purchase_E18").html());
		var P_F18 = parseFloat($("#Purchase_F18").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());

		var P_D19 = parseFloat($("#Purchase_D19").html());
		var P_E19 = parseFloat($("#Purchase_E19").html());
		var P_F19 = parseFloat($("#Purchase_F19").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());

		var P_G20 = parseFloat($("#Purchase_G20").html());

		var P_D21 = parseFloat($("#Purchase_D21").html());
		var P_E21 = parseFloat($("#Purchase_E21").html());
		var P_F21 = parseFloat($("#Purchase_F21").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_D22").html((P_D15 + P_D18 + P_D19 + P_D21).toFixed(2));
		$("#Purchase_E22").html((P_E16 + P_E18 + P_E19 + P_E21).toFixed(2));
		$("#Purchase_F22").html((P_F16 + P_F18 + P_F19 + P_F21).toFixed(2));
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });



    // on change C17 assign value in purchase G17
    $("#Purchase_C17").change(function () {
        var P_C17 = parseFloat($(this).val());
        var P_C16 = parseFloat($("#Purchase_C16 option:selected").val());

        // assign value to G17	
        if (P_C16 == 1)
        {
            if (P_C17 == 1)
                $("#Purchase_G17").html(R_H36);
            else
                $("#Purchase_G17").html(0.00);
        }
        else
        {
            $("#Purchase_G17").html(0.00);
        }
		
		var P_G14 = parseFloat($("#Purchase_G14").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());
		var P_G17 = parseFloat($("#Purchase_G17").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());
		var P_G20 = parseFloat($("#Purchase_G20").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C18 assign value in purchase G18
    $("#Purchase_C18").change(function () {
        var P_C18 = parseFloat($(this).val());
        var P_C16 = parseFloat($("#Purchase_C16 option:selected").val());

        //assign value to D18, E18, F18
        if (P_C16 == 1)
        {
            if (P_C18 == 1)
            {
                $("#Purchase_D18").html(R_B9);
                $("#Purchase_E18").html(R_B3);
                $("#Purchase_F18").html(R_B4);
                $("#Purchase_G18").html(R_G36);
            }
            else
            {
                $("#Purchase_D18").html(0.00);
                $("#Purchase_E18").html(0.00);
                $("#Purchase_F18").html(0.00);
                $("#Purchase_G18").html(0.00);
            }
        }
        else
        {
            $("#Purchase_D18").html(0.00);
            $("#Purchase_E18").html(0.00);
            $("#Purchase_F18").html(0.00);
            $("#Purchase_G18").html(0.00);
        }
		
		var P_G14 = parseFloat($("#Purchase_G14").html());
		
		var P_D15 = parseFloat($("#Purchase_D15").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());

		var P_E16 = parseFloat($("#Purchase_E16").html());
		var P_F16 = parseFloat($("#Purchase_F16").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());

		var P_G17 = parseFloat($("#Purchase_G17").html());

		var P_D18 = parseFloat($("#Purchase_D18").html());
		var P_E18 = parseFloat($("#Purchase_E18").html());
		var P_F18 = parseFloat($("#Purchase_F18").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());

		var P_D19 = parseFloat($("#Purchase_D19").html());
		var P_E19 = parseFloat($("#Purchase_E19").html());
		var P_F19 = parseFloat($("#Purchase_F19").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());

		var P_G20 = parseFloat($("#Purchase_G20").html());

		var P_D21 = parseFloat($("#Purchase_D21").html());
		var P_E21 = parseFloat($("#Purchase_E21").html());
		var P_F21 = parseFloat($("#Purchase_F21").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_D22").html((P_D15 + P_D18 + P_D19 + P_D21).toFixed(2));
		$("#Purchase_E22").html((P_E16 + P_E18 + P_E19 + P_E21).toFixed(2));
		$("#Purchase_F22").html((P_F16 + P_F18 + P_F19 + P_F21).toFixed(2));
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });



    // on change C19 
    $("#Purchase_C19").change(function () {
        var P_C19 = parseFloat($(this).val());
        var P_C16 = parseFloat($("#Purchase_C16 option:selected").val());

        //assign value to D19, E19, F19, G19
        if (P_C16 == 1)
        {
            if (P_C19 == 1)
            {
                $("#Purchase_D19").html(R_B10);
                $("#Purchase_E19").html(R_B3);
                $("#Purchase_F19").html(R_B4);
                $("#Purchase_G19").html(R_I36);
            }
            else
            {
                $("#Purchase_D19").html(0.00);
                $("#Purchase_E19").html(0.00);
                $("#Purchase_F19").html(0.00);
                $("#Purchase_G19").html(0.00);
            }
        }
        else
        {
            $("#Purchase_D19").html(0.00);
            $("#Purchase_E19").html(0.00);
            $("#Purchase_F19").html(0.00);
            $("#Purchase_G19").html(0.00);
        }
		
		var P_G14 = parseFloat($("#Purchase_G14").html());
		
		var P_D15 = parseFloat($("#Purchase_D15").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());

		var P_E16 = parseFloat($("#Purchase_E16").html());
		var P_F16 = parseFloat($("#Purchase_F16").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());

		var P_G17 = parseFloat($("#Purchase_G17").html());

		var P_D18 = parseFloat($("#Purchase_D18").html());
		var P_E18 = parseFloat($("#Purchase_E18").html());
		var P_F18 = parseFloat($("#Purchase_F18").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());

		var P_D19 = parseFloat($("#Purchase_D19").html());
		var P_E19 = parseFloat($("#Purchase_E19").html());
		var P_F19 = parseFloat($("#Purchase_F19").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());

		var P_G20 = parseFloat($("#Purchase_G20").html());

		var P_D21 = parseFloat($("#Purchase_D21").html());
		var P_E21 = parseFloat($("#Purchase_E21").html());
		var P_F21 = parseFloat($("#Purchase_F21").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_D22").html((P_D15 + P_D18 + P_D19 + P_D21).toFixed(2));
		$("#Purchase_E22").html((P_E16 + P_E18 + P_E19 + P_E21).toFixed(2));
		$("#Purchase_F22").html((P_F16 + P_F18 + P_F19 + P_F21).toFixed(2));
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));

		$('td.number').number( true, 2,'.','' );
                
                /*---------------------Change by LP-----------------*/
                var P_C16 = parseFloat($("#Purchase_C16 option:selected").val());
                if (P_C16 == 1)
                {       
                    if (P_C19 == 1)
                    {
                          var P_C20 = parseFloat($("#Purchase_C20 option:selected").val());
                          if(P_C20==1)
                          {
                                $("#Purchase_G20").html(R_H36);
                          }
                          var P_C21 = parseFloat($("#Purchase_C21 option:selected").val());
                          if(P_C21==1)
                          {
                                $("#Purchase_D21").html(R_B9);
                                $("#Purchase_E21").html(R_B3);
                                $("#Purchase_F21").html(R_B4);
                                $("#Purchase_G21").html(R_G36);
                          }
                          
                    }
                    else
                    {
                        $('#Purchase_G20,#Purchase_G21,#Purchase_F21,#Purchase_E21,#Purchase_D21').html('0.00');
                    }
                }
                else
                {
                    $('#Purchase_D19,#Purchase_E19,#Purchase_F19,#Purchase_G19#Purchase_G20,#Purchase_G21,#Purchase_F21,#Purchase_E21,#Purchase_D21').html('0.00');
                }
                
                var P_G14 = parseFloat($("#Purchase_G14").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());
		var P_G17 = parseFloat($("#Purchase_G17").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());
		var P_G20 = parseFloat($("#Purchase_G20").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));
                
                $('td.number').number( true, 2,'.','' );
               
		
		var P_G14 = parseFloat($("#Purchase_G14").html());
		
		var P_D15 = parseFloat($("#Purchase_D15").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());

		var P_E16 = parseFloat($("#Purchase_E16").html());
		var P_F16 = parseFloat($("#Purchase_F16").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());

		var P_G17 = parseFloat($("#Purchase_G17").html());

		var P_D18 = parseFloat($("#Purchase_D18").html());
		var P_E18 = parseFloat($("#Purchase_E18").html());
		var P_F18 = parseFloat($("#Purchase_F18").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());

		var P_D19 = parseFloat($("#Purchase_D19").html());
		var P_E19 = parseFloat($("#Purchase_E19").html());
		var P_F19 = parseFloat($("#Purchase_F19").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());

		var P_G20 = parseFloat($("#Purchase_G20").html());

		var P_D21 = parseFloat($("#Purchase_D21").html());
		var P_E21 = parseFloat($("#Purchase_E21").html());
		var P_F21 = parseFloat($("#Purchase_F21").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_D22").html((P_D15 + P_D18 + P_D19 + P_D21).toFixed(2));
		$("#Purchase_E22").html((P_E16 + P_E18 + P_E19 + P_E21).toFixed(2));
		$("#Purchase_F22").html((P_F16 + P_F18 + P_F19 + P_F21).toFixed(2));
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));

		$('td.number').number( true, 2,'.','' );
               /*---------------Change by LP ---------------*/        
                
    });


    // on change C20
    $("#Purchase_C20").change(function () {
        var P_C20 = parseFloat($(this).val());
        var P_C19 = parseFloat($("#Purchase_C14 option:selected").val());
        var P_C16 = parseFloat($("#Purchase_C16 option:selected").val());

        //assign value to G20
        if (P_C16 == 1)
        {
            if (P_C19 == 1)
            {
                if (P_C20 == 1)
                    $("#Purchase_G20").html(R_H36);
                else
                    $("#Purchase_G20").html(0.00);
            }
            else
                $("#Purchase_G20").html(0.00);
        }
        else
        {
            $("#Purchase_G20").html(0.00);
        }
		
		var P_G14 = parseFloat($("#Purchase_G14").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());
		var P_G17 = parseFloat($("#Purchase_G17").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());
		var P_G20 = parseFloat($("#Purchase_G20").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C21
    $("#Purchase_C21").change(function () {
        var P_C21 = parseFloat($(this).val());
        var P_C19 = parseFloat($("#Purchase_C14 option:selected").val());
        var P_C16 = parseFloat($("#Purchase_C16 option:selected").val());

        //assign value to G20
        if (P_C16 == 1)
        {
            if (P_C19 == 1)
            {
                if (P_C21 == 1)
                {
                    $("#Purchase_D21").html(R_B9);
                    $("#Purchase_E21").html(R_B3);
                    $("#Purchase_F21").html(R_B4);
                    $("#Purchase_G21").html(R_G36);
                }
                else
                {
                    $("#Purchase_D21").html(0.00);
                    $("#Purchase_E21").html(0.00);
                    $("#Purchase_F21").html(0.00);
                    $("#Purchase_G21").html(0.00);
                }
            }
            else
            {
                $("#Purchase_D21").html(0.00);
                $("#Purchase_E21").html(0.00);
                $("#Purchase_F21").html(0.00);
                $("#Purchase_G21").html(0.00);
            }
        }
        else
        {
            $("#Purchase_D21").html(0.00);
            $("#Purchase_E21").html(0.00);
            $("#Purchase_F21").html(0.00);
            $("#Purchase_G21").html(0.00);
        }
		
		var P_G14 = parseFloat($("#Purchase_G14").html());
		
		var P_D15 = parseFloat($("#Purchase_D15").html());
		var P_G15 = parseFloat($("#Purchase_G15").html());

		var P_E16 = parseFloat($("#Purchase_E16").html());
		var P_F16 = parseFloat($("#Purchase_F16").html());
		var P_G16 = parseFloat($("#Purchase_G16").html());

		var P_G17 = parseFloat($("#Purchase_G17").html());

		var P_D18 = parseFloat($("#Purchase_D18").html());
		var P_E18 = parseFloat($("#Purchase_E18").html());
		var P_F18 = parseFloat($("#Purchase_F18").html());
		var P_G18 = parseFloat($("#Purchase_G18").html());

		var P_D19 = parseFloat($("#Purchase_D19").html());
		var P_E19 = parseFloat($("#Purchase_E19").html());
		var P_F19 = parseFloat($("#Purchase_F19").html());
		var P_G19 = parseFloat($("#Purchase_G19").html());

		var P_G20 = parseFloat($("#Purchase_G20").html());

		var P_D21 = parseFloat($("#Purchase_D21").html());
		var P_E21 = parseFloat($("#Purchase_E21").html());
		var P_F21 = parseFloat($("#Purchase_F21").html());
		var P_G21 = parseFloat($("#Purchase_G21").html());
				
		// assign value to D22, E22, F22, G22
		$("#Purchase_D22").html((P_D15 + P_D18 + P_D19 + P_D21).toFixed(2));
		$("#Purchase_E22").html((P_E16 + P_E18 + P_E19 + P_E21).toFixed(2));
		$("#Purchase_F22").html((P_F16 + P_F18 + P_F19 + P_F21).toFixed(2));
		$("#Purchase_G22").html(((P_G15 + P_G17 + P_G18 + P_G19 + P_G20 + P_G21) - (P_G14 + P_G16)).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });




    // on change C24
    $("#Purchase_C24").change(function () {
        var P_C24 = parseFloat($(this).val());

        //assign value to G20
        if (P_C24 == 1)
        {
            $("#Purchase_E24").html(R_B7);
        }
        else
        {
            $("#Purchase_E24").html(0.00);
        }

		/* assign value to E27 ---*/
		var P_E24 = parseFloat($("#Purchase_E24").html());
        var P_E25 = parseFloat($("#Purchase_E25").html());
        var P_E26 = parseFloat($("#Purchase_E26").html());
        $("#Purchase_E27").html((P_E24 + P_E25 + P_E26).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C25
    $("#Purchase_C25").change(function () {
        var P_C25 = parseFloat($(this).val());

        //assign value to E25
        if (P_C25 == 1)
        {
            $("#Purchase_E25").html(R_B8);
        }
        else
        {
            $("#Purchase_E25").html(0.00);
        }
		
		/* assign value to E27 ---*/
		var P_E24 = parseFloat($("#Purchase_E24").html());
        var P_E25 = parseFloat($("#Purchase_E25").html());
        var P_E26 = parseFloat($("#Purchase_E26").html());
        $("#Purchase_E27").html((P_E24 + P_E25 + P_E26).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });


    // on change C26
    $("#Purchase_C26").change(function () {
        var P_C26 = parseFloat($(this).val());

        //assign value to E25
        if (P_C26 == 1)
        {
            $("#Purchase_E26").html(R_B6);
        }
        else
        {
            $("#Purchase_E26").html(0.00);
        }

		/* assign value to E27 ---*/
		var P_E24 = parseFloat($("#Purchase_E24").html());
        var P_E25 = parseFloat($("#Purchase_E25").html());
        var P_E26 = parseFloat($("#Purchase_E26").html());
        $("#Purchase_E27").html((P_E24 + P_E25 + P_E26).toFixed(2));

		$('td.number').number( true, 2,'.','' );
    });




    $("#submit").click(function () {

        

        /* start assign total of each column */
		var P_F8 = parseFloat($("#Purchase_F8").html());
        var P_F10 = parseFloat($("#Purchase_F10").html());
        var P_G8 = parseFloat($("#Purchase_G8").html());
        var P_G10 = parseFloat($("#Purchase_G10").html());
        var P_G14 = parseFloat($("#Purchase_G14").html());

		


        var P_D4 = parseFloat($("#Purchase_D4").html());		
        var P_D11 = parseFloat($("#Purchase_D11").html());
        var P_D22 = parseFloat($("#Purchase_D22").html());
        var P_D27 = parseFloat(0.00);

        var P_E4 = parseFloat($("#Purchase_E4").html());
        var P_E11 = parseFloat($("#Purchase_E11").html());
        var P_E22 = parseFloat($("#Purchase_E22").html());
        var P_E27 = parseFloat($("#Purchase_E27").html());

        var P_F4 = parseFloat($("#Purchase_F4").html());
        var P_F22 = parseFloat($("#Purchase_F22").html());

        var P_G4 = parseFloat($("#Purchase_G4").html());
        var P_G22 = parseFloat($("#Purchase_G22").html());

		
        $("#Purchase_D31").html((P_D4 + P_D11 + P_D22 + P_D27).toFixed(2));
        $("#Purchase_D32").html((P_E4 + P_E11 + P_E27).toFixed(2));
        $("#Purchase_D33").html((P_F4 + P_E22).toFixed(2));
        $("#Purchase_D34").html((P_G4 + P_F22).toFixed(2));
        $("#Purchase_D35").html(P_G22);

        // ASSIGN TO D36, D38, D39
        var P_D31 = parseFloat($("#Purchase_D31").html());
        var P_D32 = parseFloat($("#Purchase_D32").html());
        var P_D33 = parseFloat($("#Purchase_D33").html());
        var P_D34 = parseFloat($("#Purchase_D34").html());
        var P_D35 = parseFloat($("#Purchase_D35").html());

        var P_F11 = parseFloat($("#Purchase_F11").html());
        var P_G11 = parseFloat($("#Purchase_G11").html());

        $("#Purchase_D36").html((P_D31 + P_D32 + P_D33 + P_D34 + P_D35).toFixed(2));
        $("#Purchase_D38").html(P_F11);
        $("#Purchase_D39").html(P_G11);


        // ASSIGN TO D40
        var P_D38 = parseFloat($("#Purchase_D38").html());
        var P_D39 = parseFloat($("#Purchase_D39").html());

        $("#Purchase_D40").html((P_D38 + P_D39).toFixed(2));


        // ASSIGN TO F31 TO F40
        var P_D31 = parseFloat($("#Purchase_D31").html());
        var P_D32 = parseFloat($("#Purchase_D32").html());
        var P_D33 = parseFloat($("#Purchase_D33").html());
        var P_D34 = parseFloat($("#Purchase_D34").html());
        var P_D35 = parseFloat($("#Purchase_D35").html());

        $("#Purchase_F31").html(((P_D31 * R_B20) / 100).toFixed(2));
        $("#Purchase_F32").html(((P_D32 * R_B20) / 100).toFixed(2));
        $("#Purchase_F33").html(0.00);
        $("#Purchase_F34").html(((P_D34 * R_B20) / 100).toFixed(2));
        $("#Purchase_F35").html(((P_D35 * R_M36) / 100).toFixed(2));

        var P_F31 = parseFloat($("#Purchase_F31").html());
        var P_F32 = parseFloat($("#Purchase_F32").html());
        var P_F33 = parseFloat($("#Purchase_F33").html());
        var P_F34 = parseFloat($("#Purchase_F34").html());
        var P_F35 = parseFloat($("#Purchase_F35").html());

        $("#Purchase_F36").html((P_F31 + P_F32 + P_F33 + P_F34 + P_F35).toFixed(2));

        $("#Purchase_F38").html(0.00);
        $("#Purchase_F39").html(0.00);

        var P_F38 = parseFloat($("#Purchase_F38").html());
        var P_F39 = parseFloat($("#Purchase_F39").html());
        $("#Purchase_F40").html((P_F38 + P_F39).toFixed(2));


        var P_D36 = parseFloat($("#Purchase_D36").html());
        var P_F36 = parseFloat($("#Purchase_F36").html());
        $("#Purchase_G36").html((P_D36 + P_F36).toFixed(2));


        var P_D40 = parseFloat($("#Purchase_D40").html());
        var P_F40 = parseFloat($("#Purchase_F40").html());
        $("#Purchase_G40").html((P_D40 + P_F40).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
        /* end assign total of each column */

		 

        /* end assign value for reference tab*/
        var type = $('input[name=type]:checked').val();
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var email = $("#email").val();
        var phone_no = $("#phone_no").val();
        var str = $("#divTab").html();
        $.ajax({
            type: "POST",
            url: "http://dofollowcontent.com/calculator/include/pdfgenerate.php",
            data: {data: str, nameFirst: 'purchase.pdf', nameSecond: 'purchase.csv', first_name: first_name, last_name: last_name, email: email, phone_no: phone_no, type: type},
            success: function (result)
            {
                //alert(result);
            }
        });

    });


 



});
