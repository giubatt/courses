<template>
    <div class="container">
        <div class="area-header">
            <h1 class="text-center">Signup</h1>
            <hr>
        </div>
        <form v-if="!formSubmitted"
              class="area-form">

            <app-full-name v-model="userData.fullName"></app-full-name>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email"
                       v-model="userData.email"
                       id="email"
                       class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password"
                       v-model="userData.password"
                       id="password"
                       class="form-control">
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"
                           v-model="userData.storeData"> Store Data
                </label>
            </div>

            <button class="btn btn-primary"
                    @click.prevent="submitData()">Submit!
            </button>
        </form>

        <div class="area-form"
             v-else>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4>Your Data</h4>
                </div>
                <div class="panel-body">
                    <p>Full Name: {{ userData.fullName }}</p>
                    <p>Mail: {{userData.email}}</p>
                    <p>Password: {{userData.password}}</p>
                    <p>Store in Database?: {{userData.storeData}} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'

    export default {
        data() {
            return {
                userData: {
                    fullName: '',
                    email: '',
                    password: '',
                    storeData: false
                },
                formSubmitted: false
            }
        },
        methods: {
            submitData() {
                this.formSubmitted = true;
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
    .container {
        display: grid;
        grid-template-columns: 666fr 888fr 777fr;
        grid-template-rows: 120px auto;
        grid-template-areas: ". header ." ". form   .";
    }

    .area-form {
        grid-area: form;
    }

    .area-header {
        grid-area: header;
    }
</style>
