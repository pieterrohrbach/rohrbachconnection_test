<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("trustGame/TrustGameWebsite_BasicLayout.html", "r") or die("Unable to open file!");
echo fread($myfile,filesize("trustGame/TrustGameWebsite_BasicLayout.html"));
fclose($myfile);
?>

</body>
</html>