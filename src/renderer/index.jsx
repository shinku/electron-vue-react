import Vue from 'vue'
import App from './vue/App'
import electron from 'electron';

import React from 'react';
import ReactDom from 'react-dom';
import Reactapp from './react/app'

console.log({electron});

new Vue({
    components: { App },
    template: '<App/>'
  }).$mount('#vue-app');

ReactDom.render(<Reactapp />,document.getElementById('react-app'));
