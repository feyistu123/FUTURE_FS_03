<?php
// ===== THEME SETUP =====
function odaa_clinic_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'odaa-clinic'),
        'footer' => __('Footer Menu', 'odaa-clinic'),
    ));
    
    // Add custom image sizes
    add_image_size('blog-thumb', 400, 300, true);
    add_image_size('service-thumb', 600, 400, true);
}
add_action('after_setup_theme', 'odaa_clinic_setup');

// ===== ENQUEUE SCRIPTS & STYLES =====
function odaa_clinic_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('odaa-clinic-style', get_stylesheet_uri(), array(), '1.0');
    
    // Enqueue Font Awesome
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    // Enqueue main JavaScript
    wp_enqueue_script('odaa-clinic-main', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'odaa_clinic_scripts');

// ===== REGISTER WIDGET AREAS =====
function odaa_clinic_widgets_init() {
    register_sidebar(array(
        'name' => __('Blog Sidebar', 'odaa-clinic'),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here to appear in your blog sidebar.', 'odaa-clinic'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'odaa-clinic'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in your footer.', 'odaa-clinic'),
        'before_widget' => '<div class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'odaa_clinic_widgets_init');

// ===== CUSTOM POST TYPES =====
function odaa_clinic_custom_post_types() {
    // Services Custom Post Type
    register_post_type('service', array(
        'labels' => array(
            'name' => __('Services', 'odaa-clinic'),
            'singular_name' => __('Service', 'odaa-clinic'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-heart',
        'rewrite' => array('slug' => 'services'),
    ));
    
    // Doctors Custom Post Type
    register_post_type('doctor', array(
        'labels' => array(
            'name' => __('Doctors', 'odaa-clinic'),
            'singular_name' => __('Doctor', 'odaa-clinic'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-id',
        'rewrite' => array('slug' => 'doctors'),
    ));
    
    // Testimonials Custom Post Type
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'odaa-clinic'),
            'singular_name' => __('Testimonial', 'odaa-clinic'),
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor'),
        'menu_icon' => 'dashicons-format-quote',
    ));
}
add_action('init', 'odaa_clinic_custom_post_types');

// ===== SHORTCODES =====
// Services Shortcode
function odaa_clinic_services_shortcode($atts) {
    $args = array(
        'post_type' => 'service',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    );
    $services = new WP_Query($args);
    
    ob_start();
    if ($services->have_posts()) {
        echo '<div class="services-grid">';
        while ($services->have_posts()) {
            $services->the_post();
            echo '<div class="service-card">';
            if (has_post_thumbnail()) {
                echo get_the_post_thumbnail(get_the_ID(), 'service-thumb');
            }
            echo '<h3>' . get_the_title() . '</h3>';
            echo '<p>' . get_the_excerpt() . '</p>';
            echo '<a href="' . get_permalink() . '">Learn More →</a>';
            echo '</div>';
        }
        echo '</div>';
    }
    wp_reset_postdata();
    return ob_get_clean();
}
add_shortcode('odaa_services', 'odaa_clinic_services_shortcode');

// ===== CUSTOM LOGIN LOGO =====
function odaa_clinic_login_logo() {
    echo '<style>
        .login h1 a {
            background-image: url(' . get_template_directory_uri() . '/images/logo.png);
            background-size: contain;
            width: 200px;
            height: 80px;
        }
    </style>';
}
add_action('login_enqueue_scripts', 'odaa_clinic_login_logo');

// ===== EXCERPT LENGTH =====
function odaa_clinic_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'odaa_clinic_excerpt_length');