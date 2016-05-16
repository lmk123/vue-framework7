/**
 * 批量操作一个元素的 classList
 * @param {Element} el
 * @param {String|String[]} classArray - 一个或多个类名
 * @param {String} [operation] - 默认为 add ,还可以是 remove toggle
 */
export function modifyClass( el, classArray, operation = 'add' ) {
  const { classList } = el;
  [].concat( classArray ).forEach( ( className )=> {
    classList[ operation ]( className );
  } );
}

/**
 * 很多组件都用到了这个 transition (model.vue、popup.vue、actions.vue 等)
 */
export const modalTransition = {
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
};

/**
 * 很多组件都用到了这个 mixin
 */
export const modalMixin = {
  data() {
    return {
      isShow: false
    };
  },
  transitions: {
    modal: modalTransition
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
  },
  beforeDestroy() {
    const { $els } = this;
    const { body } = document;
    for ( let key in $els ) {
      const node = $els[ key ];
      if ( node ) {
        body.removeChild( node );
      }
    }
  }
};
