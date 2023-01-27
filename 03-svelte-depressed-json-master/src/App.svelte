<script>
	let data = []
	let dataCopy = []
	fetch('./deathrow.json')
		.then(res => res.json())
			.then(json => {
				console.log(json)
				data = json
				dataCopy = data
			})
			let searchName = ''
			const filterByName = () => {
				console.log(searchName)
				dataCopy = data.filter(p => (p['First Name'] + ' ' + p["Last Name"]).toLowerCase().includes(searchName.toLowerCase()))
			}
			let race
			const filterByRace = () => {
				if( race == '*') { dataCopy = data; return }
				dataCopy = data.filter(p => (p['Race']).toLowerCase() == race )
			}
</script>

<main>
	<div class="header">
		<h1>Den sorteste mørkeste hjemmeside</h1>
	</div>
	<div class="filter">
		<p>serch by name</p>
		<input type="text" bind:value={searchName} on:input={filterByName}>
		<p>filter by the color of their cum</p>
		<select bind:value={race} on:change={filterByRace}>
			<option value="*">please select</option>
			<option value="black">black</option>
			<option value="white">white</option>
			<option value="hispanic">hispanic</option>

		</select>
	</div>
	<div class="prisoners">
		{#each dataCopy as prisoner}
			 <div class="prisoner">
				<h2>{ prisoner["First Name"] } { prisoner["Last Name"] }</h2>
				<div>{ prisoner["Age at Execution"] }</div>
				<div class="statement">{ prisoner["Last Statement"] }</div>
			 </div>			 
		{/each}
	</div>
</main>

<style>
	:global(body){
		background-color: black;
		color:whitesmoke;
	}
	.header{
		border:1px solid white;
		display:grid;
		place-items: center;
	}
	.filter{
		display: grid;
		grid-template-columns: 2fr 5fr;
		padding: 0.5rem;
	}
	h1{
		font-weight:100;
		text-transform:uppercase;
	}
	.prisoners{
		padding-top: 1rem;
		display:grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap:.4rem;
	}
	.prisoner{
		border:1px solid whitesmoke;
		background-color:darkgray;
		color:#eee;
		padding:1rem;
		transition: all .5s ease-in-out;
	}
	.show{
		position:fixed;
		width: 100vw;
		height: 100vh;
	}
</style>