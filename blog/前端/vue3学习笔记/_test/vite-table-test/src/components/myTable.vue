<template>
  <table class="table table-striped table-bordered">
    <thead>
        <tr>
            <slot name="header">
            </slot>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in data" :key="item.id">
                <slot name="item" :row="item">
                </slot>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    props:{
        data:{
            type:Array,
            require:true,
            default:[]
        }
    }
}
</script>

<style>

</style>