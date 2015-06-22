$(document).ready(function () {
    /*------------------Page Loading Default Zero------------------*/
$('#PRIVATE_D3,#PRIVATE_E3,#PRIVATE_F3,#PRIVATE_G3').html(0.00);
$('#PRIVATE_D4,#PRIVATE_E4,#PRIVATE_F4,#PRIVATE_G4').html(0.00);
$('#PRIVATE_D7,#PRIVATE_E7,#PRIVATE_D8,#PRIVATE_E8').html(0.00);
$('#PRIVATE_D11,#PRIVATE_E11,#PRIVATE_F11,#PRIVATE_G11').html(0.00);
$('#PRIVATE_D12,#PRIVATE_E12,#PRIVATE_F12,#PRIVATE_G12').html(0.00);
$('#PRIVATE_D13,#PRIVATE_E13,#PRIVATE_F13,#PRIVATE_G13').html(0.00);
$('#PRIVATE_D14,#PRIVATE_E14,#PRIVATE_F14,#PRIVATE_G14').html(0.00);
$('#PRIVATE_D15,#PRIVATE_E15,#PRIVATE_F15,#PRIVATE_G15').html(0.00);
$('#PRIVATE_D16,#PRIVATE_E16,#PRIVATE_F16,#PRIVATE_G16').html(0.00);
$('#PRIVATE_D18,#PRIVATE_E18,#PRIVATE_F18,#PRIVATE_G18').html(0.00);
$('#PRIVATE_D19,#PRIVATE_E19,#PRIVATE_F19,#PRIVATE_G19').html(0.00);
$('#PRIVATE_D20,#PRIVATE_E20,#PRIVATE_F20,#PRIVATE_G20').html(0.00);
$('#PRIVATE_D21,#PRIVATE_E21,#PRIVATE_F21,#PRIVATE_G21').html(0.00);
 $('#PRIVATE_D7,#PRIVATE_D8').number( true, 2,'.','' );
    /*------------------Page Loading Default Zero------------------*/
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


    var Pr_D11 = parseFloat($('#PRIVATE_D11').html());
    var Pr_E11 = parseFloat($('#PRIVATE_E11').html());
    var Pr_F11 = parseFloat($('#PRIVATE_F11').html());
    var Pr_G11 = parseFloat($('#PRIVATE_G11').html());
    var Pr_D12 = parseFloat($('#PRIVATE_D12').html());
    var Pr_E12 = parseFloat($('#PRIVATE_E12').html());
    var Pr_F12 = parseFloat($('#PRIVATE_F12').html());
    var Pr_G12 = parseFloat($('#PRIVATE_G12').html());
    var Pr_D13 = parseFloat($('#PRIVATE_D13').html());
    var Pr_E13 = parseFloat($('#PRIVATE_E13').html());
    var Pr_F13 = parseFloat($('#PRIVATE_F13').html());
    var Pr_G13 = parseFloat($('#PRIVATE_G13').html());
    var Pr_D14 = parseFloat($('#PRIVATE_D14').html());
    var Pr_E14 = parseFloat($('#PRIVATE_E14').html());
    var Pr_F14 = parseFloat($('#PRIVATE_F14').html());
    var Pr_G14 = parseFloat($('#PRIVATE_G14').html());
    var Pr_D15 = parseFloat($('#PRIVATE_D15').html());
    var Pr_E15 = parseFloat($('#PRIVATE_E15').html());
    var Pr_F15 = parseFloat($('#PRIVATE_F15').html());
    var Pr_G15 = parseFloat($('#PRIVATE_G15').html());

    $('#PRIVATE_C3 input').keyup(function () {
        /*---------------------Fee------------------------*/

        var Pr_C3 = parseFloat($(this).val());
        if (Pr_C3 > R_B44)
        {
            i = (parseFloat((R_C45 * (Pr_C3 - R_B44) / 1000 + R_C44) + R_E43 - R_G43 / (1 + R_H43))).toFixed(2);
            $('#PRIVATE_G11').html(i);
        }
        else
        {
            if (Pr_C3 >= R_B43)
            {
                $('#PRIVATE_G11').html(parseFloat(R_C44 + R_E43 - R_G43 / (1 + R_H43)).toFixed(2));
            }
            else
            {
                $('#PRIVATE_G11').html(parseFloat(R_C43 + R_E43 - R_G43 / (1 + R_H43)).toFixed(2));
            }
        }
        i = 0;
        if (Pr_C3 > R_B29)
        {
            i = parseFloat(R_F30);
        }
        else
        {
            if (Pr_C3 > R_B28)
            {
                i = parseFloat(R_F29);
            }
            else
            {
                if (Pr_C3 > R_B27)
                {
                    i = parseFloat(R_F28);
                }
                else
                {
                    if (Pr_C3 > R_B26)
                    {
                        i = parseFloat(R_F27)
                    }
                    else
                    {
                        if (Pr_C3 > R_B25)
                        {
                            i = parseFloat(R_F26)
                        }
                        else
                        {
                            if (Pr_C3 > R_B24)
                            {
                                i = parseFloat(R_F25)
                            }
                            else
                            {
                                i = (R_F24)
                            }
                        }
                    }
                }
            }
		}
        $("#PRIVATE_D3,#PRIVATE_D4").html(i);
        /*---------------------Fee------------------------*/
        /*--Disbursement-- */
        $("#PRIVATE_E3,#PRIVATE_E4").html(R_B16 + R_B17 + R_B18 + R_B19);
        /*--Disbursement--*/
        $("#PRIVATE_F3,#PRIVATE_F4").html(R_B3);
        $("#PRIVATE_G3,#PRIVATE_G4").html(R_B4); 
		
		
		if (Pr_C3 > R_B44)
        {
            i = ((R_C45 * ((Pr_C3 - R_B44) / 1000)) + R_C44);
            $('#PRIVATE_G11').html(i.toFixed(2));
        }
        else
        {
            if (Pr_C3 >= R_B43)
            {
                $('#PRIVATE_G11').html(R_C44);
            }
            else
            {
                $('#PRIVATE_G11').html(R_C43);
            }
        }
        var divide = ((100 + R_H43) / 100);
        var G11 = $("#PRIVATE_G11").html();
        $("#PRIVATE_G11").html((parseFloat(G11) + parseFloat((R_E43) - (R_G43 / divide))).toFixed(2));
		
		// assign value to D16, E16, F16, G16
		var Pr_G11 = parseFloat($('#PRIVATE_G11').html());
        var Pr_G12 = parseFloat($('#PRIVATE_G12').html());
        var Pr_G13 = parseFloat($('#PRIVATE_G13').html());
        var Pr_G14 = parseFloat($('#PRIVATE_G14').html());
        var Pr_G15 = parseFloat($('#PRIVATE_G15').html());
		
		$('#PRIVATE_G16').html((Pr_G11 + Pr_G12 + Pr_G13 + Pr_G14 + Pr_G15).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
	
	
    $("#PRIVATE_C7").keyup(function () {

        var Pr_C7 = parseFloat($(this).val());
        $('#PRIVATE_D7').html(Pr_C7);

        $('#PRIVATE_E7').html(0.00);

        if (Pr_C7 <= 6)
        {
            $('#PRIVATE_D7,#PRIVATE_D8').html(Pr_C7 * R_B15);
            $('#PRIVATE_D7,#PRIVATE_D8').number( true, 2,'.','' );
        }
        else
        {
			$('#PRIVATE_D7').html("Call Us to Discuss");
            $('#PRIVATE_D8').html(0.00);
            $('#PRIVATE_D8').number( true, 2,'.','' );
        }
		
		$('td.number').number( true, 2,'.','' );

    });
    //if select Yes then output is R_B14 otherwise 0
    $('#PRIVATE_C11 select').change(function () {
        var Pr_C11 = parseFloat($('#PRIVATE_C11 select').val());
        var Pr_C3 = parseFloat($('#PRIVATE_C3 input').val());

        if (Pr_C11 == 1)
        {
            $('#PRIVATE_D11').html(R_B14);
            $('#PRIVATE_E11').html(R_B3);
            $('#PRIVATE_F11').html(R_B4);
        }
        else
        {
            $('#PRIVATE_D11').html(0.00);
            $('#PRIVATE_E11').html(0.00);
            $('#PRIVATE_F11').html(0.00);
            $('#PRIVATE_G11').html(0.00);
        }

        if (Pr_C3 > R_B44)
        {
            i = ((R_C45 * ((Pr_C3 - R_B44) / 1000)) + R_C44);
            $('#PRIVATE_G11').html(i.toFixed(2));
        }
        else
        {
            if (Pr_C3 >= R_B43)
            {
                $('#PRIVATE_G11').html(R_C44);
            }
            else
            {
                $('#PRIVATE_G11').html(R_C43);
            }
        }
        var divide = ((100 + R_H43) / 100);
        var G11 = $("#PRIVATE_G11").html();
        $("#PRIVATE_G11").html((parseFloat(G11) + parseFloat((R_E43) - (R_G43 / divide))).toFixed(2));
		
		// assign value to D16, E16, F16, G16
		var Pr_D11 = parseFloat($('#PRIVATE_D11').html());
        var Pr_E11 = parseFloat($('#PRIVATE_E11').html());
        var Pr_F11 = parseFloat($('#PRIVATE_F11').html());
        var Pr_G11 = parseFloat($('#PRIVATE_G11').html());
        var Pr_D12 = parseFloat($('#PRIVATE_D12').html());
        var Pr_E12 = parseFloat($('#PRIVATE_E12').html());
        var Pr_F12 = parseFloat($('#PRIVATE_F12').html());
        var Pr_G12 = parseFloat($('#PRIVATE_G12').html());
        var Pr_D13 = parseFloat($('#PRIVATE_D13').html());
        var Pr_E13 = parseFloat($('#PRIVATE_E13').html());
        var Pr_F13 = parseFloat($('#PRIVATE_F13').html());
        var Pr_G13 = parseFloat($('#PRIVATE_G13').html());
        var Pr_D14 = parseFloat($('#PRIVATE_D14').html());
		var Pr_E14 = parseFloat($('#PRIVATE_E14').html());
        var Pr_F14 = parseFloat($('#PRIVATE_F14').html());
        var Pr_G14 = parseFloat($('#PRIVATE_G14').html());
        var Pr_D15 = parseFloat($('#PRIVATE_D15').html());
        var Pr_E15 = parseFloat($('#PRIVATE_E15').html());
        var Pr_F15 = parseFloat($('#PRIVATE_F15').html());
        var Pr_G15 = parseFloat($('#PRIVATE_G15').html());
		
		$('#PRIVATE_D16').html((Pr_D11 + Pr_D12 + Pr_D13 + Pr_D14 + Pr_D15).toFixed(2));
		$('#PRIVATE_E16').html((Pr_E11 + Pr_E12 + Pr_E13 + Pr_E14 + Pr_E15).toFixed(2));
		$('#PRIVATE_F16').html((Pr_F11 + Pr_F12 + Pr_F13 + Pr_F14 + Pr_F15).toFixed(2));
		$('#PRIVATE_G16').html((Pr_G11 + Pr_G12 + Pr_G13 + Pr_G14 + Pr_G15).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
	
    //IF('Private Mortgages'!C12="Yes",Reference!B9,0)
    $('#PRIVATE_C12 select').change(function () {
        var Pr_C12 = parseFloat($('#PRIVATE_C12 select').val());
        if (Pr_C12 == 1)
        {
            $('#PRIVATE_D12').html(R_B9);
            $('#PRIVATE_E12').html(R_B3);
            $('#PRIVATE_F12').html(R_B4);
            $('#PRIVATE_G12').html(R_D43);

        }
        else
        {
            $('#PRIVATE_D12').html(0.00);
            $('#PRIVATE_E12').html(0.00);
            $('#PRIVATE_F12').html(0.00);
            $('#PRIVATE_G12').html(0.00);
        }
		
		// assign value to D16, E16, F16, G16
		var Pr_D11 = parseFloat($('#PRIVATE_D11').html());
        var Pr_E11 = parseFloat($('#PRIVATE_E11').html());
        var Pr_F11 = parseFloat($('#PRIVATE_F11').html());
        var Pr_G11 = parseFloat($('#PRIVATE_G11').html());
        var Pr_D12 = parseFloat($('#PRIVATE_D12').html());
        var Pr_E12 = parseFloat($('#PRIVATE_E12').html());
        var Pr_F12 = parseFloat($('#PRIVATE_F12').html());
        var Pr_G12 = parseFloat($('#PRIVATE_G12').html());
        var Pr_D13 = parseFloat($('#PRIVATE_D13').html());
        var Pr_E13 = parseFloat($('#PRIVATE_E13').html());
        var Pr_F13 = parseFloat($('#PRIVATE_F13').html());
        var Pr_G13 = parseFloat($('#PRIVATE_G13').html());
        var Pr_D14 = parseFloat($('#PRIVATE_D14').html());
		var Pr_E14 = parseFloat($('#PRIVATE_E14').html());
        var Pr_F14 = parseFloat($('#PRIVATE_F14').html());
        var Pr_G14 = parseFloat($('#PRIVATE_G14').html());
        var Pr_D15 = parseFloat($('#PRIVATE_D15').html());
        var Pr_E15 = parseFloat($('#PRIVATE_E15').html());
        var Pr_F15 = parseFloat($('#PRIVATE_F15').html());
        var Pr_G15 = parseFloat($('#PRIVATE_G15').html());
		
		$('#PRIVATE_D16').html((Pr_D11 + Pr_D12 + Pr_D13 + Pr_D14 + Pr_D15).toFixed(2));
		$('#PRIVATE_E16').html((Pr_E11 + Pr_E12 + Pr_E13 + Pr_E14 + Pr_E15).toFixed(2));
		$('#PRIVATE_F16').html((Pr_F11 + Pr_F12 + Pr_F13 + Pr_F14 + Pr_F15).toFixed(2));
		$('#PRIVATE_G16').html((Pr_G11 + Pr_G12 + Pr_G13 + Pr_G14 + Pr_G15).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );

    });
    $('#PRIVATE_C13 select').change(function () {
        var Pr_C13 = parseFloat($('#PRIVATE_C13 select').val());
        if (Pr_C13 == 1)
        {
            $("#PRIVATE_C13 select option[value='1']").attr('selected', 'selected');
            $('#PRIVATE_D13').html(R_B10);
            $('#PRIVATE_E13').html(R_B3);
            $('#PRIVATE_F13').html(R_B4);
            $('#PRIVATE_G13').html(R_F43);
            var Pr_C14 = parseFloat($('#PRIVATE_C14 select option:selected').val());

            if (Pr_C14 == 1)
            {
                $('#PRIVATE_D14').html(0.00);
                $('#PRIVATE_E14').html(0.00);
                $('#PRIVATE_F14').html(0.00);

                if ($('#PRIVATE_C13 select option:selected').val() == 1)
                {
                    $('#PRIVATE_G14').html(R_E43);
                }
            }
            var Pr_C15 = parseFloat($('#PRIVATE_C15 select option:selected').val());
            if (Pr_C15 == 1)
            {
                if ($('#PRIVATE_C13 select option:selected').val() == 1)
                {
                    $('#PRIVATE_D15').html(R_B9);
                    $('#PRIVATE_E15').html(R_B3);
                    $('#PRIVATE_F15').html(R_B4);
                    $('#PRIVATE_G15').html(R_D43);
                }

            }
			

        }
        else
        {
            $('#PRIVATE_D13').html(0.00);
            $('#PRIVATE_E13').html(0.00);
            $('#PRIVATE_F13').html(0.00);
            $('#PRIVATE_G13').html(0.00);
            
            $('#PRIVATE_G14').html(0.00);
            $('#PRIVATE_D15').html(0.00);
            $('#PRIVATE_E15').html(0.00);
            $('#PRIVATE_F15').html(0.00);
            $('#PRIVATE_G15').html(0.00);
            
            
        }
		
		// assign value to D16, E16, F16, G16
		var Pr_D11 = parseFloat($('#PRIVATE_D11').html());
        var Pr_E11 = parseFloat($('#PRIVATE_E11').html());
        var Pr_F11 = parseFloat($('#PRIVATE_F11').html());
        var Pr_G11 = parseFloat($('#PRIVATE_G11').html());
        var Pr_D12 = parseFloat($('#PRIVATE_D12').html());
        var Pr_E12 = parseFloat($('#PRIVATE_E12').html());
        var Pr_F12 = parseFloat($('#PRIVATE_F12').html());
        var Pr_G12 = parseFloat($('#PRIVATE_G12').html());
        var Pr_D13 = parseFloat($('#PRIVATE_D13').html());
        var Pr_E13 = parseFloat($('#PRIVATE_E13').html());
        var Pr_F13 = parseFloat($('#PRIVATE_F13').html());
        var Pr_G13 = parseFloat($('#PRIVATE_G13').html());
        var Pr_D14 = parseFloat($('#PRIVATE_D14').html());
		var Pr_E14 = parseFloat($('#PRIVATE_E14').html());
        var Pr_F14 = parseFloat($('#PRIVATE_F14').html());
        var Pr_G14 = parseFloat($('#PRIVATE_G14').html());
        var Pr_D15 = parseFloat($('#PRIVATE_D15').html());
        var Pr_E15 = parseFloat($('#PRIVATE_E15').html());
        var Pr_F15 = parseFloat($('#PRIVATE_F15').html());
        var Pr_G15 = parseFloat($('#PRIVATE_G15').html());
		
		$('#PRIVATE_D16').html((Pr_D11 + Pr_D12 + Pr_D13 + Pr_D14 + Pr_D15).toFixed(2));
		$('#PRIVATE_E16').html((Pr_E11 + Pr_E12 + Pr_E13 + Pr_E14 + Pr_E15).toFixed(2));
		$('#PRIVATE_F16').html((Pr_F11 + Pr_F12 + Pr_F13 + Pr_F14 + Pr_F15).toFixed(2));
		$('#PRIVATE_G16').html((Pr_G11 + Pr_G12 + Pr_G13 + Pr_G14 + Pr_G15).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
	
	
    $('#PRIVATE_C14 select').change(function () {
        var Pr_C14 = parseFloat($('#PRIVATE_C14 select').val());

        if (Pr_C14 == 1)
        {
            $('#PRIVATE_D14').html(0.00);
            $('#PRIVATE_E14').html(0.00);
            $('#PRIVATE_F14').html(0.00);

            if ($('#PRIVATE_C13 select option:selected').val() == 1)
            {
                $('#PRIVATE_G14').html(R_E43);
            }
        }
        else
        {
            $('#PRIVATE_D14').html(0.00);
            $('#PRIVATE_E14').html(0.00);
            $('#PRIVATE_F14').html(0.00);
            $('#PRIVATE_G14').html(0.00);
        }
		
		// assign value to D16, E16, F16, G16
		var Pr_D11 = parseFloat($('#PRIVATE_D11').html());
        var Pr_E11 = parseFloat($('#PRIVATE_E11').html());
        var Pr_F11 = parseFloat($('#PRIVATE_F11').html());
        var Pr_G11 = parseFloat($('#PRIVATE_G11').html());
        var Pr_D12 = parseFloat($('#PRIVATE_D12').html());
        var Pr_E12 = parseFloat($('#PRIVATE_E12').html());
        var Pr_F12 = parseFloat($('#PRIVATE_F12').html());
        var Pr_G12 = parseFloat($('#PRIVATE_G12').html());
        var Pr_D13 = parseFloat($('#PRIVATE_D13').html());
        var Pr_E13 = parseFloat($('#PRIVATE_E13').html());
        var Pr_F13 = parseFloat($('#PRIVATE_F13').html());
        var Pr_G13 = parseFloat($('#PRIVATE_G13').html());
        var Pr_D14 = parseFloat($('#PRIVATE_D14').html());
		var Pr_E14 = parseFloat($('#PRIVATE_E14').html());
        var Pr_F14 = parseFloat($('#PRIVATE_F14').html());
        var Pr_G14 = parseFloat($('#PRIVATE_G14').html());
        var Pr_D15 = parseFloat($('#PRIVATE_D15').html());
        var Pr_E15 = parseFloat($('#PRIVATE_E15').html());
        var Pr_F15 = parseFloat($('#PRIVATE_F15').html());
        var Pr_G15 = parseFloat($('#PRIVATE_G15').html());
		
		$('#PRIVATE_D16').html((Pr_D11 + Pr_D12 + Pr_D13 + Pr_D14 + Pr_D15).toFixed(2));
		$('#PRIVATE_E16').html((Pr_E11 + Pr_E12 + Pr_E13 + Pr_E14 + Pr_E15).toFixed(2));
		$('#PRIVATE_F16').html((Pr_F11 + Pr_F12 + Pr_F13 + Pr_F14 + Pr_F15).toFixed(2));
		$('#PRIVATE_G16').html((Pr_G11 + Pr_G12 + Pr_G13 + Pr_G14 + Pr_G15).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
	
	
    $('#PRIVATE_C15 select').change(function () {
        var Pr_C15 = parseFloat($('#PRIVATE_C15 select').val());
        if (Pr_C15 == 1)
        {
            if ($('#PRIVATE_C13 select option:selected').val() == 1)
            {
                $('#PRIVATE_D15').html(R_B9);
                $('#PRIVATE_E15').html(R_B3);
                $('#PRIVATE_F15').html(R_B4);
                $('#PRIVATE_G15').html(R_D43);
            }

        }
        else
        {
            $('#PRIVATE_D15').html(0.00);
            $('#PRIVATE_E15').html(0.00);
            $('#PRIVATE_F15').html(0.00);
            $('#PRIVATE_G15').html(0.00);
        }
		
		// assign value to D16, E16, F16, G16
		var Pr_D11 = parseFloat($('#PRIVATE_D11').html());
        var Pr_E11 = parseFloat($('#PRIVATE_E11').html());
        var Pr_F11 = parseFloat($('#PRIVATE_F11').html());
        var Pr_G11 = parseFloat($('#PRIVATE_G11').html());
        var Pr_D12 = parseFloat($('#PRIVATE_D12').html());
        var Pr_E12 = parseFloat($('#PRIVATE_E12').html());
        var Pr_F12 = parseFloat($('#PRIVATE_F12').html());
        var Pr_G12 = parseFloat($('#PRIVATE_G12').html());
        var Pr_D13 = parseFloat($('#PRIVATE_D13').html());
        var Pr_E13 = parseFloat($('#PRIVATE_E13').html());
        var Pr_F13 = parseFloat($('#PRIVATE_F13').html());
        var Pr_G13 = parseFloat($('#PRIVATE_G13').html());
        var Pr_D14 = parseFloat($('#PRIVATE_D14').html());
		var Pr_E14 = parseFloat($('#PRIVATE_E14').html());
        var Pr_F14 = parseFloat($('#PRIVATE_F14').html());
        var Pr_G14 = parseFloat($('#PRIVATE_G14').html());
        var Pr_D15 = parseFloat($('#PRIVATE_D15').html());
        var Pr_E15 = parseFloat($('#PRIVATE_E15').html());
        var Pr_F15 = parseFloat($('#PRIVATE_F15').html());
        var Pr_G15 = parseFloat($('#PRIVATE_G15').html());
		
		$('#PRIVATE_D16').html((Pr_D11 + Pr_D12 + Pr_D13 + Pr_D14 + Pr_D15).toFixed(2));
		$('#PRIVATE_E16').html((Pr_E11 + Pr_E12 + Pr_E13 + Pr_E14 + Pr_E15).toFixed(2));
		$('#PRIVATE_F16').html((Pr_F11 + Pr_F12 + Pr_F13 + Pr_F14 + Pr_F15).toFixed(2));
		$('#PRIVATE_G16').html((Pr_G11 + Pr_G12 + Pr_G13 + Pr_G14 + Pr_G15).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
	
	
    $('#PRIVATE_C18 select').change(function () {
        var Pr_C18 = parseFloat($('#PRIVATE_C18 select').val());
        if (Pr_C18 == 1)
        {

            {
                $('#PRIVATE_D18').html(0.00);
                $('#PRIVATE_E18').html(R_B7);
                $('#PRIVATE_F18').html(0.00);
                $('#PRIVATE_G18').html(0.00);
            }

        }
        else
        {
            $('#PRIVATE_D18').html(0.00);
            $('#PRIVATE_E18').html(0.00);
            $('#PRIVATE_F18').html(0.00);
            $('#PRIVATE_G18').html(0.00);
        }
		
		/* ---- assign value to D21, E21, F21, G21 --- */
        var Pr_D18 = parseFloat($('#PRIVATE_D18').html());
        var Pr_D19 = parseFloat($('#PRIVATE_D19').html());
        var Pr_D20 = parseFloat($('#PRIVATE_D20').html());
		
        var Pr_E18 = parseFloat($('#PRIVATE_E18').html());
        var Pr_E19 = parseFloat($('#PRIVATE_E19').html());
        var Pr_E20 = parseFloat($('#PRIVATE_E20').html());

        var Pr_F18 = parseFloat($('#PRIVATE_F18').html());
        var Pr_F19 = parseFloat($('#PRIVATE_F19').html());
        var Pr_F20 = parseFloat($('#PRIVATE_F20').html());

        var Pr_G18 = parseFloat($('#PRIVATE_G18').html());
        var Pr_G19 = parseFloat($('#PRIVATE_G19').html());
        var Pr_G20 = parseFloat($('#PRIVATE_G20').html());

		$('#PRIVATE_D21').html((Pr_D18 + Pr_D19 + Pr_D20).toFixed(2));
        $('#PRIVATE_E21').html((Pr_E18 + Pr_E19 + Pr_E20).toFixed(2));
        $('#PRIVATE_F21').html((Pr_F18 + Pr_F19 + Pr_F20).toFixed(2));
        $('#PRIVATE_G21').html((Pr_G18 + Pr_G19 + Pr_G20).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
	
	
    $('#PRIVATE_C19 select').change(function () {
        var Pr_C19 = parseFloat($('#PRIVATE_C19 select').val());
        if (Pr_C19 == 1)
        {

            {
                $('#PRIVATE_D19').html(0.00);
                $('#PRIVATE_E19').html(R_B8);
                $('#PRIVATE_F19').html(0.00);
                $('#PRIVATE_G19').html(0.00);
            }

        }
        else
        {
            $('#PRIVATE_D19').html(0.00);
            $('#PRIVATE_E19').html(0.00);
            $('#PRIVATE_F19').html(0.00);
            $('#PRIVATE_G19').html(0.00);
        }
		
		/* ---- assign value to D21, E21, F21, G21 --- */
        var Pr_D18 = parseFloat($('#PRIVATE_D18').html());
        var Pr_D19 = parseFloat($('#PRIVATE_D19').html());
        var Pr_D20 = parseFloat($('#PRIVATE_D20').html());
		
        var Pr_E18 = parseFloat($('#PRIVATE_E18').html());
        var Pr_E19 = parseFloat($('#PRIVATE_E19').html());
        var Pr_E20 = parseFloat($('#PRIVATE_E20').html());

        var Pr_F18 = parseFloat($('#PRIVATE_F18').html());
        var Pr_F19 = parseFloat($('#PRIVATE_F19').html());
        var Pr_F20 = parseFloat($('#PRIVATE_F20').html());

        var Pr_G18 = parseFloat($('#PRIVATE_G18').html());
        var Pr_G19 = parseFloat($('#PRIVATE_G19').html());
        var Pr_G20 = parseFloat($('#PRIVATE_G20').html());

		$('#PRIVATE_D21').html((Pr_D18 + Pr_D19 + Pr_D20).toFixed(2));
        $('#PRIVATE_E21').html((Pr_E18 + Pr_E19 + Pr_E20).toFixed(2));
        $('#PRIVATE_F21').html((Pr_F18 + Pr_F19 + Pr_F20).toFixed(2));
        $('#PRIVATE_G21').html((Pr_G18 + Pr_G19 + Pr_G20).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
    });
    $('#PRIVATE_C20 select').change(function () {
        var Pr_C20 = parseFloat($('#PRIVATE_C20 select').val());
        if (Pr_C20 == 1)
        {

            {
                $('#PRIVATE_D20').html(0.00);
                $('#PRIVATE_E20').html(R_B6);
                $('#PRIVATE_F20').html(0.00);
                $('#PRIVATE_G20').html(0.00);
            }

        }
        else
        {
            $('#PRIVATE_D20').html(0.00);
            $('#PRIVATE_E20').html(0.00);
            $('#PRIVATE_F20').html(0.00);
            $('#PRIVATE_G20').html(0.00);
        }
		
		/* ---- assign value to D21, E21, F21, G21 --- */
        var Pr_D18 = parseFloat($('#PRIVATE_D18').html());
        var Pr_D19 = parseFloat($('#PRIVATE_D19').html());
        var Pr_D20 = parseFloat($('#PRIVATE_D20').html());
		
        var Pr_E18 = parseFloat($('#PRIVATE_E18').html());
        var Pr_E19 = parseFloat($('#PRIVATE_E19').html());
        var Pr_E20 = parseFloat($('#PRIVATE_E20').html());

        var Pr_F18 = parseFloat($('#PRIVATE_F18').html());
        var Pr_F19 = parseFloat($('#PRIVATE_F19').html());
        var Pr_F20 = parseFloat($('#PRIVATE_F20').html());

        var Pr_G18 = parseFloat($('#PRIVATE_G18').html());
        var Pr_G19 = parseFloat($('#PRIVATE_G19').html());
        var Pr_G20 = parseFloat($('#PRIVATE_G20').html());

		$('#PRIVATE_D21').html((Pr_D18 + Pr_D19 + Pr_D20).toFixed(2));
        $('#PRIVATE_E21').html((Pr_E18 + Pr_E19 + Pr_E20).toFixed(2));
        $('#PRIVATE_F21').html((Pr_F18 + Pr_F19 + Pr_F20).toFixed(2));
        $('#PRIVATE_G21').html((Pr_G18 + Pr_G19 + Pr_G20).toFixed(2));
		
		$('td.number').number( true, 2,'.','' );
		
    });
    /*-------------------WHOLE REPORT GENRET---------------------*/
    $('#PRIVATE_REPORT').click(function () {
        
		var Pr_D4 = parseFloat($('#PRIVATE_D4').html());
        var Pr_D8 = parseFloat($('#PRIVATE_D8').html());
        var Pr_D16 = parseFloat($('#PRIVATE_D16').html());
        var Pr_D21 = parseFloat($('#PRIVATE_D21').html());
        var Pr_E4 = parseFloat($('#PRIVATE_E4').html());
        var Pr_E8 = parseFloat($('#PRIVATE_E8').html());
        var Pr_E21 = parseFloat($('#PRIVATE_E21').html());
        var Pr_F4 = parseFloat($('#PRIVATE_F4').html());
        var Pr_E16 = parseFloat($('#PRIVATE_E16').html());
        var Pr_G4 = parseFloat($('#PRIVATE_G4').html());
        var Pr_F16 = parseFloat($('#PRIVATE_F16').html());
        var Pr_G16 = parseFloat($('#PRIVATE_G16').html());

		$('#PRIVATE_D25').html((Pr_D4+Pr_D8+Pr_D16));	

        $('#PRIVATE_D26').html((Pr_E4+Pr_E8+Pr_E21));

        $('#PRIVATE_D27').html((Pr_F4+Pr_E16));
		
		
		var finl = (parseFloat(Pr_G4)+parseFloat(Pr_F16));	
        $('#PRIVATE_D28').html(finl);		 
		
        var Pr_G16 = parseFloat($('#PRIVATE_G16').html());
        $('#PRIVATE_D29').html((Pr_G16));

        $('#PRIVATE_D30').html((Pr_D4 + Pr_D8 + Pr_D16 + Pr_E4 + Pr_E8 + Pr_E21 + Pr_F4 + Pr_E16 + Pr_G4 + Pr_F16 + Pr_G16));

        var Pr_D25 = parseFloat($('#PRIVATE_D25').html());
        var Pr_D26 = parseFloat($('#PRIVATE_D26').html());
        var Pr_D27 = parseFloat($('#PRIVATE_D27').html());
        var Pr_D28 = parseFloat($('#PRIVATE_D28').html());
        var Pr_D29 = parseFloat($('#PRIVATE_D29').html());
		var R_B20 = parseFloat($('#Reference_B20').html()); 
		
        $('#PRIVATE_F25').html(((Pr_D25*R_B20)/100));
        $('#PRIVATE_F26').html(((Pr_D26*R_B20)/100));
        $('#PRIVATE_F27').html(0.00);	
        $('#PRIVATE_F28').html(((Pr_D28*R_B20)/100));
        $('#PRIVATE_F29').html(((Pr_D29*R_H43)/100));

        var Pr_F25 = parseFloat($('#PRIVATE_F25').html());
        var Pr_F26 = parseFloat($('#PRIVATE_F26').html());
        var Pr_F27 = parseFloat($('#PRIVATE_F27').html());
        var Pr_F28 = parseFloat($('#PRIVATE_F28').html()); 	
        var Pr_F29 = parseFloat($('#PRIVATE_F29').html());
		
        $('#PRIVATE_F30').html((Pr_F25 + Pr_F26 + Pr_F27 + Pr_F28 + Pr_F29));

        var Pr_D30 = parseFloat($('#PRIVATE_D30').html());
        var Pr_F30 = parseFloat($('#PRIVATE_F30').html());

        $('#PRIVATE_G30').html((Pr_D30 + Pr_F30));
		
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
            data: {data: str, nameFirst: 'private_mortages.pdf', nameSecond: 'private_mortages.csv', first_name: first_name, last_name: last_name, email: email, phone_no: phone_no, type: type},
            success: function (result)
            {
                //alert(result);
            }
        });


    });

});
