const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'startpage/search-engine-form', {
	title: 'Search Engine Form',

	icon: 'search',

	category: 'layout',

	edit( { className } ) {
		return <form className={ className } action="https://duckduckgo.com/">
		<input name="q" style={{width: '80%'}} autocomplete="off" placeholder="Duckduckgo..." />
		<button disabled="disabled">Search</button>
		</form>;
	},

	save() {
		return <form action="https://duckduckgo.com/">
		<input name="q" style={{width: '80%'}} autocomplete="off" autofocus placeholder="Duckduckgo..."  />
		<button>Search</button>
		</form>;
	},
} );
