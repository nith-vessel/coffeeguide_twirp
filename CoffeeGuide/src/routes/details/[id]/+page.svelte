<script lang="ts">
  import type { PageServerData } from "./$types";
  export let data: PageServerData;
  console.log(data);
  
</script>

<article>
  <header>
    <ul />
    <h2>{data.name}</h2>
  </header>
<img alt="image id {data.id}" src="../../images/{data.id}.jpg"/>
  <blockquote>
    {data.description}
  </blockquote>
</article>
