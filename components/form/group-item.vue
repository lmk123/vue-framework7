<template>
  <li>
    <label class="item-content" :class="{'label-checkbox':type === 'checkbox','label-radio':type === 'radio'}">
      <slot name="input" v-el:input></slot>
      <div class="item-media" v-if="type === 'checkbox'"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner">
        <div class="item-title">
          <slot name="title"></slot>
        </div>
      </div>
    </label>
  </li>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        type: null
      };
    },
    ready() {
      this.$nextTick( ()=> {
        const input = this.$el.getElementsByTagName( 'input' )[ 0 ];
        if ( input ) {
          this.type = input.type;
        }
      } );
    }
  };
</script>
