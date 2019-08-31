import './scss/base.scss';
import createTable from './js/table';
import resizeCells from './js/cellResizing';
import saveContent from './js/textSaving';
import createIcons from './js/icons';
import selectCells from './js/selectingCells';

createTable('#table', 20, 10);
createIcons();
resizeCells();
saveContent();
selectCells();
