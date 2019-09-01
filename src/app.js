import './scss/base.scss';
import createTable from './js/table';
import resizeCells from './js/cellResizing';
import saveContent from './js/textSaving';
import createIcons from './js/alignButtons';
import { selectCells } from './js/selectingCells';
import toAlign from './js/formattingText';

createTable('#table', 20, 10);
createIcons();
resizeCells();
saveContent();
selectCells();
toAlign();
