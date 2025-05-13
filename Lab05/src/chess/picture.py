from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    return Picture([row[::,-1] for row in self.img]) 

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    return Picture(self.img[::,-1])

  def negative(self):
        """Devuelve un negativo de la imagen"""
        return Picture([
            ''.join([self._invColor(c) for c in row]) 
            for row in self.img
        ])
    
  def join(self, other):
        """Une la imagen actual con otra imagen a la derecha"""
        return Picture([
            self_row + other_row 
            for self_row, other_row in zip(self.img, other.img)
        ])
    
  def up(self, other):
        """Coloca la otra imagen encima de la actual"""
        return Picture(other.img + self.img)
    
  def under(self, other):
        """Coloca la otra imagen sobre la actual (debajo)"""
        return Picture(self.img + other.img)
    
  def horizontalRepeat(self, n):
        """Repite la imagen horizontalmente n veces"""
        result = Picture([])
        for _ in range(n):
            result = result.join(self) if result.img else self
        return result
    
  def verticalRepeat(self, n):
        """Repite la imagen verticalmente n veces"""
        result = Picture([])
        for _ in range(n):
            result = result.under(self) if result.img else self
        return result