import axios from '../shared/axios';
import urls from '../shared/urls';

export default {

  demo: {
    demoAPI: () => {
      axios
        .get(urls.demo.first)
        .then(response => {
          console.log(response)
        })
        .catch(() => {
        })
    },
  },
  home: {
    shopByCategory: () => {
      axios
        .get(urls.home.shopByCatgeory)
        .then(response => {
          console.log(response)
        })
        .catch(() => {
        })
    },
  }

}