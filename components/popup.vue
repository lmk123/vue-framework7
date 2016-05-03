<template>
  <div class="popup-overlay" :class="{'modal-overlay-visible':isShow}" @click="hide"></div>
  <div class="popup" v-if="isShow" transition="popup">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
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
          setTimeout( ()=> { el.classList.add( 'modal-in' ); }, 0 );
          setTimeout( done, 400 ); // todo Use transitionEnd event
        },
        beforeLeave( el ) {
          el.classList.remove( 'modal-in' );
        },
        leave( el, done ) {
          el.classList.add( 'modal-out' );
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
    },
    ready() {
      this.$appendTo( 'body' );
    }
  };
</script>
