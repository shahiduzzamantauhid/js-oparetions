function getPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data){
    const postContainer = document.getElementById("postDiv");
    for (const post of data) {
        const div = document.createElement("div");
        div.classList.add("card", "w-96", "bg-base-100","shadow-xl", "rounded-2xl", "p-4", "m-4", "text-center");
        div.innerHTML = `
        <h3 class="text-xl font-semibold py-4">${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }

}