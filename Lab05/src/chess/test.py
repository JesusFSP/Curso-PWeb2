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
    
    
)