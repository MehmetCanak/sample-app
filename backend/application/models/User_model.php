<?php

class User_model extends CI_Model 
{
    public function login($mail, $pass)
    {
        $query = $this->db->get_where('users', ['mail' => $mail], 1);
        $users = $query->result();

        if(!$users) return FALSE;
        $user = $users[0];
        
        if(!password_verify($pass, $user->password)) return FALSE;

        unset($user->password);
        $this->session->set_userdata(['user' => $user]);

        return $user;
    } 

    public function get_user_by_token($token)
    {
        $query = $this->db->get_where('users', ['token' => $token], 1);
        return @$query->result()[0];
    }    
}

?>