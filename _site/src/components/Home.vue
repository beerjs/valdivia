<template>
  <div class="Home">
    <div class="Home-body">
      <h2>Migrando...</h2>
      <section class="Home-section Home-section--hero">
        <div class="Home-section-body">
          <github url="https://github.com/beerjs/valdivia"/>

          <h1>Beer<span>JS</span></h1>
          <h2>Valdivia</h2>

          <p>
            Encuentro de cerveza y código
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// const img = require('/src/assets/img/beerjs-valdivia-00.jpg')

export default {
  name: 'Home',

  mounted() {
  },

  data: () => ({
  }),

  methods: {}
}
</script>

<style>
.Home {
  text-align: center;
}

.Home-section {
  min-height: 500px;
  background-color: #ffc41e;
  background: linear-gradient(45deg, #ffbc00, #ffbc00, #efc85d);
  background: #121212;
  padding: 40px 20px;
  display: flex;
  align-items: center;
}

@media (min-width: 40em) {
  .Home-section {
    height: 100vh;
    padding: 0 20px;
  }
}

.Home-section-body {
  position: relative;
  text-align: center;
  width: 100%;
  opacity: .2;
}

.Home-section--hero {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
}

.Home-section--hero .Home-section-body {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
}

.Home-section--hero h1 {
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 6rem;
  margin: 0;
  /*text-shadow: 2px 2px #988816;*/
}

@media (min-width: 40em) {
  .Home-section--hero h1 {
    font-size: 9rem;
  }
}

.Home-section--hero h1 span {
  color: #ffc41e;
}

.Home-section--hero h2 {
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 3rem;
  margin: 0;
}

@media (min-width: 40em) {
  .Home-section--hero h2 {
    font-size: 4rem;
  }
}

.Home-section--hero p {
  border-top: 1px solid #ffc41d;
  padding-top: 10px;
  display: inline-block;
  color: #ffc41d;
  letter-spacing: 1px;
  opacity: .8;
  font-family: 'Roboto Mono';
}

.Home-section--hero .Home-section-meta {
  margin-top: 60px;
  line-height: 1.4;
}

.Home-section--hero .Home-section-meta a {
  color: #fff;
  text-decoration: none;
}

.Home-section--hero .Home-section-down {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 2rem;
  color: #fff;
}
</style>
