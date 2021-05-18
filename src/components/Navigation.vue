<template>
    <nav class="navbar container bg-light rounded shadow sticky-top">
        <router-link to="/" class="navbar-brand fw-bolder">
        <i class="bi bi-dice-5-fill"></i>
            FiveDice
        </router-link>
    <ul class="nav navbar-nav flex-row">
        <li class="nav-item">
            <router-link to="/" class="nav-link">
    Register
            </router-link>
        </li>
         <li class="nav-item">
            <router-link to="/login" class="nav-link">
    Login
            </router-link>
        </li>
    </ul>
    </nav>
</template>

<script>
// export default{
//     name: 'Navigation'
// }
</script>

<style scoped lang="scss">
.nav-link{
    color:#aaa;
    padding-right: 1rem !important;
    &.router-link-exact-active{
        color: #6447b4;
    }
}

</style>