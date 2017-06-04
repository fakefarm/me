# Rails engines

At the beginning of this guide, you will be working solely within the engine itself, but in later sections you'll see how to hook it into an application.

Engines can also be isolated from their host applications. This means that an application is able to have a path provided by a routing helper such as articles_path and use an engine that also provides a path also called articles_path, and the two would not clash. Along with this, controllers, models and table names are also namespaced. 
