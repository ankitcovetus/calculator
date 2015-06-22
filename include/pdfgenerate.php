<?php

require("html2fpdf.php");

//Your HTML in a variable
$my_html = $_POST['data'];
$type = $_POST['type'];

if ($type == 0) {
    //Set Your Options -- we are saving the PDF as 'my_filenameFirst.pdf' to a 'my_pdfs' folder
    $htmlFile = "http://www.dancrintea.ro";
    $buffer = $my_html;

    $pdf = new HTML2FPDF('P', 'mm', 'Letter');
    $pdf->AddPage();
    $pdf->WriteHTML($buffer);
    $pdf->Output('my_pdfs/' . $_POST['nameFirst'], 'F');

    $file = 'my_pdfs/' . $_POST['nameFirst'];
    $fileName = $_POST['nameFirst'];
} else {
    // create csv file
    require('simple_html_dom.php');
    $html = str_get_html($_POST['data']);

    header('Content-type: application/ms-excel');
    header("Content-Disposition: attachment; filenameFirst=$fileName");

    $fp = fopen("my_csv/" . $_POST['nameSecond'], "w");
    $csvString = "";

    $html = str_get_html(trim($_POST['data']));

    foreach ($html->find('tr') as $element) {
        $td = array();
        foreach ($element->find('td') as $row) {
            $td [] = $row->plaintext;
        }
        fputcsv($fp, $td);
    }
    fclose($fp);

    $file = 'my_csv/' . $_POST['nameSecond'];
    $fileName = $_POST['nameSecond'];
}


/* $zipFileName = '';
  $zip = new ZipArchive();
  $zip_name = time().".zip"; // Zip name
  $zipFileName = $zip_name;
  $zip->open($zip_name,  ZipArchive::CREATE);
  foreach ($files as $file) {
  $path = $file;
  if(file_exists($path)){
  $zip->addFromString(basename($path),  file_get_contents($path));
  }
  else{

  }
  }
  $zip->close(); */


$from_name = 'Priya Jain';
$from_mail = 'priya.covetus02@gmail.com';
$replyto = 'priya.covetus02@gmail.com';

//define the message to be sent. Each line should be separated with \n
$message = "Dear " . $_POST['first_name'] . " " . $_POST['last_name'];


$file = $file;
$file_size = filesize($file);
$handle = fopen($file, "r");
$content = fread($handle, $file_size);
fclose($handle);
$content = chunk_split(base64_encode($content));
$uid = md5(uniqid(time()));
$name = basename($file);
$headers = "From: " . $from_name . " <" . $from_mail . ">\r\n";
$headers .= "Reply-To: " . $replyto . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $uid . "\"\r\n\r\n";
$headers .= "This is a multi-part message in MIME format.\r\n";
$headers .= "--" . $uid . "\r\n";
$headers .= "Content-type:text/plain; charset=iso-8859-1\r\n";
$headers .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$headers .= $message . "\r\n\r\n";
$headers .= "--" . $uid . "\r\n";
$headers .= "Content-Type: application/octet-stream; name=\"" . $fileName . "\"\r\n"; // use different content types here
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= "Content-Disposition: attachment; filename=\"" . $fileName . "\"\r\n\r\n";
$headers .= $content . "\r\n\r\n";
$headers .= "--" . $uid . "--";

$to = $_POST['email'];
//define the subject of the email
$subject = 'Report Detail';

//send the email
#$mail_sent = @mail($to, $subject, $message, $headers);

if ($type == 0) {
    unlink('my_pdfs/' . $_POST['nameFirst']);
}

//if the message is sent successfully print "Mail sent". Otherwise print "Mail failed" 
echo $mail_sent ? "Mail sent" : "Mail failed";

//unlink($zipFileNAme);
//print_r(error_get_last()); 
?>