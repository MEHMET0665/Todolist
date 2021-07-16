var h1Styles = {
  'color': "red",
  'margin': "20px 0 60px"
};

var h2Styles = {
  "color": "green",
  "margin": "0 0 20px"
};

var resetItem = {
  'list-style-type': "none",
  'padding': '0',
  'margin': "0"
};

var textVariable = "test props component";
var textVariable2 = "another test props component";


var Box = React.createClass({
  
  render: function () {
    var variable1 = 'I am a variable 1!';
    var variable2 = 'I am a variable 2!';
    var x = 5;
    var variable;
    if (this.props.text) {
      variable = this.props.text
    } else {
      variable = this.props.text2
    }
    return (
      <div className="holder">
          <h1 style={h1Styles}>Hello</h1>
          <h2 style={h2Styles}>World</h2>
          <ul className="list" style={resetItem}>
              <li className={x === 5 ? 'list-item' : 'no-class'}>Item 1</li>
              <li className="list-item">Item 2</li>
              <li className="list-item" dangerouslySetInnerHTML = 
                        {x === 5 ? {__html: variable1} : {__html: variable2} }>
              </li>
              <li className="list-item">{variable}</li>
          </ul>
      </div>
   ) 
  }
});

React.render(
 <Box text3={textVariable} text2={textVariable2}/>,
 document.getElementById('content')
);

$('.list-item').on('click', function () {
  alert('click')
});


var Box2 = React.createClass({
  render: function () {
    var children = this.props.children;
    //return <h1 style={h1Styles}>{child}</h1>;
    var items = children.map(function (child){
      return <li>{child}</li>
    })
    return <ul>{items}</ul>
  }
});

React.render(
  <Box2><a>one</a><a>two</a></Box2>,
  document.getElementById('content2')
);


var MyButton = React.createClass({
 
  getInitialState: function () {
    return { count: this.props.initCount }
  },
  
  handlerClick:  function () {
    this.setState({
      count: ++this.state.count
    })
  },
  
  render: function () {
    var count = this.state.count
    return <input type="button" value={"value: " + count} onClick={this.handlerClick}/>
  }
  
});

React.render(
  <MyButton initCount={1}/>,
  document.getElementById('button')
);



var MyComponent = React.createClass({
  
  getInitialState: function () {
    return {changeClass: false} //this.props.initClass}
  },
  
  handlerClick: function () {
    this.setState({
      changeClass: !this.state.changeClass  //"unpressed"
    })
  },
  
  render: function () {
    var changeClass = this.state.changeClass ? "pressed" : "unpressed" //this.state.changeClass
    return (
      <div>
          <input type="button" className={changeClass} value={"class: " + changeClass} onClick={this.handlerClick}/>
      </div>
    )
  }
});

React.render(
  <MyComponent />,
  document.getElementById('change-class')
);

var separatorStyle = {
    "margin": "60px 0"
};
var sep = {
    "margin": "0 20px"
};

var SupportBlock = React.createClass({
   render: function () {
       return (
           <li>{this.props.value}</li>
       )
   }
});

var Field1 = React.createClass({
   getInitialState: function () {
       return { text: "", items: [] }
   },
   handleClick: function (e) {
     var items = this.state.items;
     var text = this.state.text;
     items.push(text)
     this.setState({ text: "", items: items })
   },
   handleChange: function (e) {
     this.setState ({
         text: e.target.value
     })
   },
   render: function () {
       var text = this.state.text;
       var items = this.state.items;
       return (
           <div style={separatorStyle}>
               <input style={sep} type="text" value={text} onChange={this.handleChange}/>
               <input type="button" value="Add" onClick={this.handleClick}/>
               <ul>
                    {items.map(function(item) {
                        return <SupportBlock value={item}/>;
                    })}
               </ul>
           </div>
       )
   }
});
React.render(
    <Field1/>,
    document.getElementById("new-text-input")
);

