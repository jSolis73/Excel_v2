import './scss/base.scss';
import createTable from './js/table';
import resizeCells from './js/cellResizing';
import getData from './js/localStorage';

createTable('#table', 20, 10);
resizeCells();
getData();
