from colors import *

class Picture:
    def __init__(self, img):
        self.img = img
    
    def _invColor(self, color):
        if color not in inverters:
            return color
        return inverters[color]
    
    def verticalMirror(self):
        return Picture([row[::-1] for row in self.img])
    
    def horizontalMirror(self):
        return Picture(self.img[::-1])
    
    def negative(self):
        return Picture([[self._invColor(char) for char in row] for row in self.img])
    
    def join(self, other):
        return Picture([self_row + other_row for self_row, other_row in zip(self.img, other.img)])
    
    def up(self, other):
        return Picture(other.img + self.img)
    
    def under(self, other):
        return Picture(self.img + other.img)
    
    def horizontalRepeat(self, n):
        return Picture([row * n for row in self.img])
    
    def verticalRepeat(self, n):
        return Picture(self.img * n)