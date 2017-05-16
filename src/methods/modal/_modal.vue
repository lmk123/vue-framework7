<template>
  <modal-transition>
    <div class="modal"
         :style="{ 'margin-top': marginTop }"
         v-if="isShow"
         ref="modalEl"
         :class="{ 'modal-no-buttons': isPreloader, 'modal-preloader': isPreloader }">

      <div class="modal-inner">
        <div class="modal-title" v-text="title"></div>

        <!-- Preloader -->
        <div class="modal-text" v-if="isPreloader">
          <div class="preloader"></div>
        </div>
        <div class="modal-text" v-else v-text="text"></div>

        <!-- Prompt -->
        <div class="input-field" v-if="isPrompt">
          <input type="text" class="modal-text-input" v-model="promptValue">
        </div>

        <!-- Password -->
        <div class="input-field" v-if="isPassword">
          <input type="password"
                 class="modal-text-input"
                 placeholder="Password"
                 v-model="password">
        </div>

        <!-- Login -->
        <template v-if="isLogin">
          <div class="input-field modal-input-double">
            <input type="text"
                   placeholder="Username"
                   class="modal-text-input"
                   v-model="username">
          </div>
          <div class="input-field modal-input-double">
            <input type="password"
                   name="modal-password"
                   placeholder="Password"
                   class="modal-text-input"
                   v-model="password">
          </div>
        </template>
      </div>

      <!-- Custom Buttons -->
      <div class="modal-buttons"
           :class="['modal-buttons-' + buttons.length, { 'modal-buttons-vertical': vertical }]"
           v-if="isCustom">
        <span
            class="modal-button"
            v-for="(btn, index) in buttons"
            :key="index"
            @click="$emit(type, index, btn)"
            :class="{ 'modal-button-bold': btn.bold }"
            v-text="btn.text">
        </span>
      </div>

      <!-- Alert、Confirm、Prompt、Login、Password's Buttons -->
      <div class="modal-buttons"
           v-else
           :class="{ 'modal-buttons-1': isAlert, 'modal-buttons-2': isConfirm || isPrompt }">
          <span class="modal-button"
                @click="$emit(type, false)"
                v-if="hasCancelButton">
            Cancel
          </span>
        <span class="modal-button modal-button-bold" @click="$emit(type, true)">OK</span>
      </div>
    </div>
  </modal-transition>
</template>

<script>
  import ModalTransition from '../../components/_modal-transition.vue'
  import * as TYPES from './constants'

  export default {
    components: {
      ModalTransition
    },
    data () {
      return {
        isShow: false,
        type: null,
        promptValue: '',
        username: '',
        password: '',
        title: '',
        text: '',
        buttons: [],
        vertical: false,
        marginTop: ''
      }
    },
    computed: {
      isPreloader () {
        return this.type === TYPES.PRELOADER
      },
      isPrompt () {
        return this.type === TYPES.PROMPT
      },
      isPassword () {
        return this.type === TYPES.PASSWORD
      },
      isLogin () {
        return this.type === TYPES.LOGIN
      },
      isAlert () {
        return this.type === TYPES.ALERT
      },
      isConfirm () {
        return this.type === TYPES.CONFIRM
      },
      isCustom () {
        return this.type === TYPES.CUSTOM
      },
      hasCancelButton () {
        return this.isConfirm || this.isPrompt || this.isLogin || this.isPassword
      }
    }
  }
</script>
