(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactBootstrap = ReactBootstrap,
    Modal = _ReactBootstrap.Modal,
    Button = _ReactBootstrap.Button,
    FormControl = _ReactBootstrap.FormControl,
    FormGroup = _ReactBootstrap.FormGroup,
    ControlLabel = _ReactBootstrap.ControlLabel;

var styles = require("../style.js");

var Add = function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this.state = {
      showModal: false
    };
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.createAndSendUp = _this.createAndSendUp.bind(_this);
    return _this;
  }

  _createClass(Add, [{
    key: "close",
    value: function close() {
      this.setState({ showModal: false });
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({ showModal: true });
    }
  }, {
    key: "createAndSendUp",
    value: function createAndSendUp() {
      var name = document.getElementById("addTitle").value;
      var recipes = this.props.recipes;
      for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].name == name) {
          alert("Recipe already exists. Enter another name or edit the existing recipe.");
          return;
        }
      };
      var newRecipe = {
        name: name,
        key: "_qcfb_recipes_" + name,
        ingredients: document.getElementById("addIngredients").value,
        directions: document.getElementById("addDirections").value
      };
      this.props.add(newRecipe);
      this.setState({ showModal: false });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          Button,
          { style: styles.btnStyle, onClick: this.open },
          "N E W"
        ),
        React.createElement(
          Modal,
          { show: this.state.showModal, onHide: this.close },
          React.createElement(
            Modal.Header,
            { closeButton: true },
            React.createElement(
              Modal.Title,
              null,
              "Add New Recipe"
            )
          ),
          React.createElement(
            Modal.Body,
            null,
            React.createElement(
              FormGroup,
              { controlId: "addTitle" },
              React.createElement(
                ControlLabel,
                null,
                "Recipe Name"
              ),
              React.createElement(FormControl, { type: "text", placeholder: "Enter a name for your new recipe." })
            ),
            React.createElement(
              FormGroup,
              { controlId: "addIngredients" },
              React.createElement(
                ControlLabel,
                null,
                "Ingredients"
              ),
              React.createElement(FormControl, { style: { height: 100 }, componentClass: "textarea", placeholder: "List ingredients for your recipe separated by a comma. E.g. Potatoes, ketchup, olive oil" })
            ),
            React.createElement(
              FormGroup,
              { controlId: "addDirections" },
              React.createElement(
                ControlLabel,
                null,
                "Directions"
              ),
              React.createElement(FormControl, { style: { height: 150 }, componentClass: "textarea", placeholder: "Enter step by step instructions for your new recipe separated by a '-' E.g. - Skin potatoes - heat up olive oil in skillet - bring water to a boil" })
            )
          ),
          React.createElement(
            Modal.Footer,
            null,
            React.createElement(
              Button,
              { bsStyle: "primary", onClick: this.createAndSendUp, style: { background: "#e60073", border: "none" } },
              "Add"
            ),
            React.createElement(
              Button,
              { onClick: this.close },
              "Close"
            )
          )
        )
      );
    }
  }]);

  return Add;
}(React.Component);

exports.default = Add;
;

},{"../style.js":11}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RecipeBox = require("./RecipeBox.js");

var _RecipeBox2 = _interopRequireDefault(_RecipeBox);

var _Add = require("./Add.js");

var _Add2 = _interopRequireDefault(_Add);

var _Sort = require("./Sort.js");

