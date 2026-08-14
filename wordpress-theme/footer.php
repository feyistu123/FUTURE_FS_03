<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-about">
                <div class="footer-logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>">
                    <span>ODAA<span>Clinic</span></span>
                </div>
                <p>Compassionate Care | Advanced Medicine | Better Health</p>
                <p class="address"><i class="fas fa-map-marker-alt"></i> Woliso Town, 02 Kebele (Ejersa), Behind New Bus Station</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-telegram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="<?php echo home_url(); ?>">Home</a></li>
                    <li><a href="<?php echo home_url('/about'); ?>">About</a></li>
                    <li><a href="<?php echo home_url('/services'); ?>">Services</a></li>
                    <li><a href="<?php echo home_url('/blog'); ?>">Health Blog</a></li>
                    <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
                </ul>
            </div>
            <div class="footer-services">
                <h4>Our Services</h4>
                <ul>
                    <li><a href="<?php echo home_url('/services#general'); ?>">General Medicine</a></li>
                    <li><a href="<?php echo home_url('/services#maternal'); ?>">Maternal & Child Health</a></li>
                    <li><a href="<?php echo home_url('/services#ultrasound'); ?>">4D Ultrasound</a></li>
                    <li><a href="<?php echo home_url('/services#laboratory'); ?>">Laboratory</a></li>
                    <li><a href="<?php echo home_url('/services#dermatology'); ?>">Dermatology</a></li>
                    <li><a href="<?php echo home_url('/services#circumcision'); ?>">Circumcision</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <ul>
                    <li><i class="fas fa-phone"></i> <a href="tel:+251911350573">0911 350 573</a></li>
                    <li><i class="fas fa-phone"></i> <a href="tel:+251113664663">0113 664 663</a></li>
                    <li><i class="fas fa-envelope"></i> <a href="mailto:<?php echo get_option('admin_email'); ?>"><?php echo get_option('admin_email'); ?></a></li>
                    <li><i class="fas fa-clock"></i> Mon-Sun: 8:00 AM - 8:00 PM</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All Rights Reserved.</p>
            <p>Developed with <i class="fas fa-heart"></i> for the Woliso Community</p>
        </div>
    </div>
</footer>

<a href="https://wa.me/251911350573" class="whatsapp-float" target="_blank">
    <i class="fab fa-whatsapp"></i>
</a>

<?php wp_footer(); ?>
<script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
</body>
</html>