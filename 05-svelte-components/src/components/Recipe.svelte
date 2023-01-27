<script>
	export let title = 'unavngivet'
	export let index = 0
</script>

<main>
	<h1>{title}</h1>
    <div class="number">
        {index}
    </div>
</main>

<style>
    main{
        display: grid;
        place-items: center;
        height: 400px;
        width: 100%;
        border: 1px solid  midnightblue;
        position: relative;
    }
    h1{
        font-weight: 100;
    }
    .number{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        height: 2rem;
        width: 2rem;
        background-color: purple;
        color: white;
        display: grid;
        place-items: center;
        border-radius: 50%;
    }
</style>