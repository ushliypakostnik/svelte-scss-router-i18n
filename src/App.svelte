<script>
  /*
   * More details about Tinro router:
   * https://github.com/AlexxNB/tinro
   */
  import { Route } from "tinro";
  import Header from "components/layout/Header.svelte";
  import Home from "components/views/Home.svelte";
  import Page404 from "components/views/Page404.svelte";
</script>

<style lang="scss" global>
  /* Import global styles only in to the root component */
  @import "styles/_main";

  main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

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
