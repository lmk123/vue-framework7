<template>
  <f7-views>
    <f7-view>
      <f7-pages>
        <f7-page>
          <f7-page-content>
            <a target="_blank" href="https://github.com/lmk123/vue-framework7/blob/master/dev-website/pages/form.vue">Code
              is
              here.</a>

            <f7-list-block>
              <f7-list>
                <f7-list-item>
                  <input type="text" placeholder="no title" slot="input">
                </f7-list-item>
                <f7-list-item label>
                  <span slot="title">text input</span>
                  <input type="text" placeholder="with title" slot="input">
                </f7-list-item>
                <f7-list-item label>
                  <span slot="title">select</span>
                  <select slot="input">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </f7-list-item>
                <f7-list-item label>
                  <span slot="title">switch</span>
                  <f7-checkbox slot="input">
                    <input type="checkbox">
                  </f7-checkbox>
                </f7-list-item>
                <f7-list-item label>
                  <span slot="title">slider</span>
                  <f7-range slot="input">
                    <input type="range" min="0" max="100" value="50">
                  </f7-range>
                </f7-list-item>
                <f7-list-item label>
                  <span slot="title">textarea</span>
                  <textarea slot="input" v-f7-textarea></textarea>
                </f7-list-item>
              </f7-list>
            </f7-list-block>

            <f7-content-block-title>checkbox group</f7-content-block-title>
            <f7-list-block>
              <f7-list>
                <f7-group-item>
                  <input type="checkbox" name="group" slot="input">
                  <span slot="title">name 1</span>
                </f7-group-item>
                <f7-group-item>
                  <input type="checkbox" name="group" slot="input">
                  <span slot="title">name 2</span>
                </f7-group-item>
                <f7-group-item>
                  <input type="checkbox" name="group" slot="input">
                  <span slot="title">name 3</span>
                </f7-group-item>
                <f7-group-item>
                  <input type="checkbox" name="group" slot="input">
                  <span slot="title">name 4</span>
                </f7-group-item>
              </f7-list>
            </f7-list-block>

            <f7-content-block-title>radio group</f7-content-block-title>
            <f7-list-block>
              <f7-list>
                <f7-group-item type="radio">
                  <input type="radio" name="group" slot="input">
                  <span slot="title">name 1</span>
                </f7-group-item>
                <f7-group-item type="radio">
                  <input type="radio" name="group" slot="input">
                  <span slot="title">name 2</span>
                </f7-group-item>
                <f7-group-item type="radio">
                  <input type="radio" name="group" slot="input">
                  <span slot="title">name 3</span>
                </f7-group-item>
                <f7-group-item type="radio">
                  <input type="radio" name="group" slot="input">
                  <span slot="title">name 4</span>
                </f7-group-item>
              </f7-list>
            </f7-list-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>
