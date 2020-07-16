<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/">
      Vuesplash
    </RouterLink>
    <div class="navbar__menu">
      <div v-if="isLogin" class="navbar__item">
        <button class="button" @click="showForm = !showForm">
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
    <PhotoForm v-model="showForm" />
  </nav>
</template>

<script>
import PhotoForm from "./PhotoForm.vue";
export default {
  components: {
    PhotoForm
  },
  data() {
    return {
      showForm: false
    };
  },
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

.button {
  border: 1px solid #dedede;
  border-radius: 0.25rem;
  color: #8a8a8a;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  -webkit-transition: border-color 300ms ease-in-out, color 300ms ease-in-out;
  transition: border-color 300ms ease-in-out, color 300ms ease-in-out;
}

.button:hover {
  border-color: #333;
  color: inherit;
}

.button .icon {
  margin-right: 0.5em;
}

.button--link {
  border: 0;
}

.button--inverse {
  background: #222;
  border-color: #222;
  color: #fff;
  -webkit-transition: opacity 300ms ease-in-out;
  transition: opacity 300ms ease-in-out;
}

.button--inverse:hover {
  background: #222;
  color: #fff;
  opacity: 0.8;
}

.button--fluid {
  width: 100%;
}

.button--like .icon {
  color: #e4406f;
}

.button--liked {
  background: #e4406f;
  border-color: #e4406f;
  color: #fff;
}

.button--liked .icon {
  color: #fff;
}

.button--liked:hover {
  border-color: #e4406f;
  color: #fff;
  opacity: 0.8;
}
</style>
