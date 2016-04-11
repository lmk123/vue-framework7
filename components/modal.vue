<!--
  Framework7 Modal 组件
  @see http://framework7.io/docs/modal.html
-->

<template>
  <div class="preloader-indicator-overlay" v-show="showIndic"></div>
  <div class="preloader-indicator-modal" v-show="showIndic">
    <span class="preloader preloader-white"></span>
  </div>

  <div class="modal-overlay" :class="{'modal-overlay-visible':show}"></div>
  <div class="modal" style="margin-top: -62px" v-if="show" :class="{'modal-no-buttons':type === 'preloader', 'modal-preloader':type === 'preloader'}" transition="modal">
    <div class="modal-inner">
      <div class="modal-title" v-text="title"></div>
      <div class="modal-text" v-show="type === 'preloader'">
        <div class="preloader"></div>
      </div>
      <div class="modal-text" v-else v-text="text"></div>
      <div class="input-field" v-show="type === 'prompt'">
        <input type="text" class="modal-text-input" v-model="promptValue"></div>
    </div>
    <div class="modal-buttons" :class="{'modal-buttons-1':type === 'alert','modal-buttons-2':type === 'confirm' || type === 'prompt'}">
      <span class="modal-button" v-touch:tap="$emit(type,false)" v-show="type === 'confirm' || type === 'prompt'">取消</span>
      <span class="modal-button modal-button-bold" v-touch:tap="$emit(type,true)">确定</span>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        show: false,
        showIndic: false,
        type: 'confirm',
        promptValue: '',
        title: '',
        text: ''
      };
    },
    transitions: {
      modal: {
        css: false,
        beforeEnter: function ( el ) {
          el.style.display = 'block';
        },
        enter: function ( el, done ) {
          setTimeout( ()=> { el.classList.add( 'modal-in' ); }, 0 );
          setTimeout( done, 400 ); // todo Use transitionEnd event
        },
        beforeLeave: function ( el ) {
          el.classList.remove( 'modal-in' );
        },
        leave: function ( el, done ) {
          el.classList.add( 'modal-out' );
          setTimeout( done, 400 ); // todo Use transitionEnd event
        }
      }
    },
    methods: {

      /**
       * 弹出一个警告框
       * @param {String} text
       * @param {String} [title]
       * @returns {Promise}
       */
      alert( text, title = '' ) {
        this.type = 'alert';
        this.text = text;
        this.title = title;
        this.show = true;
        return new Promise( ( resolve )=> {
          this.$once( 'alert', ()=> {
            this.show = false;
            resolve();
          } );
        } );
      },

      /**
       * 弹出一个确认框
       * @param {String} text
       * @param {String} [title]
       * @returns {Promise}
       */
      confirm( text, title = 'Are you sure?' ) {
        this.type = 'confirm';
        this.text = text;
        this.title = title;
        this.show = true;
        return new Promise( ( resolve )=> {
          this.$once( 'confirm', ( ok )=> {
            this.show = false;
            resolve( ok );
          } );
        } );
      },

      /**
       * 弹出一个 Prompt 框
       * @param {String} text
       * @param {String} [title]
       * @returns {Promise}
       */
      prompt( text, title = '' ) {
        this.type = 'prompt';
        this.text = text;
        this.title = title;
        this.show = true;
        return new Promise( ( resolve )=> {
          this.$once( 'prompt', ( ok )=> {
            this.show = false;
            resolve( ok ? this.promptValue : null );
            this.promptValue = '';
          } );
        } );
      },

      /**
       * 弹出一个加载中遮罩层
       * @param {String} [title]
       */
      showPreloader( title = 'loading...' ) {
        this.type = 'preloader';
        this.title = title;
        this.show = true;
      },

      /**
       * 隐藏加载中遮罩层
       */
      hidePreloader() {
        this.show = false;
      },

      /**
       * 弹出一个简单的加载中图标
       */
      showIndicator() {
        this.showIndic = true;
      },

      /**
       * 隐藏简单的加载中图标
       */
      hideIndicator() {
        this.showIndic = false;
      }
    }
  };
</script>
