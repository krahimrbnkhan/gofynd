import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { DropdownSearchCss } from "./style";

class DropdownSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchable: false,
      filter: "",
      colors: []
    };
  }
  componentDidMount() {
    const { colors } = this.props;
    // const colorsMap = colors.map(ele => ele.checked = false);
    this.setState({
      colors: colors
    });
  }
  toggleDropDown = () => {
    this.setState({
      searchable: !this.state.searchable
    });
  };
  allChecked = () => {
    const { colors } = this.state;
    colors.map(ele => {
      return (ele.checked = true);
    });
    this.setState({
      colors: colors
    });
  };
  allUnChecked = () => {
    // const { colors } = this.props;
  };
  handleChange = event => {
    // const { colors } = this.state;
    // colors.map(ele => {
    //   return delete ele.checked, delete ele.value;
    // });
    this.setState({ filter: event.target.value });
  };
  inputChange = event => {
    const { colors } = this.state;
    const { value: tagetValue, checked } = event.target;
    console.log("Input", tagetValue, checked);
    colors.map(ele => {
      if ([tagetValue].includes(ele.value)) {
        ele.checked = !ele.checked;
      }
      return ele;
    });
    this.setState({
      colors: colors
    });
  };
  printValue = () => {
    const { colors } = this.state;
    return colors.map(ele => {
      let submitData = ele.value;
      console.log(submitData);
    });
  };
  render() {
    const { mainTitle, subTitleOne, subTitleTwo } = this.props;
    const { filter: searchFilter, colors } = this.state;
    const lowercasedFilter = searchFilter.toLowerCase();
    const filteredData = colors.filter(item => {
      const fData = Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
      return fData;
    });
    return (
      <DropdownSearchCss>
        <div className="container">
          <div className="innerContainer">
            <h1>{mainTitle}</h1>
            <h2>Default</h2>
            <div className="dropDown" onClick={this.toggleDropDown}>
              <span>{subTitleOne}</span>
            </div>
            {this.state.searchable ? (
              <Fragment>
                <h2>{subTitleTwo}</h2>
                <input
                  type="text"
                  placeholder="Search"
                  className="searchBox"
                  value={searchFilter}
                  onChange={this.handleChange}
                />
                <div className="dropDownContentWrapper">
                  <div className="contentTop">
                    <span className="selectAll" onClick={this.allChecked}>
                      -
                    </span>
                  </div>
                  <ul className="contentMiddle">
                    {filteredData.map((color, index) => (
                      <li className="customCheckboxHolder" key={index}>
                        <input
                          type="checkbox"
                          id={color.id}
                          value={color.color}
                          className="chkBox"
                          checked={color.checked}
                          onChange={enent => this.inputChange(enent)}
                        />
                        <label className="customCheckbox" htmlFor={color.id}>
                          <span className="labelValue" value={color.color}>
                            {color.color}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <div className="contentBottom">
                    <button
                      className="clearBtn"
                      href="#"
                      onClick={this.allUnChecked}
                    >
                      Clear
                    </button>
                    <button
                      className="submitBtn"
                      href="#"
                      onClick={this.printValue}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Fragment>
            ) : null}
          </div>
        </div>
      </DropdownSearchCss>
    );
  }
}

DropdownSearch.propTypes = {
  colors: PropTypes.array,
  mainTitle: PropTypes.string,
  subTitleOne: PropTypes.string,
  subTitleTwo: PropTypes.string
};

export default DropdownSearch;
