<?php $this->load->view('menu'); ?>
<br><br>
<?=$this->session->flashdata('loginFormMessage'); ?>
<br><br>
<form action="<?=get_base_url('auth/login') ?>" method="POST">
    <div class="form-floating">
        <input name="mail" value="iletisim@omersavas.com" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
    </div>
    <div class="form-floating">
        <input name="pass" value="12345" type="password" class="form-control" id="floatingPassword" placeholder="Password">
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

</form>