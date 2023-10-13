<template>
    <div class="entry-container pointer p-2" @click="$router.push({name: 'entry', params: {id:10}})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">1555</span>
            <span class="mx-1 fs-5">16</span>
            <span class="mx-2 fw-light">2020</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui accusantium commodi! Enim aliquam nesciunt explicabo, quidem accusamus aliquid sint voluptate, ipsum obcaecati beatae cum assumenda nemo repellendus impedit labore.
        </div>
    </div>
</template>

<style lang="scss" scoped>

.entry-container{
    border-bottom: 1px solid #2c3e50;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
}

.entry-description {
    font-size: 12px;
}
</style>