<template>
    
<div >

<form class="login_form">
<h1 class='form__login'>REGISTER</h1>
<input type='text'
 class='form__login__email'
  placeholder='enter name'/>

  <input type='email'
 class='form__login__email'
  placeholder='enter email'/>
<input type='password' 
 class='form__login__password'
placeholder='enter password'
/>

<br>
<Button class="form__login__sign"> Sign up</Button>
</form>

</div>

</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.form__login{
  color:red;
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;

}
.form__login__email,.form__login__password{
  padding:5%;
  border-radius: 9px;
  border:1px solid black;
  text-align:center;
  width:90%;
  margin-top: 20px;
}
.form__login__sign{
background-color:rgb(214, 28, 28);
  padding:15px;
  border-radius: 9px;
  margin:10px;
  color:white;
  border:1px solid black;
}

</style>