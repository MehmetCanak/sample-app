| 
 
 <?php if($this->session->userdata('user')) : ?>
    <a href="<?=get_base_url('auth/logout') ?>">Çıkış</a>
<?php endif ?>