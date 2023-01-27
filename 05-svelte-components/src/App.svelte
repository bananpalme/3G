<script>
	import Recipe from './components/Recipe.svelte'
	let recipes = ['gurkemeje sovs', 'Zaza zoinkz', 'paprika pulver', 'gamle våde nudler', 'nødde suppe']
</script>

<header>
	<h1>Web Components</h1>

</header>

<main>
	{#each recipes as title, index}
		<Recipe {title} {index}/>
		
	{/each}
</main>

<style>
	h1{
		color: blueviolet;
		text-transform: uppercase;
		font-weight: 100;
	}
	main{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: .4rem;
	}

</style>