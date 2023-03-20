var User = /** @class */ (function () {
    function User(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    User.prototype.login = function (username, password) {
        if (username === this.username && password === this.password) {
            console.log('Login Successfully');
        }
        else {
            console.log('Authentication Failed!!');
        }
    };
    User.prototype.setPassword = function (newPassword) {
        var isValid = false;
        isValid = this.validateUsernameOrPassword(newPassword);
        if (isValid) {
            this.password = newPassword;
        }
        else {
            console.log('Password not valid');
        }
    };
    User.prototype.validateUsernameOrPassword = function (text) {
        if (text.length > 6) {
            return true;
        }
        return false;
    };
    return User;
}());
;
var user1 = new User('user1', 'user1', '123456');
console.log(user1.username);
user1.login('user1', '123456');
user1.setPassword('12');
//console.log(user1.name) Erro Property 'name' is private and only accessible within class 'User'
