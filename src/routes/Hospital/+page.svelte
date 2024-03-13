<script>
// @ts-nocheck

    // Your component's script code goes here
  export let form;
  </script>
  
  <form method="POST">
    <!-- Form fields go here -->

    <label for="city">City: </label>
    <input type="text" id='city' name='city' />
    <label for="state">State: </label>
    <input type="text" id='state' name='state' />
    <label for="fcode">Fips Code: </label>
    <input type="fcode" id='fcode' name='fcode' />
    <button type="submit">Submit</button>

  </form>
    {#if form !== null}
    <!-- svelte-ignore missing-declaration -->
    <table style="border:solid; border-collapse: collapse;">
      <tr>
        <th>Name</th>
        <th>Telephone</th>
        <th>Type</th>
        <th>Location</th>
      </tr>
    {#each Object.entries(form) as [key, value], index (key)}
    {#each Object.entries(value.Row) as row, index}
    <tr>
        <td>{row[1]["name"]}</td>
        <td>{row[1]["telephone"]}</td>
        <td>{row[1]["type"]}</td>
        <td>				<div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;"><div id="google-maps-display" style="height:100%; width:100%;max-width:100%;"><iframe title="maps"style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/search?q={row[1]["latitude"]}+{row[1]["longitude"]}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="from-embedmap-code" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="get-map-data">premium bootstrap themes</a><style>#google-maps-display img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div></td>
        </tr>
	  {/each}
    {/each}
    </table>
    {/if}



    <style>
      table td, table th {
    border: 1px solid black;
}
    </style>