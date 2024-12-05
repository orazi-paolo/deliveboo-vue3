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
                    <ul class="pages-links">
                        <li>
                            <a class="fw-bolder" href="#">Deliveboo</a>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page"
                                :to="{ 'name': 'restaurants' }">Restaurants</router-link>
                        </li>
                    </ul>
                </div>
                <div class="nav-right">
                    <ul class="auth">
                        <li class="register-button">
                            <font-awesome-icon :icon="['fas', 'house-chimney']" class="icon-auth"/>
                            <a href="#" class="menu-item">Register</a>
                        </li>
                        <li class="sign-in-button">
                            <font-awesome-icon :icon="['fas', 'user']" class="icon-auth"/>                            
                            <a href="#" class="menu-item">Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
nav {
    background-color: #fff;
    padding: 15px 30px;
    border-bottom: 1px solid rgb(230, 217, 217);


    * {
        color: #00CBBD;
        font-size: 16px;
    }

    .pages-links, .auth {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 10px;
    }

    .auth{
        li{
            display: flex;
            align-items: center;
            gap: 5px;
            border: 1px solid rgb(230, 217, 217);
            border-radius: 5px;
            padding: 5px 25px;

            a{
                color: #555;
            }
            .icon-auth{
                font-size: 12px;
            }
        }
    }
}
</style>