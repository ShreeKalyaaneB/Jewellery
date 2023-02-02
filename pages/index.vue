<template>
  <v-app index>
    <v-container class="title">
      <h1>Flexi Scheme </h1>
    </v-container>
    <v-container class="mx-auto" fluid>
      <!-- <v-card  class="card"> -->
        
        <v-form @submit.prevent="submitForm" class="form-details">
          <h2 class="header">Login</h2>
      <v-text-field
        label="E-Mail"
        type="email"
        v-model.trim="email"
      />
      <v-text-field
        label="Password"
        type="password"
        v-model.trim="password"
      />
      <v-btn type="submit">Submit</v-btn>
    </v-form>
      <!-- </v-card> -->
    </v-container>
    </v-app>
</template>


<script>
//import TheHeader from "@/components/TheHeader"
export default {
  name: 'IndexPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  async mounted(){
    let res=this.$axios.get("http://127.0.0.1:8000/");
  },
 
  
  methods: {
    submitForm() {
      // Your form submit logic here
    }
  }
};
</script>

<style scoped>
.mx-auto {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-details {
  
  padding:10px;
  /* background-color:rgba(83, 172, 24, 0.705);
  color:black; */
  width:500px;
  border-color:black;
  border-radius: 10px;
  border:100%;
}
.card{
  border:5cm;
  border-color: blue;
  border-radius:3px;
  width:540px;
  /* background-color:black;
  color:white; */
  
}

.title{
  display:flex;
  justify-content: center;
  align-items: center;
  
}
.header{
  display:flex;
  justify-content: center;
  align-items: center;
  color:rgb(255, 255, 255);
}
#app {
  background: url('https://images6.alphacoders.com/129/1290409.png')
    no-repeat center center fixed !important;
  background-size: cover;
}
</style>
