<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
header {
  height: 80px;
}
.container {
  margin: 0 auto;
  width: 1100px;
}
</style>
