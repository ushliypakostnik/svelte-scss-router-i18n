<script>
  import { language } from '../../store/utilities.js';
  import { LANGUAGES } from '../../store/constants';

  const LANG_SWITCH_CLASS = 'language-switch';

  const toogleButtonState = () => {
    const lang = $language === LANGUAGES[0] ? LANGUAGES[1] : LANGUAGES[0];
    language.set(lang);
  };
</script>

<style lang="scss">
  .language-switch {
    user-select: none;
    padding: 0;
    position: relative;
    z-index: $layouts__modal - 100;
    cursor: pointer;
    border: none;
    border-radius: 35px;
    margin-left: $gutter * 2;
    @include size(99px, 40px);

    &__active {
      z-index: 10;
      position: absolute;
      top: 5px;
      left: 5px;
      background: $colors__primary;
      border-radius: 30px;
      @include size(47px, 30px);
      @include transitions(left);
    }

    &--active {
      .language-switch__active {
        left: 47px;
      }
    }

    ul {
      position: relative;
      z-index: 100;
      display: flex;
      justify-content: space-around;

      li {
        height: 30px;
        color: $colors--black;
        @include text($font-family__sans, 15px, $font-weight__sans__bold);
        line-height: 30px;
        letter-spacing: 0.06em;

        &:first-child {
          position: relative;
          left: 2px;
        }

        &:last-child {
          position: relative;
          left: -3px;
        }
      }
    }
  }
</style>

<button
  id={LANG_SWITCH_CLASS}
  type="button"
  class="{LANG_SWITCH_CLASS} {$language === LANGUAGES[0] ? `${LANG_SWITCH_CLASS}--active` : ''}"
  on:click={toogleButtonState}
>
  <div class={`${LANG_SWITCH_CLASS}__active`} />
  <ul>
    <li>{LANGUAGES[0].name}</li>
    <li>{LANGUAGES[1].name}</li>
  </ul>
</button>
