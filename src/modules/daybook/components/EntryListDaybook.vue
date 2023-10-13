<template>
    <div class="entry-list-container">
        <div class="px-2 pt-3 pb-3">
            <input type="text" name="" id=""  class="form-control" placeholder="Buscar Entrada">
        </div>
        <div class="entry-scrollarea">
            <h2
                v-for="item in 50"
                :key="item"
                >
                <EntryDaybook/>
            </h2>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {
    
    components: {
        EntryDaybook: defineAsyncComponent (() => import ('./EntryDaybook'))
    }
}
</script>

<style lang="scss" scoped>

.input {
    height: 25px;
}

.entry-list-container{ 
    border-right: 1px solid #2c3e50;
    height: calc(100hv - 56px);
}
.entry-scrollarea {
    height: calc(100vh - 120px);
    overflow: scroll ;
}

</style>