//// ReactJS Photo Gallery Single Component //////

/* img src: http://urlmin.com/4r7z9 */

var alignInit = {
  'margin-left': '-10px',
  'line-height': '0',
  'font-size': '0',
  'letter-spacing': '-4px',
  'text-align': 'center',
}, 
  alignStyle = {
  'width': '30%',
  'display': 'inline-block',
  'vertical-align': 'top',
  'letter-spacing': 'normal',
  'padding': '0 0 10px 10px'
},
  textStyle = {
    'font-size': '16px',
    'line-height': '21px'
  },
  imgFilter = {
    'width': '100%',
    '-webkit-filter': 'invert(0%)'      
  },
  imgInverted = {
   'width': '100%',
   '-webkit-filter': 'invert(100%)'
  } 

var PhotoGallery = React.createClass({
  
  // set intial state
  getInitialState: function() {
    return {
      inverted: false
    }
  },
  
  // event handler for button click event wich toggle the state 'inverted'
  toggleInverted: function() {
    this.setState({
      inverted: !this.state.inverted
    });
  },
  
  render: function () {
    
    var imgClass = this.state.inverted ? 'inverted' : 'not-inverted',
        imgStyles = this.state.inverted ? imgInverted : imgFilter
    
// simple view of condition    
//     var imgClass, imgStyles;
    
//     if (this.state.inverted) {
//       imgClass = 'inverted';
//       imgStyles = imgInverted;
//     } else {
//       imgClass = 'not-inverted';
//       imgStyles = imgFilter
//     }
    
    return (
      <div className="photo" style={alignStyle}>
        <button type='button' onClick={this.toggleInverted} >Invert Color</button>
        <p>{this.props.text}</p>
        <img src={this.props.imgURL} style={imgStyles} className={imgClass}/>
      </div>
    )
  }
});
React.render(<PhotoGallery imgURL='http://fsb.zedge.net/scale.php?img=MS80LzMvMS8xLTEwNzI3Mzk5LTE0MzE3MTkuanBn&ctype=1&v=4&q=81&xs=620&ys=383&sig=033b641e766645e2dd9d49262d0c1488ce20dccc' text='Character'/>, document.getElementById('photo-gallery'));


//// ReactJS Photo Gallery Multiply Components //////

var Photo = React.createClass({
  
  // intial state
  getInitialState: function() {
    return {
      inverted: false
    }
  },
  
  // event handler for button click event wich toggle the state 'inverted'
  toggleInverted: function() {
    this.setState({
      inverted: !this.state.inverted
    });
  },
  
  render: function () {
    
    var imgClass = this.state.inverted ? 'inverted' : 'not-inverted',
        imgStyles = this.state.inverted ? imgInverted : imgFilter
        
    return (
      <div className="photo" style={alignStyle} key={this.props.key}>
        <button type='button' onClick={this.toggleInverted} >Invert Color</button>
        <p style={textStyle}>{this.props.text}</p>
        <img src={this.props.imgURL} style={imgStyles} className={imgClass}/>
      </div>
    )
  }
});

var PhotoGalleryExtended = React.createClass({
  
  getData: function () {
    return [
      {'imgURL': 'http://fsb.zedge.net/scale.php?img=MS80LzMvMS8xLTEwNzI3Mzk5LTE0MzE3MTkuanBn&ctype=1&v=4&q=81&xs=620&ys=383&sig=033b641e766645e2dd9d49262d0c1488ce20dccc',
        'text': 'Character 1'      
      },
      {'imgURL': 'http://fsb.zedge.net/scale.php?img=OC8yLzgvNC8xLTEwNTcwMTQ2LTgyODQ2MDYuanBn&ctype=1&v=4&q=81&xs=620&ys=383&sig=ea2f9629ecbf010cc68afb8864b0d094af29ff2a',
        'text': 'Character 2'      
      },
      {'imgURL': 'http://fsb.zedge.net/scale.php?img=My8xLzkvNC8xLTEwMTkwMDY1LTMxOTQyMjkuanBn&ctype=1&v=4&q=81&xs=620&ys=383&sig=27259c75d25d627c80ba230d135a4dede63378e3',
        'text': 'Character 3'      
      }
    ]
  },
                                             
  render: function () {
    var data = this.getData(),
        photos = data.map(function(photo, index) {
          return <Photo imgURL={photo.imgURL} text={photo.text} key={index + 10}/>
        });
    
    
    console.log('photos:', photos)
    
    return (
      <div className='photo-gallery' style={alignInit}>
        {photos}
      </div>
    )
  }
  
});

