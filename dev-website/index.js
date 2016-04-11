import '../components';
import router from './pages/router';

import Vue from 'vue';
import VueTouch from 'vue-touch';

Vue.use( VueTouch );

router.start( require( './pages/root.vue' ), 'body' );
