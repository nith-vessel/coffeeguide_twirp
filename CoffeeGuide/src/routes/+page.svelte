<script lang="ts">1
    import type { PageServerData } from "./$types";
    export let data: PageServerData;
    
  </script>
  
  <article>
    <nav>
      <ul />
      <ul>
        <li><h2>Welcome to the Coffee Guide! ☕</h2></li>
      </ul>
      <ul />
    </nav>
    <body>
      <section id="containers">
        <h4>What are you in the mood for?</h4>
        {#each data.list as coffee}
          <div>
            <p>
              <a
                href="/details/{coffee.id}"
                data-tooltip={coffee.preview}
                data-placement="right">{coffee.name}</a
              >
            </p>
          </div>
        {/each}
      </section>
    </body>
  </article>
  