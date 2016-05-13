<template>
  <li :class="{'item-link':link,disabled:disabled}">
    <div class="item-content">
      <div class="item-media" v-if="_slotContents.media">
        <slot name="media"></slot>
      </div>
      <div class="item-inner">
        <!-- 这里的 label 不能用这种方式添加,否则会造成 Android 下报错 -->
        <!-- :class="{label:_slotContents.input}"-->
        <div class="item-title" v-if="_slotContents.title" v-el:label>
          <slot name="title"></slot>
        </div>
        <div class="item-input" v-if="_slotContents.input">
          <slot name="input"></slot>
        </div>
        <div class="item-after" v-if="_slotContents.after">
          <slot name="after"></slot>
        </div>
      </div>
    </div>
  </li>
</template>

<script type="text/babel">
  export default {
    props: {
      link: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    ready() {
      if ( this._slotContents.input ) {
        this.$els.label.classList.add( 'label' );
      }
    }
  };
</script>
