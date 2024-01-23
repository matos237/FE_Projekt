<template>
  <div class="row">
    <div class="col-25">
    </div>
    <div class="col-50">
        <ContactForm />
    </div>
    <div class="col-25">
    </div>
  </div>
  <div class="row">
    
  </div>
</template>
  
<script>
    import ContactForm from '../components/ContactForm.vue';

    export default{
        components: {
            ContactForm
        }
    }
</script>