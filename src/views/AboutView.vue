<template>
  <div class="row">
    <div class="col-20">
    </div>
    <div class="col-60">
      <div class="about-view">
        <h2>About This Page</h2>
        <p>
          Welcome to the Motorcycle Information Page! This page provides details about various motorcycles, including their brands, models, specifications, and more.
        </p>
        <p>
          Whether you are a motorcycle enthusiast or just curious about different bike models, you can find accurate and up-to-date information here.
        </p>
        <p>
          The Admin page allows you to add new motorcycles to the collection. Feel free to explore and enjoy the information provided!
        </p>
      </div>
    </div>
    <div class="col-20">
    </div>
  </div>
  <LocationInfo />
  <DisclaimerText />
</template>

<script>
import LocationInfo from '../components/LocationInfo.vue'
import DisclaimerText from '../components/DisclaimerText.vue'
export default {
  components: {
    LocationInfo, DisclaimerText
  }
};
</script>

<style scoped>

h2 {
  color: #3498db;
}

p {
  margin-bottom: 15px;
}


</style>
