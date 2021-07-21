<template>
    <div class="admin-new-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm"
export default {
    layout: 'admin',
    components:{
        AdminPostForm
    },
    data() {
        return{
            loadedPost: {
                author: 'Dongo Amuza',
                title: 'My First post',
                content: 'This is the amazing post',
                thumbnailLink:'https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg'
            }
        }
    }
}
</script>

<style scoped>
    .update-form{
        width: 90%;
        margin: 20px auto;
    }
    @media (min-width: 768px)
    {
        .update-form{
            width: 500px;
        }
    }
</style>