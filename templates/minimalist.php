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
		body {
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
			font-size: 81.25%; /* should match system size */
			margin: 0;
		}
		div#root {
			width: 80%;
			margin: 2em auto;
		}
		.wp-block-startpage-search-engine-form {
			white-space: nowrap;
		}
		input.searchquery {
			width: 80%;
		}
		a, a:visited {
			color: rgb(51, 103, 214);
		}
		ul, li {
			list-style-type: none;
			text-align: left;
			padding-left: 0;
		}
		ul {
			margin-top: .5em;
			margin-bottom: 1.5em;
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
