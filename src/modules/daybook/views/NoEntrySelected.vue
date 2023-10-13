<template>
    <div>
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>
    <FabDaybook/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    
    components: {
        FabDaybook: defineAsyncComponent( () => import ('../components/FabDaybook'))
    }
}
</script>

<style lang="scss" scoped>

div {
    height: 100%;
}

</style>