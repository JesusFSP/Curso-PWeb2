from chessPictures import *
from interpreter import draw

draw(
    # piezas negras superpuestos en los casilleros
    square.negative().overlay(rock.negative())
    .join(square.overlay(knight.negative()))
    .join(square.negative().overlay(bishop.negative()))
    .join(square.overlay(queen.negative()))
    .join(square.negative().overlay(king.negative()))
    .join(square.overlay(bishop.negative()))
    .join(square.negative().overlay(knight.negative()))
    .join(square.overlay(rock.negative()))
    .under(
        square.overlay(pawn.negative())
        .join(square.negative().overlay(pawn.negative()))
        .horizontalRepeat(4)
    )
    .under(
        square.join(square.negative()).horizontalRepeat(4)
        .up(square.negative().join(square).horizontalRepeat(4))
        .verticalRepeat(2)
    )
    .under(
        square.negative().overlay(pawn)
        .join(square.overlay(pawn))
        .horizontalRepeat(4)
    )
    .under(
        square.overlay(rock)
        .join(square.negative().overlay(knight))
        .join(square.overlay(bishop))
        .join(square.negative().overlay(queen))
        .join(square.overlay(king))
        .join(square.negative().overlay(bishop))
        .join(square.overlay(knight))
        .join(square.negative().overlay(rock))
    )
    
)