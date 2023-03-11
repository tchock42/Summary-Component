let i = 1;
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    mostrarListado();
}

async function mostrarListado(){
    const archivo = 'data.json';
    fetch(archivo)
        .then(result => result.json())
        .then(data =>{
            data.forEach(element => {
                const row = document.createElement('P');
                const{category, score, icon} = element; //crea category=element.category etc
                //category
                const categoria = document.querySelector('.category');
                const icono = document.querySelector();
                i++;
                })
            })
}
        
        
        //     

        //     const categoryElement = document.createElement('P');
        //     categoryElement.classList.add('category-Element');
        //     categoryElement.textContent = category; //asigna el valor de categoria. Para la primera iteracion, Reaction

        //     const scoreElement = document.createElement('P');
        //     scoreElement.classList.add('score-Element');
        //     scoreElement.innerHTML = `$ ${score}`;

        //     const iconElement = document.createElement('img');
        //     iconElement.classList.add('icon-Element');
        //     iconElement.src=icon;
            
        //      const elementDiv = document.createElement('DIV');
        //      elementDiv.classList.add('element');
        //      elementDiv.dataset;

        //     //inyectar a 
        // });



    // }catch(error){
    //     console.log("esto es un error");
    // }


