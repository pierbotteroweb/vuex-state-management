<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      <!-- This is the first block of code comented here, because now we don't  -->
      <!-- have "counter" in our component. We will use the counter from the state manager -->
      <!-- {{ counter }} -->
        {{ $store.state.counter }}
    </div>
    <!-- Template to display an example of data obtained using a store getter -->
     <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> =  {{ $store.getters.counterSquared }}
     </div>
    <div class="buttons">
      <!-- Buttons comented because there is no more methods to handle the counter value here -->
      <!-- 
      <button @click="decreaseCounter">-</button>
      <button @click="increaseCounter">+</button> -->

      <!-- Now using "mutation" from the store project. -->
      <!-- Here we can see that we use a mutation function with $store.commit -->
<!--        
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button> -->

      <!-- Now, if we need to handle data asyncrhtonousy, we use "dispatch" -->
       <!-- To call a funtion on the "actions" object-->
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>

    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  // The whole data function will be commented here because we have just one parameter
  // that will now be handled on the state manager. 
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  // Here we are comenting the methods that used to handle the counter vaule from inside the component,
  // and now we will handle this datas froom the state manager. for that we will use the "mutation" logic. 
  // methods: {
  //   increaseCounter() {
  //     this.counter++
  //   },
  //   decreaseCounter() {
  //     this.counter--
  //   }
  // }
}
</script>
<style>

  div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
  }
  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>