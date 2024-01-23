<template>
        <ContactForm />
</template>
  
<script>
    import ContactForm from '../components/ContactForm.vue';

    export default{
        components: {
            ContactForm
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