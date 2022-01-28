class Drums:
    def __init__(self):
        self.drumList = []

    def printDrums(self):
        print(self.drumList)

    def addDrums(self, newDrumString):
        self.drumList.append(newDrumString)

    def changeList(self):
        self.drumList = tuple(self.drumList)

print('x')

x = Drums()

x.printDrums()

x.addDrums('Pearl')
x.printDrums()
x.addDrums(("Ludwiq", "Tama", "Slingerland"))
x.printDrums()
x.addDrums({'drumName':'Mapex','type':'black widow'})
x.printDrums()
x.addDrums(1)
x.printDrums()

x.changeList()
x.printDrums()