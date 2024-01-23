<template>
    <header>
      <HeaderNav />
    </header>
    <main>
      <RouterView />
      
    </main>
    <PageFooter />  
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import PageFooter from './components/PageFooter.vue'
export default{
  components:{
    HeaderNav, PageFooter
  }
};
</script>

<style>
.navbar {
  margin-top: 0px;
}

#app{
  position: relative;
  min-height: 100vh;
  margin-left: 0px;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
