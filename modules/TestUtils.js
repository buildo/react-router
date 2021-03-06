var React = require('react');
var RouteHandler = require('./components/RouteHandler');
var PropTypes = require('./PropTypes');

exports.Nested = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="Nested">Nested</h1>
        <RouteHandler />
      </div>
    );
  }
});

exports.Foo = React.createClass({
  render: function () {
    return <div className="Foo">Foo</div>;
  }
});

exports.Bar = React.createClass({
  render: function () {
    return <div className="Bar">Bar</div>;
  }
});

exports.Baz = React.createClass({
  render: function () {
    return <div className="Baz">Baz</div>;
  }
});

exports.Async = React.createClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(callback, exports.Async.delay);
    }
  },

  render: function () {
    return <div className="Async">Async</div>;
  }
});

exports.RedirectToFoo = React.createClass({
  statics: {
    willTransitionTo: function (transition) {
      transition.redirect('/foo');
    }
  },

  render: function () {
    return null;
  }
});

exports.RedirectToFooAsync = React.createClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(function () {
        transition.redirect('/foo');
        callback();
      }, exports.RedirectToFooAsync.delay);
    }
  },

  render: function () {
    return null;
  }
});


exports.Abort = React.createClass({
  statics: {
    willTransitionTo: function (transition) {
      transition.abort();
    }
  },

  render: function () {
    return null;
  }
});

exports.AbortAsync = React.createClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(function () {
        transition.abort();
        callback();
      }, exports.AbortAsync.delay);
    }
  },

  render: function () {
    return null;
  }
});

exports.EchoFooProp = React.createClass({
  render: function () {
    return <div>{this.props.foo}</div>;
  }
});

exports.EchoBarParam = React.createClass({
  contextTypes: {
    router: PropTypes.router.isRequired
  },
  render: function () {
    return <div className="EchoBarParam">{this.context.router.getCurrentParams().bar}</div>;
  }
});

exports.TransitionContext = React.createClass({
  statics: {
    willTransitionTo: function (transition) {
      var service = transition.context.getService();
      if (!service.isLoggedIn) {
        transition.redirect('/foo');
      }
    }
  },
  render: function() {
    return <div>TransitionContext</div>
  }
});
