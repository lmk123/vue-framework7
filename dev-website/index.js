import '../components';
import router from './pages/router';

router.start( require( './pages/root.vue' ), 'body' );

import fastClick from 'fastclick';
fastClick.attach( document.body );
