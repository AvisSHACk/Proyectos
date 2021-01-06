<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class() ?>>
	<header class="site-header">
		<div class="contenedor header-grid">
			<div class="barra-navegacion">
				<div class="logo">
					<a href="<?php echo esc_url( site_url( '/' )) ?>">
						<img src="<?php echo get_template_directory_uri() ?>/img/logo.svg" alt="">
					</a>
				</div>

				<?php 

					$args = array(
						'theme_localtion' => 'menu-principal',
						'container' => 'nav',
						'container_class' => 'menu-principal'
					);

					wp_nav_menu($args)
				 ?>
			</div>
			<div class="tagline text-center">
				<h1><?php the_field('encabezado_texto') ?></h1>
				<p><?php the_field('contenido_hero') ?></p>
			</div>
		</div>
	</header>