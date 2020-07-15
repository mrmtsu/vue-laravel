<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/">
      CAMP
    </RouterLink>
    <div class="navbar__menu">
      <div v-if="isLogin" class="navbar__item">
        <button class="button">
          <i class="icon ion-md-add"></i>
          Submit a photo
        </button>
      </div>
      <span v-if="isLogin" class="navbar__item">
        {{ username }}
      </span>
      <div v-else class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          Login / Register
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters["auth/check"];
    },
    username() {
      return this.$store.getters["auth/username"];
    }
  }
};
</script>

<style>
.navbar {
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  display: flex;
  background-color: aqua;
  position: relative;
}
.navbar__brand {
  text-decoration: none;
  margin: auto;
  color: black;
  font-size: 30px;
  font-weight: 600;
}
.navbar__menu {
  position: absolute;
  right: 10px;
}
.button--link {
  text-decoration: none;
  color: black;
}
</style>
