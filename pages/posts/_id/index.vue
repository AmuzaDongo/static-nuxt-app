<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">updated on {{ loadedPost.updatedDate }}</div>
                <div class="post-detail">Post By {{ loadedPost.author }}</div>
            </div>
            <p>{{ loadedPost.content }}</p>
        </section>
        <div class="post-feedback">
            <p>Let me know what you think about the post. Send the mail on <a href="mailto:dongoamuza@gmail.com">dongoamuza@gmail.com</a></p>
        </div>
    </div>
</template>

<script>
export default {
    asyncData(context, callback){
        setTimeout(() => {
            callback(null, {
                loadedPost:{
                    id: '1',
                    title: "First Post (ID: " + context.route.params.id + ")",
                    author: "Dongo Amuza",
                    updatedDate: new Date(),
                    content: 'This is the main blog post content',
                    previewText:'This is may first Post',
                    thumbnail:"https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
                }
            });
        }, 1000);
    },
};
</script>

<style scoped>
    .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
    }

    .post {
    width: 100%;
    }

    @media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
    }

    .post-title {
    margin: 0;
    }

    .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }

    @media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
    }

    .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
    }

    .post-feedback a {
    color: red;
    text-decoration: none;
    }

    .post-feedback a:hover,
    .post-feedback a:active {
    color: salmon;
    }
</style>