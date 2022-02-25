import pytest

class Drums:
    def __init__(self):
        self.drumList = [1,2,3,4]
    def addDrums(self, string):
        self.drumList.append(string)
        return self.drumList
    def printDrums(self):
        print(self.drumList)
    def searchDrums(self, string):
        for item in self.drumList:
           if(string == item):
                return(item)
print('x')

x = Drums()

x.addDrums(( "Slingerland"))
x.printDrums()


@pytest.fixture
def drums():
    drums = Drums()
    return drums

def testCanCallDrums():
    Drums()

def testCanAddString(drums):
    # drums = Drums()
    assert drums.addDrums("Slingerland") == [1,2,3,4,"Slingerland"]

def testAllDrums(drums):
    # drums = Drums()
    drums.printDrums()

def testItemSearch(drums):
    # drums = Drums()
    drums.addDrums("Slingerland")
    assert drums.searchDrums("Slingerland") == "Slingerland"

