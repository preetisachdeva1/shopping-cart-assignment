import React, { Component } from "react";
import Header from "../../shared/Header";
import ProductList from "../../shared/ProductList";
import { connect } from "react-redux";
import { fetchCategory } from "../../../actions/categoryAction";

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
      data = <div className="text-center">Error: {error.message}</div>;
    } else if (loading) {
      data = <div className="text-center">Loading...</div>;
    } else {
      data = category
        .filter(item => item.enabled)
        .map(item => <ProductList key={item.id} data={item} />);
    }
    return (
      <>
        <Header />
        <div className="row">{data}</div>
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

