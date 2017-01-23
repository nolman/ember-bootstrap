import BsButtonComponent from 'ember-bootstrap/components/bs-button';
import layout from 'ember-bootstrap/templates/components/bs-navbar/toggle';

/**
 * Component to implement the responsive menu toggle behavior in a [Components.Navbar](Components.Navbar.html)
 * component. Have a look there for examples.
 *
 * @class NavbarToggle
 * @namespace Components
 * @extends Components.Button
 * @public
 */
export default BsButtonComponent.extend({
  layout,

  classNameBindings: ['collapsed'],
  collapsed: true
});
