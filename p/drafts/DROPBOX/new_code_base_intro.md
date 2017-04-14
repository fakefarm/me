when i'm investigating code, here's what i've learned so far;

1. look at the gemfile. because it will tell you the actual surface area you need to be aware of.
2. look at the routes file. see how many endpoints exist
3. look at application controller to see how many global activities are being set/checked per request. this will help you quickly see if they use `current_user` or `user` or `bro`
4. 