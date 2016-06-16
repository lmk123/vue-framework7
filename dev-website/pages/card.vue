<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <a class="link" slot="left" v-link="'/'">
              <f7-icon class="icon-back"></f7-icon>
            </a>
            <span slot="center">Cards</span>
          </f7-navbar>
          <f7-page-content>
            <f7-content-block>
              <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/card.vue">Code
                is
                here.</a>
            </f7-content-block>
            <f7-content-block-title>
              SIMPLE CARDS
            </f7-content-block-title>
            <f7-card>
              <f7-card-content>
                <f7-card-content-inner>
                  This is simple card with plain text. But card could contain its own header, footer, list view, image,
                  and any elements inside.
                </f7-card-content-inner>
              </f7-card-content>
            </f7-card>
            <f7-card>
              <f7-card-header>
                Card header
              </f7-card-header>
              <f7-card-content>
                <f7-card-content-inner>
                  Card with header and footer. Card header is used to display card title
                  and footer for some additional information or for custom actions.
                </f7-card-content-inner>
              </f7-card-content>
              <f7-card-footer>
                Card Footer
              </f7-card-footer>
            </f7-card>
            <f7-content-block-title>
              STYLED CARDS
            </f7-content-block-title>
            <f7-card class="demo-card-header-pic">
              <f7-card-header no-border valign="bottom" class="color-white">
                Journey To Mountains
              </f7-card-header>
              <f7-card-content>
                <f7-card-content-inner>
                  <p class="color-gray">Posted on January 21, 2015</p>
                  <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis.
                    Phasellus quis nibh hendrerit...</p>
                </f7-card-content-inner>
              </f7-card-content>
              <f7-card-footer>
                <a href="#" class="link">Like</a><a href="#" class="link">Read more</a>
              </f7-card-footer>
            </f7-card>

            <f7-content-block>
              For more examples checkout <a href="http://framework7.io/docs-demos/cards.html">http://framework7.io/docs-demos/cards.html</a>
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<style>
  .color-gray {
    color: #8e8e93;
  }

  .color-white {
    color: #fff;
  }

  .demo-card-header-pic .card-header {
    height: 40vw;
    background-size: cover;
    background-position: center;
    background-image: url(http://image5.tuku.cn/pic/wallpaper/fengjing/matouweimeifengjingbizhi/003.jpg)
  }
</style>
