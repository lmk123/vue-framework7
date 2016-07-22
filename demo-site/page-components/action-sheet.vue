<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a v-link="{ name: 'home' }" class="link">
            <i class="icon icon-back"></i>
            <span>Back</span>
          </a>
        </div>
        <div class="center">Panels</div>
        <div class="right"><a class="link icon-only"><i class="icon icon-bars"></i></a></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <a href="https://github.com/lmk123/vue-framework7/tree/master/demo-site/page-components/action-sheet.vue">Source code</a>
      </div>
      <div class="content-block">
        <p>
          <a @click="a1">One group, three buttons</a>
        </p>
        <p>
          <a @click="a2">One group, title, three buttons</a>
        </p>
        <p>
          <a @click="a3">Two groups</a>
        </p>
        <p>
          <a @click="a4">Three groups</a>
        </p>
        <p>
          <a @click="a5">With callbacks on click</a>
        </p>
        <p>
          <a @click="a6">With promise on click</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      a1 () {
        this.$f7.actions([
          {
            text: 'Button1',
            bold: true
          },
          {
            text: 'Button2',
          },
          {
            text: 'Cancel',
            color: 'red'
          },
        ])
      },
      a2 () {
        this.$f7.actions([
          {
            text: 'Do something',
            label: true
          },
          {
            text: 'Button1',
            bold: true
          },
          {
            text: 'Button2',
          },
          {
            text: 'Cancel',
            color: 'red'
          },
        ])
      },
      a3 () {
        this.$f7.actions([
          [
            {
              text: 'Do something',
              label: true
            },
            {
              text: 'Button1',
              bold: true
            },
            {
              text: 'Button2',
            }
          ],
          [
            {
              text: 'Cancel',
              color: 'red'
            }
          ]
        ])
      },
      a4 () {
        this.$f7.actions([
          [
            {
              text: 'Share',
              label: true
            },
            {
              text: 'Mail',
            },
            {
              text: 'Messages',
            }
          ],
          [
            {
              text: 'Social share',
              label: true
            },
            {
              text: 'Facebook',
            },
            {
              text: 'Twitter',
            }
          ],
          [
            {
              text: 'Cancel',
              color: 'red'
            }
          ]
        ])
      },
      a5 () {
        this.$f7.actions([
          {
            text: 'Button1',
            onClick: () => {
              this.$f7.alert('Button1 clicked');
            }
          },
          {
            text: 'Button2',
            onClick: () => {
              this.$f7.alert('Button2 clicked');
            }
          },
          {
            text: 'Cancel',
            color: 'red',
            onClick: () => {
              this.$f7.alert('Cancel clicked');
            }
          },
        ])
      },
      a6 () {
        this.$f7.actions([
          {
            text: 'Button1'
          },
          {
            text: 'Button2'
          },
          {
            text: 'Cancel',
            color: 'red'
          }
        ]).then(btn => {
          if (btn) {
            this.$f7.alert('You clicked ' + btn.text)
          } else {
            this.$f7.alert('You canceled')
          }
        })
      }
    }
  }
</script>
