<?php include "../include/header.php"; ?>
<style>
    input{ background-color:#9FF;}
</style>
<script src="http://code.jquery.com/jquery-2.1.1.js" type="text/javascript"></script>
<?php /* ?><?php error_reporting(0);
  session_start();
  if(isset($_SESSION['username']))
  {
  header("Location: ../include/reference.php");
  }else{ ?>
  <?php */ ?>
<div>
    <a href="<?php echo $base_url; ?>admin/login.php">Logout</a>

</div><br />
<form method="post">
    <table border="1" class="table" cellspacing="0" cellpadding="0">
        <col width="288" />
        <col width="233" />
        <col width="141" /> 
        <col width="106" />
        <col width="153" />
        <col width="109" />
        <col width="128" />
        <col width="99" />
        <col width="111" />
        <col width="98" />
        <col width="99" />
        <col width="120" />
        <col width="98" span="2" />
        <col width="101" />
        <col width="127" />
        <col width="114" />
        <col width="107" />
        <col width="99" />
        <col width="101" />
        <col width="126" />
        <col width="104" />
        <tr>
            <td width="288">Yes/No    Drop Down</td>
            <td width="233">No</td>
            <td width="141">Yes</td>
            <td width="106"></td>
            <td width="153"></td>
            <td width="109"></td>
            <td width="128"></td>
            <td width="99"></td>
            <td width="111"></td>
            <td width="98"></td>
            <td width="99"></td>
            <td width="120"></td>
            <td width="98"></td>
            <td width="98"></td>
            <td width="101"></td>
            <td width="127"></td>
            <td width="114"></td>
            <td width="107"></td>
            <td width="99"></td>
            <td width="101"></td>
            <td width="126"></td>
            <td width="104"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Registration - Statutory</td>
            <td><input type="text" name="Reference_B3" value="60.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Registration - ELRSA</td>
            <td><input type="text"  name="Reference_B4" value="10.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>LSUC Transaction Levy</td>
            <td><input type="text"  name="Reference_B5" value="65.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Conveyancer Searches</td>
            <td><input type="text"  name="Reference_B6" value="250.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Tax Cert</td>
            <td><input type="text"  name="Reference_B7" value="85.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Building Search</td>
            <td><input type="text"  name="Reference_B8" value="175.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Blanket Mortgage Security</td>
            <td><input type="text"  name="Reference_B9" value="100.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Second Mortgage or Financing</td>
            <td><input type="text"  name="Reference_B10" value="200.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Correcting Title</td>
            <td><input type="text"  name="Reference_B11" value="100.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Discharing Mortgage    (non-arm's length)</td>
            <td><input type="text"  name="Reference_B12" value="100.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Occupancy Fee</td>
            <td><input type="text"  name="Reference_B13" value="200.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Preparation of Transfer of    Title</td>
            <td><input type="text"  name="Reference_B14" value="150.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Tenant Acknowledgements</td>
            <td><input type="text"  name="Reference_B15" value="35.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Courier &amp; Postage</td>
            <td><input type="text"  name="Reference_B16" value="100.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Photocopy</td>
            <td><input type="text"  name="Reference_B17" value="10.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Teranet Searches</td>
            <td><input type="text"  name="Reference_B18" value="120.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Software Transaction Charge</td>
            <td><input type="text"  name="Reference_B19" value="20.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Taxes: HST</td>
            <td align="right"><input type="text" name="Reference_B20" value="13" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Legal Fees</td>
            <td> Limits </td>
            <td>Purchase</td>
            <td>Sale</td>
            <td>Refinance</td>
            <td>Private</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B24" value="500000.00"></td>
            <td><input type="text"  name="Reference_C24" value="745.00"></td>
            <td><input type="text"  name="Reference_D24" value="645.00"></td>
            <td><input type="text" name="Reference_E24" value="445.00"></td>
            <td><input type="text" name="Reference_F24" value="795.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B25" value="1000000.00"></td>
            <td><input type="text"  name="Reference_C25" value="895.00"></td>
            <td><input type="text"  name="Reference_D25" value="745.00"></td>
            <td><input type="text"  name="Reference_E25" value="495.00"></td>
            <td><input type="text"  name="Reference_F25" value="995.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B26" value="1500000.00"></td>
            <td><input type="text"  name="Reference_C26" value="995.00"></td>
            <td><input type="text"  name="Reference_D26" value="795.00"></td>
            <td><input type="text"  name="Reference_E26" value="595.00"></td>
            <td><input type="text"  name="Reference_F26" value="1295.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B27" value="2000000.00"></td>
            <td><input type="text"  name="Reference_C27" value="1095.00"></td>
            <td><input type="text"  name="Reference_D27" value="895.00"></td>
            <td><input type="text"  name="Reference_E27" value="695.00"></td>
            <td><input type="text"  name="Reference_F27" value="1395.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B28" value="2500000.00"></td>
            <td><input type="text"  name="Reference_C28" value="1195.00"></td>
            <td><input type="text"  name="Reference_D28" value="995.00"></td>
            <td><input type="text"  name="Reference_E28" value="795.00"></td>
            <td><input type="text"  name="Reference_F28" value="1495.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B29" value="3000000.00"></td>
            <td><input type="text"  name="Reference_C29" value="1295.00"></td>
            <td><input type="text"  name="Reference_D29" value="1095.00"></td>
            <td><input type="text"  name="Reference_E29" value="895.00"></td>
            <td><input type="text"  name="Reference_F29" value="1595.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B30" value="3000000+" /></td>
            <td><input type="text"  name="Reference_C30" value="1395.00"></td>
            <td><input type="text"  name="Reference_D30" value="1195.00"></td>
            <td><input type="text"  name="Reference_E30" value="995.00"></td>
            <td><input type="text"  name="Reference_F30" value="1695.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Title Insurance</td>
            <td>Purchase Price</td>
            <td colspan="7">Premium</td>
            <td colspan="3">Connecting Counsel Fee</td>
            <td>Taxes</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>For Purchases</td>
            <td></td>
            <td colspan="3">w/Mortgage</td>
            <td>w/o Mortgage</td>
            <td colspan="3">Add-On</td>
            <td colspan="2">New &amp; Resale</td>
            <td>Condo</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>Limits</td>
            <td>New</td>
            <td>Resale</td>
            <td>Condo</td>
            <td width="109" value=" All </td>
                <td width="128">w/Additional Property</td>
            <td width="99" value="w/Private Lender</td>
                <td width="111">w/2nd Mortgage</td>
            <td>w/Mortgage</td>
            <td>w/o Mortgage</td>
            <td width="120">w or w/o Mortgage</td>
            <td>PST</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B36" value="200000.00"></td>
            <td><input type="text"  name="Reference_C36" value="250.00"></td>
            <td><input type="text"  name="Reference_D36" value="300.00"></td>
            <td><input type="text"  name="Reference_E36" value="150.00"></td>
            <td><input type="text"  name="Reference_F36" value="50.00"></td>
            <td><input type="text"  name="Reference_G36" value="50.00"></td>
            <td><input type="text"  name="Reference_H36" value="50.00"></td>
            <td><input type="text"  name="Reference_I36" value="50.00"></td>
            <td><input type="text"  name="Reference_J36" value="125.00"></td>
            <td><input type="text"  name="Reference_K36" value="75.00"></td>
            <td><input type="text"  name="Reference_L36" value="16.95" /></td>
            <td align="right"><input type="text" name="Reference_M36" value="8"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B37" value="500000.00"></td>
            <td><input type="text"  name="Reference_C37" value="300.00"></td>
            <td><input type="text"  name="Reference_D37" value="350.00"></td>
            <td><input type="text"  name="Reference_E37" value="179.00"></td>
            <td><input type="text"  name="Reference_F37" value="50.00"></td>
            <td><input type="text"  name="Reference_G37" value="50.00"></td>
            <td><input type="text"  name="Reference_H37" value="50.00"></td>
            <td><input type="text"  name="Reference_I37" value="50.00"></td>
            <td><input type="text"  name="Reference_J37" value="125.00"></td>
            <td><input type="text"  name="Reference_K37" value="75.00"></td>
            <td><input type="text"  name="Reference_L37" value="16.95" /></td>
            <td align="right"><input type="text"  name="Reference_M37" value="8" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B38" value="500000+" /></td>
            <td><input type="text"  name="Reference_C38" value="1.00"></td>
            <td><input type="text"  name="Reference_D38" value="1.00"></td>
            <td><input type="text"  name="Reference_E38" value="1.00"></td>
            <td><input type="text"  name="Reference_F38" value="50.00"></td>
            <td><input type="text"  name="Reference_G38" value="50.00"></td>
            <td><input type="text"  name="Reference_H38" value="50.00"></td>
            <td><input type="text"  name="Reference_I38" value="50.00"></td>
            <td><input type="text"  name="Reference_J38" value="125.00"></td>
            <td><input type="text"  name="Reference_K38" value="75.00"></td>
            <td><input type="text"  name="Reference_L38" value="16.95" /></td>
            <td align="right"><input type="text"  name="Reference_M38" value="8" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>Purchase Price</td>
            <td colspan="4">Premium</td>
            <td rowspan="2" width="128">Connecting Counsel Fee</td>
            <td rowspan="2">Taxes</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>For Refinances</td>
            <td></td>
            <td>All</td>
            <td colspan="3">Add-On</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>Limits</td>
            <td>Types of Property</td>
            <td width="106">w/Additional Property</td>
            <td width="153">w/Private Lender</td>
            <td width="109">w/2nd Mortgage</td>
            <td>w/Mortgage</td>
            <td>PST</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B43" value="50000.00"></td>
            <td><input type="text"  name="Reference_C43" value="99.00"></td>
            <td><input type="text"  name="Reference_D43" value="50.00"></td>
            <td><input type="text"  name="Reference_E43" value="50.00"></td>
            <td><input type="text"  name="Reference_F43" value="50.00"></td>
            <td><input type="text"  name="Reference_G43" value="35.00"></td>
            <td align="right" ><input type="text"  name="Reference_H43" value="8" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B44" value="750000.00"></td>
            <td><input type="text"  name="Reference_C44" value="149.00"></td>
            <td><input type="text"  name="Reference_D44" value="50.00"></td>
            <td><input type="text"  name="Reference_E44" value="50.00"></td>
            <td><input type="text"  name="Reference_F44" value="50.00"></td>
            <td><input type="text"  name="Reference_G44" value="35.00"></td>
            <td align="right"><input type="text" name="Reference_H44" value="8" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B45" value="750000+" /> </td>
            <td><input type="text"  name="Reference_C45" value="1.00"></td>
            <td><input type="text"  name="Reference_D45" value="50.00"></td>
            <td><input type="text"  name="Reference_E45" value="50.00"></td>
            <td><input type="text"  name="Reference_F45" value="50.00"></td>
            <td><input type="text"  name="Reference_G45" value="35.00"></td>
            <td align="right"><input type="text"  name="Reference_H45" value="8" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td width="233">Contains 1 or 2 Single Family    Residences</td>
            <td>Upto</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Ontario Land Transfer Tax is:</td>
            <td><input type="text"  name="Reference_B50"  value="0 to 55000"></td>
            <td><input type="text"  name="Reference_C50" value="55000.00"></td>
            <td><input type="text"  name="Reference_D50" value="0.5" /></td>
            <td><input type="text"  name="Reference_E50" value="275.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B51" value="Over 55000 to 250000"></td>
            <td><input type="text"  name="Reference_C51" value="250000.00"></td>
            <td><input type="text"  name="Reference_D51" value="1.0" /></td>
            <td><input type="text"  name="Reference_E51" value="1950.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B52" value="Over 250000 to 400000"></td>
            <td><input type="text"  name="Reference_C52" value="400000.00"></td>
            <td><input type="text"  name="Reference_D52" value="1.5" /></td>
            <td><input type="text"  name="Reference_E52" value="2250.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B53" value="Over 400000"></td>
            <td><input type="text"  name="Reference_C53" value="0" /></td>
            <td><input type="text"  name="Reference_D53" value="2.0"></td>
            <td><input type="text"  name="Reference_E53" value="29573.12"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_D54" value="Total" /></td>
            <td><input type="text"  name="Reference_E54" value="34048.12" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Ontario Land Tranfer Tax Refund Max is:</td>
            <td><input type="text"  name="Reference_B55" value="2000.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td width="233">Contains more than 2 Family    Residences or is not a Residential property</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B58" value="0 to 55000"></td>
            <td><input type="text"  name="Reference_C58" value="55000.00"></td>
            <td><input type="text"  name="Reference_D58" value="0.5" /></td>
            <td><input type="text"  name="Reference_E58" value="275.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td> 
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B59" value="Over 55000 to 250000"></td>
            <td><input type="text"  name="Reference_C59" value="250000.00"></td>
            <td><input type="text"  name="Reference_D59" value="1.0" /></td>
            <td><input type="text"  name="Reference_E59" value="1950.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B60" value="Over 250000"></td>
            <td><input type="text"  name="Reference_C60" value="0"></td>
            <td><input type="text"  name="Reference_D60" value="1.5" /></td>
            <td><input type="text"  name="Reference_E60" value="24429.84"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_D61" />Total</td>
            <td><input type="text"  name="Reference_E61" value="26654.84" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td width="233">Contains 1 or 2 Single Family    Residences</td>
            <td>Upto</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Toronto Land Transfer Tax:</td>
            <td><input type="text"  name="Reference_B64" value="0 to 55000"></td>
            <td><input type="text"  name="Reference_C64" value="55000.00"></td>
            <td><input type="text"  name="Reference_D64" value="0.5" /></td>
            <td><input type="text"  name="Reference_E64" value="275.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B65" value="Over 55000 to 400000"></td>
            <td><input type="text"  name="Reference_C65" value="400000.00"></td>
            <td><input type="text"  name="Reference_D65" value="1.0" /></td>
            <td><input type="text"  name="Reference_E65" value="3450.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B66" value="Over 400000"></td>
            <td><input type="text"  name="Reference_C66" value="0" /></td>
            <td><input type="text"  name="Reference_D66" value="2.0" /></td>
            <td><input type="text"  name="Reference_E66" value="29573.12" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_D66">Total</td>
            <td><input type="text"  name="Reference_E67" value="33298.12" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Toronto Land Transfer Tax    Refund Max is:</td>
            <td><input type="text"  name="Reference_B68" value="3725.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td width="233">Contains more than 2 Family    Residences or is not a Residential property</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B71" value="0 to 55000"></td>
            <td><input type="text"  name="Reference_C71" value="55000.00"></td>
            <td><input type="text"  name="Reference_D71" value="0.5" /></td>
            <td><input type="text"  name="Reference_E71" value="275.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B72" value="Over 55000 to 400000"></td>
            <td><input type="text"  name="Reference_C72" value="400000.00"></td>
            <td><input type="text"  name="Reference_D72" value="1.0" /></td>
            <td><input type="text"  name="Reference_E72" value="3450.00"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B73" value="Over 400000 to 40000000"></td>
            <td><input type="text"  name="Reference_C73" value="40000000.00"></td>
            <td><input type="text"  name="Reference_D73" value="1.5"></td>
            <td><input type="text"  name="Reference_E73" value="22179.84" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="text"  name="Reference_B74" value="Over 40000000"></td>
            <td><input type="text"  name="Reference_C74" value="0"></td>
            <td><input type="text"  name="Reference_D74" value="1.0" /></td>
            <td><input type="text"  name="Reference_E74" value="0" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_D75" />Total</td>
            <td><input type="text"  name="Reference_E75" value="25904.84" /></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Title Insurance Calculator</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Purchase Price</td>
            <td>Limits</td>
            <td colspan="6" width="655">Premium</td>
            <td colspan="2" width="196">Connecting Counsel Fee</td>
            <td>Taxes</td>
            <td colspan="7">Amount Due</td>
        </tr>
        <tr>
            <td></td>
            <td>Purchase</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>w/Mortgage</td>
            <td>w/o Mortgage</td>
            <td>w/Blanket Prop.</td>
            <td>w/2nd Mtg</td>
            <td>w/Private Mtg</td>
            <td></td>
            <td>w/Mortgage</td>
            <td>w/o Mortgage</td>
            <td></td>
            <td>w/Mortgage</td>
            <td>w/o Mortgage</td>
            <td>w/Blanket Prop.</td>
            <td>i/Private Mtg</td>
            <td>W/2nd Mtg</td>
            <td>w/Private 2nd Mtg</td>
            <td width="104">w/Private 2nd Mtg &amp; Blanket    Prop.</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>House</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>*Discount Rate</td>
            <td>*Add Rate</td>
            <td>*Add Rate</td>
            <td>*Add Rate</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Resale</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E82" value="0 to 200000"></td>
            <td><input type="text"  name="Reference_F82" value="200000.00"></td>
            <td><input type="text"  name="Reference_G82" value="300.00" ></td>
            <td><input type="text"  name="Reference_H82" value="50.00" ></td>
            <td><input type="text"  name="Reference_I82" value="54.00" ></td>
            <td><input type="text"  name="Reference_J82" value="54.00" ></td>
            <td><input type="text"  name="Reference_K82" value="54.00" ></td>
            <td></td>
            <td><input type="text"  name="Reference_M82" value="125.00" ></td>
            <td><input type="text"  name="Reference_N82" value="75.00" ></td>
            <td align="right"><input type="text"  name="Reference_O82" value="8"></td>
            <td><input type="text"  name="Reference_P82" value="0"></td>
            <td><input type="text"  name="Reference_Q82" value="0"></td>
            <td><input type="text"  name="Reference_R82" value="0"></td>
            <td><input type="text"  name="Reference_S82" value="0"></td>
            <td><input type="text"  name="Reference_T82" value="0"></td>
            <td><input type="text"  name="Reference_U82" value="0"></td>
            <td><input type="text"  name="Reference_V82" value="0"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E83" value="200000 to 500000"></td>
            <td><input type="text"  name="Reference_F83" value="500000.00"></td>
            <td><input type="text"  name="Reference_G83" value="350.00"></td>
            <td><input type="text"  name="Reference_H83" value="50.00"></td>
            <td><input type="text"  name="Reference_I83" value="54.00"></td>
            <td><input type="text"  name="Reference_J83" value="54.00"></td>
            <td><input type="text"  name="Reference_K83" value="54.00"></td>
            <td><input type="text"  name="Reference_L83" value="0"></td>
            <td><input type="text"  name="Reference_M83" value="125.00"></td>
            <td><input type="text"  name="Reference_N83" value="75.00"></td>
            <td><input type="text"  name="Reference_O83" align="right">8</td>
            <td><input type="text"  name="Reference_P83" value="0"></td>
            <td><input type="text"  name="Reference_Q83" value="0"></td>
            <td><input type="text"  name="Reference_R83" value="0"></td>
            <td><input type="text"  name="Reference_S83" value="0"></td>
            <td><input type="text"  name="Reference_T83" value="0"></td>
            <td><input type="text"  name="Reference_U83" value="0"></td>
            <td><input type="text"  name="Reference_V83" value="0"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E84" value="500000+" /></td>
            <td><input type="text"  name="Reference_F84" value="0"></td>
            <td><input type="text"  name="Reference_G84" value="1.00"></td>
            <td><input type="text"  name="Reference_H84" value="50.00"></td>
            <td><input type="text"  name="Reference_I84" value="54.00"></td>
            <td><input type="text"  name="Reference_J84" value="54.00"></td>
            <td><input type="text"  name="Reference_K84" value="54.00"></td>
            <td><input type="text"  name="Reference_L84" value="0"></td>
            <td><input type="text"  name="Reference_M84" value="125.00"></td>
            <td><input type="text"  name="Reference_N84" value="75.00"></td>
            <td align="right"><input type="text"  name="Reference_O84" value="8" /></td>
            <td><input type="text"  name="Reference_P84" value="1741.95"></td>
            <td><input type="text"  name="Reference_Q84" value="1737.95"></td>
            <td><input type="text"  name="Reference_R84" value="1800.27"></td>
            <td><input type="text"  name="Reference_S84" value="1800.27"></td>
            <td><input type="text"  name="Reference_T84" value="1800.27"></td>
            <td><input type="text"  name="Reference_U84" value="1858.59"></td>
            <td><input type="text"  name="Reference_V84" value="1916.91"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>New</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E87" value="0 to 200000"></td>
            <td><input type="text"  name="Reference_F87" value="200000.00"></td>
            <td><input type="text"  name="Reference_G87" value="250.00"></td>
            <td><input type="text"  name="Reference_H87" value="50.00"></td>
            <td><input type="text"  name="Reference_I87" value="54.00"></td>
            <td><input type="text"  name="Reference_J87" value="54.00"></td>
            <td><input type="text"  name="Reference_K87" value="54.00"></td>
            <td><input type="text"  name="Reference_L87" value="0"></td>
            <td><input type="text"  name="Reference_M87" value="125.00"></td>
            <td><input type="text"  name="Reference_N87" value="75.00"></td>
            <td align="right"><input type="text"  name="Reference_O87" value="8" /></td>
            <td><input type="text"  name="Reference_P87" value="0" ></td>
            <td><input type="text"  name="Reference_Q87" value="0" ></td>
            <td><input type="text"  name="Reference_R87" value="0" ></td>
            <td><input type="text"  name="Reference_S87" value="0" ></td>
            <td><input type="text"  name="Reference_T87" value="0" ></td>
            <td><input type="text"  name="Reference_U87" value="0" ></td>
            <td><input type="text"  name="Reference_V87" value="0" ></td>       
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E88" value="200000 to 500000"></td>
            <td><input type="text"  name="Reference_F88" value="500000.00"></td>
            <td><input type="text"  name="Reference_G88" value="300.00"></td>
            <td><input type="text"  name="Reference_H88" value="50.00"></td>
            <td><input type="text"  name="Reference_I88" value="54.00"></td>
            <td><input type="text"  name="Reference_J88" value="54.00"></td>
            <td><input type="text"  name="Reference_K88" value="54.00"></td>
            <td><input type="text"  name="Reference_L88" value="0"></td>
            <td><input type="text"  name="Reference_M88" value="125.00"></td>
            <td><input type="text"  name="Reference_N88" value="75.00"></td>
            <td align="right"><input type="text"  name="Reference_O88" value="8" /></td>
            <td><input type="text"  name="Reference_P88" value="0"></td>   
            <td><input type="text"  name="Reference_Q88" value="0"></td>   
            <td><input type="text"  name="Reference_R88" value="0"></td>   
            <td><input type="text"  name="Reference_S88" value="0"></td>   
            <td><input type="text"  name="Reference_T88" value="0"></td>   
            <td><input type="text"  name="Reference_U88" value="0"></td>   
            <td><input type="text"  name="Reference_V88" value="0"></td>   
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E89" value="500000+" /></td>
            <td><input type="text"  name="Reference_F89" value="0"></td>
            <td><input type="text"  name="Reference_G89" value="1.00"></td>
            <td><input type="text"  name="Reference_H89" value="50.00"></td>
            <td><input type="text"  name="Reference_I89" value="54.00"></td>
            <td><input type="text"  name="Reference_J89" value="54.00"></td>
            <td><input type="text"  name="Reference_K89" value="54.00"></td>
            <td><input type="text"  name="Reference_L89" value="0"></td>
            <td><input type="text"  name="Reference_M89" value="125.00"></td>
            <td><input type="text"  name="Reference_N89" value="75.00"></td>
            <td align="right" ><input type="text"  name="Reference_O89" value="8" /></td>
            <td><input type="text"  name="Reference_P89" value="1687.95" /></td>
            <td><input type="text"  name="Reference_Q89" value="1683.95" /></td>
            <td><input type="text"  name="Reference_R89" value="1746.27" /></td>
            <td><input type="text"  name="Reference_S89" value="1746.27" /></td>
            <td><input type="text"  name="Reference_T89" value="1746.27" /></td>
            <td><input type="text"  name="Reference_U89" value="1804.59" /></td>
            <td><input type="text"  name="Reference_V89" value="1862.91" /></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Condo</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Resale</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E93" value="0 to 200000"></td>
            <td><input type="text"  name="Reference_F93" value="200000.00"></td>
            <td><input type="text"  name="Reference_G93" value="150.00"></td>
            <td><input type="text"  name="Reference_H93" value="50.00"></td>
            <td><input type="text"  name="Reference_I93" value="54.00"></td>
            <td><input type="text"  name="Reference_J93" value="54.00"></td>
            <td><input type="text"  name="Reference_K93" value="54.00"></td>
            <td><input type="text"  name="Reference_L93" value="0"></td>
            <td><input type="text"  name="Reference_M93" value="16.95"></td>
            <td><input type="text"  name="Reference_N93" value="16.95"></td>
            <td align="right"><input type="text"  name="Reference_O93" value="8"></td>
            <td><input type="text"  name="Reference_P93" value="0"></td>
            <td><input type="text"  name="Reference_Q93" value="0"></td>
            <td><input type="text"  name="Reference_R93" value="0"></td>
            <td><input type="text"  name="Reference_S93" value="0"></td>
            <td><input type="text"  name="Reference_T93" value="0"></td>
            <td><input type="text"  name="Reference_U93" value="0"></td>
            <td><input type="text"  name="Reference_V93" value="0"></td>  
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E94" value="200000 to 500000"></td>
            <td><input type="text"  name="Reference_F94" value="500000.00"></td>
            <td><input type="text"  name="Reference_G94" value="179.00"></td>
            <td><input type="text"  name="Reference_H94" value="50.00"></td>
            <td><input type="text"  name="Reference_I94" value="54.00"></td>
            <td><input type="text"  name="Reference_J94" value="54.00"></td>
            <td><input type="text"  name="Reference_K94" value="54.00"></td>
            <td><input type="text"  name="Reference_L94" value="0"></td>
            <td><input type="text"  name="Reference_M94" value="16.95" /></td>
            <td><input type="text"  name="Reference_N94" value="16.95" /></td>
            <td align="right"><input type="text"  name="Reference_O94" value="8" /></td>
            <td><input type="text"  name="Reference_P94" value="0"></td>
            <td><input type="text"  name="Reference_Q94" value="0"></td>
            <td><input type="text"  name="Reference_R94" value="0"></td>
            <td><input type="text"  name="Reference_S94" value="0"></td>
            <td><input type="text"  name="Reference_T94" value="0"></td>
            <td><input type="text"  name="Reference_U94" value="0"></td>
            <td><input type="text"  name="Reference_V94" value="0"></td> 
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E95" value="500000+" /></td>
            <td><input type="text"  name="Reference_F95" value="0"></td>
            <td><input type="text"  name="Reference_G95" value="1.00"></td>
            <td><input type="text"  name="Reference_H95" value="50.00"></td>
            <td><input type="text"  name="Reference_I95" value="54.00"></td>
            <td><input type="text"  name="Reference_J95" value=" 54.00"></td>
            <td><input type="text"  name="Reference_K95" value="54.00"></td>
            <td><input type="text"  name="Reference_L95"></td>
            <td><input type="text"  name="Reference_M95" value="16.95"></td>
            <td><input type="text"  name="Reference_N95" value="16.95"></td>
            <td align="right"><input type="text"  name="Reference_O95" value="8"></td>
            <td><input type="text"  name="Reference_P95" value="1665.32"></td>
            <td><input type="text"  name="Reference_Q95" value="1611.32"></td>
            <td><input type="text"  name="Reference_R95" value="1723.64"></td>
            <td><input type="text"  name="Reference_S95" value="1723.64"></td>
            <td><input type="text"  name="Reference_T95" value="1723.64"></td>
            <td><input type="text"  name="Reference_U95" value="1781.96"></td>
            <td><input type="text"  name="Reference_V95" value="1840.28"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>New</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E98" value="0 to 200000"></td>
            <td><input type="text"  name="Reference_F98" value="200000.00"></td>
            <td><input type="text"  name="Reference_G98" value="150.00"></td>
            <td><input type="text"  name="Reference_H98" value="50.00"></td>
            <td><input type="text"  name="Reference_I98" value="54.00"></td>
            <td><input type="text"  name="Reference_J98" value="54.00"></td>
            <td><input type="text"  name="Reference_K98" value="54.00"></td>
            <td><input type="text"  name="Reference_L98" value="0"></td>
            <td><input type="text"  name="Reference_M98" value="16.95"></td>
            <td><input type="text"  name="Reference_N98" value="16.95"></td>
            <td align="right"><input type="text"  name="Reference_O98" value="8" /></td>
            <td><input type="text"  name="Reference_P98" value="0"></td>
            <td><input type="text"  name="Reference_Q98" value="0"></td>
            <td><input type="text"  name="Reference_R98" value="0"></td>
            <td><input type="text"  name="Reference_S98" value="0"></td>
            <td><input type="text"  name="Reference_T98" value="0"></td>
            <td><input type="text"  name="Reference_U98" value="0"></td>
            <td><input type="text"  name="Reference_V98" value="0"></td>   
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E99" value="200000 to 500000"></td>
            <td><input type="text"  name="Reference_F99" value="500000.00"></td>
            <td><input type="text"  name="Reference_G99" value="179.00"></td>
            <td><input type="text"  name="Reference_H99" value="50.00"></td>
            <td><input type="text"  name="Reference_I99" value="54.00"></td>
            <td><input type="text"  name="Reference_J99" value="54.00"></td>
            <td><input type="text"  name="Reference_K99" value="54.00"></td>
            <td><input type="text"  name="Reference_L99" value="0"></td>
            <td><input type="text"  name="Reference_M99" value="16.95" /></td>
            <td><input type="text"  name="Reference_N99" value="16.95" /></td>
            <td align="right"><input type="text"  name="Reference_O99" value="8" /></td>
            <td><input type="text"  name="Reference_P99" value="0"></td>
            <td><input type="text"  name="Reference_Q99" value="0"></td>
            <td><input type="text"  name="Reference_R99" value="0"></td>
            <td><input type="text"  name="Reference_S99" value="0"></td>
            <td><input type="text"  name="Reference_T99" value="0"></td>
            <td><input type="text"  name="Reference_U99" value="0"></td>
            <td><input type="text"  name="Reference_V99" value="0"></td>  
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_P100" value="500000+"></td>
            <td><input type="text"  name="Reference_F100" value="0"></td>
            <td><input type="text"  name="Reference_G100" value="1.00"></td>
            <td><input type="text"  name="Reference_H100" value="50.00"></td>
            <td><input type="text"  name="Reference_I100" value="54.00"></td>
            <td><input type="text"  name="Reference_J100" value="54.00"></td>
            <td><input type="text"  name="Reference_K100" value="54.00"></td>
            <td><input type="text"  name="Reference_L100" value="0"></td>
            <td><input type="text"  name="Reference_M100" value="16.95"></td>
            <td><input type="text"  name="Reference_N100" value="16.95"></td>
            <td align="right"><input type="text"  name="Reference_O100" value="8"></td>
            <td><input type="text"  name="Reference_P100" value="1665.32"></td>
            <td><input type="text"  name="Reference_Q100" value="1611.32"></td>
            <td><input type="text"  name="Reference_R100" value="1723.64"></td>
            <td><input type="text"  name="Reference_S100" value="1723.64"></td>
            <td><input type="text"  name="Reference_T100" value="1723.64"></td>
            <td><input type="text"  name="Reference_U100" value="1781.96"></td>
            <td><input type="text"  name="Reference_V100" value="1840.28"></td> 
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>Refinance</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E103" value="0 to 50000"></td>
            <td><input type="text"  name="Reference_F103" value="50000.00"></td>
            <td><input type="text"  name="Reference_G103" value="99.00"></td>
            <td><input type="text"  name="Reference_H103" value="0"></td>
            <td><input type="text"  name="Reference_I103" value="54.00"></td>
            <td><input type="text"  name="Reference_J103" value="54.00"></td>
            <td><input type="text"  name="Reference_K103" value="54.00"></td>
            <td><input type="text"  name="Reference_L103" value="0"></td>
            <td><input type="text"  name="Reference_M103" value="35.00"></td>
            <td><input type="text"  name="Reference_N103" value="0"></td>
            <td align="right"><input type="text"  name="Reference_O103" value="8"></td>
            <td><input type="text"  name="Reference_P103" value="0"></td>
            <td><input type="text"  name="Reference_Q103" value="0"></td>
            <td><input type="text"  name="Reference_R103" value="0"></td>
            <td><input type="text"  name="Reference_S103" value="0"></td>
            <td><input type="text"  name="Reference_T103" value="0"></td>
            <td><input type="text"  name="Reference_U103" value="0"></td>
            <td><input type="text"  name="Reference_V103" value="0"></td>  

        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E104" value="50000 to 750000"></td>
            <td><input type="text"  name="Reference_F104" value="750000.00"></td>
            <td><input type="text"  name="Reference_G104" value="149.00"></td>
            <td><input type="text"  name="Reference_H104" value="0"></td>
            <td><input type="text"  name="Reference_I104" value="54.00"></td>
            <td><input type="text"  name="Reference_J104" value="54.00"></td>
            <td><input type="text"  name="Reference_K104" value="54.00"></td>
            <td><input type="text"  name="Reference_L104" value="0"></td>
            <td><input type="text"  name="Reference_M104" value="35.00"></td>
            <td><input type="text"  name="Reference_N104" value="0"></td>
            <td align="right"><input type="text"  name="Reference_O104" value="8"></td>
            <td><input type="text"  name="Reference_P104" value="0"></td>
            <td><input type="text"  name="Reference_Q104" value="0"></td>
            <td><input type="text"  name="Reference_R104" value="0"></td>
            <td><input type="text"  name="Reference_S104" value="0"></td>
            <td><input type="text"  name="Reference_T104" value="0"></td>
            <td><input type="text"  name="Reference_U104" value="0"></td>
            <td><input type="text"  name="Reference_V104" value="0"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><input type="text"  name="Reference_E105" value="750000+"></td>
            <td><input type="text"  name="Reference_F105" value="0"></td>
            <td><input type="text"  name="Reference_G105" value="1.00"></td>
            <td><input type="text"  name="Reference_H105" value="0"></td>
            <td><input type="text"  name="Reference_I105" value="54.00"></td>
            <td><input type="text"  name="Reference_J105" value="54.00"></td>
            <td><input type="text"  name="Reference_K105" value="54.00"></td>
            <td><input type="text"  name="Reference_L105" value="0"></td>
            <td><input type="text"  name="Reference_M105" value="35.00"></td>
            <td><input type="text"  name="Reference_N105" value="0"></td>
            <td align="right"><input type="text"  name="Reference_O105" value="8"></td>
            <td><input type="text"  name="Reference_P105" value="1344.87"></td>
            <td><input type="text"  name="Reference_Q105" value="0"></td>
            <td><input type="text"  name="Reference_R105" value="1403.19"></td>
            <td><input type="text"  name="Reference_S105" value="1403.19"></td>
            <td><input type="text"  name="Reference_T105" value="1403.19"></td>
            <td><input type="text"  name="Reference_U105" value="1461.51"></td>
            <td><input type="text"  name="Reference_V105" value="1519.83"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <div align="center"><input type="submit" name="submit" value="submit" /></div>
</form>

<?php
if (isset($_POST['submit'])) {
    //echo "<pre>"; print_r($_POST);    
    $array = json_encode($_POST);
    //echo $array;

    file_put_contents('../include/config.txt', $array);
    ?>
    <script language="javascript">alert("Your data is updated successfully.")</script>';	
    <?php
}
?>

<script>
    $(document).ready(function () {

        function getArray() {
            return $.getJSON('<?php echo $base_url; ?>include/config.txt');
        }

        getArray().done(function (json) {
            // now you can use json
            $.each(json, function (key, value) {
                $('[name="' + key + '"]').val(value);
                //alert(key+"dsf");
            });
        });

    });
</script>
<?php
//} ?>