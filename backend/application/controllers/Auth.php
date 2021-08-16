<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller 
{
	use AuthTrait;

	private $kontolEtme = FALSE;

	public function __construct()
	{
		parent::__construct();
	}

	public function loginForm()
	{
		$this->load->view('auth/loginForm');
	}

	public function login()
	{
		global $pipe;

		$mail = $this->input->post_get('mail');
		$pass = $this->input->post_get('pass');
		return $mail;
		
		$this->load->model('user_model');

		$user = $this->user_model->login($mail, $pass);
		$user = json_decode($user);
		return $user;			
	}

	public function logout()
	{
		$this->classification_library->ByModule(
				$this, 
				'logout'
		);	
	}

	public function rememberPassword()
	{
		echo "şifremi unuttum";
	}
}


trait AuthTrait 
{
    /****   Logout    ****/

	public function logoutGui()
	{
		$this->session->unset_userdata('user');
		redirect(get_base_url('auth/loginForm'));
	}

	public function logoutApi()
	{
		global $pipe;
		if(!$pipe["user"]) dd(['message' => 'OK']);


		$this->db->set('token', "");
        $this->db->where('id', $pipe["user"]->id);
        $this->db->update('users');

		dd(['message' => 'OK.']);
	}


    /****    Login    ****/

	public function loginSuccessApi($user)
	{
		$token = generate_random_string();

        $this->db->set('token', $token);
        $this->db->where('id', $user->id);
        $this->db->update('users');

		dd(['token' => $token]);
	}

	public function loginSuccessGui()
	{
		redirect(get_base_url('news'));
	}

	public function loginErrorApi()
	{
		dd(['message' => tr('Mail yada şifre yanlış')]);
	}

	public function loginErrorGui()
	{
		$this->session->set_flashdata('loginFormMessage', 'Şifre Yanlış');
		redirect(get_base_url('auth/loginForm'));
	}
}
