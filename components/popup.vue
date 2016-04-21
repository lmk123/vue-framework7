<template>
  <div class="popup" v-if="isShow" transition="popup">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  const overlay = document.createElement( 'div' );
  overlay.classList.add( 'popup-overlay' );
  document.addEventListener( 'DOMContentLoaded', ()=> {
    document.body.appendChild( overlay );
  } );
  export default {
    data() {
      return {
        isShow: false
      };
    },
    transitions: {
      popup: {
        css: false,
        beforeEnter( el ) {
          el.style.display = 'block';
        },
        enter( el, done ) {
          overlay.classList.add( 'modal-overlay-visible' );
          setTimeout( ()=> { el.classList.add( 'modal-in' ); }, 0 );
          setTimeout( done, 400 ); // todo Use transitionEnd event
        },
        beforeLeave( el ) {
          el.classList.remove( 'modal-in' );
        },
        leave( el, done ) {
          el.classList.add( 'modal-out' );
          overlay.classList.remove( 'modal-overlay-visible' );
          setTimeout( done, 400 ); // todo Use transitionEnd event
        }
      }
    },
    methods: {
      show() {
        this.isShow = true;
      },
      hide() {
        this.isShow = false;
      }
    }
  };
</script>
