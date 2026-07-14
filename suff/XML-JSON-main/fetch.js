function loadPostsData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(posts => {

            const topPosts = posts.slice(0, 5);

            topPosts.forEach((post, index) => {
                console.log(`--- Post #${index + 1} ---`);
                console.log("Title:", post.title);
                console.log("Body:", post.body);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

loadPostsData();
