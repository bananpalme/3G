<script>
    let animals = [{"name":"seagull"},{"name":"dog"},{"name":"albatross"},{"name":"unicorn"},{"name":"hydra"},{"name":"fnatmide"},{"name":"bendelorm"},{"name":"due"},{"name":"kraken"},{"name":"sphinx"},]

</script>

<main>
    <div class="header">
        <h1>Dyr jeg vil skyde børn op i</h1>
    </div>
    <div class="animals">
        {#each animals as animal}
            <div class="animal">
                <h2>{animal.name}</h2>
            </div>
        {/each}
    </div>
</main>

<style>
    :global(body){
        margin: 0;
        padding: 0;
    }
    .header{
        background-color: pink;
        height: 12vh;
        display: grid;
        place-items: center;
        border-bottom: 3px solid black;
    }
    h1{
        margin: 0;
        font-weight: 500;
    }
    h2{
        margin: 0;
        font-weight: 500;
    }
    .animals{
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        margin: 1rem;
        padding: 1rem;
    }
    .animal{
        display: grid;
        place-items: center;
        border-radius: 50%;
        border: black solid 3px;
        height: 200px;
        width: 200px;
		box-shadow: -8px 10px 20px 4px darkorchid;
        background-color: pink;
    }


</style>