<template>
  <f7-page>
    <f7-navbar slot="before-content">
      <a class="back link" slot="left" @click.prevent="$router.back">
        <i class="icon icon-back"></i>
        <span>Back</span>
      </a>
      Modal
    </f7-navbar>
    <div class="content-block">
      <p>
        <a @click.prevent="alert">Alert With Text and Title and Callback</a>
      </p>
      <p>
        <a @click.prevent="confirm">Confirm with text, title, Ok and Cancel callbacks</a>
      </p>
      <p>
        <a @click.prevent="prompt">Prompt with text, title, Ok and Cancel callback</a>
      </p>
      <p>
        <a @click.prevent="login">Login Modal</a>
      </p>
      <p>
        <a @click.prevent="pwd">Password Modal</a>
      </p>
      <p>
        <a @click.prevent="preloader">Open Preloader with custom title</a>
      </p>
    </div>
    <div class="content-block-title">custom modals</div>
    <div class="content-block">
      <p>
        <a @click.prevent="modal">Modal With 3 Buttons</a>
      </p>
      <p>
        <a @click.prevent="modal2">Modal With Vertical Buttons</a>
      </p>
    </div>
  </f7-page>
</template>

<script>
  import {
    alert,
    confirm,
    prompt,
    modalLogin,
    modalPassword,
    showPreloader,
    hidePreloader,
    modal
  } from 'vue-framework7'
  export default {
    methods: {
      alert () {
        alert('Here goes alert text', 'Custom Title!').then(() => alert('Button clicked!'))
      },
      confirm () {
        confirm('Are you sure?', 'Custom Title').then(() => {
          alert('You clicked Ok button.')
        }, () => {
          alert('You clicked Cancel button.')
        })
      },
      prompt () {
        prompt('What\'s your name?').then(name => {
          alert(`Your name is "${name}". You clicked Ok button.`)
        }, name => {
          alert(`Your name is "${name}". You clicked Cancel button.`)
        })
      },
      login () {
        modalLogin('Authentication required').then(person => {
          alert(`Username: ${person.username}, Password: ${person.password}. You clicked Ok button.`)
        }, person => {
          alert(`Username: ${person.username}, Password: ${person.password}. You clicked Cancel button.`)
        })
      },
      pwd () {
        modalPassword('You password please:').then(password => {
          alert(`Password: ${password}. You clicked Ok button.`)
        }, password => {
          alert(`Password: ${password}. You clicked Cancel button.`)
        })
      },
      preloader () {
        showPreloader('Custom Title!')
        setTimeout(hidePreloader, 1000)
      },
      modal () {
        modal({
          title: 'Custom Title',
          text: 'Text goes here',
          buttons: [
            {
              text: 'Button 1'
            },
            {
              text: 'Button 2'
            },
            {
              text: 'Button 3'
            }
          ]
        }).then(index => {
          alert(`You clicked Button ${ index + 1 }`)
        })
      },
      modal2 () {
        modal({
          title: 'Custom Title',
          text: 'Text goes here',
          buttons: [
            {
              text: 'Button 1'
            },
            {
              text: 'Button 2'
            },
            {
              text: 'Button 3'
            }
          ],
          verticalButtons: true
        }).then(index => {
          alert(`You clicked Button ${ index + 1 }`)
        })
      }
    }
  }
</script>
