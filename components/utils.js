/**
 * 当前浏览器的 ontransitionend 事件的名字
 * @type {String}
 */
export const transitionEnd = (()=> {
  const { style } = document.createElement( 'div' ),
    transitions = {
      'transition': 'transitionend',
      'OTransition': 'otransitionend',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };
  for ( let key in transitions ) {
    if ( style[ key ] !== undefined ) {
      return transitions[ key ];
    }
  }
})();

/**
 * 当 el 上触发 transitionend 事件时调用一次 handler
 * @param {Element} el
 * @param {Function} handler
 */
export const oneTransitionEnd = transitionEnd ? function ( el, handler ) {
  el.addEventListener( transitionEnd, function h( e ) {
    handler.call( el, e );
    el.removeEventListener( transitionEnd, h );
  } )
} : function ( el, handler ) {
  setTimeout( ()=> handler.call( el ), 400 );
};

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
    this.$emit( 'before modal enter', el );
    el.style.display = 'block';
  },
  enter( el, done ) {
    this.$emit( 'modal enter', el );
    setTimeout( ()=> { el.classList.add( 'modal-in' ); }, 0 );
    oneTransitionEnd( el, done );
  },
  beforeLeave( el ) {
    this.$emit( 'before modal leave', el );
    el.classList.remove( 'modal-in' );
  },
  leave( el, done ) {
    this.$emit( 'modal leave', el );
    el.classList.add( 'modal-out' );
    oneTransitionEnd( el, done );
  },
  afterLeave( el ) {
    this.$emit( 'after modal leave', el );
    el.classList.remove( 'modal-out' );
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
