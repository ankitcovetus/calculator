<script src="<?php echo $base_url; ?>js/refinance.js" type="text/javascript"></script>
<table class="table" border="1" cellspacing="0" cellpadding="0">
    <col width="116" />
    <col width="784" />
    <col width="151" />
    <col width="133" />
    <col width="107" />
    <col width="124" />
    <col width="155" />
    <col width="97" />
    <tr>
        <td rowspan="4" width="116">Refinance Amount (New Mortgage Amount)</td>
        <td width="784">When you retain us for your    closing we will review your mortgage commitment at no charge. Yes, that's for    Free!</td>
        <td rowspan="2" width="151">Refinance Amount (New    Mortgage Amount)</td>
        <td rowspan="2" width="133">Fee</td>
        <td rowspan="2" width="107">Disbursement</td>
        <td colspan="2" width="279">Registration</td>
        <td width="97"  class="number"></td>
    </tr>
    <tr>
        <td width="784">This    applies for when acting for both the lender and you in a convetional    refinance with a bank or other institutional lender.</td>
        <td width="124">Statutory*</td>
        <td width="155">ELRSA</td>
        <td></td>
    </tr>
    <tr>
        <td width="784">What is    the total amount of your new mortgage including any insurance premiums such    as CMHC fees?</td>
        <td><input type="text" class="number" name="Refinance_C3" value="" id="Refinance_C3" /></td>
        <td id="Refinance_D3"  class="number"></td>
        <td id="Refinance_E3"  class="number"></td>
        <td id="Refinance_F3"  class="number"></td>
        <td id="Refinance_G3"  class="number"></td>
        <td></td>
    </tr>
    <tr>
        <td width="784">&nbsp;</td>
        <td id="Refinance_C4">Total</td>
        <td id="Refinance_D4"  class="number"></td>
        <td id="Refinance_E4"  class="number"></td>
        <td id="Refinance_F4"  class="number"></td>
        <td id="Refinance_G4"  class="number"></td>		

        <td></td>
    </tr>
    <tr>
        <td rowspan="4" width="116">Tenancies (up to six (6) units)</td>
        <td rowspan="2" width="784">&nbsp;</td>
        <td rowspan="2">&nbsp;</td>
        <td rowspan="2" width="133">Fee</td>
        <td rowspan="2" width="107">Disbursement</td>
        <td colspan="2">&nbsp;</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td width="97"><u>&nbsp;</u></td>
</tr>
<tr>
    <td width="784">If your    property is a residential multi-plex made up of more than one (1) single    family residence but up to six (6) residences, please enter how many tenants    there are (e.g. if your property has more than six (6) single family    residences, in other words, more than six (6) apartments please contact us    for a quote, otherwise enter the number of tenants.  If there are no tenants enter &quot;0&quot;    (zero))</td>
    <td>
        <input type="text" class="number" name="Refinance_C7" id="Refinance_C7">
    </td>
    <td id="Refinance_D7" ></td>
    <td id="Refinance_E7"  class="number"></td>
    <td id="Refinance_F7"  class="number"></td>
    <td id="Refinance_G7"  class="number"></td>		
    <td>&nbsp;</td>
</tr>
<tr>
    <td></td>
    <td id="Refinance_C8">Total</td>
    <td id="Refinance_D8" ></td>
    <td id="Refinance_E8"  class="number"></td>
    <td id="Refinance_F8"  class="number"></td>
    <td id="Refinance_G8"  class="number"></td>	
    <td>&nbsp;</td>
</tr>
<tr>
    <td rowspan="9" width="116">Title Insurance &amp; Mortgages</td>
    <td rowspan="2">&nbsp;</td>
    <td rowspan="2">&nbsp;</td>
    <td rowspan="2" width="133">Fee</td>
    <td colspan="2" width="231">Registration</td>
    <td rowspan="2" width="155"> Title Insurance </td>
    <td width="97"><u>&nbsp;</u></td>
