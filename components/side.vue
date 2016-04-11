<template>
  <div class="panel-overlay" v-touch:tap="hide"></div>
  <div class="panel panel-left panel-{{leftEffect}}" v-if="left" transition="side">
    <slot name="left"></slot>
  </div>
  <div class="panel panel-right panel-{{rightEffect}}" v-if="right" transition="side">
    <slot name="right"></slot>
  </div>
</template>

<script type="text/babel">
  const { classList } = document.body;

  export default {
    props: {
      leftEffect: {
        type: String,
        default: 'reveal' // or 'cover'
      },
      rightEffect: {
        type: String,
        default: 'reveal' // or 'cover'
      }
    },
    data() {
      return {
        left: false,
        right: false
      };
    },
    transitions: {
      side: {
        css: false,
        beforeEnter( el ) {
          el.style.display = 'block';
        },
        enter( el, done ) {
          const panel = el.classList.contains( 'panel-left' ) ? 'left' : 'right';
          setTimeout( ()=> {
            classList.add( `with-panel-${panel}-${this[ `${panel}Effect` ]}` );
          }, 0 );
          setTimeout( done, 400 ); // todo Use transitionEnd event
        },
        beforeLeave( el ) {
          const panel = el.classList.contains( 'panel-left' ) ? 'left' : 'right';
          classList.remove( `with-panel-${panel}-${this[ `${panel}Effect` ]}` );
        },
        leave( el, done ) {
          classList.add( 'panel-closing' );
          setTimeout( done, 400 ); // todo Use transitionEnd event
        },
        afterLeave() {
          classList.remove( 'panel-closing' );
        }
      }
    },
    methods: {
      /**
       * 显示右侧栏
       */
      showRight() {
        this.left = false;
        this.right = true;
      },

      /**
       * 隐藏右侧栏
       */
      hideRight() {
        this.right = false;
      },

      /**
       * 显示左侧栏
       */
      showLeft() {
        this.right = false;
        this.left = true;
      },

      /**
       * 隐藏左侧栏
       */
      hideLeft() {
        this.left = false;
      },

      /**
       * 隐藏左侧栏与右侧栏
       */
      hide() {
        this.hideLeft();
        this.hideRight();
      }
    }
  };
</script>
