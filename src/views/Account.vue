<template>
  <div class="p-4 bg-light rounded shadow col-10 col-sm-6 col-lg-4">
    <h3 class="fw-bolder text-black-50 mb-4 text-center">Welcome, Username</h3>
      <div class="input-group mb-3">
        <span class="input-group-text">
            <i class="bi bi-envelope-open-fill"></i>
        </span>
        <input type="email" class="form-control" placeholder="Email" readonly value="useremail@domain.com">
    </div>
    <hr>
    <button class="btn btn-secondary fw-bolder mt-1 d-block w-100 py-2">
        <i class="bi bi-box-arrow-left me-1"> </i>
        Logout
    </button>
</div>
</template>
<script>
export default {
    name: 'Account'
}

</script>
<style lang="scss">

</style>
