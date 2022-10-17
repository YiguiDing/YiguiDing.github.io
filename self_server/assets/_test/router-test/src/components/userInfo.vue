<template>
  <p>用户信息..................................</p>
  <p>用户1:<router-link :to="'/user/detail/'+1">张三</router-link> <button @click="$router.push('/user/detail/'+1)">张三</button></p>
  <p>用户2:<router-link :to="'/user/detail/'+2">张四</router-link> <button @click="$router.push('/user/detail/'+2)">张四</button></p>
</template>
