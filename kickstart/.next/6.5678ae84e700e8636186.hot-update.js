webpackHotUpdate(6,{

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(481);

var _Layout = __webpack_require__(1176);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1196);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1011);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/maxprosper/Development/solidity-practice/kickstart/pages/campaigns/show.js?entry";


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "rendreCards",
    value: function rendreCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: "Adderss of Manager",
        description: "The manager created this campaign and can create request to withdraw money",
        style: { overflowWrap: "break-word" }
      }, {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description: "You must contribute at least this much wei to become an approver"
      }, {
        header: requestsCount,
        meta: "Number of Requests",
        description: "A request to withdraw money from the contract. Requests must be approved by approvers"
      }, {
        header: approversCount,
        meta: "Number of Approvers",
        description: "Number of people who already donated to this campaign"
      }, {
        header: _web2.default.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description: "The balance is how money this campaign has left to spend"
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Campaign Show"), this.rendreCards());
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approvedCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRyZUNhcmRzIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiYXBwcm92ZWRDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7OztrQ0FlWTttQkFPUixLQVBRLEFBT0g7VUFQRyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLDZCQUpVLEFBSVY7VUFKVSxBQUtWLHVCQUxVLEFBS1Y7VUFMVSxBQU1WLHdCQU5VLEFBTVYsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQUxDLEFBQ1osQUFJUyxBQUFnQjtBQUp6QixBQUNFLE9BRlU7Z0JBT1osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQVZVLEFBT1osQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQWZVLEFBWVosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQXBCVSxBQWlCWixBQUdlO0FBSGYsQUFDRTtnQkFLUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEN0IsQUFDVSxBQUE0QixBQUNwQztjQUZGLEFBRVEsQUFDTjtxQkF6QkosQUFBYyxBQXNCWixBQUdlLEFBR2pCO0FBTkUsQUFDRTsyQ0FLRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdGLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0MsdUJBSEwsQUFDRSxBQUVHLEFBQUssQUFHWDs7Ozs7MkcsQUE3RDhCOzs7OzttQkFDbkI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBLEFBQXFCOzt1QkFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0E7O3VDQUdtQixRQURsQixBQUNrQixBQUFRLEFBQzdCOzJCQUFTLFFBRk4sQUFFTSxBQUFRLEFBQ2pCO2lDQUFlLFFBSFosQUFHWSxBQUFRLEFBQ3ZCO2lDQUFlLFFBSlosQUFJWSxBQUFRLEFBQ3ZCOzJCQUFTLFFBQUEsQUFBUSxBLEFBTGQ7QUFBQSxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUGUsQSxBQWlFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF4cHJvc3Blci9EZXZlbG9wbWVudC9zb2xpZGl0eS1wcmFjdGljZS9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/maxprosper/Development/solidity-practice/kickstart/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/maxprosper/Development/solidity-practice/kickstart/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi41Njc4YWU4NGU3MDBlODYzNjE4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/NTg5OTI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcblxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG5cbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgICAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICAgICAgICBhcHByb3ZlZENvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSAgICAgICAgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZHJlQ2FyZHMoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGJhbGFuY2UsXG4gICAgICAgIG1hbmFnZXIsXG4gICAgICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgIHJlcXVlc3RzQ291bnQsXG4gICAgICAgIGFwcHJvdmVyc0NvdW50XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgICAgbWV0YTogXCJBZGRlcnNzIG9mIE1hbmFnZXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdCB0byB3aXRoZHJhdyBtb25leVwiLFxuICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBSZXF1ZXN0c1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcmVxdWVzdCB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBBcHByb3ZlcnNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxuICAgICAgICAgIG1ldGE6IFwiQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGJhbGFuY2UgaXMgaG93IG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmRcIlxuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPkNhbXBhaWduIFNob3c8L2gzPlxuICAgICAgICB7dGhpcy5yZW5kcmVDYXJkcygpfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBT0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBR0E7QUFMQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBeERBO0FBQUE7O0FBRUE7QUFDQTtBQURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==