</tr>
<tr>
    <td width="107">Statutory*</td>
    <td width="124">ELRSA</td>
    <td width="97"><u>&nbsp;</u></td>
</tr>
<tr>
    <td width="784">Will you    be transfering title to a spouse? (If you intend to transfer title to anyone    other than your spouse then we will need to treat this like a purchase, and    depending on how you are doing the transfer you may or may not be obligated    to pay land transfer taxes.  Please    call us to discuss, possible solutions.)</td>
    <td>
        <select name="Refinance_C11" id="Refinance_C11">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D11"  class="number"></td>
    <td id="Refinance_E11"  class="number"></td>
    <td id="Refinance_F11"  class="number"></td>
    <td id="Refinance_G11"  class="number"></td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td width="784">Is this    new first mortgage, line of    credit or other form of financing, which we will be acting on from a private    lender? (i.e. not a Bank, Trust Company, Credit Union or other financial    lending institution)</td>
    <td>
        <select name="Refinance_C12" id="Refinance_C12">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D12"  class="number"></td>
    <td id="Refinance_E12"  class="number"></td>
    <td id="Refinance_F12"  class="number"></td>
    <td id="Refinance_G12"  class="number"></td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td width="784">Will    this new first mortgage be    registered against more than one property? (i.e. will this mortgage need to    be secured against not just the property you are refinancing but another    property you own or someone has provided as collateral security?)</td>
    <td>
        <select name="Refinance_C13" id="Refinance_C13">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D13"  class="number"></td>
    <td id="Refinance_E13"  class="number"></td>
    <td id="Refinance_F13"  class="number"></td>
    <td id="Refinance_G13"  class="number"></td>          <td>&nbsp;</td>
</tr>
<tr>
    <td width="784">Will    you be obtaining a new second    mortgage, second line of credit, bridge loan or other form of additional    financing, which we will be acting on in addition to your first mortgage?</td>
    <td>
        <select name="Refinance_C14" id="Refinance_C14">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D14"  class="number"></td>
    <td id="Refinance_E14"  class="number"></td>
    <td id="Refinance_F14"  class="number"></td>
    <td id="Refinance_G14"  class="number"></td>          
    <td>&nbsp;</td>
</tr>
<tr>
    <td width="784">Is this    new second mortgage, line of    credit or other form of financing, which we will be acting on from a private    lender? (i.e. not a Bank, Trust Company, Credit Union or other financial    lending institution)</td>
    <td>
        <select name="Refinance_C15" id="Refinance_C15">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D15"  class="number"></td>
    <td id="Refinance_E15"  class="number"></td>
    <td id="Refinance_F15"  class="number"></td>
    <td id="Refinance_G15"  class="number"></td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td width="784">Will    this new second mortgage be    registered against more than one property? (i.e. will this second mortgage need to be secured    against not just the property you are refinancing but another property you    own or someone has provided as collateral security?)</td>
    <td>
        <select name="Refinance_C16" id="Refinance_C16">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D16"  class="number"></td>
    <td id="Refinance_E16"  class="number"></td>
    <td id="Refinance_F16"  class="number"></td>
    <td id="Refinance_G16"  class="number"></td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td width="784">&nbsp;</td>
    <td id="Refinance_C17">Total</td>
    <td id="Refinance_D17"  class="number"></td>
    <td id="Refinance_E17"  class="number"></td>
    <td id="Refinance_F17"  class="number"></td>
    <td id="Refinance_G17"  class="number"></td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td rowspan="5" width="116">Searches &amp; Due Diligence</td>
    <td width="784"  class="number"></td>
    <td>&nbsp;</td>
    <td width="133">Fee</td>
    <td width="107">Disbursement</td>
    <td></td>
    <td>&nbsp;</td>
    <td></td>
