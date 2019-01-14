//Factory pattern - also called a Factory method in JS, which is a way of creating an interface 
//for creating objects, but we can subclasses define which classes to instantiate

//Factory methods are often used in applications to manage and maintain and manipulate collections
//of objects that are different but at the same time have many common characteristics

//A good example - Member
//We have some application, where there are memberhips of different types,
//but still members have a lot of shared properties and methods

function MemberFactory() {
	this.createMember = function(name, type) {
		let member;

		switch (type) {
			case 'simple':
				member = new SimpleMembership(name);
				break;
			case 'standard':
				member = new StandardMembership(name);
				break;
			case 'super':
				member = new SuperMembership(name);
				break;		
		}

		member.type = type;
		member.define = function() {
			console.log(`${this.name} (${this.type}): ${this.cost}`)
		}

		return member;
	}


	function SimpleMembership(name) {
		this.name = name;
		this.cost = '$5';
	}

	function StandardMembership(name) {
		this.name = name;
		this.cost = '$15';
	}

	function SuperMembership(name) {
		this.name = name;
		this.cost = '$25';
	}

}


const members = [];

const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Joe Hill', 'standard'));
members.push(factory.createMember('Sally Main', 'super'));


members.forEach(function(member){
	member.define();
});