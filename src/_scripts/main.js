import './menu';

import Config from './settings/config';
import Task1 from '../_modules/organisms/task1/task1';
import Task2 from '../_modules/organisms/task2/task2';

console.log(Config);
// =========================================
// Initialization
// =========================================
// Module1.init();
const currentPage = $('body').data('page');
if (Object.is(currentPage, 'task1'))
    Task1.init();
if (Object.is(currentPage, 'task2'))
    Task2.init();