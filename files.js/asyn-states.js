ELEMENT = null;

const actions = [
  {
    type: "FETCH_PRODUCTS",
    state: {
      loading: false,
      success: false,
      error: false,
    },
  },
  {
    type: "FETCH_PRODUCTS_SUCCESS",
    state: {
      loading: false,
      success: false,
      error: false,
    },
  },
  {
    type: "FETCH_PRODUCTS_ERROR",
    state: {
      loading: false,
      success: false,
      error: false,
    },
  },
];

const fireAsyncAction = ({ timeOut = 1000, action }) => {
  if (ELEMENT) {
    ELEMENT.classList.add("loading");

    if (!!action) {
      setTimeout(() => {
        ELEMENT.classList.remove("loading");
      }, timeOut);
    }
  }
};
