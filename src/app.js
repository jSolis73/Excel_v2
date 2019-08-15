import './scss/base.scss';
import createTable from './js/table';
import resizeCells from './js/cellResizing';

createTable('#table', 20, 10);
resizeCells();
