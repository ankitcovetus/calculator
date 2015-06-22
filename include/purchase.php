<script src="<?php echo $base_url; ?>js/purchase.js" type="text/javascript"></script>
<div class="demo-container">
    <div class="demo-box">Demonstration Box</div>
    <div></div>
</div>
<table class="table" border="1" cellspacing="0" cellpadding="0">
    <col width="103" />
    <col width="784" />
    <col width="151" />
    <col width="133" />
    <col width="107" />
    <col width="124" />
    <col width="155" />
    <col width="97" />
    <tr>
        <td rowspan="4" width="103">Purchase Price</td>
        <td width="784">When you retain us for your    closing we will review and request amendments/changes to your Agreement of    Purchase and Sale at no charge, as well as review and advise you on your    condominium Status Certificate at no charge. Yes, that's all for Free!</td>
        <td rowspan="2" width="151">Purchase Price</td>
        <td rowspan="2" width="133" class="hide1001">Fee</td>
        <td rowspan="2" width="107" class="hide1001">Disbursement</td>
        <td colspan="2" width="279" class="hide10011">Registration</td>
        <td width="97" class="hide10011"></td>
    </tr>
    <tr>
        <td class="hide10011"></td>
        <td width="124" class="hide10011">Statutory*</td>
        <td width="155" class="hide10011">ELRSA</td>
        <td></td>
    </tr>
    <tr>
        <td width="784">What    is the total purchase price and all consideration you are paying to purchase    your property from the seller, less any HST? (i.e. if you are purchasing a    resale then most likely the purchase price is the total consideration you are    paying to the seller, if however you are purchasing a new-build then you must    backout the net HST you are payiing, which is usually the Gross HST less the    Rebate credit the builder/vendor is granting you, however you should also add    back any additional consideration you are paying such as upgrades) *If you    are not sure just enter the face value of your purchase price and we will    adjust the land transfer taxes down once we speak with the seller's lawyer.</td>
        <td><input type="text" class="number" name="purchase_price" id="Purchase_C3" value="" /> </td>
        <td id="Purchase_D3"  class="hide1001 number"></td>
        <td id="Purchase_E3" class="hide1001 number"></td>
        <td id="Purchase_F3" class="hide1001 number"></td>
        <td id="Purchase_G3" class="hide1001 number"></td>
        <td id="Purchase_H3" class="hide1001"></td>
    </tr>
    <tr>
        <td width="784">&nbsp;</td>
        <td id="Purchase_C4">Total </td>
        <td id="Purchase_D4" class="hide1001 number"></td>
        <td id="Purchase_E4" class="hide1001 number"></td>
        <td id="Purchase_F4" class="hide1001 number"></td>
        <td id="Purchase_G4" class="hide1001 number"></td>
        <td id="Purchase_H4" class="hide1001"></td>
    </tr>
    <tr>
        <td rowspan="7" width="103">Land Transfer Taxes &amp; Tenancies (up to six    (6) units)</td>
        <td rowspan="2" width="784">&nbsp;</td>
        <td rowspan="2">&nbsp;</td>
        <td rowspan="2" width="133" class="hide1001">Fee</td>
        <td rowspan="2" width="107" class="hide1001">Disbursement</td>
        <td colspan="2" class="hide1001"> Land Transfer Taxes* </td>
        <td></td>
    </tr>
    <tr>
        <td class="hide1001">Ontario</td>
        <td class="hide1001"> Toronto </td>
        <td width="97" class="hide1001"><u>&nbsp;</u></td>
</tr>
<tr>
    <td>Is your property located in the Municipality of Toronto? (i.e. the GTA)</td>
    <td>
        <select name="Purchase_C7" id="Purchase_C7">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D7" class="hide1001 number"></td>
    <td id="Purchase_E7" class="hide1001 number"></td>
    <td id="Purchase_F7" class="hide1001 number"></td>
    <td id="Purchase_G7" class="hide1001 number"></td>
    <td id="Purchase_H7" class="hide1001"><u>&nbsp;</u></td>
