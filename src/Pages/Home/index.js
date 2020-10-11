import { connect } from "react-redux";
import { homeActions, homeSelectors } from "../../store/Home";

import Home from "./Home";

const mapStateToProps = (state) => ({
  productsData: homeSelectors.getProductsData(state),
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (payload) => dispatch(homeActions.fetchProducts(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
