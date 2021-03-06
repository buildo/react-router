A `Transition` object is sent to the [transition
hooks][transition-hooks] of a `RouteHandler` as the first argument.

Methods
-------

### `abort()`

Aborts a transition.

### `redirect(to, params, query)`

Redirect to another route.

### `retry()`

Retries a transition. Typically you save off a transition you care to
return to, finish the workflow, then retry. This does not create a new
entry in the browser history.

  [transition-hooks]:#TODO

### `context`

An optional context object that can be accessed by the willTransitionTo and
willTransitionFrom static methods on components.

When creating the router instance:

    var context = {};
    Router.create({transitionContext: context});

And then in a component:

    statics: {
      willTransitionTo: function(transition) {
        //do something with transition.context
      }
    }
