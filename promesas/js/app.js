const posts = [
    {titulo: 'Post 1', texto: 'Esto es el post 1'},
    {titulo: 'Post 2', texto: 'Esto es el post 2'}
]

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            const error = true;
            
            if(!error){
                resolve()
            }else{
                reject();
            }

        }, 3000)
    })
}

function getPosts(){
    setTimeout(function(){
        let lista = '';
        posts.forEach(function(post){
           lista += `<li>${post.titulo}</li>`;
        })
        console.log('Get');
        document.querySelector('ul').innerHTML = lista;
    }, 2000)
}

createPost({titulo: 'Post 3', texto: 'Esto es el post 3'})
.then(getPosts)
.catch(function(){
    console.log('Ha habido un error...')
})