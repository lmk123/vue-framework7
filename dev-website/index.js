import f7Plugin from '../components';
import Vue from 'vue';

Vue.use( f7Plugin );

import router from './pages/router';

router.start( require( './pages/root.vue' ), 'body' );

import fastClick from 'fastclick';
fastClick.attach( document.body );
