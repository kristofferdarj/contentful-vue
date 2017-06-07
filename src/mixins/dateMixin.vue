<script>
import moment from 'moment';

export default {
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
  },
};
</script>
