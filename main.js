const Posts = [
    { title: "Post 1", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," },
    { title: "Post 2", content: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" },
    { title: "Post 3", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
];

const PostSirala = () => {
    Posts.map((post) => {
        console.log(post.title);
        console.log(post.content);
        console.log("-----------------------------")
    });
};

const YeniPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        Posts.push(newPost);
        resolve(Posts);
        //reject('Post Eklenirken Bir Hata Oluştu');
    });

    return promise1;
};

async function showPosts() {
    try {
        await YeniPost({ title: "Yeni Post", content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).i" });
        PostSirala();
    } catch (error) {
        console.log(error);
    }
}

showPosts();
