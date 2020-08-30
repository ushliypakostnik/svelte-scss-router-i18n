<script>
  import LangSwitch from './LangSwitch.svelte';

  const HEADER_CLASS = 'header';
</script>

<style lang="scss">
  .header {
    background: $colors--black;
    position: fixed;
    top: 0;
    z-index: $layouts__fixed;
    @include size(100%, $header__height);

    .container {
      height: $header__height;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &__right {
      width: 100%;
      display: flex;
      justify-content: space-between;

      nav {
        display: flex;
        align-items: center;

        a {
          @include text(
            $font-family__sans,
            $font-size--normal,
            $font-weight__sans__regular
          );

          // stylelint-disable selector-max-compound-selectors
          & + a {
            margin-left: $gutter * 2;
          }
        }
      }
    }
  }
</style>

<header id={HEADER_CLASS} class={HEADER_CLASS} role="banner">
  <div class="container">
    <div class={`${HEADER_CLASS}__right`}>
      <nav><a href="/">Home</a> <a href="/fsgdfgdfhgdfg">404</a></nav>
      <LangSwitch />
    </div>
  </div>
</header>
