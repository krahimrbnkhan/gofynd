import styled from "styled-components";

const DropdownSearchCss = styled.div`
  .container {
    width: 700px;
    background: #f1f1f1;
    border-radius: 16px;
    padding: 80px 0 120px 100px;
    box-sizing: border-box;
    margin: 50px auto;
  }
  .innerContainer {
    width: 300px;
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 18px;
      margin: 40px 0 20px;
    }
    .dropDown,
    .searchBox,
    .contentTop,
    .customCheckboxHolder {
      border: 1px solid #ccc;
      height: 40px;
      width: 100%;
      border-radius: 4px;
      font-size: 16px;
      background: #fff;
      font-weight: 500;
      padding: 10px;
      box-sizing: border-box;
      color: #696969;
    }
  }
  .dropDown {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:after {
      content: "▼";
      display: flex;
      position: absolute;
      right: 8px;
      font-size: 12px;
    }
    span {
      width: 265px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .dropDownContentWrapper {
    box-shadow: 0px 0px 8px 0px #ccc;
    margin-top: 3px;
    .contentTop {
      border: 0;
      border-radius: 0;
      border-bottom: 1px solid #ccc;
      .selectAll {
        height: 18px;
        width: 18px;
        color: #fff;
        background: black;
        display: flex;
        justify-content: center;
        font-size: 25px;
        align-items: center;
        padding-bottom: 5px;
        box-sizing: border-box;
        border-radius: 3px;
        cursor: pointer;
      }
    }
    .contentMiddle {
      height: 160px;
      overflow: hidden;
      overflow-y: scroll;
      .customCheckboxHolder {
        position: relative;
        border: 0;
        border-bottom: 1px solid #ccc;
        list-style: none;
        border-radius: 0;
        input {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          opacity: 0;
          left: 0;
          z-index: 1;
          cursor: pointer;
          &:checked {
            & + .customCheckbox {
              &:before {
                background-color: black;
              }
              span {
                color: cornflowerblue;
                font-weight: bold;
              }
            }
          }
        }
        .customCheckbox {
          display: inline-block;
          position: relative;
          width: 100%;
          transition: all 0.35s linear;
          &:before {
            content: "✓";
            color: #fff;
            font-size: 12px;
            position: absolute;
            width: 18px;
            height: 18px;
            line-height: 17px;
            background-color: #fff;
            text-align: center;
            transition: all 0.35s linear;
            border: 1px solid #000;
            border-radius: 3px;
            box-sizing: border-box;
          }
          span {
            color: #000;
            font-size: 14px;
            margin-left: 30px;
          }
        }
      }
    }
    .contentBottom {
      height: 60px;
      background: #fff;
      display: flex;
      justify-content: flex-end;
      padding: 0 10px;
      align-items: center;
      button {
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        &.clearBtn {
          color: darkslategrey;
          margin-right: 30px;
        }
        &.submitBtn {
          color: lightseagreen;
          font-size: 18px;
        }
      }
    }
  }
`;

export { DropdownSearchCss };
