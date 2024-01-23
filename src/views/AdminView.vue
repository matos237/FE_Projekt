<template>
    <AdminMenu />
</template>

<script>
    import AdminMenu from '@/components/AdminMenu.vue';

    export default{
        components:{
            AdminMenu
        }
    }
</script>

<style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>