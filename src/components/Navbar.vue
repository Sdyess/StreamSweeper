<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-twitch">
        <div class="container">
            <a class="navbar-brand" href="#">TwitchFlix</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/About" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Top" class="nav-link">Top 100 Streams</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Login</router-link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
    .bg-twitch {
        background-color: #392e5c;
    }
    .navbar-brand {
        color:white;
    }
    .navbar-light a.nav-link {
        color:white !important;
    }
</style>
