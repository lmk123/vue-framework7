<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left"><a v-link="{ name: 'home' }" class="link"><i class="icon icon-back"></i><span>Back</span></a>
        </div>
        <div class="center">Modal</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block-title">Alert</div>
      <div class="content-block">
        <p>
          <a @click="alert1">Alert With Text</a>
        </p>
        <p>
          <a @click="alert2">Alert With Text and Title</a>
        </p>
        <p>
          <a @click="alert3">Alert
            With Text and Title and Promise</a>
        </p>
        <p>
          <a @click="alert4">Alert With Text and Promise</a>
        </p>
      </div>

      <div class="content-block-title">Confirm</div>
      <div class="content-block">
        <p>
          <a @click="confirm1">Confirm with text and Ok Promise</a>
        </p>
        <p>
          <a @click="confirm2">Confirm with text, Ok and Cancel Promise</a>
        </p>
        <p>
          <a @click="confirm3">Confirm with text, title and Ok Promise</a>
        </p>
        <p>
          <a @click="confirm4">Confirm with text, title, Ok and Cancel Promise</a>
        </p>
      </div>

      <div class="content-block-title">Prompt</div>
      <div class="content-block">
        <p>
          <a @click="prompt1">Prompt with text and Ok Promise</a>
        </p>
        <p>
          <a @click="prompt2">Prompt with text, Ok and Cancel Promise</a>
        </p>
        <p>
          <a @click="prompt3">Prompt with text, title and Ok Promise</a>
        </p>
        <p>
          <a @click="prompt4">Prompt with text, title, Ok and Cancel Promise</a>
        </p>
      </div>

      <div class="content-block-title">Nesting Modals</div>
      <div class="content-block">
        <p>
          <a @click="nesting">What is your name?</a>
        </p>
      </div>

      <div class="content-block-title">Login and Password</div>
      <div class="content-block">
        <p>
          <a @click="login">Login Modal</a>
        </p>
        <p>
          <a @click="password">Password Modal</a>
        </p>
      </div>

      <div class="content-block-title">Preloader Modal</div>
      <div class="content-block">
        <p>
          <a @click="preloader1">Open Preloader</a>
        </p>
        <p>
          <a @click="preloader2">Open Preloader with custom title</a>
        </p>
      </div>

      <div class="content-block-title">Indicator Modal</div>
      <div class="content-block">
        <p>
          <a @click="indicator">Open Indicator</a>
        </p>
      </div>

      <div class="content-block-title">Custom Modals</div>
      <div class="content-block">
        <p>
          <a @click="custom1">Modal With 3 Buttons</a>
        </p>
        <p>
          <a @click="custom2">Modal With Vertical Buttons</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      alert1 () {
        this.$f7.alert('Here goes alert text')
      },
      alert2 () {
        this.$f7.alert('Here goes alert text', 'Custom Title!')
      },
      alert3 () {
        this.$f7.alert('Here goes alert text', 'Custom Title!').then(() => this.$f7.alert('Button clicked!'))
      },
      alert4 () {
        this.$f7.alert('Here goes alert text').then(() => this.$f7.alert('Button clicked!'))
      },
      confirm1 () {
        this.$f7.confirm('Are you sure?').then(ok => ok && this.$f7.alert('You clicked Ok button'))
      },
      confirm2 () {
        this.$f7.confirm('Are you sure?').then(ok => this.$f7.alert(`You clicked ${ok ? 'Ok' : 'Cancel'} button`))
      },
      confirm3 () {
        this.$f7.confirm('Are you sure?', 'Custom Title!').then(ok => ok && this.$f7.alert('You clicked Ok button'))
      },
      confirm4 () {
        this.$f7.confirm('Are you sure?', 'Custom Title!').then(ok => this.$f7.alert(`You clicked ${ok ? 'Ok' : 'Cancel'} button`))
      },
      prompt1 () {
        this.$f7.prompt('What is your name?').then(input => input !== null && this.$f7.alert(`Your name is "${input}". You clicked Ok button`))
      },
      prompt2 () {
        this.$f7.prompt('What is your name?').then(input => this.$f7.alert(`Your name is "${input || ''}". You clicked ${input !== null ? 'Ok' : 'Cancel'} button`))
      },
      prompt3 () {
        this.$f7.prompt('What is your name?', 'Custom Title!').then(input => input !== null && this.$f7.alert(`Your name is "${input}". You clicked Ok button`))
      },
      prompt4 () {
        this.$f7.prompt('What is your name?', 'Custom Title!').then(input => this.$f7.alert(`Your name is "${input || ''}". You clicked ${input !== null ? 'Ok' : 'Cancel'} button`))
      },
      nesting () {
        this.$f7.prompt('What is your name?')
            .then(input => {
              if (input !== null) {
                this.$f7.confirm('Are you sure that your name is "' + input + '"?')
                    .then(ok => {
                      if (ok) this.$f7.alert('Ok, your name is "' + input + '"')
                    })
              }
            })
      },
      login () {
        this.$f7.modalLogin('Authentication required').then(obj => obj && this.$f7.alert(`Thank you! Username: ${obj.username}, Password: ${obj.password}`))
      },
      password () {
        this.$f7.modalPassword('Your password please:').then(val => val !== null && this.$f7.alert(`Thank you! Your password is: ${val}`))
      },
      preloader1 () {
        this.$f7.showPreloader()
        setTimeout(() => {
          this.$f7.hidePreloader()
        }, 2000)
      },

      preloader2 () {
        this.$f7.showPreloader('Custom Title')
        setTimeout(() => {
          this.$f7.hidePreloader()
        }, 2000)
      },
      indicator () {
        this.$f7.showIndicator()
        setTimeout(() => {
          this.$f7.hideIndicator()
        }, 2000)
      },
      custom1 () {
        this.$f7.modal({
          title: 'Modal with 3 buttons',
          text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
          buttons: [
            {
              text: 'B1'
            },
            {
              text: 'B2'
            },
            {
              text: 'B3',
              bold: true
            }
          ]
        }).then(index => {
          let t
          switch (index) {
            case 0:
              t = 'first'
              break
            case 1:
              t = 'second'
              break
            case 2:
              t = 'third'
              break
          }
          this.$f7.alert(`You clicked ${t} button!`)
        })
      },
      custom2 () {
        this.$f7.modal({
          title: 'Vertical Buttons Layout',
          text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
          verticalButtons: true,
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
          let t
          switch (index) {
            case 0:
              t = 'first'
              break
            case 1:
              t = 'second'
              break
            case 2:
              t = 'third'
              break
          }
          this.$f7.alert(`You clicked ${t} button!`)
        })
      }
    }
  }
</script>
