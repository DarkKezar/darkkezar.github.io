<?php
$paid_prises = array(
            array("Iphone 14",                 2000, "270deg", "prise_descriptor", 1500),
            array("Курс Американский фриланс", 1000, "170deg", "prise_descriptor", 600),
            array("AirPods Pro 2",             500, "070deg", "prise_descriptor", 250),
            array("AirTag",                    100, "000deg", "prise_descriptor", 60),
            //name | на какой прокрутке выпадает | поворот картинки на фронте | id товара в магазине
        );
        $count = 500;
        $max = 2000;
$sum = 0;
        $info_prises = array(
            array("Name 1", "270deg", "prise_descriptor", 10),
            array("Name 2", "270deg", "prise_descriptor", 20),
            array("Name 3", "270deg", "prise_descriptor", 30),
            array("Name 4", "270deg", "prise_descriptor", 40),
            array("Name 5", "270deg", "prise_descriptor", 50),
        );

        $system_roll = 1;



        $data = array(
            "status" => null,
            "prise_info" => array(null, null, null),
        );

        for($i = 0; $i < $count; $i++){
            $system_roll = ($i + 1) % $max;
            foreach ($paid_prises as $arr){
                if($system_roll % $arr[1] == 0){
                    $data['prise_info'][0] = $arr[0];
                    $data['prise_info'][1] = $arr[2];
                    $data['prise_info'][2] = $arr[3];
                    $sum += $arr[4];
                    break;
                }
            }
            if($data['prise_info'][0] == null){
                $i = $i % count($info_prises);
                $data['prise_info'][0] = $info_prises[$i][0];
                $data['prise_info'][1] = $info_prises[$i][1];
                $data['prise_info'][2] = $info_prises[$i][2];
                $sum += $info_prises[$i][3];
            }
          //echo $i.' '.json_encode($data).'<br>';
                $data['prise_info'][0] = null;
                $data['prise_info'][1] = null;
                $data['prise_info'][2] = null;
            
        }
        echo $sum.'<br>';
        echo $sum*10/$count;
           
    