<?php
/**
 * Created by PhpStorm.
 * User: yhq
 * Date: 2016/11/2
 * Time: 14:16
 */

class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('test.db');
    }
}

$db = new MyDB();
if(!$db){
    echo $db->lastErrorMsg();
} else {
    echo "Opened database successfully\n";
}

//$sql =<<<EOF
//      INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (1, 'Paul', 32, 'California', 20000.00 );
//
//      INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (2, 'Allen', 25, 'Texas', 15000.00 );
//
//      INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );
//
//      INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
//      VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );
//
//EOF;
//
//$ret = $db->exec($sql);
//if(!$ret){
//    echo $db->lastErrorMsg();
//} else {
//    echo "Table created successfully\n";
//}
//$db->close();


$sql =<<<EOF
      SELECT * from COMPANY;
EOF;

$ret = $db->query($sql);
while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
    echo "ID = ". $row['ID'] . "\n";
    echo "NAME = ". $row['NAME'] ."\n";
    echo "ADDRESS = ". $row['ADDRESS'] ."\n";
    echo "SALARY =  ".$row['SALARY'] ."\n\n";
}
echo "Operation done successfully\n";
$db->close();

?>