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
    entry: {},
  },
  getPosts() {
    client.getEntries({
      limit: 10,
      order: 'sys.createdAt',
      content_type: '2wKn6yEnZewu2SCCkus4as',
    }).then(function success(entries) {
      if (storage.debug) console.log('getPosts triggered');
      storage.state.entries = entries;
    });
  },
  getPost(id) {
    /* getEntries is used instead of getEntry to benefit from link resolution */
    client.getEntries({
      'sys.id': id,
    }).then((entry) => {
      if (storage.debug) console.log('getPost triggered');
      storage.state.entry = entry.items[0];
    });
  },
};
export default {
  state: storage.state,
  getPosts() { storage.getPosts(); },
  getPost(id) { storage.getPost(id); },
};
