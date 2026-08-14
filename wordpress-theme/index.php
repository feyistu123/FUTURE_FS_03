<?php get_header(); ?>

<section class="page-header">
    <div class="container">
        <h1><?php echo is_archive() ? get_the_archive_title() : 'Health Blog'; ?></h1>
        <p>Stay informed with our health guides and medical resources</p>
    </div>
</section>

<section class="blog-page">
    <div class="container">
        <div class="blog-grid-full">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <article class="blog-article featured-article">
                    <div class="blog-article-image">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('blog-thumb'); ?>
                        <?php endif; ?>
                        <span class="blog-category"><?php echo get_the_category()[0]->name ?? 'Health'; ?></span>
                    </div>
                    <div class="blog-article-content">
                        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="article-meta">
                            <span><i class="far fa-calendar-alt"></i> <?php echo get_the_date(); ?></span>
                            <span><i class="far fa-clock"></i> <?php echo get_reading_time(); ?></span>
                            <span><i class="far fa-user"></i> <?php the_author(); ?></span>
                        </div>
                        <p><?php echo get_the_excerpt(); ?></p>
                        <a href="<?php the_permalink(); ?>" class="btn-primary">Read Full Guide <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
            <?php endwhile; ?>
            
            <div class="pagination">
                <?php echo paginate_links(); ?>
            </div>
            
            <?php else : ?>
                <p>No blog posts found.</p>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>