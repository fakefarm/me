<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="fieldset">
                      <div class="form-group">
                        <label for="form1_name">Name</label>
                        <input type="text" class="form-control" id="form1_name" v-model='full_name'>
                      </div>


                      <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class='form-control' id='email' v-model.lazy='email'>
                      </div>

                      <div class="checkbox">
                        <label>
                        <input type="checkbox" value="1" v-model.number='fruit'>orange
                        </label>
                        <label>
                        <input type="checkbox" value="2" v-model.number='fruit'>apple
                        </label>
                        <label>
                        <input type="checkbox" value="3" v-model.number='fruit'>pear
                        </label>
                      </div>

                      <div class="radio">
                        <label>
                          <input type="radio" value="start" v-model="time">start
                        </label>
                        <label>
                          <input type="radio" value="end" v-model="time">end
                        </label>
                      </div>
                    <button type="submit" class="btn btn-primary" @click.prevent='submit'>Submit</button>
                    </div>





                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="button">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ full_name }} </p>
                        <p>Mail: {{ email }}</p>
                        <p>Fruit: {{ fruit }}</p>
                        <p>Time: {{ time }}</p>
                        <p>Store in Database?: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          full_name: '',
          email: '',
          fruit: [],
          time: '',
          button: false
        }
      },
      methods: {
        submit () {
          this.button = true;
        }
      }
    }
</script>

<style>
</style>
