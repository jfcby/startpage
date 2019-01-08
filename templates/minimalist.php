<?php
/**
 * Minimalist Startpage Theme
 *
 * @package Startpage
 */

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>New tab</title>
	<style type="text/css">
		div#root {
		  width: 80%;
		  margin: 2em auto;
		}
	</style>
</head>
<body>

	<div id="root">
		<?php
		while ( have_posts() ) :
			the_post();
			the_content();

		endwhile;
		?>
	</div>

</body>
</html>
