<template>
    <NavbarDaybook/>
    <div class="d-flex">
        <div class="col-4">
            <EntryListDaybook/>
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
    
    components: {
        NavbarDaybook: defineAsyncComponent(() => import ('../components/NavbarDaybook')),
        EntryListDaybook: defineAsyncComponent(() => import ('../components/EntryListDaybook'))
    }
}
</script>