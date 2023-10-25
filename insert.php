<?php
$username = $_POST['username'];
$email = $_POST['email'];
$messgae = $_POST['messages'];

if (!empty($username)|| !empty($email)|| !empty($messages)) {
    $host="localhost";
    $dbUsername="root";
    $dbPassword="";
    $dbname="libera";

    //crete connection
    $conn = new mysqli($host,$dbUsername,$dbPassword,$dbname);

    if(mysqli_connect_error()){
        die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
    }else{
        $SELECT="SELECT email from register Where email=? Limit 1";
        $INSERT ="INSERT INTO register (username,email,messages) values(?,?,?)";

        //prepare statement
        $stmt=$conn->prepare($SELECT);
        $stmt-> bind_param("s",$email);
        $stmt-> execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum=$stmt->num_rows;
        
        if ($rnum==0){
            $stmt->close();

            $stmt=$conn->prepare($INSERT);
            $stmt-> bind_param("sss",$username,$email,$messages);
            $stmt->execute();
            echo "New record inserted sucessfully";
        }else{
            echo "Someone already registered using this email";
        }
        $stmt-> close();
        $conn-> close();
    }

} else{
    echo "All Field are required";
    die();
}


?>