React.render(<PhotoGalleryExtended/>, document.getElementById('photo-gallery-extended'));

/// ReactJS Singlo Blog post //////

var Post = React.createClass({
	
	render: function () {
		return (
      <div id={this.props.id} className="post">
        <button type='button' data-id={this.props.prevPost} onClick={this.props.handleClick} className='btn prev'>Prev</button>
				<button type='button' data-id={this.props.nextPost} onClick={this.props.handleClick} className='btn next'>Next</button>
				<div className='post-body'>
					<p>Index: {this.props.id}</p>
					<p>{this.props.decription}</p>
        	<img src={this.props.picture}/>			
				</div>
      </div>
    )
	}
});

var Blog = React.createClass({
	
	getData: function () {
		return postsCollection
	},
	getInitialState(){
		return {
			listOfPosts: null,
			currentPostId: 5
		}
	},
		
	parentHandleClick: function(event) {
		this.setState({currentPostId: event.currentTarget.getAttribute('data-id')});
		console.log(this.state.currentPostId);
	},
	
	render: function () {
		var temp = this.parentHandleClick,
    		currentPost = this.state.currentPostId,
				data = this.getData(),
        posts = data.filter((post) => {
						return post.id == this.state.currentPostId
        }),
		 		post = posts[0];
    return (
      <div className='post-wrapper'>
       <Post id={post.id} picture={post.picture} decription={post.decription} prevPost={post.prevPost} nextPost={post.nextPost} handleClick={temp}/>	
      </div>
    )
	}
});

React.render(<Blog/>, document.getElementById('blog'));

// Сlosures

function greeting (name) {
  // lexical environment = {name:'Nick', text: undefined}
  var text = "Hello " + name
  function greet () {
    console.log(text)
  }
  return greet
};
var a = greeting("Nick");
a(); // only after this will appear lexical environment

// Inheritance

function Human(name) {
  if (!(this instanceof Human)) {
    console.log("this is not a instance of constructor")
    return new Human(name) 
  } else {
    console.log("this is a instance of constructor")
    this.name = name;  
  }
}

var nick = new Human('Nick');
console.log(nick);

Human.prototype.say = function (what) {
  console.log(this.name + " say " + ": " + what)
}

nick.say("hello");


// Functional pattern OOP

var CoffeMachine = function (power) {
  this.waterAmount = 0; // public variable
  var that = this;
  var WATER_GET_CAPACITY = 4200;
  // priate methods
  function getBoilTime () {
    return that.waterAmount * WATER_GET_CAPACITY * 80 / power;  // closures with "that"
  };
  function onReady () {
    alert("All ready");
  };
  // public methods
  this.run = function () {
    setTimeout(onReady, getBoilTime());
  }
};

var obj = new CoffeMachine(100000);
obj.waterAmount = 200;
console.log(obj);
console.log(obj.waterAmount);
//obj.run();

//////////////// Getter / Setter methods ///////////////////

