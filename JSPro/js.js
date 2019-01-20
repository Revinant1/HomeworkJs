// public, protected, private

function Container(id, className, tagName) {
    // public
    this.id = id;
    this.className = className;

    // protected
    this._tagName = tagName;

    // private
    var element;

    this.getElement = function() {
        return element;
    }

    this.setElement = function(newValue) {
        element = newValue;
    }

}

Container.prototype.remove = function () {
    var element = this.getElement();
    if(element){
        element.parentNode.removeChild(element);
        this.setElement(null);
    }
    return false;
}



Container.prototype.render = function() {
    var element = this.getElement();

    if (!element) {
        element = document.createElement(this._tagName);
        element.id = this.id;
        element.className = this.className;

        this.setElement(element);
    }

    return element;
}

function Menu(id, className, items) {
    Container.call(this, id, className, 'ul');

    // protected
    this._items = items;

}


Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {
    var container = Container.prototype.render.call(this);

    this._items.forEach(function(item) {
        if(item instanceof Container) {
            container.appendChild(item.render());
        }
    });

    return container;
}

function MenuItem(className, link, title) {
    Container.call(this, '', className, 'ul');
    this.link = link;
    this.title = title;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
    var container = Container.prototype.render.call(this);

    var a = document.createElement('a');
    a.textContent = this.title;
    a.href = this.link;

    container.appendChild(a);

    return container;
}




var subMenu1 = new SubMenuItem("sub-menu1", "/Home1", "Home First Page");
var subMenu2 = new SubMenuItem("sub-menu2", "/Home2", "Home Mid Page");
var subMenu3 = new SubMenuItem("sub-menu3", "/Home3", "Home Last Page");


var menuItem1 = new MenuItem('menu-item', '/', 'Home',[subMenu1, subMenu2, subMenu3]);
var menuItem2 = new MenuItem('menu-item', '/news', 'News');
var menuItem3 = new MenuItem('menu-item', '/blog', 'Blog');

var menu = new Menu('menu', 'menu active', [ menuItem1,menuItem2, menuItem3]);

document.body.appendChild(menu.render());

menuItem3.remove()