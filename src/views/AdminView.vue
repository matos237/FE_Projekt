<template>
  <main class="row">
    <div class="col-50">
      <AdminMenu />
    </div>
    <div class="col-50">
      <ContactList />
    </div>
  </main>
</template>

<script>
    import AdminMenu from '@/components/AdminMenu.vue'
    import ContactList from '@/components/ContactList.vue'
    export default{
        components:{
            AdminMenu, ContactList
        }
    }
</script>
