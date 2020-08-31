<script>
  //
  // More details about Tinro router:
  // https://github.com/AlexxNB/tinro
  //
  import { Route } from 'tinro';

  import Loader from 'components/utils/Loader.svelte';
  import Header from 'components/layout/Header.svelte';
  import Home from 'components/views/Home.svelte';
  import Page404 from 'components/views/Page404.svelte';

  import { isLoading } from 'svelte-i18n';
</script>

<style lang="scss" global>
  /* Import global styles only in to the root component */
  @import 'styles/_main';

  body,
  html {
    height: 100%;
  }

  main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

{#if $isLoading}
  <Loader />
{:else}
  <Header />
  <main role="main">
    <Route>
      <Route path="/">
        <Home />
      </Route>
      <Route fallback>
        <Page404 />
      </Route>
    </Route>
  </main>
{/if}
