const contentful = require('contentful');
// const util = require('util');

const client = contentful.createClient({
  space: 'xaubqpmk1tze',
  accessToken: 'f35176cd0088d5868218ef8be4c8f312d6472dc7546a015f83dae5df672570e0',
});

const storage = {
  debug: false,
  state: {
    entries: {},
  },
  getPosts: function getPosts() {
    client.getEntries({
      limit: 10,
      order: 'sys.createdAt',
    }).then(function success(entries) {
      if (storage.debug) console.log('getPosts triggered');
      storage.state.entries = entries;
    });
  },
};
export default {
  state: storage.state,
  getPosts() { storage.getPosts(); },
};