var CoffeMachineGSExtended = function (power, capacity) {
  var WATER_GET_CAPACITY = 4200; // const
  var waterAmount = 0; // private variable
  // public setter method
  this.setWaterAmount = function (amount) {
    if (amount < 0) {
      throw new Error("Amount must be positive");
    };
    if (amount > capacity) {
      throw new Error ("Amount must be less than capacity")
    };
    waterAmount = amount;
  };
  // public getter method
  this.getWaterAmount = function () {
    return waterAmount;
  };
  // private methods
  function getBoilTime () {
    return waterAmount * WATER_GET_CAPACITY * 80 / power;
  };
  function onReady () {
    alert("All ready");
  };
  // public methods
  this.run = function () {
    setTimeout (onReady, getBoilTime());
  };
};
var objGSExtended = new CoffeMachineGSExtended(1000000, 500);
objGSExtended.setWaterAmount(500);
console.log(objGSExtended);
var curretnAmount = objGSExtended.getWaterAmount();
console.log("Water Amount: ", curretnAmount);
console.log(objGSExtended.waterAmount);
//objGSExtended.run();

//////////// Single Getter + Setter method //////////////////

var CoffeMachineGS = function (power, capacity) {
  var WATER_GET_CAPACITY = 4200; // const
  var waterAmount = 0; // private variable
  // public single getter+setter method
  this.waterAmount = function (amount) {
    if (!arguments.length) {
      return waterAmount;
    };
    if (amount < 0) {
      throw new Error("Amount must be positive");
    };
    if (amount > capacity) {
      throw new Error ("Amount must be less than capacity")
    };
    waterAmount = amount;
  };
  // private methods
  function getBoilTime () {
    return waterAmount * WATER_GET_CAPACITY * 80 / power;
  };
  function onReady () {
    alert("All ready");
  };
  // public methods
  this.run = function () {
    setTimeout (onReady, getBoilTime());
  };
};
var objGS = new CoffeMachineGS(1000000, 500);
objGS.waterAmount(300);
console.log(objGS);
var curretnAmount2 = objGS.waterAmount();
console.log("Water Amount: ", curretnAmount2);
//objGS.run();

////////// Parent Constructor Inheritance //////////////////

var Machine = function (power) {
  this._power = power;
  this._enabled = false;
  this.enable = function () {
    this._enabled = true;
  };
  this.disable = function () {
    this._enabled = false;
  };
};
var CoffeMaachine2 = function (power, capacity) {
  Machine.apply(this, arguments);
  var waterAmount = 0; // private variable
  var WATER_GET_CAPACITY = 4200; // const
  // public single getter/setter method
  this.waterAmount = function (amount) {
    if (!arguments.length) {
      return waterAmount;
    };
    if (amount < 0) {
      throw new Error("Amount must be positive")
    };
    if (amount > capacity) {
      throw new Error("Amount must be less than " + capacity)
    };
    waterAmount = amount;
  };
  // private metthods
  function onReady () {
    alert("All ready!!!");
  };
  function getBoilTime () {
    return waterAmount * WATER_GET_CAPACITY * 80 / power;
  };
  // public methods
  this.run = function () {
    if (!this._enabled) {
      throw new Error("Turn on the coffe machine plz!")
    } else {
      setTimeout(onReady, getBoilTime());        
    };
  };
}; 

var newCoffe = new CoffeMaachine2(100000, 500);
newCoffe.waterAmount(250);
var water = newCoffe.waterAmount();
console.log("In the coffe machine " + water + "ml of water");
newCoffe.enable();
console.log("Swith mode: ", newCoffe._enabled);
//newCoffe.run();


/////////// Prototype OOP pattern //////////////////

var animal = {
  eats: true
};
var Cat = function (name) {
  this.constructor = animal
  this.name = name;
  this._legs = 4;
  this.legsCount = function () {
    console.log(this._legs)
  }
};
Cat.prototype = animal;
var max = new Cat("Max");
console.log(max.name);
console.log(max._legs);
max.legsCount();
console.log(max.constructor);


// bind method

const customObj = {
  prop: 'property 1',
  method () {
    console.log(this.prop);
  }
}



setTimeout(customObj.method, 1000);


var customVar = [1, 2, 3].map(n => ({ number: n }));
console.log("customVar", customVar)
