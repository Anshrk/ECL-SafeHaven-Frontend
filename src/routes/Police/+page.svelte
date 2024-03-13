<script>
    $: city = '';
    $: state = '';
    $: fipscode = '';
    $: submitted = false;
    function onSubmitForm() {
    }
</script>

<svelte:head>
    <title>Hosptial</title>
    <meta name="description" content="Hospitals in this area" />
</svelte:head>

<section>
    <form action="?/login" method="get">
        <label for="city">City: </label>
        <input type="text" id='city' name='city' />
        <label for="state">State: </label>
        <input type="text" id='state' name='state' />
        <label for="fcode">Fips Code: </label>
        <input type="fcode" id='fcode' name='fcode' />
        <button >Register</button>
    </form>
    {#if submitted}
    <h1>test</h1>
    {/if}
</section>

<style>

</style>


