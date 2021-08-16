<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class News extends CI_Controller {

    $check=false;

    public function __construct(){
        parent::__construct();
        echo "buradayım";
    }
    public function index(){
        $this->load->model("sub/new_model");
        
    }
}