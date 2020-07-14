<template>
  <nav class="navbar">
    <RouterLink class="navbar__brand" to="/">
      CAMP
    </RouterLink>
    <div class="navbar__menu">
      <div class="navbar__item">
        <button class="button">
          <i class="icon ion-md-add"></i>
          Submit a photo
        </button>
      </div>
      <span class="navbar__item">
        username
      </span>
      <div class="navbar__item">
        <RouterLink class="button button--link" to="/login">
          Login / Register
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

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
