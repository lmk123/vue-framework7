<template>
  <div v-el:a class="modal-overlay" :class="{ 'modal-overlay-visible': isShow }" @click="cancel"></div>
  <div v-el:b class="actions-modal" v-if="isShow" transition="modal">
    <div class="actions-modal-group" v-for="group in groups">
      <div v-for="btn in group"
           :class="{ 'actions-modal-label': btn.label, 'actions-modal-button': !btn.label, 'actions-modal-button-bold': btn.bold }"
           :style="btn.color ? { color: btn.color } : {}"
           @click="choose(btn)"
           v-text="btn.text">
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import m from '../mixins/modal'
  import i from '../mixins/insert-to-body'

  export default {
    mixins: [m, i],
    methods: {
      choose (btn) {
        if (btn.label) return
        this.hide()
        if (typeof btn.onClick === 'function') btn.onClick()
        this.$emit('choose', btn)
      },
      cancel () {
        this.hide()
        this.$emit('choose', null)
      }
    }
  }
</script>
