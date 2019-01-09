const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, SelectControl } = wp.components;

registerBlockType( 'startpage/search-engine-form', {
	title: 'Search Engine Form',
	icon: 'search',
	category: 'layout',
	attributes: {
		searchengine: {
			type: 'string',
		},
	},

	edit( { attributes, setAttributes, className } ) {
		const inspector = (
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={ __( 'Search Engine', 'friends' ) }
						onChange={ searchengine => setAttributes( { searchengine } ) }
						value={ attributes.searchengine }
						options={ [
							{
								label: 'DuckDuckGo',
								value: 'duckduckgo',
							},
							{
								label: 'Google',
								value: 'google',
							},
						] }
					/>
				</PanelBody>
			</InspectorControls>
		);

		switch ( attributes.searchengine ) {
			default:
			case 'duckduckgo':
				return (
					<Fragment>
						{ inspector }
						<form className={ className } action="https://duckduckgo.com/">
							<input name="q" class="searchquery" autocomplete="off" placeholder="Duckduckgo..." />
							<button disabled="disabled">{ __( 'Search', 'startpage' ) }</button>
						</form>
					</Fragment>
				);

			case 'google':
				return (
					<Fragment>
						{ inspector }
						<form className={ className } action="https://google.com/search">
							<input name="q" class="searchquery" autocomplete="off" placeholder="Google..." />
							<button disabled="disabled">{ __( 'Search', 'startpage' ) }</button>
						</form>
					</Fragment>
				);
		}
	},

	save( { attributes, className }  ) {
		switch ( attributes.searchengine ) {
			case 'duckduckgo':
				return (
					<form className={ className } action="https://duckduckgo.com/">
						<input name="q" class="searchquery" autocomplete="off" placeholder="Duckduckgo..." />
						<button>{ __( 'Search', 'startpage' ) }</button>
					</form>
				);

			case 'google':
				return (
					<form className={ className } action="https://google.com/search">
						<input name="q" class="searchquery" autocomplete="off" placeholder="Google..." />
						<button>{ __( 'Search', 'startpage' ) }</button>
					</form>
				);
		}
	},
} );
