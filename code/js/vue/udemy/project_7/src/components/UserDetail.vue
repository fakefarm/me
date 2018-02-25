<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>I'm really {{ userAge }}</p>
        <button type="button" @click="resetName" name="button">Reset</button>
        <button type="button" @click="fn()">Birth Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    // props are a attribute for passing data from parent.
    // the name of the property must be passed in from the directive level.

    // 3 different ways to use props....
    // 1. simple props
    // props: ['name'],
    props: {
      // 2. ensuring Type for a validation
      // name: String
      name: {
        // 3. Multiple validations, including required and/or default (which would cancel one another out)
        type: String,
        required: true,
        default: ''
      },
      fn: Function, // this was passed in from parent. parent defined the function
      userAge: Number
    },
    methods: {
      resetName () {
        this.name = 'Woodall';
        this.$emit('nameWasReset', this.name);
      },
      switchName () {
        return this.name.split("").reverse().join("");
      },
    },
    created () {
      eventBus.$on('ageWasChanged', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
