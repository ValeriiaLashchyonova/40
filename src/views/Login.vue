<template>
  <div class="p-4 bg-light rounded shadow col-10 col-sm-6 col-lg-4">
    <h3 class="fw-bolder text-black-50 mb-4 text-center">Login</h3>
      <div class="input-group mb-3">
        <span class="input-group-text">
            <i class="bi bi-envelope-open-fill"></i>
        </span>
        <input type="email" class="form-control" placeholder="Email">
    </div>
      <div class="input-group mb-3">
        <span class="input-group-text">
            <i class="bi bi-lock-fill"></i>
        </span>
        <input type="password" class="form-control" placeholder="Password">
    </div>
    <hr>
    <button class="btn btn-primary fw-bolder mt-1 d-block w-100 py-2">
        <i class="bi bi-unlock me-1"> </i>
        Sign In
    </button>
        <div class="mt-3">
        <router-link to="/forgot-password">
        Forgot Password?
        </router-link>
    </div>
</div>
</template>
<script>
export default {
    name: 'Login'
}

</script>
<style lang="scss">

</style>
