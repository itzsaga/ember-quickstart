import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Matz', 'Hopper', 'Stallman']
  }
});
