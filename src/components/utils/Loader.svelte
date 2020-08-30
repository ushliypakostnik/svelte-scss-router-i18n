<script>
  const NAME = 'loader';

  export let size = 100;
</script>

<style lang="scss">
  .loader {
    @include size($loader__size--default, $loader__size--default);

    &__wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg path {
      fill: $colors__primary;
    }
  }
</style>

<div class={`${NAME}__wrapper`}>
  <div class={NAME}>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox={`0 0 ${size / 2} ${size / 2}`}>
      <path
        fill="#000"
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.4s"
          repeatCount="indefinite" />
      </path>
    </svg>
  </div>
</div>
