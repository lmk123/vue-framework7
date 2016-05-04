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
                <f7-list-item disabled>
                  <span slot="title">disabled input</span>
                  <input type="text" placeholder="with title" slot="input">
                </f7-list-item>
                <f7-list-item>
                  <span slot="title">text input</span>
                  <input type="text" placeholder="with title" slot="input">
                </f7-list-item>
                <f7-list-item>
                  <span slot="title">select</span>
                  <select slot="input">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </f7-list-item>
                <f7-list-item>
                  <span slot="title">switch</span>
                  <f7-checkbox slot="input" value="f7-checkbox" :model="checkboxModel"></f7-checkbox>
                </f7-list-item>
                <f7-list-divider>
                  checkbox model: {{ checkboxModel | json }}
                </f7-list-divider>
                <f7-list-item>
                  <span slot="title">slider</span>
                  <f7-range slot="input">
                    <input type="range" min="0" max="100" value="50">
                  </f7-range>
                </f7-list-item>
                <f7-list-item>
                  <span slot="title">textarea</span>
                  <textarea slot="input" v-f7-textarea></textarea>
                </f7-list-item>
              </f7-list>
            </f7-list-block>

            <f7-content-block-title>checkbox group</f7-content-block-title>
            <f7-list-block>
              <f7-checkbox-group :checkboxes="checkboxes" :value.sync="checkedCheckboxesValue"></f7-checkbox-group>
              <f7-list-label>
                Your choose is: {{ checkedCheckboxesValue | json }}
              </f7-list-label>
            </f7-list-block>

            <f7-content-block-title>radio group</f7-content-block-title>
            <f7-list-block>
              <f7-radio-group :radios="radios" :value.sync="checkedRadioValue"></f7-radio-group>
              <f7-list-label>
                Your choose is: {{ checkedRadioValue }}
              </f7-list-label>
            </f7-list-block>
          </f7-page-content>
        </f7-page>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        checkboxModel: [ 'f7-checkbox' ],
        checkboxes: [
          {
            value: 'checkbox 1 value',
            title: 'checkbox 1'
          },
          {
            value: 'checkbox 2 value',
            title: 'checkbox 2'
          },
          {
            value: 'checkbox 3 value',
            title: 'checkbox 3 (disabled)',
            disabled: true
          }
        ],
        checkedCheckboxesValue: [ 'checkbox 1 value' ],
        radios: [
          {
            value: 'radio 1 value',
            title: 'radio 1'
          },
          {
            value: 'radio 2 value',
            title: 'radio 2'
          },
          {
            value: 'radio 3 value',
            title: 'radio 3 (disabled)',
            disabled: true
          }
        ],
        checkedRadioValue: 'radio 2 value'
      };
    }
  };
</script>
