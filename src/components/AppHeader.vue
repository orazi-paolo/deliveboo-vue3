<script>
export default {
    name: "AppHeader",
    data() {
        return {

        };
    },
    components: {

    },
    methods: {

    },
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand">
            <div class="container-fluid">
                <div class="nav-left d-flex">
                    <a class="navbar-brand fw-bolder" href="#">Deliveboo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page"
                                    :to="{ 'name': 'restaurants' }">Restaurants</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="nav-right">
                    <ul id="auth">
                        <li class="dropdown">
                            <button class="menu-btn">
                                <span class="me-2"><font-awesome-icon :icon="['fas', 'circle-user']" /></span>
                                <span>Account</span>
                            </button>
                            <div class="dropdown-menu">
                                <a href="#" class="menu-item">Sign in</a>
                                <a href="#" class="menu-item">Register</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
nav {
    background-color: #00CBBD;
    padding: 10px 30px;

    * {
        color: #fff;
    }

    #auth {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;

        .dropdown {
            position: relative;
            margin-right: 20px;
        }

        .menu-btn {
            background: none;
            border: none;
            cursor: pointer;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            border: 1px solid #ddd;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: none;
            flex-direction: column;
            width: 50px;
        }

        .dropdown-menu .menu-item {
            padding: 10px 15px;
            text-decoration: none;
            color: #333;
            transition: background-color 0.2s ease;
        }

        .dropdown-menu .menu-item:hover {
            background-color: #f1f1f1;
        }

        .dropdown:hover .dropdown-menu {
            display: flex;
        }
    }
}
</style>