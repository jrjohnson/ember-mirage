import { belongsTo,Model } from 'miragejs';

export default Model.extend({
  inventorySegment: belongsTo('item-segment'),
  facilityCatalog: belongsTo('facility-catalog'),
});
