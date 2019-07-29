function search(input){
    let dictionary = ['pro', 'gram', 'merit', 'program', 'merit', 'it', 'programmer']
    
    for (let x = 0; x <= input.length; x++) {
        if (dictionary.includes(input.slice(0,x))) { //first
            let output = []
            let tempInput = input
            output.push(input.slice(0,x))
            tempInput = tempInput.slice(x,input.length)

            let z = x
            for (let y = z; y <= input.length; y++) {
                    if(!dictionary.includes(input.slice(z,y))){
                        continue;
                    }
                    output.push(input.slice(z,y))
                    z=y
            }
            if(input==output.join('')){
                console.dir(output)
            }
        }
    }
}
 search('programmerit')
