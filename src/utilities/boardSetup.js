import BlackPawnIcon from '../media/320/BlackPawn.png';
import BlackRookIcon from '../media/320/BlackRook.png';
import BlackKnightIcon from '../media/320/BlackKnight.png';
import BlackBishopIcon from '../media/320/BlackBishop.png';
import BlackKingIcon from '../media/320/BlackKing.png';
import BlackQueenIcon from '../media/320/BlackQueen.png';
import WhitePawnIcon from '../media/320/WhitePawn.png';
import WhiteRookIcon from '../media/320/WhiteRook.png';
import WhiteKnightIcon from '../media/320/WhiteKnight.png';
import WhiteBishopIcon from '../media/320/WhiteBishop.png';
import WhiteKingIcon from '../media/320/WhiteKing.png';
import WhiteQueenIcon from '../media/320/WhiteQueen.png';

export function placePiecesIcons(id) {
  switch (id) {
    case '00':
      return WhitePawnIcon;
    case '01':
      return WhiteRookIcon;
    case '02':
      return WhiteKnightIcon;
    case '03':
      return WhiteBishopIcon;
    case '04':
      return WhiteKingIcon;
    case '05':
      return WhiteQueenIcon;
    case '10':
      return BlackPawnIcon;
    case '11':
      return BlackRookIcon;
    case '12':
      return BlackKnightIcon;
    case '13':
      return BlackBishopIcon;
    case '14':
      return BlackKingIcon;
    case '15':
      return BlackQueenIcon;

    default:
      return '';
  }
}

export function colorBoard(rowIndex, columnIndex) {
  if (rowIndex % 2 === 0) {
    if (columnIndex % 2 === 0) {
      return 'whitecells';
    }
    return 'blackcells';
  }
  if (columnIndex % 2 === 0) {
    return 'blackcells';
  }
  return 'whitecells';
}
