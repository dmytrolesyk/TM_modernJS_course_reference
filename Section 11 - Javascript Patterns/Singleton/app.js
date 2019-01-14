//Singleton pattern is a manifestation of a Module patten, it's an iffy, can only
//return one instance of an object at a time, repeating calls to the constructor
//will only return the same instance

//e.g., I might want to have only 1 user object created at a time, maybe a loggedin user.
//often singletons are frowned upon, as they give us a global point of access
//rather than embracing encapsulation. Can also be hard to debug.

const Singleton = (function(){
	let instance;

	function createInstance() {
		const object = new Object({name: "Brad"});
		return object;
	}

	return {
		getInstance: function() {
			if(!instance) {
				instance = createInstance();
			}

			return instance;
		}
	}
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// console.log(instanceA);
console.log(instanceA === instanceB);