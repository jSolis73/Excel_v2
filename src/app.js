import './scss/base.scss';
import createTable from './js/table';
import resizeCells from './js/cellResizing';
import saveContent from './js/textSaving';

createTable('#table', 20, 10);
resizeCells();
saveContent();
