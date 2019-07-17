'use strict';

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findById = function(id){
  	return this.items.find(item => item.id === id);
  }

  const addItem = function(name){
  	try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  }

  const findAndToggleChecked = function (id) {
    const foundItem = this.findById(id);
   foundItem.checked = !foundItem.checked;
  }

  const findAndUpdateName = function(id, newName){
  	try{
  		Item.validateName(newName);
  		this.findById(id).name = newName;
  	}catch(error){
  		console.log(`Cannot update name: ${error.message}`);
  	}
  }

  const findAndDelete = function(id){
  	this.items.splice(this.items.findIndex(item => item.id===id), 1);
  }

  const toggleCheckedFilter = function(){
  	this.hideCheckedItems = !this.hideCheckedItems;
  }

  const setSearchTerm = function(searchTerm){
  	this.searchTerm = searchTerm;
  }

  return {
  	items,
  	hideCheckedItems,
  	searchTerm,
  	findById,
  	addItem,
  	findAndToggleChecked,
  	findAndUpdateName,
  	findAndDelete,
  	toggleCheckedFilter,
  	setSearchTerm
  };

}() );