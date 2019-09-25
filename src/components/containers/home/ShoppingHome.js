import React, { Component } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import ProductList from "../../shared/ProductList";
import { connect } from "react-redux";
import { fetchCategory } from "../../../actions/categoryAction";
import i18next from "i18next";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(fetchCategory());
  }
  render() {
    const { error, loading, category } = this.props;
    let data;
    if (error) {
      data = (
        <div className="text-center">
          {i18next.t("Error")}: {error.message}
        </div>
      );
    } else if (loading) {
      data = <div className="text-center">{i18next.t("Loading")}...</div>;
    } else {
      data = category
        .filter(item => item.enabled)
        .map(item => <ProductList key={item.id} data={item} />);
    }
    return (
      <>
          <Header />
          <div className="row">{data}</div>
          <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category.items,
  loading: state.category.loading,
  error: state.category.error
});

export default connect(mapStateToProps)(Home);
