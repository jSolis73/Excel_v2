import './scss/base.scss';
import createTable from './js/table';
import resizeCells from './js/cellResizing';
import saveContent from './js/textSaving';
import createIcons from './js/alignButtons';
import selectingCells from './js/selectingCells';
import toAlign from './js/formattingText';

createTable('#table', 10, 20);
createIcons();
resizeCells();
saveContent();
selectingCells();
toAlign();
