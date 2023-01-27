<script>
	// importere recipe.svelte 
	import Recipe from './components/Recipe.svelte'
	// laver 2 variabler
	let query 
	let recipes = []
	// fetcher fra en api 
	$: fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query)
	.then(res => res.json())
	.then(json=>{
		//console.log(json)
		if(json.meals) recipes = json.meals
	})
</script>

<header>
	<div class="query">
		<input bind:value={query} type="text">
	</div>

</header>
<main>
	{#each recipes as recipe}
		<Recipe {recipe} />
	{/each}
</main>

<style>
	main{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		place-items: center;
		gap: .5rem;
	}
	header{
		display: grid;
		grid-template-columns: 1fr ;
		place-items: center;
		padding: 1rem;
		background-color: tomato;
		margin-bottom: .5rem;
	}
</style>