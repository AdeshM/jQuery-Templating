var BetterListModel = function () {
    this.txtAddUser = ko.observable("");
    this.allUsers = ko.observableArray(["Andy", "Sandy", "Mandy", "Bandy", "Gandy W"]); // Initial items
    this.selectedItems = ko.observableArray(["Andy"]);                   // Initial selection
 
    this.addItem = function () {
        if ((this.txtAddUser() != "") && (this.allUsers.indexOf(this.txtAddUser()) < 0)) // Prevent blanks and duplicates
            this.allUsers.push(this.txtAddUser());
        this.txtAddUser(""); // Clear the text box
    };
 
    this.removeSelected = function () {
        this.allUsers.removeAll(this.selectedItems());
        this.selectedItems([]); // Clear selection
    };
 };
 
ko.applyBindings(new BetterListModel());