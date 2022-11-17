// BST = ['Health','Attack','Defence','SpAttack','SpDefence','Speed']
ChimcharBST = [44,58,44,58,44,61]
GeneratoredChimchar = []
MyChimchar = {}


TurtwigBST = [55,68,64,45,55,31]
GeneratoredTurtwig = []
MyTurtwig = {}

PiplupBST = [55,51,53,61,56,40]
GeneratoredPiplup = []
MyPiplup = {}

Level = 5

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

function iChooseChimchar(ChimcharBST,Level){
    for (let index = 0; index < ChimcharBST.length; index++) {
        H=((((getRandomInt(8))/10)+(Level-0.4))*ChimcharBST[index]/10)
        E=Math.floor(H)
        GeneratoredChimchar.push(E)
    }
    MyChimchar.Heath=(GeneratoredChimchar[0])
    MyChimchar.Attack=(GeneratoredChimchar[1])
    MyChimchar.Defence=(GeneratoredChimchar[2])
    MyChimchar.SpAttack=(GeneratoredChimchar[3])
    MyChimchar.SpDefence=(GeneratoredChimchar[4])
    MyChimchar.Speed=(GeneratoredChimchar[5])
}

function iChooseTurtwig(TurtwigBST,Level){
    for (let index = 0; index < TurtwigBST.length; index++) {
        H=((((getRandomInt(8))/10)+(Level-0.4))*TurtwigBST[index]/10)
        E=Math.floor(H)
        GeneratoredTurtwig.push(E)
    }
    MyTurtwig.Heath=(GeneratoredTurtwig[0])
    MyTurtwig.Attack=(GeneratoredTurtwig[1])
    MyTurtwig.Defence=(GeneratoredTurtwig[2])
    MyTurtwig.SpAttack=(GeneratoredTurtwig[3])
    MyTurtwig.SpDefence=(GeneratoredTurtwig[4])
    MyTurtwig.Speed=(GeneratoredTurtwig[5])
}

function iChoosePiplup(PiplupBST,Level){
    for (let index = 0; index < PiplupBST.length; index++) {
        H=((((getRandomInt(8))/10)+(Level-0.4))*PiplupBST[index]/10)
        E=Math.floor(H)
        GeneratoredPiplup.push(E)
    }
    MyPiplup.Heath=(GeneratoredPiplup[0])
    MyPiplup.Attack=(GeneratoredPiplup[1])
    MyPiplup.Defence=(GeneratoredPiplup[2])
    MyPiplup.SpAttack=(GeneratoredPiplup[3])
    MyPiplup.SpDefence=(GeneratoredPiplup[4])
    MyPiplup.Speed=(GeneratoredPiplup[5])
}

iChooseTurtwig(TurtwigBST,Level)
console.log (('Turtwig'),MyTurtwig)

iChooseChimchar(ChimcharBST,Level)
console.log (('Chimchar'),MyChimchar)

iChoosePiplup(PiplupBST,Level)
console.log (('Piplup'),MyPiplup)