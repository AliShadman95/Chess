import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { placePiecesIcons, colorBoard } from '../utilities/boardSetup';

/* Ids : 
white 0 at beggining , black 1 at beggining

pawn : 0
rook : 1
knight : 2
bishop : 3
king : 4
queen : 5

*/

function Board() {
  const [cells, setCells] = useState([
    ['11', '12', '13', '14', '15', '13', '12', '11'],
    ['10', '10', '10', '10', '10', '10', '10', '10'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['00', '00', '00', '00', '00', '00', '00', '00'],
    ['01', '02', '03', '04', '05', '03', '02', '01'],
  ]);

  return (
    <Container className="d-flex flex-column mt-5">
      {cells.map((row, rowIndex) => (
        <Row className="boardRow align-self-center">
          {row.map((columnValue, columnIndex) => (
            <Col
              className={colorBoard(rowIndex, columnIndex)}
              style={{
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: `url(${placePiecesIcons(columnValue)})`,
              }}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
}
export default Board;
