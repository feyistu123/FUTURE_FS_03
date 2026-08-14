<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body <?php body_class(); ?>>

<header class="header">
    <div class="container">
        <div class="header-top">
            <div class="contact-info">
                <a href="tel:+251911350573"><i class="fas fa-phone"></i> 0911 350 573</a>
                <a href="mailto:<?php echo get_option('admin_email'); ?>"><i class="fas fa-envelope"></i> <?php echo get_option('admin_email'); ?></a>
                <span><i class="fas fa-clock"></i> Mon-Sun: 8:00 AM - 8:00 PM</span>
            </div>
            <div class="language-switcher">
                <a href="#" class="active">EN</a>
                <a href="#">አማ</a>
                <a href="#">Af</a>
            </div>
        </div>
        <nav class="navbar">
            <div class="logo">
                <a href="<?php echo home_url(); ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>">
                    <span>ODAA<span>Clinic</span></span>
                </a>
            </div>
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'nav-menu',
                'container' => false,
                'fallback_cb' => false,
            ));
            ?>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
</header>