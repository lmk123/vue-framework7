<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <span slot="center">Media List</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank"
                 href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/media-list.vue">Code
                is
                here.</a>
            </f7-content-block>
            <f7-content-block-title>
              SONGS
            </f7-content-block-title>
            <f7-list-block type="media">
              <f7-list>
                <f7-list-item link v-for="i in 3">
                  <f7-list-item-media>
                    <img src="/" width="80">
                  </f7-list-item-media>
                  <f7-list-item-inner>
                    <f7-list-item-title-row>
                      <f7-list-item-title>Yellow Submarine</f7-list-item-title>
                      <f7-list-item-after>${{i+1}}0</f7-list-item-after>
                    </f7-list-item-title-row>
                    <f7-list-item-subtitle>Beatles</f7-list-item-subtitle>
                    <f7-list-item-text>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit
                      ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                      dolor sit amet...
                    </f7-list-item-text>
                  </f7-list-item-inner>
                </f7-list-item>
              </f7-list>
            </f7-list-block>
            <f7-content-block-title>
              Mail App
            </f7-content-block-title>
            <f7-list-block type="media">
              <f7-list>
                <f7-list-item link v-for="i in 3">
                  <f7-list-item-inner>
                    <f7-list-item-title-row>
                      <f7-list-item-title>Facebook</f7-list-item-title>
                      <f7-list-item-after>17:{{i+1}}0</f7-list-item-after>
                    </f7-list-item-title-row>
                    <f7-list-item-subtitle>New messages from Mingkai Li</f7-list-item-subtitle>
                    <f7-list-item-text>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit
                      ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                      dolor sit amet...
                    </f7-list-item-text>
                  </f7-list-item-inner>
                </f7-list-item>
              </f7-list>
            </f7-list-block>

            <f7-content-block-title>
              SOMETHING MORE SIMPLE
            </f7-content-block-title>
            <f7-list-block type="media">
              <f7-list>
                <f7-list-item link v-for="i in 3">
                  <f7-list-item-media>
                    <img src="/" width="80">
                  </f7-list-item-media>
                  <f7-list-item-inner>
                    <f7-list-item-title-row>
                      <f7-list-item-title>Yellow Submarine</f7-list-item-title>
                    </f7-list-item-title-row>
                    <f7-list-item-subtitle>Beatles</f7-list-item-subtitle>
                  </f7-list-item-inner>
                </f7-list-item>
              </f7-list>
            </f7-list-block>
            <f7-content-block-title>
              inset
            </f7-content-block-title>
            <f7-list-block type="media" inset>
              <f7-list>
                <f7-list-item link v-for="i in 3">
                  <f7-list-item-media>
                    <img src="/" width="80">
                  </f7-list-item-media>
                  <f7-list-item-inner>
                    <f7-list-item-title-row>
                      <f7-list-item-title>Yellow Submarine</f7-list-item-title>
                    </f7-list-item-title-row>
                    <f7-list-item-subtitle>Beatles</f7-list-item-subtitle>
                  </f7-list-item-inner>
                </f7-list-item>
              </f7-list>
            </f7-list-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script type="text/babel">
  export default {}
</script>
