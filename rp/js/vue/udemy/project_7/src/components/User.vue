<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button type="button" name="button" @click="changeName">Change my name</button>
        <p>My real name is {{ name }}</p>
        <p>My real age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                  :name="name"
                  @nameWasReset="name = $event"
                  :fn="firstName"
                  :userAge='age'></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :userAge='age'></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data () {
          return {
            name: 'Dave',
            age: 30
          }
        },
        methods: {
          changeName () {
            this.name = 'Ephraim'
          },
          firstName () {
            this.name = 'Dave';
          },
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
