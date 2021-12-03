const posts = [
    {titulo: 'Post 1', texto: 'Esto es el post 1'},
    {titulo: 'Post 2', texto: 'Esto es el post 2'}
]
/*
function createPost(post){
    setTimeout(function(){
        posts.push(post)
        console.log('push')
    }, 3000)
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

getPosts() */

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post)
        console.log('push')
        callback();
    }, 3000)
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

createPost({titulo: 'Post 3', texto: 'Esto es el post 3'}, getPosts)

