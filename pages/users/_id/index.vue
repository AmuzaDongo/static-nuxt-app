<template>
    <h1>this is my first user with: {{ $route.params.id}}</h1>
</template>

<script>
export default {
    validate(data) {
        return /^\d+$/.test(data.params.id);
    },
}
</script>