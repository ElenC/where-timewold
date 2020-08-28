// Crie uma função que recebe dois arrays, e os converte para um map
    function arrayMap(){
    let array = ['x', 'y', 'z']    
    let array1 = ['z', 'y', 'x']
    
    let map = new Map()
     
    map.set(array[0], array1[0])
    map.set(array[1], array1[1])
    map.set(array[2], array1[2])
    console.log(map.entries())
    }
    arrayMap()

//Crie uma função que recebe dois sets, e retorna um novo set com os itens que não estão presentes nos dois sets (diferença simétrica)


function retornSet(){
    let set = [1, 2, 3]
    let set1 = [2, 4, 6]

    let setPrincipal = new Set(set)
    
    for(let e of set1){
        if(setPrincipal.has(e)){
            setPrincipal.delete(e)
        }else{
            setPrincipal.add(e)
        }
    }
    console.log(setPrincipal)

}
retornSet()