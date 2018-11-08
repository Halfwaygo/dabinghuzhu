<template>
    <div>
        <top-header></top-header>
        asdd
    </div>
</template>

<script>
import topHeader from '../common/topHeader'

    export default {
        components: {
        'top-header': topHeader,
        },
        data() {
            return {
                dataHasLoaded: false,
                dd: 'asdad'
            }
        },
        created() {
        }
    }
</script>
<style lang="less">
@import '../less/reset.css';
</style>