</tr>
<tr>
    <td width="784">Does    your property contain at least one but not more than two, single family    residences? (i.e. is your property residential and is no more than a duplex    or made up of no more than two (2) apartments? If it's a triplex or more or    not residential (e.g. commercial) than your answer should be no)</td>
    <td>
        <select name="Purchase_C8" id="Purchase_C8">
            <option value="">Select</option>
            <option value="1">Yes</option> 
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D8" class="hide1001 number"></td>
    <td id="Purchase_E8" class="hide1001 number"></td>
    <td id="Purchase_F8" class="hide1001 number"></td>
    <td id="Purchase_G8" class="hide1001 number"></td>
    <td class="hide1001">&nbsp;</td>
</tr>
<tr>
    <td width="784">If your    property is a residential multi-plex made up of more than one (1) single    family residence but up to six (6) residences, please enter how many tenants    there are (e.g. if your property has more than six (6) single family    residences, in other words, more than six (6) apartments please contact us    for a quote, otherwise enter the number of tenants. If there are no tenants    enter &quot;0&quot; (zero))</td>
    <td><input type="text" class="number" name="" id="Purchase_C9" /></td>
    <td id="Purchase_D9" class="hide1001">0.00</td>
    <td id="Purchase_E9" class="hide1001 number"></td>
    <td id="Purchase_F9" class="hide1001 number"></td>
    <td id="Purchase_G9" class="hide1001 number"></td>
    <td class="hide1001">&nbsp;</td>
</tr>
<tr>
    <td width="784">What    percent of all purchasers are first time home buyers and are moving in as    their principle residence?  (If all are    enter 100%.  In order to qualify for    the first time home buyer land transfer tax refund a purchaser must have    never owned a home (commercial or investment properties are not included)    anywhere in the world, and you must occupy the home within 9 months of    closing as your principle residence.     If you are a first time home buyer and your spouse is not then neither    of you qualify, please enter 0%.  If    your spouse sold his or her home prior to becoming your spouse and did not    own a home anytime while being your spouse then both of you will qualify for    the full refund if you as well quaify as a first time home buyer, please    enter 100%.  If you and your    co-purchaser are not spouses and only one of you qualify as a first time home    buyer then please enter 50%.)</td>
    <td>
        <input name="Purchase_C10" id="Purchase_C10" value="">
    </td>
    <td id="Purchase_D10" class="hide1001"></td>
    <td id="Purchase_E10" class="hide1001 number"></td>
    <td id="Purchase_F10" class="hide1001 number"></td>
    <td id="Purchase_G10" class="hide1001 number"></td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td></td>
    <td id="Purchase_C11">Total</td>
    <td id="Purchase_D11" class="hide1001 number"></td>
    <td id="Purchase_E11" class="hide1001 number">0</td>
    <td id="Purchase_F11" class="hide1001 number"></td>
    <td id="Purchase_G11" class="hide1001 number"></td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td rowspan="11" width="103">Title Insurance &amp; Mortgages</td>
    <td rowspan="2">&nbsp;</td>
    <td rowspan="2">&nbsp;</td>
    <td rowspan="2" width="133" class="hide1001">Fee</td>
    <td colspan="2" width="231" class="hide1001">Registration</td>
    <td rowspan="2" width="155" class="hide1001"> Title Insurance </td>
    <td width="97" class="hide1001"><u>&nbsp;</u></td>
</tr>
<tr>
    <td width="107" class="hide1001">Statutory*</td>
    <td width="124" class="hide1001">ELRSA</td>
    <td width="97" class="hide1001"><u>&nbsp;</u></td>
</tr>
<tr>
    <td width="784">Is this    property a condominium?  (i.e. is a    condominium or does it have condominium common elements, this could still be    a townhome or low/highrise building)</td>
    <td>
        <select id="Purchase_C14">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D14" class="hide1001 number"></td>
    <td id="Purchase_E14" class="hide1001 number"></td>
    <td id="Purchase_F14" class="hide1001 number"></td>
    <td id="Purchase_G14" class="hide1001 number"></td>
    <td id="Purchase_H14" class="hide1001"></td>
</tr>
<tr>
    <td width="784">Is the    property you are purchasing a NEW property from the builder who is also the    seller? (i.e. are you buying a new build? Like a house that was recently torn    down and rebuilt, or a home in a subdivison from the original builder    directly, or a new build condominium from the builder directly)</td>
    <td>
        <select id="Purchase_C15">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D15" class="hide1001 number"</td>
    <td id="Purchase_E15" class="hide1001 number"</td>
    <td id="Purchase_F15" class="hide1001 number"</td>
    <td id="Purchase_G15" class="hide1001 number"</td>
    <td>&nbsp;</td>
</tr>
<tr>
    <td width="784">Will you    be obtaining a first mortgage,    line of credit or other form of financing, which we will be acting on?</td>
    <td>
        <select id="Purchase_C16">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D16" class="hide1001 number"></td>
    <td id="Purchase_E16" class="hide1001 number">-</td>
    <td id="Purchase_F16" class="hide1001 number">-</td>
    <td id="Purchase_G16" class="hide1001 number"></td>
    <td id="Purchase_H16" class="hide1001">&nbsp;</td>
</tr>
<tr>
    <td width="784">Is this first mortgage, line of credit or    other form of financing, which we will be acting on from a private lender?    (i.e. not a Bank, Trust Company, Credit Union or other financial lending    institution)</td>
    <td>
        <select id="Purchase_C17">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D17" class="hide1001 number"></td>
    <td id="Purchase_E17" class="hide1001 number"></td>
    <td id="Purchase_F17" class="hide1001 number"></td>
    <td id="Purchase_G17" class="hide1001 number">-</td>
    <td >&nbsp;</td>
</tr>
<tr>
    <td width="784">Will    this first mortgage be    registered against more than one property? (i.e. will this mortgage need to    be secured against not just the property you are purchasing but another    property you own or someone has provided as collateral security?)</td>
    <td>
        <select id="Purchase_C18">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D18" class="hide1001 number">-</td>
    <td id="Purchase_E18" class="hide1001 number">-</td>
    <td id="Purchase_F18" class="hide1001 number">-</td>
    <td id="Purchase_G18" class="hide1001 number">-</td>
    <td id="Purchase_H18" class="hide1001"></td>
</tr>
<tr>
    <td width="784">Will    you be obtaining a second    mortgage, second line of credit, bridge loan or other form of additional    financing, which we will be acting on in addition to your first mortgage?</td>
    <td>
        <select id="Purchase_C19">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D19" class="hide1001 number">-</td>
    <td id="Purchase_E19" class="hide1001 number">-</td>
    <td id="Purchase_F19" class="hide1001 number">-</td>
    <td id="Purchase_G19" class="hide1001 number">-</td>
    <td id="Purchase_H19" class="hide1001"></td>
</tr>
<tr>
    <td width="784">Is this second mortgage, line of credit or    other form of financing, which we will be acting on from a private lender?    (i.e. not a Bank, Trust Company, Credit Union or other financial lending    institution)</td>
    <td>
        <select id="Purchase_C20">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D20" class="hide1001 number"></td>
    <td id="Purchase_E20" class="hide1001 number"></td>
    <td id="Purchase_F20" class="hide1001 number"></td>
    <td id="Purchase_G20" class="hide1001 number">-</td>
    <td id="Purchase_H20" class="hide1000"></td>
</tr>
<tr>
    <td width="784">Will    this second mortgage be    registered against more than one property? (i.e. will this second mortgage need to be secured    against not just the property you are purchasing but another property you own    or someone has provided as collateral security?)</td>
    <td>
        <select id="Purchase_C21">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D21" class="hide1000 number">-</td>
    <td id="Purchase_E21" class="hide1000 number">-</td>
    <td id="Purchase_F21" class="hide1000 number">-</td>
    <td id="Purchase_G21" class="hide1000 number">-</td>
    <td id="Purchase_H21" class="hide1000"></td>
</tr>
<tr>
    <td width="784">&nbsp;</td>
    <td id="Purchase_C22" width="151">Total</td>
    <td id="Purchase_D22" class="hide1000 number">-</td>
    <td id="Purchase_E22" class="hide1000 number">-</td>
    <td id="Purchase_F22" class="hide1000 number">-</td>
    <td id="Purchase_G22" class="hide1000"></td>
    <td class="hide1000">&nbsp;</td>
</tr>
<tr>
    <td rowspan="5" width="103" >Searches &amp; Due Diligence</td>
    <td width="784" ></td>
    <td >&nbsp;</td>
    <td width="133" class="hide1000">Fee</td>
    <td width="107" class="hide1000">Disbursement</td>
    <td class="hide1000"></td>
    <td  class="hide1000">&nbsp;</td>
    <td  class="hide1000"></td>
</tr>
<tr>
    <td width="784">Do you    want a Property Tax Certificate ordered? (Recommended for resales or custom    new built homes) (As the new owner you inherit all past property taxes and    thus will be responsible to pay all arears plus interest and penalties, often    times the sellers are dishonest or have lost track of what they owe, or may    have substantially renovated or built new the property you are buying thus    resulting in Supplemnetary or Omitted Tax Bills that have been recently    issued or overlooked; yes title insurance will cover what was not discovered    during closing, however, this is a long and tedious process after closing.    Furthermore, many lawyers will not give you this option and strictly rely on    the title insurance they ordered for you, and then leave you in the dark after    closing while you try to figure out how to apply for the title insurance to    reimburse you.  This may not be    necessary for newly built condos or subdivision homes purchased directly from    the builder.  However,    otherwise this is highly recommended!)</td>
    <td>
        <select id="Purchase_C24">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D24" class="hide1000 number"></td>
    <td id="Purchase_E24" class="hide1000 number"></td>
    <td id="Purchase_F24" class="hide1000 number"></td>
    <td id="Purchase_G24" class="hide1000 number"></td>
    <td></td>
</tr>
<tr>
    <td width="784">Do    you want a Property Information Report? (Recommended for custom new built    homes, homes that have been renovated or look like they had some work done)    (As the new owner you inherit all active building permits, violations, work    orders and the zoning designation that apply to the property, this could cost    you thousands to remedy and possibly requiring you to retain architects,    planners and lawyers as well.  The    seller may also not be around or easily willing to accept responsibility (as    if often the case). The letter describes what the property is zoned for, if    there are any applicable by-laws and if there is anything active on the    property (e.g. active building, heating and plumbing notices or orders to    comply, it will identify any outstanding work orders, previous Committee of    Adjustment applications or building activity, as well as anything related.    This may not be necessary for newly built condos or subdivision homes    purchased directly from the builder.).</td>
    <td>
        <select id="Purchase_C25">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D25" class="hide1000 number"></td>
    <td id="Purchase_E25" class="hide1000 number"></td>
    <td id="Purchase_F25" class="hide1000 number"></td>
    <td id="Purchase_G25" class="hide1000 number"></td>
    <td></td>
</tr>
<tr>
    <td width="784">Do you    want a thorough Property Title Search and Off-Title Search? (Recommended for    properties that are NOT condos or subdivison homes, average cost is 250 for    simple single family dwellings, more so for larger parcels of lands and    buildings) (As the new owner you inherit the entire history of ownership,    such as encumbrences, right-of-ways, easements and planning act violations,    most of which cannot be discovered by a simple title search of your property    only.  Most lawyers will only pull    title to your specific property, without studying the abbuting lands    bordering your property lines and their history of ownership.  These lawyers will require you to rely on    the title insurance they ordered for you instead.  This often results in an incomplete    conveyance of title, whereby a severe planning act violation resulted in a    nulliefied transfer some-time in the past, resulting in the seller never    having the right or conset to sell you the property or acquire the property    himself when he did.  Not to mention    complications when shared laneways, driveways, access roads or paths are    never registered on title or are not exactly as they appear to be when you    visited the property.  Often times    lawyers will not know what to look for without studying the abbuting lands    and their right-of-ways.  And although    the seller may have been enjoying the use of a neighbors driveway or lanway,    it was never registered on title to either property, and therefore can be    taken away at any time.  Hence often    times buyers are paying for something that can be taken away at anytime.  Also title insurance may not be that quick    to help, like all insurance companies you need to first show that the problem    falls within their coverage and that you are either being sued because of the    problem or that you are able to quantify the actual dollar value of the    damages you have suffered because of the problem.  This may be extremly difficult if its a laneway    you thought you had access to but do not and thus need to use a different    laneway that is further away from your property to bring your car in. And    although the seller told you that it can be used, you now discover that your    neighbor is building something over it. And yes it was only a matter of    convenience to you - something that cannot be necessarily quantified for    title insurance coverage - it may have been a significant inducement to you    purchasing the property in the first place.)</td>
    <td>
        <select id="Purchase_C26">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
    </td>
    <td id="Purchase_D26" class="hide1000 number"></td>
    <td id="Purchase_E26" class="hide1000 number"></td>
    <td id="Purchase_F26" class="hide1000 number"></td>
    <td id="Purchase_G26" class="hide1000 number"></td>
    <td></td>
</tr>
<tr>
    <td width="784">&nbsp;</td>
    <td id="Purchase_C27" width="151">Total</td>
    <td id="Purchase_D27" class="hide1000 number">-</td>
    <td id="Purchase_E27" class="hide1000 number"></td>
    <td id="Purchase_F27" class="hide1000 number"></td>
    <td id="Purchase_G27" class="hide1000 number"></td>
    <td></td> 
</tr>
<tr>
    <td></td>
    <td>*HST does not apply.</td>  
    <td></td>
    <td class="hide100"></td>
    <td class="hide100"></td>
    <td class="hide100"></td>
    <td class="hide100"></td> 
    <td class="hide100"></td>
</tr>

</table>
<div id="divTab">
    <table class="table" border="1" cellspacing="0" cellpadding="0">
        <tr >
            <td></td>
            <td colspan="4">Legal Fees, Disbursements &amp; Land Transfer Taxes</td>
            <td> HST (Taxes) </td>
            <td>Total</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C31">Fees</td>
            <td id="Purchase_D31" class="number"></td>
            <td id="Purchase_E31" class="number"></td>
            <td id="Purchase_F31" class="number"></td>
            <td id="Purchase_G31" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C32">Disbursements</td>
            <td id="Purchase_D32" class="number"></td>
            <td id="Purchase_E32" class="number"></td>
            <td id="Purchase_F32" class="number"></td>
            <td id="Purchase_G32" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C33">Registration - Statutory*</td>
            <td id="Purchase_D33" class="number"></td>
            <td id="Purchase_E33" class="number"></td>
            <td id="Purchase_F33" class="number"></td>
            <td id="Purchase_G33" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C34">Registration - ELRSA</td>
            <td id="Purchase_D34" class="number"></td>
            <td id="Purchase_E34" class="number"></td>
            <td id="Purchase_F34" class="number"></td>
            <td id="Purchase_G34" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C35">Title Insurance</td>
            <td id="Purchase_D35" class="number"></td>
            <td id="Purchase_E35" class="number"></td>
            <td id="Purchase_F35" class="number"></td>
            <td id="Purchase_G35" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C36">Total Fees  &amp;    Disbursements</td>
            <td id="Purchase_D36" class="number"></td>
            <td id="Purchase_E36" class="number"></td>
            <td id="Purchase_F36" class="number"></td>
            <td id="Purchase_G36" class="number"></td>
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
            <td id="Purchase_C38">Ontario</td>
            <td id="Purchase_D38" class="number"></td>
            <td id="Purchase_E38" class="number"></td>
            <td id="Purchase_F38" class="number"></td>
            <td id="Purchase_G38" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C39">Toronto</td>
            <td id="Purchase_D39" class="number"></td>
            <td id="Purchase_E39" class="number"></td>
            <td id="Purchase_F39" class="number"></td>
            <td id="Purchase_G39" class="number"></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td id="Purchase_C40">Total Land Transfer Taxes &amp; Credits</td>
            <td id="Purchase_D40" class="number"></td>
            <td id="Purchase_E40" class="number"></td>
            <td id="Purchase_F40" class="number"></td>
            <td id="Purchase_G40" class="number"></td>
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
<button id="submit" >Update Report</button>
