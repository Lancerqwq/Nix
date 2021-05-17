import scrollWindow from './modules/scrollWindow'
import activityTIme from './modules/activityTime'
import disableKey from './modules/disableKey'
import browserVersion from './modules/browserVersion'
import form from './modules/from'
import popoverBootstrap from './modules/popoverBootstrap'

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    popoverBootstrap();
    scrollWindow();
    browserVersion();
    activityTIme();
    disableKey();
    form();
})