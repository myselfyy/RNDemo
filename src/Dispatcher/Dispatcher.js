
/**
 * author: yangyang
 * date: 2018-07-13
 */

import { Dispatcher } from 'flux';

const appDispatche = new Dispatcher();
export default appDispatche;
export const dispatcher = appDispatche.dispatch.bind(appDispatche);
