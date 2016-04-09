<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-navbar type="fixed">
          <span slot="left">Left</span>
          <span slot="center">Center</span>
          <span slot="right">Right</span>
          <span slot="subnavbar">Sub Navbar</span>
        </f7-navbar>
        <f7-page>
          <f7-page-content>
            <f7-content-block>
              Property：<code>type</code>，can be "static"(Default)，"fixed" or "through"(iOS only)
            </f7-content-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
