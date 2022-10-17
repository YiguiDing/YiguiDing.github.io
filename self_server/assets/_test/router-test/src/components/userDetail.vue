<template>
  <div class="userDetailBox">
    <button @click="$router.go(-1)">返回上一级</button>
    <h2>用户详细信息</h2>
    <p>userId:{{userId}}</p>
    <p>$route.params.userId:{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
    props:['userId']
}
</script>