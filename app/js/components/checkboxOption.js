import Vue from 'vue/dist/vue.js'
import _ from 'lodash'

export default function registerCheckboxOption(
  controller,
  propertyMap
) {
  Vue.component('checkbox-option', Vue.extend({
    data: function () {
      return propertyMap[this.property].data
    },
    props: [
      'label',
      'property'
    ],
    template: `
      <label v-bind:class="['checkbox-option', { active: enabled }]">
        <input type="checkbox" v-model="enabled">
        {{label}}
      </label>
    `,
    watch: {
      'enabled': {
        handler: function () {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              controller.layerUpdated(propertyMap[this.property].layer)
            })
          })
        }
      }
    }
  }))
}