var _Sort2 = _interopRequireDefault(_Sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var defaultRecipes = require("../recipes.js");
var styles = require("../style.js");

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    _this.state = {
      recipes: []
    };
    _this.sort = _this.sort.bind(_this);
    _this.add = _this.add.bind(_this);
    _this.edit = _this.edit.bind(_this);
    _this.delete = _this.delete.bind(_this);
    return _this;
  }

  _createClass(Body, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((typeof Storage === "undefined" ? "undefined" : _typeof(Storage)) !== undefined) {
        if (localStorage._quanchifootball_recipes) {
          var saved = JSON.parse(localStorage._quanchifootball_recipes);
          this.setState({ recipes: saved });
        } else {
          this.setState({ recipes: defaultRecipes });
        }
      } else {
        this.setState({ recipes: defaultRecipes });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prepProps, prevState) {
      var recipes = this.state.recipes;
      if (recipes !== prevState.recipes) {
        localStorage._quanchifootball_recipes = JSON.stringify(recipes);
      }
    }
  }, {
    key: "add",
    value: function add(recipe) {
      var recipes = this.state.recipes.slice();
      recipes.push(recipe);
      this.setState({ recipes: recipes });
    }
  }, {
    key: "edit",
    value: function edit(recipe) {
      var recipes = this.state.recipes.slice();
      for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].key == recipe.key) {
          recipes[i] = recipe;
        }
      }
      this.setState({ recipes: recipes });
    }
  }, {
    key: "sort",
    value: function sort() {
      var recipes = this.state.recipes.slice();
      recipes.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      });
      this.setState({ recipes: recipes });
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var recipes = this.state.recipes.slice();
      for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].key == key) {
          recipes.splice(i, 1);
        }
      }
      this.setState({ recipes: recipes });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row", style: { marginBottom: 10 } },
          React.createElement(
            "div",
            { className: "col-xs-12 col-sm-6 col-sm-offset-6 col-md-5 col-md-offset-7 col-lg-4 col-lg-offset-7" },
            React.createElement(
              "h1",
              { style: styles.titleStyle },
              "Recipe Box"
            )
          ),
          React.createElement(
            ButtonToolbar,
            { className: "col-xs-12 col-sm-12 col-md-12", style: { marginLeft: 0 } },
            React.createElement(_Add2.default, { add: this.add, recipes: this.state.recipes }),
            React.createElement(_Sort2.default, { onClick: this.sort })
          )
        ),
        React.createElement(_RecipeBox2.default, { edit: this.edit, "delete": this.delete, recipes: this.state.recipes })
      );
    }
  }]);

  return Body;
}(React.Component);

exports.default = Body;

},{"../recipes.js":10,"../style.js":11,"./Add.js":1,"./RecipeBox.js":7,"./Sort.js":8}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = ReactBootstrap.Button;

var Delete = function (_React$Component) {
  _inherits(Delete, _React$Component);

  function Delete(props) {
    _classCallCheck(this, Delete);

    var _this = _possibleConstructorReturn(this, (Delete.__proto__ || Object.getPrototypeOf(Delete)).call(this, props));

    _this.deleteConfirm = _this.deleteConfirm.bind(_this);
    return _this;
  }

  _createClass(Delete, [{
    key: "deleteConfirm",
    value: function deleteConfirm() {
      if (confirm("Are you sure you want to delete your " + this.props.recipe.name + " recipe?")) {
        this.props.delete(this.props.recipe.key);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        Button,
        {
          bsStyle: "primary",
          bsSize: "medium",
          onClick: this.deleteConfirm,
          style: { background: "#e60073", border: "none" }
        },
        "Delete"
      );
    }
  }]);

  return Delete;
}(React.Component);

exports.default = Delete;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Directions = function Directions(props) {
  var directions = props.directions.split("- ");
  var directionList = directions.map(function (direction) {
    return direction.length > 0 ? React.createElement(
      "li",
      null,
      direction.trim()
    ) : null;
  });
  return React.createElement(
    "div",
    { className: "container-fluid" },
    React.createElement(
      "ol",
      { style: { marginLeft: -20 } },
      directionList
    )
  );
};
exports.default = Directions;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactBootstrap = ReactBootstrap,
    Modal = _ReactBootstrap.Modal,
    Button = _ReactBootstrap.Button,
    FormControl = _ReactBootstrap.FormControl,
    FormGroup = _ReactBootstrap.FormGroup,
    ControlLabel = _ReactBootstrap.ControlLabel;