</tr>
<tr>
    <td width="784">Do you    want a Property Tax Certificate ordered? (Recommended in situations where you    have not paid your property taxes for a while and are uncertain of what is    owed exactly.) (As the owner you inherit all past property taxes and thus    will be responsible to pay all arears plus interest and penalties, often    times its easy to loose track of what they owe, or you may have substantially    renovated or built new the property you are in thus resulting in    Supplemnetary or Omitted Tax Bills that have been recently issued or    overlooked. Remember Property Taxes take precedence over mortgages even if    the mortgage was registered prior to the property tax lien.  This will jeopardize the mortgage and push    it into default even if you make your monthly mortgage payments on time.)</td>
    <td>
        <select name="Refinance_C19" id="Refinance_C19">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D19"  class="number"></td>
    <td id="Refinance_E19"  class="number"></td>
    <td id="Refinance_F19"  class="number"></td>
    <td id="Refinance_G19"  class="number"></td>
    <td></td>
</tr>
<tr>
    <td width="784">Do you    want a Property Information Report? (Recommended for custom new built homes,    homes that have been renovated or look like they had some work done) (As the    owner you inherit all active building permits, violations, work orders and    the zoning designation that apply to the property, this could cost you    thousands to remedy and possibly requiring you to retain architects, planners    and lawyers as well.  The letter    describes what the property is zoned for, if there are any applicable by-laws    and if there is anything active on the property (e.g. active building,    heating and plumbing notices or orders to comply, it will identify any    outstanding work orders, previous Committee of Adjustment applications or    building activity, as well as anything related. For example, outstanding    workorders and open permits could mean thousands of dollars are required to    rememdy the issue, thus resulting in lowering the marketability of the    property reducing its overall value and therefore the lender's Loan To Value    will be higher than expected thus again pushing your mortgage into default.)</td>
    <td>
        <select name="Refinance_C20" id="Refinance_C20">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D20"  class="number"></td>
    <td id="Refinance_E20"  class="number"></td>
    <td id="Refinance_F20"  class="number"></td>
    <td id="Refinance_G20"  class="number"></td>
    <td></td>
</tr>
<tr>
    <td width="784">Do you    want a thorough Property Title Search and Off-Title Search? (Recommended for    properties that are NOT condos or subdivison homes, average cost is 250 for    simple single family dwellings, more so for larger parcels of lands and    buildings) (As the owner you inherit the entire history of ownership, such as    encumbrences, right-of-ways, easements and planning act violations, most of    which cannot be discovered by a simple title search of your property    only.  Most lawyers will only pull    title to your specific property, without studying the abbuting lands    bordering your property lines and their history of ownership.  These lawyers will require you to rely on    the title insurance they originally ordered for you instead.  This often results in an incomplete    conveyance of title, whereby a severe planning act violation resulted in a    nulliefied transfer some-time in the past, resulting in the seller never    having the right or conset to have sold you the property or acquire the    property himself when he did (Yes, a very scary situation).  Not to mention complications when shared    laneways, driveways, access roads or paths are never registered on title or    are not exactly as they appear to be when you visited the property.  Often times lawyers will not know what to    look for without studying the abbuting lands and their right-of-ways.  And although the original seller may have    been enjoying the use of a neighbors driveway or lanway, it was never    registered on title to either property, and therefore can be taken away at    any time.  Hence often times buyers are    paying for something that can be taken away at anytime.  Also title insurance may not be that quick    to help, like all insurance companies you need to first show that the problem    falls within their coverage and that you are either being sued because of the    problem or that you are able to quantify the actual dollar value of the    damages you have suffered because of the problem.  This may be extremly difficult if its a    laneway you thought you had access to but do not and thus need to use a    different laneway that is further away from your property to bring your car    in. And although the original seller told you that it can be used, you now    discover that your neighbor is building something over it. And yes it was    only a matter of convenience to you - something that cannot be necessarily    quantified for title insurance coverage - it may have been a significant    inducement to you purchasing the property in the first place. This can now    result is a lower marketability of the property reducing its value, therefore    increasing the lender's loan to value and pushing your mortgage into    default.)</td>
    <td>
        <select name="Refinance_C21" id="Refinance_C21">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Refinance_D21"  class="number"></td>
    <td id="Refinance_E21"  class="number"></td>
    <td id="Refinance_F21"  class="number"></td>
    <td id="Refinance_G21"  class="number"></td>
    <td></td>
</tr>
<tr>
    <td width="784">&nbsp;</td>
    <td id="Refinance_C22">Total</td>
    <td id="Refinance_D22"  class="number"></td>
    <td id="Refinance_E22"  class="number"></td>
    <td id="Refinance_F22"  class="number"></td>
    <td id="Refinance_G22"  class="number"></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td>*HST does not apply.</td>
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
</tr>
</table>
<div id="divTab">
    <table class="table" border="1" cellspacing="0" cellpadding="0">

        <tr>
            <td></td>
            <td colspan="4">Legal Fees, Disbursements &amp; Land Transfer Taxes</td>
            <td> HST (Taxes) </td>
            <td>Total</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C26">Fees</td>
            <td id="Refinance_D26"  class="number"></td>
            <td id="Refinance_E26"  class="number"></td>
            <td id="Refinance_F26"  class="number"></td>
            <td id="Refinance_G26"  class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C27">Disbursements</td>
            <td id="Refinance_D27"  class="number"></td>
            <td id="Refinance_E27"  class="number"></td>
            <td id="Refinance_F27"  class="number"></td>
            <td id="Refinance_G27"  class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C28">Registration - Statutory*</td>
            <td id="Refinance_D28"  class="number"></td>
            <td id="Refinance_E28"  class="number"></td>
            <td id="Refinance_F28"  class="number"></td>
            <td id="Refinance_G28"  class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C29">Registration - ELRSA</td>
            <td id="Refinance_D29" class="number"></td>
            <td id="Refinance_E29" class="number"></td>
            <td id="Refinance_F29" class="number"></td>
            <td id="Refinance_G29" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C30">Title Insurance</td>
            <td id="Refinance_D30" class="number"></td>
            <td id="Refinance_E30" class="number"></td>
            <td id="Refinance_F30" class="number"></td>
            <td id="Refinance_G30" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C31">Total Fees  &amp;    Disbursements</td>
            <td id="Refinance_D31" class="number"></td>
            <td id="Refinance_E31" class="number"></td>
            <td id="Refinance_F31" class="number"></td>
            <td id="Refinance_G31" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td colspan="2">Land Transfer Taxes*</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C33">Ontario</td>
            <td id="Refinance_D33">Not Applicable</td>
            <td id="Refinance_E33"  class="number"></td>
            <td id="Refinance_F33"  class="number"></td>
            <td id="Refinance_G33"  class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C34">Toronto</td>
            <td id="Refinance_D34">Not Applicable</td>
            <td id="Refinance_E34"  class="number"></td>
            <td id="Refinance_F34"  class="number"></td>
            <td id="Refinance_G34"  class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Refinance_C35">Total Land Transfer Taxes &amp; Credits</td>
            <td id="Refinance_D35">Not Applicable</td>
            <td id="Refinance_E35" class="number"></td>
            <td id="Refinance_F35" class="number"></td>
            <td id="Refinance_G35" class="number"></td>
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
        </tr>
    </table>
</div>

<div>
    First Name: <input type="text" name="first_name" id="first_name" />
</div>

<div>
    Last Name: <input type="text" name="last_name" id="last_name" />
</div>

<div>
    Email: <input type="text" name="email" id="email" />
</div>

<div>
    Phone No: <input type="text" name="phone_no" id="phone_no" />
</div>

<div>
    Select File Format: <input type="radio" name="type" value="0"  /> PDF
    <input type="radio" name="type" value="1"  /> CSV
</div>

<button id="submit_refinance">Update Report</button>
