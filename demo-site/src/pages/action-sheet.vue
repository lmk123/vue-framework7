<template>
  <f7-page>
    <f7-navbar slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span>Back</span>
      </a>
      Action Sheet
    </f7-navbar>
    <div class="content-block">
      <p>
        <a @click.prevent="actions1">One group, four buttons</a>
      </p>
      <p>
        <a @click.prevent="actions2">Three groups</a>
      </p>
    </div>
  </f7-page>
</template>

<script>
  import { actions, alert } from 'vue-framework7'
  export default {
    methods: {
      actions1 () {
        actions([
          {
            text: 'Do something',
            label: true
          },
          {
            text: 'Button'
          },
          {
            text: 'Bold Button',
            bold: true
          },
          {
            text: 'Disabled Button',
            disabled: true
          },
          {
            text: 'Cancel',
            color: 'red'
          }
        ]).then(btn => {
          alert(`You clicked ${btn.text}.`)
        }, () => {
          alert('You canceled.')
        })
      },
      actions2 () {
        actions([
          [
            {
              text: 'Share',
              label: true
            },
            {
              text: 'Mail'
            },
            {
              text: 'Messages'
            }
          ],
          [
            {
              text: 'Social share',
              label: true
            },
            {
              text: 'Facebook'
            },
            {
              text: 'Twitter'
            }
          ],
          [
            {
              text: 'Cancel',
              color: 'red'
            }
          ]
        ]).then(btn => {
          alert(`You clicked ${btn.text}.`)
        }, () => {
          alert('You cancel.')
        })
      }
    }
  }
</script>
