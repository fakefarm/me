# Engines

## Difference between plugin options?

Engines are also closely related to plugins.

The two share a common lib directory structure, and are both generated using the rails plugin new generator.

The difference is that an engine is considered a "full plugin" by Rails
(as indicated by the --full option that's passed to the generator command).

We'll actually be using the --mountable option here, which includes all the features of --full, and then some. (fuller?)

This guide will refer to these "full plugins" simply as "engines" throughout. An engine can be a plugin, and a plugin can be an engine.

So if a "full plugin" is considered an engine

What is a mountable plugin called