var Edit = function (_React$Component) {
  _inherits(Edit, _React$Component);

  function Edit(props) {
    _classCallCheck(this, Edit);

    var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

    _this.state = {
      showModal: false
    };
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.editAndSendUp = _this.editAndSendUp.bind(_this);
    return _this;
  }

  _createClass(Edit, [{
    key: "close",
    value: function close() {
      this.setState({ showModal: false });
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({ showModal: true });
    }
  }, {
    key: "editAndSendUp",
    value: function editAndSendUp() {
      var name = document.getElementById("editTitle").value;
      var key = this.props.recipe.key;
      var recipes = this.props.recipes;
      for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].name == name && recipes[i].key != key) {
          alert("Recipe name already exists. Enter another name.");
          return;
        }
      };
      var newRecipe = {
        name: name,
        key: key,
        ingredients: document.getElementById("editIngredients").value,
        directions: document.getElementById("editDirections").value
      };
      this.props.edit(newRecipe);
      this.setState({ showModal: false });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          Button,
          {
            bsStyle: "primary",
            bsSize: "medium",
            onClick: this.open,
            style: { background: "#e60073", border: "none" }
          },
          "Edit"
        ),
        React.createElement(
          Modal,
          { show: this.state.showModal, onHide: this.close },
          React.createElement(
            Modal.Header,
            { closeButton: true },
            React.createElement(
              Modal.Title,
              null,
              "Edit this Recipe"
            )
          ),
          React.createElement(
            Modal.Body,
            null,
            React.createElement(
              FormGroup,
              { controlId: "editTitle" },
              React.createElement(
                ControlLabel,
                null,
                "Recipe Name"
              ),
              React.createElement(FormControl, { type: "text", defaultValue: this.props.recipe.name })
            ),
            React.createElement(
              FormGroup,
              { controlId: "editIngredients" },
              React.createElement(
                ControlLabel,
                null,
                "Ingredients"
              ),
              React.createElement(FormControl, { style: { height: 100 }, defaultValue: this.props.recipe.ingredients, componentClass: "textarea" })
            ),
            React.createElement(
              FormGroup,
              { controlId: "editDirections" },
              React.createElement(
                ControlLabel,
                null,
                "Directions"
              ),
              React.createElement(FormControl, { style: { height: 150 }, defaultValue: this.props.recipe.directions, componentClass: "textarea" })
            )
          ),
          React.createElement(
            Modal.Footer,
            null,
            React.createElement(
              Button,
              { onClick: this.editAndSendUp, bsStyle: "primary", style: { background: "#e60073", border: "none" } },
              "Save"
            ),
            React.createElement(
              Button,
              { onClick: this.close },
              "Cancel"
            )
          )
        )
      );
    }
  }]);

  return Edit;
}(React.Component);

exports.default = Edit;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Ingredients = function Ingredients(props) {
  var ingredients = props.ingredients.split(", ");
  var ingredientList = ingredients.map(function (ingredient) {
    return ingredient.length > 0 ? React.createElement(
      "li",
      { style: { listStyleType: "none" } },
      React.createElement("input", { type: "checkbox", style: { marginRight: 10 } }),
      ingredient.trim()
    ) : null;
  });
  return React.createElement(
    "div",
    { className: "container-fluid" },
    React.createElement(
      "ul",
      { style: { marginLeft: -30 } },
      ingredientList
    )
  );
};

exports.default = Ingredients;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Edit = require("./Edit.js");

var _Edit2 = _interopRequireDefault(_Edit);

var _Delete = require("./Delete.js");

var _Delete2 = _interopRequireDefault(_Delete);

var _Ingredients = require("./Ingredients.js");

var _Ingredients2 = _interopRequireDefault(_Ingredients);

var _Directions = require("./Directions.js");

