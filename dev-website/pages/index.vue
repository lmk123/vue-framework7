<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-navbar type="fixed">
            <div slot="center">vue-framework7</div>
          </f7-navbar>
          <f7-page-content>
            <f7-list-block>
              <f7-list>
                <f7-list-item link v-link="'/modal'"><span slot="title">Modal</span></f7-list-item>
                <f7-list-item link v-link="'/navbar'"><span slot="title">Navbar</span></f7-list-item>
                <f7-list-item link v-link="'/searchbar'"><span slot="title">Search Bar</span></f7-list-item>
                <f7-list-item link v-link="'/toolbar'"><span slot="title">Toolbar</span></f7-list-item>
                <f7-list-item link v-link="'/tabbar'"><span slot="title">Tabbar</span></f7-list-item>
                <f7-list-item link v-link="'/content-block'"><span slot="title">Content Block</span></f7-list-item>
                <f7-list-item link v-link="'/side'"><span slot="title">Side Panels</span></f7-list-item>
                <f7-list-item link v-link="'/grid'"><span slot="title">Grid</span></f7-list-item>
                <f7-list-item link v-link="'/popup'"><span slot="title">Popup</span></f7-list-item>
                <f7-list-item link v-link="'/list'"><span slot="title">List View</span></f7-list-item>
                <f7-list-item link v-link="'/form'"><span slot="title">Form Elements</span></f7-list-item>
                <f7-list-item link v-link="'/buttons'"><span slot="title">Buttons</span></f7-list-item>
                <f7-list-item link v-link="'/actions'"><span slot="title">Action Sheet</span></f7-list-item>
                <f7-list-item link v-link="'/picker-modal'"><span slot="title">Picker Modal</span></f7-list-item>
                <f7-list-item link v-link="'/preloader'"><span slot="title">Preloader Indicator</span></f7-list-item>
                <f7-list-item link v-link="'/login'"><span slot="title">Login Screen</span></f7-list-item>
                <f7-list-item link v-link="'/progressbar'"><span slot="title">Progress Bar</span></f7-list-item>
              </f7-list>
            </f7-list-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