var _Directions2 = _interopRequireDefault(_Directions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ReactBootstrap = ReactBootstrap,
    ButtonToolbar = _ReactBootstrap.ButtonToolbar,
    Accordion = _ReactBootstrap.Accordion,
    Panel = _ReactBootstrap.Panel;


var RecipeBox = function RecipeBox(props) {
  var recipes = props.recipes;
  var recipeCards = recipes.map(function (recipe) {
    return React.createElement(
      Panel,
      { header: React.createElement(
          "i",
          { className: "fa fa-sticky-note-o", "aria-hidden": "true" },
          React.createElement(
            "span",
            { style: { fontFamily: 'Quicksand', marginLeft: 10, fontWeight: 600 } },
            " ",
            recipe.name
          )
        ), eventKey: recipe.name, bsStyle: "warning" },
      React.createElement(
        "h3",
        null,
        recipe.name
      ),
      React.createElement(
        "h4",
        null,
        "Ingredients"
      ),
      React.createElement(_Ingredients2.default, { ingredients: recipe.ingredients }),
      React.createElement(
        "h4",
        null,
        "Directions"
      ),
      React.createElement(_Directions2.default, { directions: recipe.directions }),
      React.createElement(
        ButtonToolbar,
        { style: { width: 120, float: "right" } },
        React.createElement(_Edit2.default, { edit: props.edit, recipe: recipe, recipes: props.recipes }),
        React.createElement(_Delete2.default, { recipe: recipe, "delete": props.delete })
      )
    );
  });
  return React.createElement(
    Accordion,
    null,
    recipeCards
  );
};
exports.default = RecipeBox;

},{"./Delete.js":3,"./Directions.js":4,"./Edit.js":5,"./Ingredients.js":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Button = ReactBootstrap.Button;
var styles = require("../style.js");

var Sort = function Sort(props) {
    return React.createElement(
        Button,
        { style: styles.btnStyle, onClick: props.onClick },
        "SORT"
    );
};

exports.default = Sort;

},{"../style.js":11}],9:[function(require,module,exports){
"use strict";

var _Body = require("./components/Body.js");

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_Body2.default, null), document.getElementById('app'));

},{"./components/Body.js":2}],10:[function(require,module,exports){
"use strict";

module.exports = [{
  key: "_qcfb_recipes_Southern BBQ Chicken",
  name: "Southern BBQ Chicken",
  ingredients: "2 tablespoons brown sugar, 2 large cloves cloves garlic chopped, 2 teaspoons salt, 1 teaspoon black pepper, 10 chicken drumsticks, 2 tablespoons vegetable oil, 1/2 cup finely chopped onion, 3/4 cup ketchup, 2 tablespoons white wine vinegar, 2 tablespoons Worcestershire sauce",
  directions: "- Mash brown sugar, garlic, salt, and pepper together in a mortar and pestle to form a paste. Spoon paste into a resealable plastic bag. Add the chicken, coat with the paste, squeeze out excess air, and seal the bag. Marinate in the refrigerator for 8 hours to overnight. - Heat oil in a small saucepan over medium heat. Cook and stir onion in hot oil until softened, about 5 minutes. Stir ketchup, vinegar, and Worcestershire sauce into onions; bring to a simmer and cook until flavors blend, about 10 minutes. - Preheat grill for medium heat and lightly oil the grate. Remove chicken from bag and discard marinade. - Cook chicken on the preheated grill until lightly browned on all sides, about 1 minute per side. - Turn off one of the grill burners or move the coals and move chicken so there is no heat source directly below it. - Baste drumsticks with the sauce and cook another 10 minutes; turn again and baste chicken with sauce. Continue to grill drumsticks until juices run clear, 10 to 15 minutes more. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C)."
}, {
  key: "_qcfb_recipes_Chicken Cacciatore in a Slow Cooker",
  name: "Chicken Cacciatore in a Slow Cooker",
  ingredients: "4 skinless boneless chicken breast halves, 1 (28 ounce) jar spaghetti sauce such as Classico® Cabernet Marinara with Herbs, 1 (6 ounce) can tomato paste, 1/4 pound sliced fresh mushrooms, 1/2 yellow onion minced, 1/2 green bell pepper seeded and diced, 3 tablespoons minced garlic, 1 1/2 teaspoons dried oregano, 1/2 teaspoon dried basil, 1/2 teaspoon ground black pepper, 1/4 teaspoon red pepper flakes (optional) ",
  directions: "- Place chicken in a slow cooker; stir in spaghetti sauce, tomato paste, mushrooms, onion, bell pepper, garlic, oregano, basil, black pepper, and red pepper flakes. Cover. - Cook on Low until chicken is tender, 6 to 8 hours."
}, {
  key: "_qcfb_recipes_Buffalo Chicken Mac and Cheese",
  name: "Buffalo Chicken Mac and Cheese",
  ingredients: "1 (16 ounce) package elbow macaroni, 1 rotisserie-roasted chicken, 6 tablespoons butter, 6 tablespoons all-purpose flour, 3 cups milk, 1 pinch ground black pepper, 2 cups shredded Cheddar cheese, 2 cups shredded Monterey Jack cheese, 1/2 cup hot sauce, 1/2 cup crumbled gorgonzola cheese",
  directions: "- Bring a large pot of lightly salted water to a boil. Cook macaroni in the boiling water, stirring occasionally until tender yet firm to the bite, 8 minutes. Drain. - Cut wings and legs off rotisserie chicken. Skin and bone wings and legs; chop or shred dark meat into bite-size pieces. - Melt butter in a large Dutch oven over medium heat. Whisk in flour gradually until a thick paste forms. Cook until golden, about 1 minute. Pour in milk, whisking constantly, until thickened and bubbling, about 5 minutes. Continue to cook until sauce is smooth, about 1 minute more. Reduce heat and season sauce with black pepper. - Stir Cheddar and Monterey Jack cheese into the sauce until melted and combined. Stir in hot sauce, adjusting to reach desired level of spiciness. Add blue cheese, chicken, and macaroni; mix well to combine."
}];

},{}],11:[function(require,module,exports){
"use strict";

var btnStyle = {
  background: "#e60073",
  border: "none",
  color: "white",
  fontSize: 20,
  height: 90,
  width: 90,
  borderRadius: "50%",
  display: "inline-block",
  fontFamily: 'Bowlby One SC'
};

var titleStyle = {
  fontFamily: 'Bowlby One SC',
  color: "yellow",
  textDecoration: "dashed underline #cc0000",
  textAlign: "center",
  fontSize: 50
};

module.exports = {
  btnStyle: btnStyle,
  titleStyle: titleStyle
};

},{}]},{},[9]);
